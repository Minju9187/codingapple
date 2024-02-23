declare let 제목: Element | null;
declare let 링크: NodeListOf<Element>;
declare let 버튼: Element | null;
declare let 이미지: Element | null;
declare class Square {
    width: number;
    height: number;
    color: string;
    constructor(width: number, height: number, color: string);
    draw(): void;
}
declare let 네모: Square;
