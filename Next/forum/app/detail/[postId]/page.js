import React from "react";
import { connectDB } from "@/util/database";

export default async function Detail(props) {
  const client = await connectDB;
  const db = client.db("forum");
  let result = await db
    .collection("post")
    .findOne({ _id: props.params.postId });
  console.log(result);

  return (
    <div>
      <h4>상세페이지</h4>
      <h4>글제목</h4>
      <p>글내용</p>
    </div>
  );
}
