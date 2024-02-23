type Animal = string | number | undefined;

let 동물: Animal = "kim";

type Animalobj = { name: string; age: number };
let 동물obj: Animalobj = { name: "kim", age: 20 };
// readonly를 이용해 수정하지 못하게 할 수 있음(수정 자체는 가능-에러만 띄움)
type Girlfriend = {
  readonly name?: string; //(string|undifined)
};

const 여친: Girlfriend = {
  name: "엠버",
};

// 여친.name = "유라";

type Name = string;
type Age = number;
type Person = Name | Age;

type PositionX = { x: number };
type PositionY = { y: number };

type NewType = PositionX & PositionY;

let position: NewType = { x: 10, y: 20 };

type 함수타입 = (a: string) => number;

let 함수2: 함수타입 = function (a) {
  console.log(a);
  return 10;
};

type MemberInfo = {
  name: string;
  age?: number;
  plusOne: (x: number) => number;
  changeName: () => void;
};

let 회원정보: MemberInfo = {
  name: "kim",
  age: 30,
  plusOne(a) {
    return a + 1;
  },
  changeName: () => {},
};

회원정보.plusOne(10);

type CutType = (x: string) => string;

let cutZero: CutType = function (x) {
  let result = x.replace(/^0+/, "");
  return result;
};

type removeDashType = (x: string) => number;

let removeDash: removeDashType = function (x) {
  let result = x.replace(/-/g, "");
  return parseFloat(result);
};

let 콜백함수 = function (
  x: string,
  cutZero: CutType,
  removeDash: removeDashType
): number {
  console.log(removeDash(cutZero(x)));
  return removeDash(cutZero(x));
};

콜백함수("010-1111-2222", cutZero, removeDash);
