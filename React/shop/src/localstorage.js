import React from "react";

export default function localstorage() {
  let obj = { name: "kim" };
  //배열,object는 JSON형태로 변환해서 저장
  localstorage.setItem("data", JSON.stringify(obj));
  //   꺼낸 데이터도 변환해서 사용
  let data = JSON.parse(localStorage.getItem("data"));

  localstorage.removeItem("data");

  return <div>localstorage</div>;
}
