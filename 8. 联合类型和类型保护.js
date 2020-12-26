"use strict";
//类型断言
function judggeWho(animal) {
    if (animal.anJiao) {
        animal.skill();
    }
    else {
        animal.say();
    }
}
// in 断言
function jubdasd(animal) {
    if ('skill' in animal) {
        animal.skill();
    }
    else {
        animal.say();
    }
}
//typeof
function add(furst, seccess) {
    if (typeof furst === 'string' || typeof seccess === 'string') {
        return "" + furst + seccess;
    }
    return furst + seccess;
}
var NumberObject = /** @class */ (function () {
    function NumberObject() {
    }
    return NumberObject;
}());
// instanceof 只能在类上使用
function addObject(firsth, second) {
    if (firsth instanceof NumberObject && second instanceof NumberObject) {
        return firsth.count + second.count;
    }
    return 0;
}
