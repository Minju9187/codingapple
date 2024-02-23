function 함수<MyType>(x: MyType[]): MyType {
  //해결책 1 : narrowing 하거나 as 쓰면 됨
  //해결책 2 : Generic 함수 만들기 ( 파라미터로 타입을 입력하는 함수 )
  //Generic 함수 장점 : 확장성이 있어보임
  //매번 다른 타입 출력가능
  return x[0];
}

let a = 함수<number>([4, 2]);
console.log(a + 1); //+1이 안됨 타입이 정확하지 않기 때문 ( narrowing 필요 )

// 숫자 집어넣으면 -1해서 return 해주는 함수
// extends 키워드로 넣을 수 있는 타입 제한가능
function 함수<MyType extends number>(x: MyType) {
  //타입파라미터 제한두기
  return x - 1;
}

let a = 함수<number>(100);

// 커스텀 타입
//class에도 타입 파라미터 넣을 수 있음
interface LengthCheck {
  length: number;
}

function 함수<MyType extends LengthCheck>(x: MyType) {
  return x.length;
}

let a = 함수<string[]>(["100"]);

function 함수<MyType extends string | string[]>(x: MyType) {
  console.log(x.length);
}

함수<string>("hello");
함수<string[]>(["kim", "park"]);

interface Animal2 {
  name: string;
  age: number;
}

let data = '{"name" : "dog", "age" : 1 }';
//아래와 같이 하면 any타입을 갖고 있음
function 함수(x: string) {
  return JSON.parse(x);
}

interface Animal2 {
  name: string;
  age: number;
}

function 함수<Type>(x: string): Type {
  return JSON.parse(x);
}
let result = 함수<Animal2>(data);
console.log(result);

class Person2<T> {
  name;
  constructor(a: T) {
    this.name = a;
  }
}
let b = new Person2<string>("어쩌구");
b.name; //any 타입이 되었넹
