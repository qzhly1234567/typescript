class Person {
    constructor(public name: string) {
    }
}


/**
 * 子类只要使用了 constructor 就必须使用super
 */
class Teacher extends Person {

    constructor(public age: number) {
        super('jj')
    }

}


const person = new Teacher(18)

console.log(person.name)
console.log(person.age)