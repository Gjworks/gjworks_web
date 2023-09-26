import { NextResponse } from 'next/server';
import { hashedPassword } from "src/lib/auth/password";
import { PrismaClient } from "@prisma/client";

export async function GET(request: Request) {}

export async function HEAD(request: Request) {}

export async function POST(request: Request) {
  const prisma = new PrismaClient();
  
  try {
    let formData = await request.formData()
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;
    const nickname = formData.get('nickname') as string;

    if(!email) {
      const data = {"code":"error", "element": "email","msg": "Invalid email address provided in POST request"}
      return NextResponse.json(data,{ status:402})
    }
    if(!password) {
      const data = {"code":"error", "element": "password","msg": "Invalid password provided in POST request"}
      return NextResponse.json(data,{ status:402})
    }
    if(!nickname) {
      const data = {"code":"error", "element": "nickname","msg": "Invalid nickname provided in POST request"}
      return NextResponse.json(data,{ status:402})
    }

    const createUser = await prisma.user.create({
        data: {
          nickname: nickname,
          email: email,
          password: await hashedPassword(password),
        },
      });

    return NextResponse.json({ code: "success" }, { status: 200 })
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