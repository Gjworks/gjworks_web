import { NextResponse } from "next/server";
import { cookies, headers } from "next/headers";
import { PrismaClient } from "@prisma/client";
import { decodeJwt } from "jose";
import { getAuthenticatedUser } from "@/modules/posts/scripts/authenticateUser";
import { validateUserPermissions } from "@/modules/posts/scripts/postPermissions";
import { createPost } from "@/modules/posts/scripts/postsController";

const prisma = new PrismaClient();

type Params = Promise<{ mid: string }>;

export async function GET(request: Request, segmentData: { params: Params }) {
  let response = {};
  const { mid } = await segmentData.params;

  if (!mid) {
    return NextResponse.json({ error: "Missing Post ID" }, { status: 400 });
  }
  const postInfo = await prisma.module.findUnique({ where: { mid: mid } });

  if (!postInfo) {
    response = {
      success: false,
      errorCode: "MODULE_NOT_FOUND",
      message: "게시판 정보가 없습니다.",
    };
    return NextResponse.json(response);
  }

  const userInfo = await getAuthenticatedUser(request);
  const permissionsInfo = await validateUserPermissions(mid, "write", userInfo);

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

export async function POST(request: Request, segmentData: { params: Params }) {
  let response = {};
  const { mid } = await segmentData.params;
  const postData = await request.json();

  const userInfo = await getAuthenticatedUser(request);
  console.log(userInfo);
  const permissionsInfo = await validateUserPermissions(mid, "write", userInfo);
  console.log(permissionsInfo);
  const postCreate = await createPost(postData, mid);
  console.log(" postCreate ", postCreate);

  response = {
    success: true,
    errorCode: "",
    message: "",
  };

  return NextResponse.json(response);
}
