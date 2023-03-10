import { NextResponse } from 'next/server'
import type { NextRequest, NextFetchEvent } from 'next/server'
import { getToken } from "next-auth/jwt";

const secret = process.env.NEXTAUTH_SECRET;

export async function middleware(request: NextRequest, event: NextFetchEvent) {
  // const session = await getToken({ request, secret, raw: true });
  // console.log('session',session)
  // if (request.nextUrl.pathname.startsWith('/dashboard')) {
  //   if (!session) {
  //     return NextResponse.rewrite(new URL("/auth/Signin", request.url));
  //   }else{
  //     console.log('/dashboard', request.url);
  //     return NextResponse.next()
  //   }
  // }
}
