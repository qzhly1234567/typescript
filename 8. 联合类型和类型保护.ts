interface Waiter {
    anJiao: boolean
    say: () => {}
}

interface Teacher {
    anJiao: boolean
    skill: () => {}
}

//类型断言
function judggeWho(animal: Waiter | Teacher) {

    if (animal.anJiao) {
        (animal as Teacher).skill()
    } else {
        (animal as Waiter).say()
    }
}

// in 断言
function jubdasd(animal: Waiter | Teacher) {
    if ('skill' in animal) {
        animal.skill()
    } else {
        animal.say()
    }
}

//typeof
function add(furst: string | number, seccess: string | number) {
    if (typeof furst === 'string' || typeof seccess === 'string') {
        return `${furst}${seccess}`
    }
    return furst + seccess
}

class NumberObject {

    count: number


}
// instanceof 只能在类上使用
function addObject(firsth: object | NumberObject, second: object | NumberObject) {
 if (firsth instanceof NumberObject && second instanceof NumberObject) {
     return firsth.count + second.count
 }
    return 0
}
