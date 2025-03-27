import { NextRequest, NextResponse } from "next/server";
import prisma from "@plextype/utils/db/prisma"; // Prisma 클라이언트 경로 확인

export async function GET(req: NextRequest) {
  try {
    // URL에서 쿼리 파라미터 가져오기
    const { searchParams } = new URL(req.url);
    const page = parseInt(searchParams.get("page") || "1", 10);
    const target = searchParams.get("target") || "";
    const keyword = searchParams.get("keyword") || "";

    const pageSize = 10; // 한 페이지당 게시글 수
    const skip = (page - 1) * pageSize;

    // 게시글 조회
    const posts = await prisma.posts.findMany({
      where: {
        OR: [
          { pid: { contains: keyword, mode: "insensitive" } }, // 제목 검색
          { postName: { contains: keyword, mode: "insensitive" } }, // 내용 검색
        ],
      },
      skip,
      take: pageSize,
      orderBy: { createdAt: "desc" }, // 최신순 정렬
    });

    // 게시판 전체 수
    const totalCount = await prisma.posts.count();

    return NextResponse.json({
      success: true,
      data: posts,
      pagination: {
        page,
        totalPages: Math.ceil(totalCount / pageSize),
        totalCount,
      },
    });
  } catch (error) {
    console.error("게시판 리스트 API 오류:", error);
    return NextResponse.json(
      { success: false, message: "게시판 목록을 불러오는 중 오류 발생" },
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
