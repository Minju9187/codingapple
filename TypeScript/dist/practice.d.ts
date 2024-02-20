declare let 성: string;
declare let 이름: string[];
declare let 숫자이름: string | number;
type NumberOrString = string | number;
declare let 이름숫자: NumberOrString;
declare function 함수(x: number): number;
type Member = [number, boolean];
declare let john: Member;
type objMember = {
    name: string;
};
declare let jake: objMember;
type objMembers = {
    [key: string]: string;
};
declare class User {
    name: string;
    constructor(name: string);
}
