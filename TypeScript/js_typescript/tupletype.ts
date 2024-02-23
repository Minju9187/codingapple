let 멍멍: [string, boolean?, number?] = ["dog", true];

function 함수(...x: [number, string]) {
  console.log(x);
}

function 함수(a: number, b: string) {
  console.log([a, b]);
}

함수(1, "2");

let arr = [1, 2, 3];
let arr2: [number, number, ...number[]] = [4, 5, ...arr];

let arr3: [string, number, ...boolean[]] = [
  "동서녹차",
  4000,
  true,
  false,
  true,
  true,
  false,
  true,
];

function 함수(...rest: (number | string)[]) {
  let result: [string[], number[]] = [[], []];

  rest.forEach((a) => {
    if (typeof a === "string") {
      result[0].push(a);
    } else {
      result[1].push(a);
    }
  });

  return result;
}

함수("b", 5, 6, 8, "a");
