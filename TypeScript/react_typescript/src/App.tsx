import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
import { RootState } from "./index";

export default function App() {
  const 꺼내온거 = useSelector((state: RootState) => state);
  const dispatch: Dispatch = useDispatch();

  return (
    <div className="App">
      {꺼내온거.count}
      <button
        onClick={() => {
          dispatch({ type: "증가" });
        }}
      >
        버튼
      </button>
    </div>
  );
}
