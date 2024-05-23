import { connectDB } from "@/util/database";

export default async function Home() {
  //DB 입출력 코드는 서버 컴포넌트 안에서만 작성
  const db = (await connectDB).db("forum");
  let result = await db.collection("post").find().toArray();
  console.log(result);
  return <div>안녕</div>;
}
