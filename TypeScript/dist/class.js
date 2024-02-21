"use strict";
var Info = (function () {
    function Info(a) {
        this.name = a;
    }
    Info.prototype.함수 = function (a) {
        console.log("안녕" + a);
    };
    return Info;
}());
var 사람1 = new Info("kim");
var 사람2 = new Info("park");
var Car = (function () {
    function Car(a, b) {
        this.model = a;
        this.price = b;
    }
    Car.prototype.tax = function () {
        console.log(this.price / 10);
        return this.price / 10;
    };
    return Car;
}());
var car1 = new Car("소나타", 3000);
var Word = (function () {
    function Word() {
        var param = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            param[_i] = arguments[_i];
        }
        var 숫자들 = [];
        var 문자들 = [];
        param.forEach(function (i) {
            if (typeof i === "string") {
                문자들.push(i);
            }
            else {
                숫자들.push(i);
            }
        });
        this.num = 숫자들;
        this.str = 문자들;
    }
    return Word;
}());
var obj = new Word("kim", 3, 5, "park");
