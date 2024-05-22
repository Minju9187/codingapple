// import Image from "next/image";
// import Tomatoes from "/public/food0.png";

export default function List() {
  let 상품 = ["Tomatoes", "Pasta", "Coconut"];
  return (
    <div>
      <h4 className="title">상품목록</h4>
      {상품.map((v, i) => {
        return (
          <div className="food" key={i}>
            {/* <Image src={Tomatoes} className="food-img" alt="과일" /> */}
            <img
              src={`/food${i}.png`}
              alt={`food${i}사진`}
              className="food-img"
            />
            <h4>{v} $40</h4>
          </div>
        );
      })}
    </div>
  );
}
