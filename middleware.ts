import { NextRequest, NextResponse } from 'next/server'
import jwt from 'jsonwebtoken';

// 미들웨어 생성
export async function middleware(request: NextRequest, response: NextResponse) {
  // const accessToken = request.cookies.get('accessToken')
  // const decodeToken = jwt.decode(accessToken?.value);
  // // console.log('decodeToken', !decodeToken.isAdmin)
  // if (!decodeToken?.isAdmin && request.nextUrl.pathname.startsWith('/dashboard')) {
  //   return NextResponse.redirect(
  //     new URL('/', request.url),
  //   );
  // }
  // if (
  //   request.nextUrl.pathname.startsWith('/auth/Signin') || 
  //   request.nextUrl.pathname.startsWith('/auth/Register')
  // ) { // 요청 url이 Login이거나 createAccount일 경우 && 토큰값이 있다면 
	//   // 로그인된 상태로 인지, Home 으로 redirect
  //   if (accessToken?.value) return NextResponse.redirect('/') 
  // }

  // if (!accessToken?.value && request.nextUrl.pathname.startsWith('/user/')) {
  //   // return NextResponse.json(
  //   //   { success: false, message: 'authentication failed' },
  //   //   { status: 401 }
  //   // )
  //   return NextResponse.redirect(
  //     new URL('/', request.url),
  //   );
    
  // }
}