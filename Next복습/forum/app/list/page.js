import { connectDB } from "@/util/database";
import Link from "next/link";
import ListItem from "./ListItem";

//dynamic 렌더링으로 바꾸는 법
//단점 : 서버 / DB 부답 높아짐
//캐싱 기능을 사용해서 단점 해결
export const dynamic = "force-dynamic";

export default async function List() {
  const db = (await connectDB).db("forum");
  let result = await db.collection("post").find().toArray();

  return (
    <div className="list-bg">
      <ListItem data={result} />
    </div>
  );
}
