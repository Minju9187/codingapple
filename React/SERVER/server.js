const express = require("express");
const app = express();
const path = require("path");

app.listen(8080, function () {
  console.log("listening on 8080");
});
// 아래 3줄 추가해놔야 ajax잘됨, npm install cors도 해야됨
app.use(express.json());
var cors = require("cors");
app.use(cors());

//아래 코드가 있어야 특정 폴더의 파일들을 전송가능
app.use(express.static(path.join(_dirname, "react-project/build")));

app.get("/", function (요청, 응답) {
  응답.sendFile(path.join(_dirname, "react-project/build/index.html"));
});
// ex)DB에 있던 상품명을 보여주려면?
app.get("/product", function (요청, 응답) {
  응답.json({ name: "black shoes" });
});

// 리액트라우터 쓰는 경우 아래 코드 최하단에 추가해놓는게 좋음
app.get("*", function (요청, 응답) {
  응답.sendFile(path.join(_dirname, "react-project/build/index.html"));
});
