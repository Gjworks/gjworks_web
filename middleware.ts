import { NextRequest, NextResponse } from 'next/server'

// 미들웨어 생성
export async function middleware(request: NextRequest, response: NextResponse) {
  let accessToken = request.cookies.get('accessToken')
  console.log(accessToken)
  // if (
  //   request.nextUrl.pathname.startsWith('/auth/Signin') || 
  //   request.nextUrl.pathname.startsWith('/auth/Register')
  // ) { // 요청 url이 Login이거나 createAccount일 경우 && 토큰값이 있다면 
	//   // 로그인된 상태로 인지, Home 으로 redirect
  //   console.log(accessToken)
  //   if (accessToken?.value) return NextResponse.redirect('/') 
  // }
}