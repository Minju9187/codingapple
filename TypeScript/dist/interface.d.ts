interface Square {
    color: string;
    width: number;
}
declare let 네모: Square;
interface Student {
    name: string;
}
interface Teacher extends Student {
    age: number;
}
declare let 학생: Student;
declare let 선생: Teacher;
type Animal1 = {
    name: string;
};
type Cat = {
    age: number;
} & Animal1;
interface Goods {
    brand: string;
    serialNumber: number;
    model: string[];
}
declare let 상품: Goods;
interface Basket {
    product: string;
    price: number;
}
declare let 장바구니: Basket[];
interface NewBasket extends Basket {
    card: boolean;
}
interface CalcType {
    plus: (a: number, b: number) => number;
    minus: (a: number, b: number) => number;
}
declare let Calc: CalcType;
