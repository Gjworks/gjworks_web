import { NextRequest, NextResponse } from 'next/server'
import { decodeJwt } from 'jose';

export default async function postsMiddleware(request: NextRequest, response: NextResponse) {
  // 게시물 관련 미들웨어 로직
  const { cookies } = request;
  const hasAccessToken = cookies.has('accessToken');
  const accessToken = cookies.get('accessToken')

  let decodeToken : { id:string, isAdmin:boolean } | null = null;

  if(accessToken?.value){
    decodeToken = await decodeJwt(accessToken.value) as { id: string, isAdmin: boolean };
  }

  console.log('ostsMiddleware');

  
  console.log(request.nextUrl.pathname.startsWith('/posts/'))



  
  return response;
}