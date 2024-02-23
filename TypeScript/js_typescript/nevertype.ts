// 조건 1 : return값이 없어야 함
// 조건 2 : endpoint가 없어야 함

function 함수(parameter: string): never {
  if (typeof parameter == "string") {
    console.log(parameter);
  } else {
    console.log(parameter); // never 그럴 일이 없다
  }
  //   while (true) {} // 내부 코드를 무한히 반복함
  //   throw new Error(); // 이 코드를 쓰면 함수가 끝나지 않음
}

function 함수1(parameter: string) {
  if (typeof parameter == "string") {
    console.log(parameter);
  } else {
    console.log(parameter); // never 그럴 일이 없다
  }
}

let 함수5 = function () {
  //never type 등장하면 이해만 할 수 있으면 된다.
  throw new Error();
};
