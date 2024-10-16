import { NextResponse, NextRequest } from 'next/server';
import { cookies, headers } from "next/headers";
import { hashedPassword, verifyPassword } from "@plextype/utils/auth/password";
import { decodeJwt } from 'jose';
import { sign, verify, refresh, refreshVerify } from "@plextype/utils/auth/jwtAuth";
import { PrismaClient } from "@prisma/client";

export async function POST(request: NextRequest) {
  let newAccessToken: string
  let verifyToken:any
  const refreshToken = cookies().get('refreshToken')?.value
  console.log(refreshToken)
  // const authorization = headers().get('authorization')
  const authorization = request.headers.get('Authorization');
  const accessToken = authorization && authorization.split(' ')[1];

  if (!accessToken && !refreshToken) {
    const response =  {
      success: true,
      code: "token_error",
      type: "error",
      message: "token값이 존재 하지 않습니다.",
      data: {},
      accessToken:null
    };
    return NextResponse.json(response);
  }

  try {
    verifyToken = await verify(accessToken!)
    if (verifyToken.ok === false) {
      // cookies().delete('refreshToken');
      // cookies().delete('accessToken');
      // const response = 
      //   {
      //     success: false,
      //     code : 'user info not found',
      //     type : 'error',
      //     message: "회원정보를 찾을 수 없습니다.",
      //     data : {},
      //     accessToken: null,
      //   }
      //   return NextResponse.json(response);


      let refreshVerifyToken = await refreshVerify(refreshToken!)
      if(refreshVerifyToken) {
        const decodeToken = await decodeJwt(accessToken!);
        if(decodeToken && decodeToken.id) {
          const tokenParams = {
            id: decodeToken.id,
            userId : decodeToken.userId,
            isAdmin:decodeToken.isAdmin
          }
          newAccessToken = await sign(tokenParams)
          cookies().delete('accessToken');
          cookies().set({
            name: "accessToken",
            value: newAccessToken,
            httpOnly: true,
            sameSite: "strict",
          });
          const response = 
            {
              success: true,
              code : 'new_accessToken',
              type : 'success',
              message: 'New accessToken',
              data : {},
              accessToken: newAccessToken,
            }
          return NextResponse.json(response);
        }
      }else{
        cookies().delete('refreshToken');
        cookies().delete('accessToken');
        const response = 
          {
            success: false,
            code : 'refreshToken_expires',
            type : 'error',
            message: "token이 만료되었습니다. 로그인을 새로 해주세요.",
            data : {},
            accessToken: null,
          }
        return NextResponse.json(response);
      }
    }
    const response = {
      success: true,
      code: "success",
      message: "",
      data: {},
      accessToken:accessToken
    }
    return NextResponse.json(response);
  } catch (err) {
  }

  // try {
  //   verifyToken = await verify(accessToken)
  // } catch (err) {
  // }
  // return NextResponse.json(response);
}