import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function middleware(request) {
  // console.log(request.nextUrl)  //유저가 요청중인 URL 출력해줌
  // console.log(request.cookies)  //유저가 보낸 쿠키 출력해줌
  // console.log(request.headers)  //유저의 headers 정보 출력해줌
  // NextResponse.next()  //통과
  // NextResponse.redirect()  //다른페이지 이동
  // NextResponse.rewrite()  //다른페이지 이동(주소창은 그대로)
  // const session = await getToken({ req: request });
  // if (request.nextUrl.pathname.startsWith("/write")) {
  //   const session = await getToken({ req: request });
  //   console.log("세션", session);
  //   if (session == null) {
  //     return NextResponse.redirect(new URL("/api/auth/signin", request.url));
  //   }
  // }
  // if (request.nextUrl.pathname === "/list") {
  //   console.log(request.headers.get("sec-ch-ua-platform"));
  //   return NextResponse.next();
  // }
  // if (request.nextUrl.pathname.startsWith("/register")) {
  //   if (request.cookies.has("visited") == false) {
  //     const response = NextResponse.next();
  //     response.cookies.set({
  //       name: "visited",
  //       value: "true",
  //       maxAge: 3600,
  //     });
  //     return response;
  //   }
  //   return NextResponse.next();
  // }
}
