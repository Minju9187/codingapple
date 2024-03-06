import React from "react";

export default function Write() {
  return (
    <div className="p-20">
      <h4>글작성</h4>
      <form action="/api/test" method="POST">
        <label htmlFor="title">제목 : </label>
        <input id="title" name="title" placeholder="글제목" />
        <label htmlFor="content">내용 : </label>
        <input id="content" name="content" placeholder="글내용" />
        <button type="submit">버튼</button>
      </form>
    </div>
  );
}
