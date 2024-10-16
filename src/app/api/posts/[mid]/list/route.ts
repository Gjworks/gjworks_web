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

  console.log(grantInfo.listGrant)
  if(grantInfo.listGrant.length === 0) {
    response = {
      success: true,
      message: ""
    }
    return NextResponse.json(response);
  }

  if(grantInfo.listGrant.includes('member')) {
    const accessToken = cookies().get('accessToken')?.value
    if (!accessToken) {
      response = {
        success: true,
        message: "권한이 없습니다."
      }
      return NextResponse.json(response);
    }
  }

  if(grantInfo.listGrant.includes('admin')) {
    const accessToken = cookies().get('accessToken')?.value

    if (!accessToken) {
      response = {
        success: true,
        message: "권한이 없습니다."
      }
      return NextResponse.json(response);
    }

    const decodeToken:{ id:number, accountId:string, isAdmin:boolean } = await decodeJwt(accessToken);

    const userInfo = await prisma.user.findUnique({
      where: { accountId: decodeToken.accountId },
    });

  }

  
}