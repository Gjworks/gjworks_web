import { NextResponse } from 'next/server';
import { cookies, headers } from "next/headers";

export async function POST(request: Request) {
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