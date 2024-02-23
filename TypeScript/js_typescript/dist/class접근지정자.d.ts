declare class User1 {
    name: string;
    familyName: string;
    constructor(a: any);
}
declare let 유저1: User;
declare class Person1 {
    name: any;
    constructor(name: any);
}
declare let 자식: Person1;
declare class User2 {
    protected x: number;
}
declare class NewUser extends User2 {
    doThis(): void;
}
declare class User3 {
    static x: number;
    y: number;
}
declare let 자식1: User3;
declare class User4 {
    static skill: string;
    intro: string;
}
declare let 짱구: User4;
declare let 짱구2: User4;
declare class User5 {
    private static x;
    static y: number;
    static addOne(파라미터: number): void;
    static printX(): void;
}
