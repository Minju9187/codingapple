import React from "react";
import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { changeName, increase } from "./store/userSlice.js";
import { increaseCnt } from "./store.js";

export default function Cart() {
  let data = useSelector((state) => {
    return state.cart;
  });
  let userData = useSelector((state) => {
    return state.user;
  });
  //store.js로 요청보내주는 함수
  let dispatch = useDispatch();
  console.log(data);

  return (
    <div>
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
