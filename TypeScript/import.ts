import { Car, Bike, ObjFunction } from "./export";

let 빠방이: Car = { wheel: 4, model: "Sonata" };

let 함수: ObjFunction = function (a) {
  console.log(a);
};

함수({ abc: "안뇽" });

namespace GoodDog {
  export type Dog = string;
}
namespace BadDog {
  export interface Dog {
    name: string;
  }
}

let dog1: GoodDog.Dog = "bark";
let dog2: BadDog.Dog = { name: "paw" };
