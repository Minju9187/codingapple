// 들어올 자료를 미리 정해둠
let 엄격: 123;
// 엄격 = 456;
// 변수에 뭐가 들어올지 더 엄격하게 관리가능
// 자동완성
let 접니다: "대머리" | "솔로";
접니다 = "솔로";

function 함수1(a: "hello"): 1 | 0 {
  console.log(a);
  return 1;
}
함수1("hello");

function 가위바위보(a: "가위" | "바위" | "보"): ("가위" | "바위" | "보")[] {
  return [a];
}
가위바위보("가위");

const 변수 = "kim";
// as const 사용하면 object value값을 그대로 타입으로 지정해줌, object속성들에 모두 readonly를 붙여줌
var 자료 = {
  name: "kim",
} as const;
// kim이라는 타입만 들어올 수 있습니다라는 의미기 때문에 아래에서 에러가 남
function 내함수(a: "kim") {
  console.log(a);
}
// 리터럴 타입의 문제점
내함수(자료.name);
