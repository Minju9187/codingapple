import React from "react";

export default function Modal(props) {
  return (
    <>
      <div className="modal">
        <h4>{props.title[props.index]}</h4>
        <p>날짜</p>
        <p>상세내용</p>
        <button onClick={props.change}>글 수정</button>
      </div>
    </>
  );
}
