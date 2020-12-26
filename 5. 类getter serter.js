"use strict";
// class XiaoJieJie {
//     constructor(private _age: number) {
//
//     }
//
//     get age() {
//         return this._age
//     }
//
//     set age(age: number) {
//         this._age = age
//     }
// }
//
// const daJiao = new XiaoJieJie(28)
// daJiao.age  = 25
//
// console.log(daJiao.age)
//
var Girl = /** @class */ (function () {
    function Girl() {
    }
    Girl.sayLove = function () {
        return 'I love you';
    };
    return Girl;
}());
var girl = new Girl();
console.log(Girl.sayLove());
