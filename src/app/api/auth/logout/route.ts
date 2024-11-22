import { NextResponse } from 'next/server';
import { cookies, headers } from "next/headers";

export async function POST(request: Request) {
  const cookieStore = await cookies()
  cookieStore.delete('refreshToken');
  cookieStore.delete('accessToken');

    // const hasCookie = cookies().has('refreshToken')
    const refreshToken = cookieStore.get('refreshToken')?.value
    const accessToken = cookieStore.get('accessToken')?.value

    try {
      if(refreshToken && accessToken) {
        const response = {
          success: true,
          message: "token이 만료되었습니다. 새로 로그인을 해주세요."
        }
        return NextResponse.json(response);
      }else{
        const response = {
          success: true,
          message: "token이 만료되었습니다. 새로 로그인을 해주세요."
        }
          
        console.log('Signout response', response)
        return NextResponse.json(response);
      }
      
    } catch (error) {
      console.error(error);
      throw new Response("fail")
    }

}