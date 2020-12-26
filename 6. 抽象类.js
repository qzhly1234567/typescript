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
var Girl = /** @class */ (function () {
    function Girl() {
    }
    return Girl;
}());
var Waiter = /** @class */ (function (_super) {
    __extends(Waiter, _super);
    function Waiter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Waiter.prototype.skill = function () {
        console.log('大爷 请喝水');
    };
    return Waiter;
}(Girl));
var BaseTeacer = /** @class */ (function (_super) {
    __extends(BaseTeacer, _super);
    function BaseTeacer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BaseTeacer.prototype.skill = function () {
        console.log('ll');
    };
    return BaseTeacer;
}(Girl));
var SeniorTeacher = /** @class */ (function (_super) {
    __extends(SeniorTeacher, _super);
    function SeniorTeacher() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SeniorTeacher.prototype.skill = function () {
        console.log('aaaa');
    };
    return SeniorTeacher;
}(Girl));
var waiter = new Waiter();
console.log(waiter.skill());
