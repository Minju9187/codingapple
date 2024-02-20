type Animal = string | number | undefined;
declare let 동물: Animal;
type Animalobj = {
    name: string;
    age: number;
};
declare let 동물obj: Animalobj;
type Girlfriend = {
    readonly name?: string;
};
declare const 여친: Girlfriend;
type Name = string;
type Age = number;
type Person = Name | Age;
type PositionX = {
    x: number;
};
type PositionY = {
    y: number;
};
type NewType = PositionX & PositionY;
declare let position: NewType;
type 함수타입 = (a: string) => number;
declare let 함수2: 함수타입;
type MemberInfo = {
    name: string;
    age?: number;
    plusOne: (x: number) => number;
    changeName: () => void;
};
declare let 회원정보: MemberInfo;
type CutType = (x: string) => string;
declare let cutZero: CutType;
type removeDashType = (x: string) => number;
declare let removeDash: removeDashType;
declare let 콜백함수: (x: string, cutZero: CutType, removeDash: removeDashType) => number;
