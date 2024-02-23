function 두배(x: number): number {
  return x * 2;
}

두배(20);

// 리턴하는게 없을때 void를 사용하면 됨
// 파라미터가 옵션일 경우엔 파라미터변수?:타입 이렇게 쓰면됨
function 리턴없음(x?: number | string): void {
  //   let array: number[] = [];
  //   assertion문법(타입 덮어쓰기);
  //   array[0] = x as number;
  if (typeof x === "number") {
    console.log(x + 3);
  } else {
    console.log(x);
  }
  1 + 1;
}
리턴없음(4);
