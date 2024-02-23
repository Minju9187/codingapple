declare class Info {
    name: string;
    constructor(a: string);
    함수(a: string): void;
}
declare let 사람1: Info;
declare let 사람2: Info;
declare class Car {
    model: string;
    price: number;
    constructor(a: string, b: number);
    tax(): number;
}
declare let car1: Car;
declare class Word {
    num: number[];
    str: string[];
    constructor(...param: (number | string)[]);
}
declare let obj: Word;
