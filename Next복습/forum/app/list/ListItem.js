"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function ListItem({ data }) {
  //client component에서 DB데이터 가져오려면

  //   useEffect(() => {
  //     //서버에 부탁해서 DB게시물 가져옴
  //   }, []);
  return (
    <div>
      {data.map((v, i) => (
        <div className="list-item" key={i}>
          <Link href={"/detail/" + v._id}>{v.title}</Link>
          <Link href={"/edit/" + v._id} className="list-btn">
            ✏️
          </Link>
          <span
            onClick={() => {
              fetch("/api/post/delete", {
                method: "DELETE",
                body: v._id,
              })
                .then((r) => {
                  if (r.status == 200) {
                    return r.json();
                  } else {
                    //서버가 에러코드전송시 실행할코드
                  }
                })
                .then((result) => {
                  //성공시 실행할코드
                })
                .catch((error) => {
                  //인터넷문제 등으로 실패시 실행할코드
                  console.log(error);
                });
            }}
          >
            🗑️
          </span>
          <p>1월 1일</p>
        </div>
      ))}
    </div>
  );
}
