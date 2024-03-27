import { cookies, headers } from "next/headers";
import { NextResponse } from "next/server";
import jwt from 'jsonwebtoken';
import { hashedPassword, verifyPassword } from "@utils/auth/password";
import { PrismaClient } from "@prisma/client";

export async function GET(request: Request) {}

export async function HEAD(request: Request) {}

export async function POST(request: Request) {
  const prisma = new PrismaClient();
  let userInfo
  let response
  const authorization = headers().get('authorization')
  const accessToken = authorization && authorization.split(' ')[1];
  
  if (!accessToken) {
    return NextResponse.json({ data: 'accessToken Error' }, { status: 201 });
  }

  const formData = await request.formData()
  const nowPasswordValue = formData.get('nowPasswordValue') as string;
  const newPasswordValue = formData.get('newPasswordValue') as string;
  const renewPasswordValue = formData.get('renewPasswordValue') as string;

  const decodeToken = jwt.decode(accessToken);

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
    },
  });
  if(!userInfo) {
    response = NextResponse.json(
      {
        success: true,
        data: {
          code: "error",
          message : '회원정보가 없습니다.'
        }
      },
      {
        status: 200,
      },
    );
  }
  if (userInfo! && (await verifyPassword(nowPasswordValue, userInfo!.password))) {
    response = NextResponse.json(
      {
        success: true,
        data: {
          code: "success",
          message : '현재 비밀번호와 일치 합니다.'
        }
      },
      {
        status: 200,
      },
    );
    if(newPasswordValue && renewPasswordValue && newPasswordValue === renewPasswordValue) {
    
      try {
        await prisma.user.update({
          where: {
            email: decodeToken.id, 
          },
          data: {
            password: await hashedPassword(newPasswordValue),
          }
        })
        response = NextResponse.json(
          {
            success: true,
            data: {
              code: "success",
              message : '비밀번호가 변경되었습니다.'
            }
          },
          {
            status: 200,
          },
        );
      } catch (error) {
        console.error(error);
      }
    }else{
      if( newPasswordValue !== renewPasswordValue ) {
        response = NextResponse.json(
          {
            success: true,
            data: {
              code: "fail",
              message : '변경할 비밀번호가 서로 맞지 않습니다.'
            }
          },
          {
            status: 200,
          },
        );
      }
      if( !newPasswordValue || !renewPasswordValue ) {
        response = NextResponse.json(
          {
            success: true,
            data: {
              code: "fail",
              message : '변경할 비밀번호를 입력해주세요.'
            }
          },
          {
            status: 200,
          },
        );
      }
    }
  } else {
    if(!nowPasswordValue) {
      response = NextResponse.json(
        {
          success: true,
          data: {
            code: "fail",
            message : '현재 비밀번호를 입력해주세요.'
          }
        },
        {
          status: 200,
        },
      );
    } else {
      response = NextResponse.json(
        {
          success: true,
          data: {
            code: "fail",
            message : '현재 비밀번호와 맞지 않습니다.'
          }
        },
        {
          status: 200,
        },
      );
    }
    
  }
  return response
}

export async function PUT(request: Request) {}

export async function DELETE(request: Request) {}

export async function PATCH(request: Request) {}

// If `OPTIONS` is not defined, Next.js will automatically implement `OPTIONS` and  set the appropriate Response `Allow` header depending on the other methods defined in the route handler.
export async function OPTIONS(request: Request) {}
