import "./App.css";
import { useState } from "react";

function App() {
  let post = "강남 우동 맛집";
  let [title, setTitle] = useState([
    "남자 코트 추천",
    "강남 우동 맛집 ",
    "파이썬독학",
  ]);
  let [like, setLike] = useState(0);

  function change() {
    let copy = [...title];
    copy[0] = "여자 코트 추천";
    setTitle(copy);
  }

  return (
    <div className="App">
      <div className="black-nav">
        <h4>BLOG</h4>
      </div>
      <div className="list">
        <h4 onClick={change}>
          {title[0]}
          <span
            onClick={() => {
              setLike(like + 1);
            }}
          >
            👍
          </span>
          {like}
        </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{title[1]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{title[2]}</h4>
        <p>2월 17일 발행</p>
      </div>
    </div>
  );
}

export default App;
