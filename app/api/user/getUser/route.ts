import { cookies, headers } from "next/headers";
import { NextResponse } from "next/server";
import jwt from 'jsonwebtoken';
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
    const decodeToken = jwt.decode(accessToken);
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
      console.log(userInfo)
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
        console.log(userInfo)
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

export async function DELETE(request: Request) {}

export async function PATCH(request: Request) {}

// If `OPTIONS` is not defined, Next.js will automatically implement `OPTIONS` and  set the appropriate Response `Allow` header depending on the other methods defined in the route handler.
export async function OPTIONS(request: Request) {}
