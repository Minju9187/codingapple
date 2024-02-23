"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var User1 = (function () {
    function User1(a) {
        this.familyName = "kim";
        this.name = this.familyName + a;
    }
    return User1;
}());
var 유저1 = new User("park");
var Person1 = (function () {
    function Person1(name) {
        this.name = name;
    }
    return Person1;
}());
var 자식 = new Person1("kim");
var User2 = (function () {
    function User2() {
        this.x = 10;
    }
    return User2;
}());
var NewUser = (function (_super) {
    __extends(NewUser, _super);
    function NewUser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NewUser.prototype.doThis = function () {
        this.x = 20;
    };
    return NewUser;
}(User2));
var User3 = (function () {
    function User3() {
        this.y = 20;
    }
    User3.x = 10;
    return User3;
}());
var 자식1 = new User3();
var User4 = (function () {
    function User4() {
        this.intro = User4.skill + " 전문가입니다";
    }
    User4.skill = "js";
    return User4;
}());
var 짱구 = new User4();
User4.skill = "ts";
var 짱구2 = new User4();
var User5 = (function () {
    function User5() {
    }
    User5.addOne = function (파라미터) {
        User5.x += 파라미터;
    };
    User5.printX = function () {
        console.log(User5.x);
    };
    User5.x = 10;
    User5.y = 20;
    return User5;
}());
User5.addOne(3);
User5.addOne(10);
User5.printX();
