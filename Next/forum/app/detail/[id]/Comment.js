"use client";

import { useEffect, useState } from "react";

export default function Comment({ _id }) {
  let [comment, setComment] = useState("");
  let [data, setData] = useState([]);

  useEffect(() => {
    fetch("/api/comment/list?id=" + _id)
      .then((r) => r.json())
      .then((result) => {
        setData(result);
      });
  }, [data]);

  return (
    <div>
      <hr />
      {data.length > 0
        ? data.map((v, i) => {
            return <p key={i}>{v.content}</p>;
          })
        : "댓글없음"}
      <input
        onChange={(e) => {
          setComment(e.target.value);
        }}
      />
      <button
        onClick={() => {
          fetch("/api/comment/new", {
            method: "POST",
            body: JSON.stringify({ comment: comment, _id: _id }),
          });
        }}
      >
        댓글전송
      </button>
    </div>
  );
}
