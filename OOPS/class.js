/* ============================================================
   Class - It is a template or blueprint for creating objects
   with similar properties and methods.

   Constructor method in class - it is a special method on
   class, which is called automatically when creating object
   using new keyword, used to initialize properties and
   methods of class.

   Static keyword - It is used to define properties and
   methods that belong to class itself rather than object
   instance, or sharing same property with all instances.
   ============================================================
*/

// ------------------------------------------------------------

class Fruits {
    constructor(name, color){
        this.name = name;
        this.color = color;
    }

    getFruit(){
        console.log(`I am ${this.color} ${this.name}`);
    }
}

// ------------------------------------------------------------

const f1 = new Fruits("Apple", "Red");
const f2 = new Fruits("Banana", "Yellow");

console.log(f1);
console.log(f2);

f1.getFruit();
f2.getFruit();

console.log(f1.getFruit === f2.getFruit); // true

// ------------------------------------------------------------
// * Private members of class using #
// ------------------------------------------------------------

class User {
    #name;

    constructor(name, age){
        this.#name = name;
        this.age = age;
    }

    setter(name){
        this.#name = name;
    }

    getter(){
        console.log(this.#name, this.age);
    }
}

// ------------------------------------------------------------

const u1 = new User("Punit", 10);

console.log(u1);

u1.setter("Steve");
u1.getter();

// u1.#name;
// '#name' is not accessible outside class 'User'
// because it has private identifier

// ------------------------------------------------------------
// ? Named class expression
// ------------------------------------------------------------

const class1 = class c1 {
    name = "Punit";
    age = 20;
};

const a = new class1();
console.log(a);

// ------------------------------------------------------------
// ? Unnamed class expression
// ------------------------------------------------------------

const class2 = class {
    name = "Elon";
    age = 45;
};

const b = new class2();
console.log(b);
