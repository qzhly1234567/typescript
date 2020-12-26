"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person() {
        this.sax = 1; //私有的属性
        this.age = 18; //受保护的属性 可以继承
    }
    Person.prototype.sayHello = function () {
        return this.name;
    };
    Person.prototype.saySax = function () {
        return this.sax;
    };
    return Person;
}());
var Teacher = /** @class */ (function (_super) {
    __extends(Teacher, _super);
    function Teacher() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Teacher.prototype.sayBay = function () {
        this.age;
    };
    return Teacher;
}(Person));
var person = new Person();
person.name = 'liuyong';
console.log(person.sayHello());
console.log(person.saySax());
