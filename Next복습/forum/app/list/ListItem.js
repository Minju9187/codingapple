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
            onClick={(e) => {
              fetch("/api/post/delete", {
                method: "DELETE",
                body: v._id,
              })
                .then((r) => {
                  r.json();
                })
                .then(() => {
                  e.target.parentElement.style.opacity = 0;
                  setTimeout(() => {
                    e.target.parentElement.style.display = "none ";
                  }, 1000);
                });
              // .catch((error) => {
              //   //인터넷문제 등으로 실패시 실행할코드
              //   console.log(error);
              // });
              //query string
              //아래처럼 fetch를 사용하면 데이터 = 값을 전송할 수 있다.
              //서버에서 request.query를 통해 데이터를 확인할 수 있다.
              // fetch("/api/test?name=kim&age=20")
              //URL parameter
              // fetch("/api/abc/kim");
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
