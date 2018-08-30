
class Person {
    constructor(name = "Anonymous", age = 0, location) {
        this.name = name;
        this.age = age;
        this.location = location;
    }

    greeting(){
        return `Hi! ${this.name}`;
    }

    description(){
        return `${this.name} is ${this.age} years old`;
    }
}

class Student extends Person{
    constructor(name, age, location, major){
        super(name, age, location);
        this.major = major;
    }

    hasMajor(){
        return !!this.major;
    }

    description(){
        let basicDesc = super.description();

        if (this.hasMajor()) {
            basicDesc = basicDesc + `, major in ${this.major} field.`;
        }
        return basicDesc;
    }
}

let me = new Person("Brady", 31, "Sunnyvale");
console.log(me.greeting());
console.log(me.description());

let another = new Person();
console.log(another.greeting());
console.log(another.description());

let student = new Student("Lyla", 27, "Fremont", "UI/UX");
console.log(student);
console.log(student.greeting());
console.log(student.description());