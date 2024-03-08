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
              onClick={(e) => {
                fetch("/api/post/delete", {
                  method: "DELETE",
                  body: v._id,
                })
                  .then((response) => {
                    return response.json();
                  })
                  .then(() => {
                    e.target.parentElement.style.opacity = 0;
                    setTimeout(() => {
                      e.target.parentElement.style.display = "none";
                    }, 1000);
                  });
                // fetch("/api/test?name=kim&age=20");
                // fetch("/api/abc/kim");
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
