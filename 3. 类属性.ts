class Person {

    public name: string;    //g公共的属性
    private sax = 1;        //私有的属性
    protected age = 18;     //受保护的属性 可以继承
    public readonly _smallName:string//只读属性 只能访问不可修改

    public sayHello() {
        return this.name
    }

    public saySax() {
        return this.sax
    }

}

class Teacher extends Person {

    public sayBay() {
        this.age
    }
}

const person = new Person()

person.name = 'liuyong'

console.log(person.sayHello())
console.log(person.saySax())