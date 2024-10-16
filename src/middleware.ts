import { NextRequest, NextResponse } from 'next/server'
import { decodeJwt } from 'jose';

// 미들웨어 생성
export async function middleware(request: NextRequest, response: NextResponse) {
  try {
    const { cookies } = request;
    const hasAccessToken = cookies.has('accessToken');
    const accessToken = cookies.get('accessToken')
    const { pathname } = request.nextUrl;

    let decodeToken : { id:string, isAdmin:boolean } | null = null;
    if(accessToken?.value){
      decodeToken = await decodeJwt(accessToken.value) as { id: string, isAdmin: boolean };
      if (!decodeToken?.isAdmin && request.nextUrl.pathname.startsWith('/dashboard')) {
        return NextResponse.redirect(
          new URL('/access', request.url),
        );
      }
      // if (
      //   request.nextUrl.pathname.startsWith('/auth/Signin') || 
      //   request.nextUrl.pathname.startsWith('/auth/Register')
      // ) {
      //   // 요청 url이 Login이거나 createAccount일 경우 && 토큰값이 있다면 
      //   // 로그인된 상태로 인지, Home 으로 redirect
      //   if (accessToken?.value) return NextResponse.redirect('/access') 
      // }

    }
    if (!hasAccessToken && request.nextUrl.pathname.startsWith('/user')) {
      return NextResponse.redirect(
        new URL('/auth/Signin', request.url),
      );
      
    }
    if (!hasAccessToken && request.nextUrl.pathname.startsWith('/dashboard')) {
      return NextResponse.redirect(
        new URL('/auth/Signin', request.url),
      );
      
    }
      //게시판 권한 관련한 미들웨어 로직
    // if (request.nextUrl.pathname.startsWith('/posts/')) {
    //   const pathParts = pathname.split('/');
    //   const midIndex = pathParts.indexOf('posts') + 1; // 'posts' 뒤의 값을 찾음
    //   const mid = pathParts[midIndex];
    //   let action
    //   try {
    //     // API 호출로 권한 확인
    //     if (pathname.includes('write')) {
    //       action = 'write';
    //     } else if (pathname.includes('read')) {
    //       action = 'read';
    //     }else{
    //       action = 'list';
    //     }
    //     if (!action || !mid) {
    //       return NextResponse.redirect(new URL('/error', request.url));
    //     }
    //     const apiResponse = await fetch(new URL(`/api/posts/${mid}/permission?action=${action}`, request.url), {
    //       method: 'GET',
    //       credentials: 'include'
    //     })
        
    //     const data = await apiResponse.json()
        
    //     console.log(data)
    //   } catch (error) {
    //     console.error('Error in postsMiddleware:', error);
    //   }

    // }



  } catch (error) {
    console.error('Error in middleware:', error);
    return NextResponse.error();
  }
  // return NextResponse.next();
}