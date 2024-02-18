import React, { memo, useState } from "react";
import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { changeName, increase } from "./store/userSlice.js";
import { increaseCnt } from "./store.js";

// 꼭 필요할 때만 재렌더링하려면 memo
// memo로 재렌더링 오래걸리는 컴포넌트 감싸놓으면 좋음
// 특정 상황에서만 재렌더링 시켜줌
// memo의 원리 : props가 변할때만 재렌더링 해줌
// let Child = memo(function () {
//   console.log("재랜더링");
//   return <div>자식</div>;
// });

export default function Cart() {
  let data = useSelector((state) => {
    return state.cart;
  });
  let userData = useSelector((state) => {
    return state.user;
  });
  //store.js로 요청보내주는 함수
  let dispatch = useDispatch();
  let [count, setCount] = useState(0);

  return (
    <div>
      {/* <Child count={count} /> */}
      <button onClick={() => setCount(count + 1)}>+</button>
      <h6>{userData.name}의 장바구니</h6>
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경하기</th>
          </tr>
        </thead>
        <tbody>
          {data.map((v, i) => {
            return (
              <tr key={i}>
                <td>{v.id}</td>
                <td>{v.name}</td>
                <td>{v.count}</td>
                <td>
                  <button
                    onClick={() => {
                      dispatch(increaseCnt(v.id));
                    }}
                  >
                    +
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      {userData.age}
    </div>
  );
}
