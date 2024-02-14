import "./App.css";
import { useState } from "react";
import Modal from "./components/Modal";

function App() {
  let post = "강남 우동 맛집";
  let [title, setTitle] = useState([
    "남자 코트 추천",
    "강남 우동 맛집 ",
    "파이썬독학",
  ]);
  let [like, setLike] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);
  let [index, setIndex] = useState(0);
  let [text, setText] = useState("");

  function change() {
    let copy = [...title];
    if (copy[0] === "여자 코트 추천") copy[0] = "남자 코트 추천";
    else {
      copy[0] = "여자 코트 추천";
    }
    setTitle(copy);
  }

  return (
    <div className="App">
      <div className="black-nav">
        <h4>BLOG</h4>
      </div>
      {title.map((v, i) => {
        return (
          <div className="list" key={i}>
            <h4
              onClick={() => {
                setIndex(i);
                setModal(!modal);
              }}
            >
              {title[i]}
              <span
                onClick={(e) => {
                  e.stopPropagation();
                  let copy = [...like];
                  copy[i] = copy[i] + 1;
                  setLike(copy);
                }}
              >
                👍
              </span>
              {like[i]}
            </h4>
            <p>2월 17일 발행</p>
            <button
              onClick={() => {
                let copy = [...title];
                copy.splice(i, 1);
                setTitle(copy);
              }}
            >
              삭제
            </button>
          </div>
        );
      })}
      <label>
        <input
          type="text"
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
      </label>
      <button
        onClick={() => {
          let copy = [...title];
          copy.unshift(text);
          setTitle(copy);
        }}
      >
        추가
      </button>
      <button
        onClick={() => {
          let copy = [...title];
          copy.sort();
          setTitle(copy);
        }}
      >
        가나다순정렬
      </button>
      {modal ? <Modal title={title} change={change} index={index} /> : <></>}
    </div>
  );
}

export default App;
