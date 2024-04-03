import { cookies, headers } from "next/headers";
import { NextResponse } from "next/server";
import { decodeJwt } from 'jose';
import { hashedPassword, verifyPassword } from "@plextype/utils/auth/password";
import { PrismaClient } from "@prisma/client";

import { refresh, sign } from "@plextype/utils/auth/jwtAuth";

export async function GET(request: Request) {}

export async function HEAD(request: Request) {}

export async function POST(request: Request) {
  const prisma = new PrismaClient();
  let userInfo
  let response
  const authorization = headers().get('authorization')
  const accessToken = authorization && authorization.split(' ')[1];
  
  if (!accessToken) {
    response =  NextResponse.json({
      success: true,
      data: {
        code: "fail",
        message : 'accessToken Error'
      }
    },
    {
      status: 200,
    },);
  } else {
    const decodeToken:{ id:string, isAdmin:boolean } = await decodeJwt(accessToken);
    if (!decodeToken || !decodeToken.id) {
      response = NextResponse.json({
        success: true,
        data: {
          code: "fail",
          message: 'Invalid accessToken'
        }
      }, {
          status: 200,
      });
    } else {
      userInfo = await prisma.user.findUnique({
        where: { email: decodeToken.id },
        select: {
          id: true,
          uuid: true,
          email: true,
          password: true,
          nickname: true,
          createdAt: true,
          updateAt:true,
          isAdmin:true,
          isManagers:true
        }
      });

      if(!userInfo) {
        response = NextResponse.json(
          {
            success: true,
            data: {
              code: "fail",
              message : '회원정보가 없습니다.'
            }
          },
          {
            status: 200,
          },
        );
      }else{

        response = NextResponse.json(
          {
            success: true,
            data: userInfo
          },
          {
            status: 200,
          },
        );
      }
    }
  }
  response = NextResponse.json(
    {
      success: true,
      data: userInfo
    },
    {
      status: 200,
    },
  );
  // const nowPasswordValue = request.get('nowPasswordValue') as string;
  // console.log(nowPasswordValue)
  return response
}

export async function PUT(request: Request) {}

export async function DELETE(request: Request) {
  const prisma = new PrismaClient();

  let response
  const authorization = headers().get('authorization')
  const accessToken = authorization && authorization.split(' ')[1];
  
  if (!accessToken) {
    response =  NextResponse.json({
      success: true,
      data: {
        code: "fail",
        message : 'accessToken Error'
      }
    },
    {
      status: 200,
    },);
  } else {
    const decodeToken:{ id:string, isAdmin:boolean } = decodeJwt(accessToken);
    if (!decodeToken || !decodeToken.id) {
      response = NextResponse.json({
        success: true,
        data: {
          code: "fail",
          message: 'Invalid accessToken'
        }
      }, {
          status: 200,
      });
    } else {
      const deleteUser = await prisma.user.delete({
        where: {
          email: decodeToken.id,
        },
      })
      console.log(deleteUser)
      if(deleteUser){
        cookies().delete('refreshToken');
        cookies().delete('accessToken');
        response = NextResponse.json(
          {
            success: true,
            data: {
              code: "success",
              message : '회원 계정정보가 모두 삭제되었습니다.'
            }
          },
          {
            status: 200,
          },
        );
      }else{
        response = NextResponse.json(
          {
            success: true,
            data: {
              code: "fail",
              message : '회원정보가 없습니다.'
            }
          },
          {
            status: 200,
          },
        );
      }
    }
  }
  // const nowPasswordValue = request.get('nowPasswordValue') as string;
  // console.log(nowPasswordValue)
  return response
}

export async function PATCH(request: Request) {}

// If `OPTIONS` is not defined, Next.js will automatically implement `OPTIONS` and  set the appropriate Response `Allow` header depending on the other methods defined in the route handler.
export async function OPTIONS(request: Request) {}
