"use client";

import { signIn } from "next-auth/react";
import { useEffect } from "react";

export default function LoginBtn() {
  // //쿠키사용법
  // //쿠키는 server component에서 출력가능
  // document.cookie = "쿠키이름=값";
  // //유효기간 1시간
  // document.cookie = "쿠키이름=값; max-age=3600;";

  // //Next에서 localStorage사용법
  // //localStorage는 client component에서 출력가능
  // useEffect(() => {
  //   if (typeof window != "undefined") {
  //     localStorage.setItem("mode");
  //   }
  // }, []);

  return (
    <button
      onClick={() => {
        signIn();
      }}
    >
      로그인
    </button>
  );
}
