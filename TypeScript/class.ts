class Info {
  name: string;
  constructor(a: string) {
    this.name = a;
  }

  함수(a: string) {
    console.log("안녕" + a);
  }
}
// Info.prototype.함수3 = function () {};

let 사람1 = new Info("kim");
let 사람2 = new Info("park");

class Car {
  model: string;
  price: number;
  constructor(a: string, b: number) {
    this.model = a;
    this.price = b;
  }
  tax(): number {
    console.log(this.price / 10);
    return this.price / 10;
  }
}

let car1 = new Car("소나타", 3000);

class Word {
  num: number[];
  str: string[];

  constructor(...param: (number | string)[]) {
    let 숫자들: number[] = [];
    let 문자들: string[] = [];

    param.forEach((i) => {
      if (typeof i === "string") {
        문자들.push(i);
      } else {
        숫자들.push(i);
      }
    });

    this.num = 숫자들;
    this.str = 문자들;
  }
}

let obj = new Word("kim", 3, 5, "park");
