let 이이름: string = "kim";
let 나이: number = 50;
let 결혼여부: boolean = true;

let 회원들: (string | number)[] = ["kim", "park", 1, 2];
let 회원: { member1: string; member2: string } = {
  member1: "kim",
  member2: "park",
};

let project: { member: string[]; days: number; started: boolean } = {
  member: ["kim", "park"],
  days: 30,
  started: true,
};

// Union Type : 타입 2개 이상 합친 새로운 타입
let 오브젝트: { a: string | number } = { a: "123" };
// any타입 : 모든 자료형 허용 - TS 쓰는 이유가 사라짐
let 아무개: any;
// unknown타입 any타입보다 안전

let age: string | number;
// age + 1; // 이런경우에 Narrowing / Assertion 배워서 엄격하게 짜면됨

let user: string = "kim";
let age1: undefined = undefined;
let married: boolean = false;
let 철수: [string, undefined, boolean] = [user, age1, married];

let 학교: {
  score: (number | boolean)[];
  teacher: string;
  friend: string | string[];
} = {
  score: [100, 97, 84],
  teacher: "Phil",
  friend: "John",
};
학교.score[4] = false;
학교.friend = ["Lee", 학교.teacher];
