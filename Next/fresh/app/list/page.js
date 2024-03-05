"use client";
import { useState } from "react";

export default function List() {
  let 상품 = ["Tomatoes", "Pasta", "Coconut"];
  let [count, setCount] = useState([0, 0, 0]);
  return (
    <div>
      <h4 className="title">상품목록</h4>
      {상품.map((v, i) => {
        return (
          <div className="food" key={i}>
            <img src={`/food${i}.png`} alt={`음식${i}`} className="food-img" />
            <h4>{v} $40</h4>
            <span> {count[i]} </span>
            <button
              onClick={() => {
                let copy = [...count];
                copy[i]++;
                setCount(copy);
              }}
            >
              +
            </button>
            <button
              onClick={() => {
                let copy = [...count];
                copy[i]--;
                setCount(copy);
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
