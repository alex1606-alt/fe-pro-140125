
class Person {
    constructor(name,age){
        this._name = name;
        this._age = age;
    }
    sayHello(){
        console.log(`вітаю ${this._name}`);
    }
};
let emp = new Person("Dohn",30);
console.log(emp);
emp.sayHello();

let emp2 = new Person("vita",22);
console.log(emp2);
emp2.sayHello();





