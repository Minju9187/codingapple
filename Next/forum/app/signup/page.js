import React from "react";

export default async function Signup() {
  const client = await connectDB;
  const db = client.db("forum");
  let result = await db.collection("post").findOne({ email });

  return (
    <>
      <form>
        <label>
          아이디 :
          <input name="email" />
        </label>
        <label>
          비밀번호 :
          <input name="password" />
        </label>
      </form>
    </>
  );
}
