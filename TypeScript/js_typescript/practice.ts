let 성: string = "kim";
let 이름: string[] = ["kim", "part"];
let 숫자이름: string | number = 123;

type NumberOrString = string | number;
let 이름숫자: NumberOrString = 1234;

function 함수(x: number): number {
  return x * 2;
}
// 튜플타입
type Member = [number, boolean];
let john: Member = [123, true];

type objMember = {
  name: string;
};

let jake: objMember = { name: "kim" };

// object에 타입지정해야할 속성이 너무 많으면
type objMembers = {
  [key: string]: string;
};

class User {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}
