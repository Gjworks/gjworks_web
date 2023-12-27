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

      if (userInfo && await verifyPassword(password, userInfo.password)) {
        // exclude password from json response
        const refreshToken = refresh(userInfo.email);
        const accessToken = sign(userInfo.email);
        console.log(accessToken)
        console.log(refreshToken)
        // await prisma.user.update({
        //   where: {
        //     email: email,
        //   },
        //   data: {
        //     refreshToken: refreshToken
        //   }
        // })
        // let response
 

      //   response.statusCode = 200;
	
      // // Access Token을 보내줌
      //   return response.send({ email, accessToken });
        // response =  NextResponse.json({ status: 200, data : { "accessToken": accessToken}})

        // response.cookies.set("accessToken",accessToken,{httpOnly:true});

        const response = NextResponse.json(
          { 
            success: true ,
            accessToken : accessToken},
          { 
            status: 200,
            headers: { "content-type": "application/json" } 
          }
        );
    
        response.cookies.set({
          name: "refreshToken",
          value: refreshToken,
          httpOnly: true,
          secure: true,
          maxAge: 1000 * 60 * 60 * 24 * 7,
        });

        return response;
        
      } else {
        return NextResponse.json({ "element": "password","msg": "아이디 혹은 비밀번호가 맞지 않거나 존재 하지 않은 계정입니다."}, { status: 401 })
      }
    } catch (e) {
      throw NextResponse.json({status: 500 })
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