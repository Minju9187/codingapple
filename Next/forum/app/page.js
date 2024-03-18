import { connectDB } from "@/util/database";
import { MongoClient } from "mongodb";
//페이지 방문시 60초동안 페이지가 캐싱됩니다.
// export const revalidate = 60;

export default async function Home() {
  // const client = await connectDB;
  // const db = client.db("forum");
  // let result = await db.collection("post").find().toArray();
  // console.log(result);

  // GET요청 결과 캐싱 가능
  // await fetch("/URL", { cache: "force-cache" });
  // 실시간 데이터
  // await fetch("/URL", { cache: "no-store" });
  // 60초마다 캐싱된 데이터 갱신해줌
  // await fetch("/URL", { next: { revalidate: 60 } });

  return (
    <>
      <div>안녕</div>
    </>
  );
}
