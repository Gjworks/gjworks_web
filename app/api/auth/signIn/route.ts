import { NextResponse } from 'next/server';
import { hashedPassword, verifyPassword } from "src/lib/auth/password";
import { PrismaClient } from "@prisma/client";

import { refresh, sign } from 'src/lib/auth/jwtAuth';

export async function GET(request: Request) {}

export async function HEAD(request: Request) {}

export async function POST(request: Request) {
  const prisma = new PrismaClient();
  
  try {
    let formData = await request.formData()
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    if(!email) {
      const data = {"code":"error", "element": "email","msg": "이메일 계정을 입력해주세요."}
      return NextResponse.json(data,{ status:402})
    }
    if(!password) {
      const data = {"code":"error", "element": "password","msg": "비밀번호를 입력해주세요."}
      return NextResponse.json(data,{ status:402})
    }
    try {
    const userInfo = await prisma.user.findUnique({
      where: { email: email },
      select: {
        id: true,
        email : true,
        nickname:true,
        password:true
      }
    })

    console.log(userInfo && userInfo.password)
    if (userInfo && await verifyPassword(password, userInfo.password)) {
      // exclude password from json response
      const refreshToken = refresh(email);
      const accessToken = sign(email);
      return NextResponse.json({ code: "success" }, { status: 200 })
    } else {
      return NextResponse.json({"code":"error", "element": "password","msg": "아이디 혹은 비밀번호가 맞지 않거나 존재 하지 않은 계정입니다."}, { status: 401 })
    }
  } catch (e) {
    throw NextResponse.json({ code: "error" }, { status: 500 })
  }
    // return NextResponse.json({ code: "success" }, { status: 200 })
  } catch (error) {
    console.error(error)
    return new Response("fail")
  }

}

export async function PUT(request: Request) {}

export async function DELETE(request: Request) {}

export async function PATCH(request: Request) {}

// If `OPTIONS` is not defined, Next.js will automatically implement `OPTIONS` and  set the appropriate Response `Allow` header depending on the other methods defined in the route handler.
export async function OPTIONS(request: Request) {}