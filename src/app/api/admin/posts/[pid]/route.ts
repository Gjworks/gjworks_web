import { NextRequest, NextResponse } from "next/server";
import prisma from "@plextype/utils/db/prisma";
import { verify } from "@plextype/utils/auth/jwtAuth"; // Prisma 클라이언트 경로 확인

export async function GET(request: NextRequest) {
  try {
    const pathname = request.nextUrl.pathname; // /api/admin/posts/abc123
    const id = pathname.split("/").pop(); // 마지막 segment 가져오기
    const accessToken = request.cookies.get("accessToken")?.value;
    if (!accessToken) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const verifyToken = await verify(accessToken!);
    if (!verifyToken || verifyToken.isAdmin !== true) {
      return NextResponse.json(
        {
          success: true,
          type: "warning",
          message: "Access denied. You do not have administrator privileges.",
        },
        { status: 403 },
      );
    } else {
      const post = await prisma.posts.findUnique({
        where: {
          id: Number(id),
        },
        include: {
          categories: true,
          documents: true,
        },
      });
      console.log(post);
      if (!post) {
        return NextResponse.json(
          { success: false, message: "게시물을 찾을 수 없습니다." },
          { status: 402 },
        );
      }

      return NextResponse.json(
        {
          success: true,
          type: "success",
          message: "",
          data: [],
        },
        { status: 200 },
      );
    }
  } catch (error) {
    console.error("게시판 리스트 API 오류:", error);
    return NextResponse.json(
      { success: false, message: "게시판 정보를 불러오는 중 오류 발생" },
      { status: 500 },
    );
  }
}

export async function POST(req: NextRequest) {
  try {
  } catch (error) {
    console.error("게시판 생성 API 오류:", error);
    return NextResponse.json(
      { success: false, message: "게시판 생성 중 오류 발생" },
      { status: 500 },
    );
  }
}
