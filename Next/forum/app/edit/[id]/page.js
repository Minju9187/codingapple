import React from "react";
import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function Edit(props) {
  const client = await connectDB;
  const db = client.db("forum");
  const id = new ObjectId(props.params.id);
  let result = await db.collection("post").findOne({ _id: id });

  return (
    <div className="p-20">
      <h4>수정페이지</h4>
      <form action="/api/post/edit" method="POST">
        <label htmlFor="title">제목 : </label>
        <input
          id="title"
          name="title"
          placeholder="글제목"
          defaultValue={result.title}
        />
        <label htmlFor="content">내용 : </label>
        <input
          id="content"
          name="content"
          placeholder="글내용"
          defaultValue={result.content}
        />
        <input
          style={{ display: "none" }}
          name="_id"
          defaultValue={result._id.toString()}
        />
        <button type="submit">전송</button>
      </form>
    </div>
  );
}
