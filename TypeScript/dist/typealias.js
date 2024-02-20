"use strict";
var 동물 = "kim";
var 동물obj = { name: "kim", age: 20 };
var 여친 = {
    name: "엠버",
};
var position = { x: 10, y: 20 };
var 함수2 = function (a) {
    console.log(a);
    return 10;
};
var 회원정보 = {
    name: "kim",
    age: 30,
    plusOne: function (a) {
        return a + 1;
    },
    changeName: function () { },
};
회원정보.plusOne(10);
var cutZero = function (x) {
    var result = x.replace(/^0+/, "");
    return result;
};
var removeDash = function (x) {
    var result = x.replace(/-/g, "");
    return parseFloat(result);
};
var 콜백함수 = function (x, cutZero, removeDash) {
    console.log(removeDash(cutZero(x)));
    return removeDash(cutZero(x));
};
콜백함수("010-1111-2222", cutZero, removeDash);
