
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







class Student extends Person{
    constructor(name,age,studenit){
        super(name,age)
        this._studenit = studenit;
        
    };
     study(){if(this._studenit == "yes"){
        console.log(`зараховано ${this._name}`)}
        else{console.log(`відраховано ${this._name}`)}
     }

};
let x = new Student("KOLIA",18,"no");
console.log(x);
x.study();






function count(){
let y = prompt("скільки вам років?");
let currentYear = new Date().getFullYear();
let z = currentYear-y;
alert(`${z} рік`);

};
count();







const per = {
    name:"john",
    age: 25,
    occupation:"developer"
};
for (let key in per) {
    console.log(per[key]);
};






const students = [
    {name:"alice",
     age:20,
     grade:"A"
    },
    {name:"bob",
     age:22,
     grade:"B"

    },
    {
        name:"charli",
        age:21,
        grade:"C"
    }
];
for (let student of students) {  
    for (let key in student) {  
        console.log(student[key]); 
    }
};















