// middleware.ts
import { NextResponse } from 'next/server'
import { NextRequest, NextFetchEvent } from 'next/server'
import { getToken } from "next-auth/jwt";
// This function can be marked `async` if using `await` inside
export function middleware(req) {
  const secret_key = process.env.NEXTAUTH_SECRET;
  console.log(secret_key)
  // console.log(req.cookies.get('beta'))
  const session = getToken({req})
  console.log(session)
  if(!session) return NextResponse.redirect('/')

  return NextResponse.next()
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/user/:path*'],
}