// 构造函数
function Student(name) {
    this.name = name;
    this.hello = function () {
        log('name:' + this.name);
    };

    // 类级别的函数，同一个原型链
    Student.prototype.hello2 = function () {
        log('name:' + this.name);
    };
}

var stu01 = new Student("stu01");
var stu02 = new Student("stu02");
stu01.hello();
stu02.hello2();
log(stu01.constructor == Student.prototype.constructor);
log(stu01.hello == stu02.hello); // false
log(stu01.hello2 == stu02.hello2); //true


// 使用 class 定义类
class Student2 {
    constructor(params) {
        this.name = params.name;
    }

    hello() {
        log(this.name);
    }
}

var stu03 = new Student2({name: "stu03"});
var stu04 = new Student2({name: "stu04"});
stu03.hello();
stu04.hello();
log(stu03.hello2 == stu04.hello2); //true
log(stu03.constructor == Student2.prototype.constructor); //true


// 类的继承
class Animal {
    constructor(params) {
        this.name = params.name;
    }
}

class Cat extends Animal{
    constructor(props) {
        super(props);
    }

    say() {
        log('Hello:' + this.name);
    }

}

var cat1 = new Cat({name: "cat1"});
var cat2 = new Cat({name: "cat2"});
cat1.say();
cat2.say();

function log(obj) {
    console.log(obj)
}
