import Image from "next/image";
import styles from "./page.module.css";

// revalidate 예약변수 쓰면 페이지 단위 캐싱 가능
// export const revalidate = 60;

//DB 입출력 코드는 server component 안에서만 쓰자!!
export default async function Home() {
  // //결과 저장해두고 가져다 씀
  // await fetch("/URL", { cache: "force-cache" });
  // await fetch("/URL");
  // //실시간 데이터가 중요해 캐시를 쓰지 않을때
  // await fetch("/URL", { cache: "no-store" });
  // //60초마다 캐싱된 데이터 갱신
  // await fetch("/URL", { next: { revalidate: 60 } });

  return <div>안녕</div>;
}
