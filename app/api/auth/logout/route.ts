import { cookies, headers } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  return NextResponse.json({ data: 'success' }, { status: 200 });
}

export async function HEAD(request: Request) {}

export async function POST(request: Request) {
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

export async function PUT(request: Request) {}

export async function DELETE(request: Request) {}

export async function PATCH(request: Request) {}

// If `OPTIONS` is not defined, Next.js will automatically implement `OPTIONS` and  set the appropriate Response `Allow` header depending on the other methods defined in the route handler.
export async function OPTIONS(request: Request) {}
