import { NextResponse } from 'next/server';
import { cookies, headers } from "next/headers";
import { PrismaClient } from "@prisma/client";
import { decodeJwt } from 'jose';

const prisma = new PrismaClient();

export async function GET(request: Request, { params }: { params: { mid: string } }) {
  let response;
  const { mid } = params;
  const postInfo = await prisma.module.findUnique({where: { mid: mid }});

  const grantInfo = (postInfo?.config as { grant: any })?.grant;

  // if(grantInfo.listGrant.length === 0) {
  //   response = {
  //     success: true,
  //     message: ""
  //   }
  //   return NextResponse.json(response);
  // }

  const authHeader = request.headers.get('Authorization');
  let accessToken;


  if (authHeader && authHeader.startsWith('Bearer ')) {
    accessToken = authHeader.split(' ')[1]; // Bearer 토큰에서 실제 토큰만 추출
  } else {
    // Authorization 헤더가 없을 때 쿠키에서 가져오는 대안 처리 (선택 사항)
    accessToken = cookies().get('accessToken')?.value;
  }

  if(grantInfo.listGrant.includes('member')) {
    if (!accessToken) {
      response = {
        success: true,
        message: "권한이 없습니다."
      }
    }
    const decodeToken:{ id:number, accountId:string, isAdmin:boolean } = await decodeJwt(accessToken);

    const userInfo = await prisma.user.findUnique({
      where: { accountId: decodeToken.accountId },
    });
    return NextResponse.json(response);
  }

  if(grantInfo.listGrant.includes('admin')) {
    const accessToken = cookies().get('accessToken')?.value

    if (!accessToken) {
      response = {
        success: true,
        message: "관리자만 접근권한 할 수 있습니다."
      }
      return NextResponse.json(response);
    }
  }
  return NextResponse.json(response);
  
}