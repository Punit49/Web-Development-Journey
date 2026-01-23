/* ============================================================
   Inheritance - It lets one class (child) reuse properties
   and methods of another class (parent class).

   extends - It is used to create new child class from existing
   base class, so that child can access and reuse properties
   and methods of parent class.

   super - It is used to refer to parent class, like for calling
   parent class's constructor or accessing parent class
   properties or methods.
   ============================================================
*/

// ------------------------------------------------------------

class Person {
    constructor(name, age){
        console.log("Person constructor");
        this.name = name;
        this.age = age;
    }

    talk() {
        console.log(`Hi, I am ${this.name}`);
    }
}

// ------------------------------------------------------------

class Student extends Person {
    constructor(name, age, marks){
        console.log("Student constructor");
        super(name, age);
        this.marks = marks;
    }
}

// ------------------------------------------------------------

class Teacher extends Person {
    constructor(name, age, subject){
        super(name, age);
        this.subject = subject;
    }
}

// ------------------------------------------------------------

let Stu1 = new Student("Jonathan", 28, 100);
let T1 = new Teacher("Nancy", 26, "Chemistry");

console.log(Stu1);
console.log(T1);
