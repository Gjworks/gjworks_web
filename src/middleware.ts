import { NextRequest, NextResponse } from "next/server";
import { decodeJwt } from "jose";
export const config = {
  runtime: "nodejs",
};
// 미들웨어 생성
export async function middleware(request: NextRequest, response: NextResponse) {
  try {
    const { cookies } = request;
    const hasAccessToken = cookies.has("accessToken");
    const accessToken = cookies.get("accessToken");
    const { pathname } = request.nextUrl;
    const baseUrl =
      process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3000";

    let decodeToken: { id: string; isAdmin: boolean } | null = null;
    if (accessToken?.value) {
      decodeToken = (await decodeJwt(accessToken.value)) as {
        id: string;
        isAdmin: boolean;
      };
      if (
        !decodeToken?.isAdmin &&
        request.nextUrl.pathname.startsWith("/dashboard")
      ) {
        return NextResponse.redirect(new URL("/access", request.url));
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
    if (!hasAccessToken && request.nextUrl.pathname.startsWith("/user")) {
      return NextResponse.redirect(new URL("/auth/Signin", request.url));
    }
    if (!hasAccessToken && request.nextUrl.pathname.startsWith("/dashboard")) {
      return NextResponse.redirect(new URL("/auth/Signin", request.url));
    }

    //게시판 권한 관련한 미들웨어 로직
    // if (request.nextUrl.pathname.startsWith("/posts/")) {
    //   const pathParts = pathname.split("/");
    //   const midIndex = pathParts.indexOf("posts") + 1; // 'posts' 뒤의 값을 찾음
    //   const mid = pathParts[midIndex];
    //   let action;
    //   try {
    //     // API 호출로 권한 확인
    //     if (pathname.includes("create")) {
    //       action = "create";
    //       const apiResponse = await fetch(
    //         new URL(
    //           `${baseUrl}/api/posts/${mid}/create?action=${action}`,
    //           request.url,
    //         ),
    //         {
    //           method: "GET",
    //           headers: {
    //             Authorization: `Bearer ${accessToken?.value}`, // 토큰을 인증 헤더에 포함
    //           },
    //         },
    //       );
    //
    //       if (!apiResponse.ok) {
    //         console.error("❌ API Response Error:", apiResponse.status);
    //         throw new Error(`HTTP Error: ${apiResponse.status}`);
    //       }
    //       const data = await apiResponse.json();
    //
    //       if (
    //         data.success === false &&
    //         data.errorCode === "INSUFFICIENT_PERMISSIONS"
    //       ) {
    //         return NextResponse.redirect(new URL("/access", request.url));
    //       }
    //       if (data.success === false && data.errorCode === "MODULE_NOT_FOUND") {
    //         return NextResponse.redirect(new URL("/error", request.url));
    //       }
    //     } else if (pathname.includes("read")) {
    //       action = "read";
    //       const apiResponse = await fetch(
    //         new URL(
    //           `${baseUrl}/api/posts/${mid}/read?action=${action}`,
    //           request.url,
    //         ),
    //         {
    //           method: "GET",
    //           headers: {
    //             Authorization: `Bearer ${accessToken?.value}`, // 토큰을 인증 헤더에 포함
    //           },
    //         },
    //       );
    //       console.log("🌍 Fetching API URL:", apiResponse.toString());
    //       if (!apiResponse.ok) {
    //         console.error("❌ API Response Error:", apiResponse.status);
    //         throw new Error(`HTTP Error: ${apiResponse.status}`);
    //       }
    //     } else {
    //       action = "list";
    //       const apiResponse = await fetch(
    //         new URL(
    //           `${baseUrl}/api/posts/${mid}/list?action=${action}`,
    //           request.url,
    //         ),
    //         {
    //           method: "GET",
    //           headers: {
    //             Authorization: `Bearer ${accessToken?.value}`, // 토큰을 인증 헤더에 포함
    //           },
    //         },
    //       );
    //       console.log("🌍 Fetching API URL:", apiResponse.toString());
    //       if (!apiResponse.ok) {
    //         console.error("❌ API Response Error:", apiResponse.status);
    //         throw new Error(`HTTP Error: ${apiResponse.status}`);
    //       }
    //       const data = await apiResponse.json();
    //
    //       if (
    //         data.success === false &&
    //         data.errorCode === "INSUFFICIENT_PERMISSIONS"
    //       ) {
    //         return NextResponse.redirect(new URL("/access", request.url));
    //       }
    //       if (data.success === false && data.errorCode === "MODULE_NOT_FOUND") {
    //         return NextResponse.redirect(new URL("/error", request.url));
    //       }
    //       console.log(data);
    //     }
    //     if (!action || !mid) {
    //       return NextResponse.redirect(new URL("/error", request.url));
    //     }
    //   } catch (error) {
    //     console.error("Error in postsMiddleware:", error);
    //   }
    // }
  } catch (error) {
    console.error("Error in middleware:", error);
    return NextResponse.error();
  }
  // return NextResponse.next();
}
