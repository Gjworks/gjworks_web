import { NextResponse } from "next/server";
import { cookies, headers } from "next/headers";
import { PrismaClient } from "@prisma/client";
import { decodeJwt } from "jose";

import { validateUserPermissions } from "@/extentions/posts/scripts/postPermissions";

const prisma = new PrismaClient();
type Params = Promise<{ pid: string }>;
export async function GET(request: Request, segmentData: { params: Params }) {
  let response = {};
  let userInfo;
  let accessToken: string | undefined;
  const { pid } = await segmentData.params;

  if (!pid) {
    return NextResponse.json({ error: "Missing Post ID" }, { status: 400 });
  }
  const postInfo = await prisma.posts.findUnique({ where: { pid: pid } });

  if (!postInfo) {
    response = {
      success: false,
      errorCode: "MODULE_NOT_FOUND",
      message: "게시판 정보가 없습니다.",
    };
    return NextResponse.json(response);
  }

  const authHeader = request.headers.get("Authorization");

  if (authHeader && authHeader.startsWith("Bearer ")) {
    accessToken = authHeader.split(" ")[1]; // Bearer 토큰에서 실제 토큰만 추출
  } else {
    // Authorization 헤더가 없을 때 쿠키에서 가져오는 대안 처리 (선택 사항)
    const cookieStore = await cookies(); // 쿠키 객체 가져오기
    if (cookieStore) {
      const tokenCookie = cookieStore.get("accessToken"); // 쿠키 읽기
      accessToken = tokenCookie?.value; // 값 할당
    }
  }

  if (accessToken && accessToken !== "undefined") {
    const decodeToken: { id: number; accountId: string; isAdmin: boolean } =
      await decodeJwt(accessToken);
    userInfo = await prisma.user.findUnique({
      where: { accountId: decodeToken.accountId },
      include: {
        userGroups: {
          // User와 UserGroupUser의 관계
          include: {
            group: {
              select: {
                id: true,
                groupName: true,
                groupTitle: true,
                groupDesc: true,
                createdAt: true,
                updatedAt: true,
              },
            }, // UserGroupUser와 UserGroup의 관계
          },
        },
      },
    });
  }

  // const permissionInfo = await validateUserPermissions(pid, 'list', userInfo)

  const permissionsInfo = await validateUserPermissions(pid, "list", userInfo);

  console.log(permissionsInfo);

  if (!permissionsInfo.success) {
    response = permissionsInfo;
    return NextResponse.json(response);
  }

  response = {
    success: true,
    errorCode: "",
    message: "",
    data: postInfo,
  };

  return NextResponse.json(response);
}
