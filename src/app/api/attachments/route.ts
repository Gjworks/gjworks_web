import { NextRequest, NextResponse } from "next/server";
import path from "path";
import { mkdir, writeFile, readFile,stat } from "fs/promises";
import { v4 as uuidv4 } from "uuid";
import prisma from "@plextype/utils/db/prisma";
import mime from "mime-types";

export const runtime = "nodejs";

interface FileData {
  name: string;
  size: number;
  type: string;
  arrayBuffer(): Promise<ArrayBuffer>;
  // 필요한 다른 속성/메서드가 있다면 여기에 추가
}

export async function POST(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const resourceType = searchParams.get("resourceType") ?? "etc";
    const resourceId = Number(searchParams.get("resourceId")) || 0;

    const clientTempId = searchParams.get("tempId");
    const isTemporary = resourceId === 0;

    if (isTemporary && !clientTempId) {
      return NextResponse.json({ error: "임시 파일 관리를 위한 tempId가 누락되었습니다." }, { status: 400 });
    }

    const tempId = clientTempId;

    const dirIdentifier = isTemporary
      ? (tempId as string)
      : String(resourceId);
    const basePath = isTemporary ? "temp" : resourceType;

    const uploadDir = path.join(process.cwd(), "public", "uploads", basePath, dirIdentifier);

    const formData = await req.formData();

    // ⭐️ 클라이언트가 보내는 실제 필드 이름인 'filepond-attachments'를 사용합니다.
    const fileEntry = formData.get("filepond-attachments");

    // ⭐️ 수정된 핵심 로직: File ReferenceError를 피하기 위해 속성 기반 검증을 사용합니다.
    const isFileValid =
      fileEntry &&
      typeof fileEntry === 'object' &&
      'name' in fileEntry &&
      'size' in fileEntry &&
      typeof (fileEntry as any).arrayBuffer === 'function' &&
      (fileEntry as any).size > 0;

    if (!isFileValid) {
      console.error("DEBUG [POST] 파일 추출 실패: fileEntry is not a valid file-like object.", fileEntry);
      return NextResponse.json({ error: "파일 없음 또는 잘못된 형식" }, { status: 400 });
    }

    // 이제 file 변수는 유효한 파일 객체로 간주합니다.
    const file = fileEntry as FileData;

    // 파일명을 고유한 UUID로 생성합니다.
    const fileUuid = uuidv4();
    const ext = path.extname(file.name || "");
    const fileName = `${fileUuid}${ext}`;

    await mkdir(uploadDir, { recursive: true });
    const fullPath = path.join(uploadDir, fileName);

    // File 객체의 arrayBuffer() 메서드를 사용하여 데이터를 읽습니다.
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    await writeFile(fullPath, buffer);

    // DB에 저장할 데이터
    const dbPath = `/uploads/${basePath}/${dirIdentifier}/${fileName}`;
    const attachmentResourceType = isTemporary ? "temp" : resourceType;

    const attachment = await prisma.attachment.create({
      data: {
        uuid: uuidv4(),
        fileName,
        originalName: file.name || "unknown",
        mimeType: file.type || "application/octet-stream",
        size: file.size, // 파일 객체의 size 속성 사용
        path: dbPath,
        resourceType: attachmentResourceType,
        resourceId: isTemporary ? 0 : resourceId,
        tempId: isTemporary ? tempId : null,
        uploadedById: null,
      },
    });

    console.log("DEBUG [POST] ✅ 파일 업로드 및 DB 기록 성공:", attachment.path);
    return NextResponse.json(attachment);
  } catch (err) {
    console.error("첨부파일 업로드 실패:", err);
    return NextResponse.json({ error: "업로드 실패" }, { status: 500 });
  }
}

// =========================================================================
// GET: 파일 목록 조회 및 파일 콘텐츠 전송 (ArrayBuffer 복사 적용)
// =========================================================================
export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const relativePath = searchParams.get("path");
    const resourceType = searchParams.get("resourceType");
    const resourceId = Number(searchParams.get("resourceId"));

    // 1. 목록 조회 로직
    if (!relativePath && resourceType && resourceId > 0 && !isNaN(resourceId)) {
      const attachments = await prisma.attachment.findMany({
        where: { resourceType, resourceId, tempId: null },
        select: { id: true, originalName: true, size: true, path: true, mimeType: true },
      });

      const filepondFiles = attachments.map(att => ({
        source: att.path,
        options: {
          type: 'local',
          file: {
            name: att.originalName,
            size: att.size,
            type: att.mimeType,
          },
          metadata: { id: att.id },
        },
      }));

      return NextResponse.json(filepondFiles);
    }

    // 2. 파일 콘텐츠 조회
    if (!relativePath || !relativePath.startsWith("/uploads/") || relativePath.includes("..")) {
      return new NextResponse("유효하지 않은 파일 경로입니다.", { status: 400 });
    }

    // DB 메타데이터 조회
    const attachment = await prisma.attachment.findFirst({
      where: { path: relativePath },
      select: { mimeType: true, originalName: true },
    });

    if (!attachment) {
      return new NextResponse("첨부파일 메타데이터를 찾을 수 없습니다.", { status: 404 });
    }

    const fileSystemPath = path.join(process.cwd(), "public", relativePath);

    const fileStat = await stat(fileSystemPath);
    const fileBuffer = await readFile(fileSystemPath);

    const mimeType = attachment.mimeType || mime.lookup(fileSystemPath) || "application/octet-stream";

    // 🔥 ArrayBuffer 복사를 통해 타입 오류와 호환성 문제를 해결합니다.
    const responseArrayBuffer = fileBuffer.buffer.slice(
      fileBuffer.byteOffset,
      fileBuffer.byteOffset + fileBuffer.length
    );

    // 복사된 ArrayBuffer를 Response에 전달합니다.
    return new Response(responseArrayBuffer as ArrayBuffer, {
      status: 200,
      headers: {
        "Content-Type": mimeType,
        "Content-Length": fileStat.size.toString(),
        "Content-Disposition": `inline; filename="${attachment.originalName || path.basename(fileSystemPath)}"`,
        "Cache-Control": "public, max-age=31536000, immutable",
      },
    });
  } catch (error: any) {
    if (error.code === 'ENOENT') {
      console.error(`[GET /api/attachments] ❌ 파일 시스템 경로에 파일 없음: ${error.path}`);
      return new NextResponse("파일을 찾을 수 없습니다. (경로 오류)", { status: 404 });
    }
    console.error("[GET /api/attachments] 💥 서버 오류 발생:", error);
    return new NextResponse("파일 로드 중 서버 오류 발생.", { status: 500 });
  }
}