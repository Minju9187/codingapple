// type Square = { color: string; width: number };
// interface 장점 : extends로 복사가능
//type VS interface
//interface는 중복선언 가능-합쳐짐(유연), type은 중복선언 불가능(엄격)
interface Square {
  color: string;
  width: number;
}

let 네모: Square = { color: "red", width: 100 };

interface Student {
  name: string;
}

interface Teacher extends Student {
  age: number;
}

let 학생: Student = { name: "kim" };
let 선생: Teacher = { name: "kim", age: 20 };

type Animal1 = { name: string };
type Cat = { age: number } & Animal1; // 두 타입을 전부 만족하는 타입

interface Goods {
  brand: string;
  serialNumber: number;
  model: string[];
}

let 상품: Goods = {
  brand: "Samsung",
  serialNumber: 1360,
  model: ["TV", "phone"],
};

interface Basket {
  product: string;
  price: number;
}

let 장바구니: Basket[] = [
  { product: "청소기", price: 7000 },
  { product: "삼다수", price: 800 },
];

interface NewBasket extends Basket {
  card: boolean;
}

interface CalcType {
  plus: (a: number, b: number) => number;
  minus: (a: number, b: number) => number;
}

let Calc: CalcType = {
  plus(a, b) {
    return a + b;
  },
  minus(a, b) {
    return a - b;
  },
};
