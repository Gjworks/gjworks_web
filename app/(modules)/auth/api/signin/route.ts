import { cookies, headers } from "next/headers";
import { NextResponse } from "next/server";
import { hashedPassword, verifyPassword } from "@plextype/utils/auth/password";
import { PrismaClient } from "@prisma/client";
import { decodeJwt } from 'jose';
import { sign, verify, refresh, refreshVerify } from "@plextype/utils/auth/jwtAuth";

export async function GET(request: Request) {
  
}

export async function HEAD(request: Request) {}

export async function POST(request: Request) {
  const prisma = new PrismaClient();

  try {
    const formData = await request.formData();
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    if (!email) {
      const data = {
        code: "error",
        element: "email",
        message: "이메일 계정을 입력해주세요.",
      };
      return NextResponse.json({
        success: false,
        data: data
      }, { status: 402 });
    }
    if (!password) {
      const data = {
        code: "error",
        element: "password",
        message: "비밀번호를 입력해주세요.",
      };
      return NextResponse.json({
        success: false,
        data: data
      }, { status: 402 });
    }
    try {
      const userInfo = await prisma.user.findUnique({
        where: { email: email },
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
      

      if (userInfo! && (await verifyPassword(password, userInfo!.password))) {
        // exclude password from json response
        const tokenParams = {
          id: userInfo!.email,
          isAdmin:userInfo!.isAdmin
        }
        
        let refreshToken
        let accessToken
        [accessToken, refreshToken] = await Promise.all([sign(tokenParams), refresh(tokenParams)])
        console.log(accessToken)
        const response = NextResponse.json(
          {
            success: true,
            data: {
              code: "success",
              userInfo: userInfo
            },
            accessToken: accessToken,
          },
          {
            status: 200,
            headers: { "content-type": "application/json" },
          },
        );

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

        return response;
      } else {
        return NextResponse.json(
          {
            success: false,
            data: {
              code: "error",
              message : '아이디 혹은 비밀번호가 맞지 않거나 존재 하지 않은 계정입니다.'
            },
            accessToken:null
          },
          { status: 401 },
        );
      }
    } catch (e) {
      throw NextResponse.json({ status: 500 });
    }
    // return NextResponse.json({ code: "success" }, { status: 200 })
  } catch (error) {
    console.error(error);
    return new Response("fail");
  }
}

export async function PUT(request: Request) {
  let newAccessToken: string
  let verifyToken:any
  const refreshToken = cookies().get('refreshToken')?.value
  const authorization = headers().get('authorization')
  const accessToken = authorization && authorization.split(' ')[1];
  
  if (!accessToken) {
    return NextResponse.json({ data: 'accessToken Error' }, { status: 201 });
  }

  // accessToken이 유효한지 검사
  try {
    verifyToken = await verify(accessToken)

    if (verifyToken.ok === false && refreshToken) {
      const refreshVerifyToken = await refreshVerify(refreshToken)

      if(refreshVerifyToken) {
        const decodeToken = await decodeJwt(accessToken);
        if(decodeToken && decodeToken.id) {
          const tokenParams = {
            id: decodeToken.id,
            isAdmin:decodeToken.isAdmin
          }
          newAccessToken = await sign(tokenParams)
          const response = NextResponse.json(
            {
              success: true,
              name : 'New accessToken',
              accessToken: newAccessToken,
            },
            {
              status: 200,
              headers: { "content-type": "application/json" },
            },
          );
          return response
        }
      }else{
        cookies().delete('refreshToken');
        cookies().delete('accessToken');
        const response = NextResponse.json(
          {
            success: false,
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
    
  // const refreshVerifyToken = refreshVerify(refreshToken)
  return NextResponse.json({ data: 'success' }, { status: 200 });
  } catch (error) {
    console.error(error);
    throw NextResponse.json({ status: 500 });
  }
  // 
  // console.log(verifyToken);
}

export async function DELETE(request: Request) {
  cookies().delete('refreshToken');
  cookies().delete('accessToken');

  // const hasCookie = cookies().has('refreshToken')
  const refreshToken = cookies().get('refreshToken')?.value
  const accessToken = cookies().get('accessToken')?.value

  try {
    if(refreshToken && accessToken) {
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
          message: "token이 만료되었습니다. 새로 로그인을 해주세요."
        },
        {
          status: 200,
          headers: { "content-type": "application/json" },
        },
      );
      return response
    }
    
  } catch (error) {
    console.error(error);
    throw NextResponse.json({ status: 500 });
  }
}

export async function PATCH(request: Request) {}

// If `OPTIONS` is not defined, Next.js will automatically implement `OPTIONS` and  set the appropriate Response `Allow` header depending on the other methods defined in the route handler.
export async function OPTIONS(request: Request) {}
