import { NextResponse } from 'next/server'
import type { NextRequest, NextFetchEvent } from 'next/server'
import { getToken } from "next-auth/jwt";

export async function middleware(request: NextRequest, event: NextFetchEvent) {
  const secret = process.env.NEXTAUTH_SECRET;
  const token = await getToken({ req: request, secret, raw: true });
  console.log('middleware token',request.headers.get("Authorization"))
  // middleware 작업 수행
  
  return NextResponse.next();
}


  // 
  // if (request.nextUrl.pathname.startsWith('/dashboard')) {
  //   if (!session) {
  //     return NextResponse.rewrite(new URL("/auth/Signin", request.url));
  //   }else{
  //     console.log('/dashboard', request.url);
  //     return NextResponse.next()
  //   }
  // }