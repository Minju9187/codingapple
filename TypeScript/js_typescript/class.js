// 비슷한 object 많이 만들일 있으면 class 만들어 쓰면 된다.

function 기계(q, w) {
  this.q = q;
  this.w = w;
}

기계.prototype.name = "kim";

var nunu = new 기계("consume", "snowball");
// nunu가 name을 가지고 있지 않으면 부모 유전자를 뒤짐
// 직접 자료를 가지고 있으면 출력
// 없으면 부모유전자까지 뒤짐
// 있을때까지 부모의 부모 유전자까지 뒤짐 - prototype chain
console.log(nunu.name);

var garen = new 기계("strike", "courage");

class Hero {
  constructor(q, w) {
    this.q = q;
    this.w = w;
  }
}

// var nunu = {
//   q: "comsume",
//   w: "snowball",
// };

// var garen = {
//   q: "strike",
//   w: "courage",
// };
// 프로토타입이란?
// 유전자

var array = [4, 2, 1];
var array = new Array(4, 2, 1);
//array 자료에 .sort(), .length를 쓸 수 있는 이유
//Array.prototype이 존재하기 때문
//Array라는 부모 유전자에 존재하기 때문
array.length;
array.sort();
