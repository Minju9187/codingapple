"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function DarkMode() {
  let router = useRouter();
  let [mode, setMode] = useState("");
  let 쿠키값 = ("; " + document.cookie).split(`; mode=`).pop().split(";")[0];
  useEffect(() => {
    if (쿠키값 == "") {
      document.cookie = `mode=light; max-age=` + 3600 * 24 * 400;
    } else if (쿠키값 == "light") {
      setMode("🌙");
    } else {
      setMode("☀️");
    }
  }, []);
  const handleBtn = () => {
    if (쿠키값 == "light") {
      document.cookie = `mode=dark; max-age=` + 3600 * 24 * 400;
      setMode("☀️");
    } else {
      document.cookie = `mode=light; max-age=` + 3600 * 24 * 400;
      setMode("🌙");
    }
    router.refresh();
  };
  return <span onClick={handleBtn}>{mode}</span>;
}
