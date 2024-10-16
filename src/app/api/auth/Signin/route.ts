import { NextResponse } from 'next/server';
import { cookies, headers } from "next/headers";
import { hashedPassword, verifyPassword } from "@plextype/utils/auth/password";
import { decodeJwt } from 'jose';
import { sign, verify, refresh, refreshVerify } from "@plextype/utils/auth/jwtAuth";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(request: Request) {

  const formData = await request.formData(); 
  console.log(formData.get('accountId')); 


  const accountId = formData.get("accountId") as string;
  const password = formData.get("password") as string;

  if (!accountId) {

    const response = {
      success: true,
      type: "error",
      element: "accountId",
      message: "계정 아이디 (혹은 이메일)을 입력해주세요.",
      data : {}
    }
    console.log(response);
    return NextResponse.json(response);
  }
  if (!password) {
    const response = {
      success: true,
      type: "error",
      element: "password",
      message: "비밀번호를 입력해주세요.",
      data : {}
    }
    return NextResponse.json(response);
  }

  try {
    const userInfo = await prisma.user.findUnique({
      where: { accountId: accountId },
    });

    if (userInfo! && (await verifyPassword(password, userInfo!.password))) {
      // exclude password from json response
      const tokenParams = {
        id: userInfo!.id,
        accountId:userInfo!.accountId,
        isAdmin:userInfo!.isAdmin
      }
      
      let refreshToken
      let accessToken
      [accessToken, refreshToken] = await Promise.all([sign(tokenParams), refresh(tokenParams)])
      console.log(accessToken)
      const response = 
        {
          success: true,
          type: "success",
          data: {
            userInfo: userInfo
          },
          accessToken: accessToken,
        }


      cookies().set({
        name: "accessToken",
        value: accessToken,
        httpOnly: true,
        // secure: true,
        sameSite: "strict",
        // maxAge: 3600,
      });
      cookies().set({
        name: "refreshToken",
        value: refreshToken,
        httpOnly: true,
        // secure: true,
        sameSite: "strict",
        // maxAge: 3600 * 24 * 7,
      });

      return NextResponse.json(response);
    } else {
      const response = 
        {
          success: false,
          type: "error",
          message : '아이디 혹은 비밀번호가 맞지 않거나 존재 하지 않은 계정입니다.',
          data: {},
          accessToken:null
        }
      return NextResponse.json(response);
    }

  } catch (e) {
    console.error(e);
    const response = {
      success: false,
      type: "error",
      message: "아이디 혹은 비밀번호가 맞지 않거나 존재 하지 않은 계정입니다.",
      data: {},
      accessToken: null,
    };
    return NextResponse.json(response);
  }


  
}