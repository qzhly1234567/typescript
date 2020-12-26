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
var Lady = /** @class */ (function () {
    function Lady() {
        this.content = 'hi';
    }
    Lady.prototype.sayHello = function () {
        return this.content;
    };
    return Lady;
}());
var XiaoMing = /** @class */ (function (_super) {
    __extends(XiaoMing, _super);
    function XiaoMing() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    XiaoMing.prototype.sayHello = function () {
        return _super.prototype.sayHello.call(this) + 'aaaa';
    };
    XiaoMing.prototype.sayLove = function () {
        return 'i love you';
    };
    return XiaoMing;
}(Lady));
var goddess = new XiaoMing();
console.log(goddess.sayHello());
console.log(goddess.sayLove());
