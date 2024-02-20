let 제목 = document.querySelector("#title");
// 타입을 narrowing해야됨
// narrowing 방법 4가지
// 방법1
if (제목 != null) {
  제목.innerHTML = "반가워요";
}
// 방법2 : 가장 많이 쓰임
if (제목 instanceof Element) {
  제목.innerHTML = "반가워요";
}
// 방법3 : as로 사기치기
// let 제목 = document.querySelector("#title") as Element;

// 방법4 : innerHTML이 있으면 출력해주고 없으면 undefined
if (제목?.innerHTML != undefined) {
  제목.innerHTML = "반가워요";
}

let 링크 = document.querySelectorAll(".link");

링크.forEach((v) => {
  if (v instanceof HTMLAnchorElement) {
    v.href = "https://kakao.com";
  }
});

// Element타입 : 별개 안들어있음
// HTMLAnchorElement : href, style,class 등 여러개의 타입이 들어있음
// HTMLHeadingElement
// HTMLButtonElement

let 버튼 = document.querySelector("#button");
let 이미지 = document.querySelector("#image");
버튼?.addEventListener("click", function () {
  if (이미지 instanceof HTMLImageElement) {
    이미지.src = "new.jpg";
  }
});
