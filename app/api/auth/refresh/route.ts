import { cookies, headers } from "next/headers";
import { NextResponse, NextRequest } from "next/server";
import jwt from 'jsonwebtoken';
import { sign, verify, refreshVerify } from "@plextype/utils/auth/jwtAuth";

export async function GET(request: Request, response: Response){
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
    verifyToken = verify(accessToken)
    if (verifyToken.ok === false && refreshToken) {
      const refreshVerifyToken = await refreshVerify(refreshToken)
      console.log('refreshVerifyToken', refreshVerifyToken)

      if(refreshVerifyToken) {
        //refresh token이 유효하다면 accessToken을 재발급 해주자

        const decodeToken = jwt.decode(accessToken);
        if(decodeToken) {
          newAccessToken = await sign(decodeToken.id)

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
        //refreshToken이 만료되었다면 cookie에 저장된 토큰을 삭제하고 로그인 페이지로 유도 하자
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

export async function HEAD(request: Request) {}

export async function POST(request: NextRequest) {
}
export async function PUT(request: Request) {}

export async function DELETE(request: Request) {}

export async function PATCH(request: Request) {}

// If `OPTIONS` is not defined, Next.js will automatically implement `OPTIONS` and  set the appropriate Response `Allow` header depending on the other methods defined in the route handler.
export async function OPTIONS(request: Request) {}
