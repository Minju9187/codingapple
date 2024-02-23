function 함수(a: string | undefined) {
  if (typeof a === "string") {
  } else {
  }
}
// if,else문을 하나로 줄인 것
// 아래는 undefined면 if문 안에가 실행이 안됨, string타입이면 if문 안이 실행
function 함수(a: string | undefined) {
  if (a && typeof a === "string") {
  }
}

type Fish = { swim: string };
type Bird = { fly: string };
// in 키워드로 object narrowing 가능
function 함수(animal: Fish | Bird) {
  if ("swim" in animal) {
    animal.swim;
  }
}

// instanceof 연산자로 object narrowing 가능
// 오브젝트 instanceof 부모class
let 날짜 = new Date();
if (날짜 instanceof Date) {
}
// object 타입마다 literal type 만들어두면 narrowing 편해짐
// 비슷한 object 타입이 많으면 literal type을 넣어서 구분
type Car1 = {
  wheel: "4개";
  color: string;
};

type Bike = {
  wheel: "2개";
  color: string;
};

function 함수(x: Car1 | Bike) {
  if (x.wheel === "4개") {
    console.log("x는 Car타입");
  }
}
