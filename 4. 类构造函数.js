var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    return Person;
}());
/**
 * 子类只要使用了 constructor 就必须使用super
 */
var Teacher = /** @class */ (function (_super) {
    __extends(Teacher, _super);
    function Teacher(age) {
        var _this = _super.call(this, 'jj') || this;
        _this.age = age;
        return _this;
    }
    return Teacher;
}(Person));
var person = new Teacher(18);
console.log(person.name);
console.log(person.age);
