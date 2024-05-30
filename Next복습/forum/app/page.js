import { connectDB } from "@/util/database";

//revalidate 예약번수쓰면 페이지단위 캐싱가능
//export const revalidate = 60;

export default async function Home() {
  //DB 입출력 코드는 서버 컴포넌트 안에서만 작성

  //캐싱 : GET 요청 결과를 잠깐 저장해두고 재사용
  // await fetch("/URL", { cache: "force-cache" });
  // await fetch("/URL", { next: {revalidate : 60} });

  return <div>안녕</div>;
}
