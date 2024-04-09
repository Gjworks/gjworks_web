'use server';

import { cookies, headers } from "next/headers";

import { hashedPassword, verifyPassword } from "@plextype/utils/auth/password";

import { decodeJwt } from 'jose';
import { sign, verify, refresh, refreshVerify } from "@plextype/utils/auth/jwtAuth";

import { PrismaClient } from "@prisma/client";

export const Signin = async (formData: FormData) => {
  const prisma = new PrismaClient();

  try {
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    if (!email) {
      const data = {
        code: "error",
        element: "email",
        message: "이메일 계정을 입력해주세요.",
      };
       const response = {
        success: true,
        data: data
      }
      return response
    }
    if (!password) {
      const data = {
        code: "error",
        element: "password",
        message: "비밀번호를 입력해주세요.",
      };
      const response = {
        success: true,
        data: data
      }
      return response
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
        const response = 
          {
            success: true,
            data: {
              code: "success",
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

        return response;
      } else {
        const response = 
          {
            success: false,
            data: {
              code: "error",
              message : '아이디 혹은 비밀번호가 맞지 않거나 존재 하지 않은 계정입니다.'
            },
            accessToken:null
          }
        return response;
      }
    } catch (e) {
      console.error(e);
      const response = {
        success: false,
        data: {
          code: "error",
          message: "아이디 혹은 비밀번호가 맞지 않거나 존재 하지 않은 계정입니다.",
        },
        accessToken: null,
      };
      return response;
    }
    // return NextResponse.json({ code: "success" }, { status: 200 })
  } catch (error) {
    console.error(error);
    return new Response("fail");
  }
}

export const Refresh = async (token:string) => {
  let newAccessToken: string
  let verifyToken:any
  const refreshToken = cookies().get('refreshToken')?.value
  // const authorization = headers().get('authorization')
  // const accessToken = authorization && authorization.split(' ')[1];
  const accessToken = token
  
  if (!accessToken) {
    return {
      success: true,
      data: {
        code: "error",
        message: "아이디 혹은 비밀번호가 맞지 않거나 존재 하지 않은 계정입니다.",
      },
      accessToken:null
    };
  }

  // accessToken이 유효한지 검사
  try {
    verifyToken = await verify(accessToken)

    if (verifyToken.ok === false && refreshToken) {
      console.log(11)
      const refreshVerifyToken = await refreshVerify(refreshToken)

      if(refreshVerifyToken) {
        console.log(22)
        const decodeToken = await decodeJwt(accessToken);
        if(decodeToken && decodeToken.id) {
          const tokenParams = {
            id: decodeToken.id,
            isAdmin:decodeToken.isAdmin
          }
          newAccessToken = await sign(tokenParams)
          const response = 
            {
              success: true,
              data : {
                code : 'success',
                message: 'New accessToken',
              },
              accessToken: newAccessToken,
            }
          return response
        }
      }else{
        cookies().delete('refreshToken');
        cookies().delete('accessToken');
        const response = 
          {
            success: false,
            data : {
              code : 'success',
              message: "token이 만료되었습니다. 로그인을 새로 해주세요."
            },
            accessToken: null,
          }
        return response
      }
    }else{
      console.log(4)
    }
    
  // const refreshVerifyToken = refreshVerify(refreshToken)
  return {success: true,
    data: {
      code: "success",
      message: "",
    },
    accessToken:accessToken};
  } catch (error) {
    console.error(error);
    throw { status: 500 };
  }
}

export const Signout = async (token) => {
  console.log('Signout')
  cookies().delete('refreshToken');
  cookies().delete('accessToken');

  // const hasCookie = cookies().has('refreshToken')
  const refreshToken = cookies().get('refreshToken')?.value
  const accessToken = cookies().get('accessToken')?.value

  try {
    if(refreshToken && accessToken) {
      const response = {
        success: true,
        message: "token이 만료되었습니다. 새로 로그인을 해주세요."
      }
      return response
    }else{

      // const response = NextResponse.json(
      //   {
      //     success: true,
      //     message: "token이 만료되었습니다. 새로 로그인을 해주세요."
      //   },
      //   {
      //     status: 200,
      //     headers: { "content-type": "application/json" },
      //   },
      // );
      const response = {
        success: true,
        message: "token이 만료되었습니다. 새로 로그인을 해주세요."
      }
        
      console.log('Signout response', response)
      return response
    }
    
  } catch (error) {
    console.error(error);
    throw new Response("fail")
  }
}