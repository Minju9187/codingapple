import { connectDB } from "@/util/database";
import React from "react";

export default async function Detail({ params }) {
  const db = (await connectDB).db("forum");
  let result = await db.collection("post").findOne({ _id: params.id });
  console.log(result);
  return (
    <div>
      <h4>상세페이지임</h4>
      <h4>글제목</h4>
      <p>글내용</p>
    </div>
  );
}
