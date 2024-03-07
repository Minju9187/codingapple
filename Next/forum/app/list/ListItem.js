"use client";
import Link from "next/link";

export default function ListItem({ result }) {
  //   useEffect(() => {
  //     //서버에 부탁해서 DB게시물 가져옴
  //     //검색 노출이 잘 안됨
  //   }, []);

  return (
    <>
      {result.map((v, i) => {
        return (
          <div className="list-item" key={i}>
            <Link href={`/detail/${v._id}`}>
              <h4>{v.title}</h4>
            </Link>
            {/* <DetailLink /> */}
            <Link href={`/edit/${v._id}`}>✏️</Link>
            <span
              onClick={() => {
                fetch("/api/post/delete", {
                  method: "DELETE",
                  body: v._id,
                });
              }}
            >
              🗑️
            </span>
            <p>1월 1일</p>
          </div>
        );
      })}
    </>
  );
}
