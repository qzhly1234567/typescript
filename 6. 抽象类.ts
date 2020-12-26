abstract class Girl {
    abstract skill()
}

class Waiter extends Girl{
    skill() {
        console.log('大爷 请喝水')
    }

}

class BaseTeacer extends  Girl{
    skill() {
        console.log('ll')
    }

}

class SeniorTeacher extends Girl{
    skill() {
        console.log('aaaa')
    }
}

const waiter = new Waiter()

console.log(waiter.skill())