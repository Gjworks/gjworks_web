import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { hashedPassword, verifyPassword } from "@utils/auth/password";
import { PrismaClient } from "@prisma/client";

import { refresh, sign } from "@utils/auth/jwtAuth";

export async function GET(request: Request) {}

export async function HEAD(request: Request) {}

export async function POST(request: Request) {
  const prisma = new PrismaClient();

  try {
    const formData = await request.formData();
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    console.log(formData);
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
        const refreshToken = refresh(userInfo.email);
        const accessToken = sign(userInfo.email);

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

export async function PUT(request: Request) {}

export async function DELETE(request: Request) {}

export async function PATCH(request: Request) {}

// If `OPTIONS` is not defined, Next.js will automatically implement `OPTIONS` and  set the appropriate Response `Allow` header depending on the other methods defined in the route handler.
export async function OPTIONS(request: Request) {}
