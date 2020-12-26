class Lady {
    content = 'hi';

    sayHello() {
        return this.content;
    }
}

class XiaoMing extends Lady{

sayHello(): string {
    return super.sayHello()+'aaaa';
}

    sayLove(){
        return 'i love you'
    }
}

const goddess = new XiaoMing()

console.log(goddess.sayHello())
console.log(goddess.sayLove())