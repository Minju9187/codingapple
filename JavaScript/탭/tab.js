// 버튼 0 누르면
// - 모든버튼에붙은 클래스명 제거
// - 버튼0에 orange 클래스명 추가
// - 모든 div에 붙은 show 클래스명 제거
// - div0에 show 클래스명 추가

const num = document.querySelectorAll(".tab-button").length;
// for (let i = 0; i < num; i++) {
//   document
//     .querySelectorAll(".tab-button")
//     [i].addEventListener("click", function () {
//       tabOpen(i);
//     });
// }

// document.querySelector(".list").addEventListener("click", function (e) {
//   if (e.target == document.querySelectorAll(".tab-button")[0]) {
//     tabOpen(0);
//   }
//   if (e.target == document.querySelectorAll(".tab-button")[1]) {
//     tabOpen(1);
//   }
//   if (e.target == document.querySelectorAll(".tab-button")[2]) {
//     tabOpen(2);
//   }
// });

document.querySelector(".list").addEventListener("click", function (e) {
  tabOpen(e.target.dataset.id);
});

function tabOpen(i) {
  for (let j = 0; j < num; j++) {
    document.querySelectorAll(".tab-button")[j].classList.remove("orange");
    document.querySelectorAll(".tab-content")[j].classList.remove("show");
  }
  document.querySelectorAll(".tab-button")[i].classList.add("orange");
  document.querySelectorAll(".tab-content")[i].classList.add("show");
}
