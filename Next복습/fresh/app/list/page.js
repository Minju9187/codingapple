// import Image from "next/image";
// import Tomatoes from "/public/food0.png";
"use client";

import { useState } from "react";

export default function List() {
  let 상품 = ["Tomatoes", "Pasta", "Coconut"];
  let [num, setNum] = useState([0, 0, 0]);
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
            <span>{num[i]}</span>
            <button
              onClick={() => {
                let copy = [...num];
                copy[i] = copy[i] + 1;
                setNum(copy);
              }}
            >
              +
            </button>
            <button
              onClick={() => {
                let copy = [...num];
                copy[i] = copy[i] - 1;
                setNum(copy);
              }}
            >
              -
            </button>
          </div>
        );
      })}
    </div>
  );
}
