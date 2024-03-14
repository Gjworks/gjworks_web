'use server'

import { cookies, headers } from "next/headers";
import { NextResponse, NextRequest } from "next/server";
import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient()


export const authLogout = async () => {
  cookies().delete('refreshToken');
  const hasCookie = cookies().has('refreshToken')
  if(hasCookie) {
    const response = NextResponse.json(
      {
        success: false,
        message: "서버에서 토큰이 삭제되지 않았습니다."
      },
      {
        status: 401,
        headers: { "content-type": "application/json" },
      },
    );
    return response
  }else{

    const response = NextResponse.json(
      {
        success: true,
        message: "token이 만료되었습니다. 로그인을 새로 해주세요."
      },
      {
        status: 200,
        headers: { "content-type": "application/json" },
      },
    );
    return response
  }
  

  
}