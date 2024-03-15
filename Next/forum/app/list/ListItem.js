"use client";
import Link from "next/link";

export default function ListItem({ result }) {
  return (
    <>
      {result.map((v, i) => {
        return (
          <div className="list-item" key={i}>
            <Link href={"/detail/" + v._id}>
              <h4>{v.title}</h4>
            </Link>{" "}
            <Link href={"/edit/" + v._id} className="list-btn">
              ✏️
            </Link>
            <span
              onClick={(e) => {
                // fetch("/api/post/delete", {
                //   method: "DELETE",
                //   body: result[i]._id,
                // })
                //   .then((r) => r.json())
                //   .then(() => {
                //     e.target.parentElement.style.opacity = 0;
                //     setTimeout(() => {
                //       e.target.parentElement.style.display = "none";
                //     }, 1000);
                //   });
                fetch("/api/abc/kim");
              }}
            >
              🗑️
            </span>
            {/* <DetailLink /> */}
            <p>1월 1일</p>
          </div>
        );
      })}
    </>
  );
}
