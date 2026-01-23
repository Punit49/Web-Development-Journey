/* ============================================================
   Constructor function - It is used to create objects,
   they are called using new keyword and does not return
   anything explicitly, & starts with Capital letter.
   ============================================================
*/

function Person(name, age){
    this.name = name;
    this.age = age;
}

// ------------------------------------------------------------
// Methods are added on prototype to share them across instances
// ------------------------------------------------------------

Person.prototype.talk = function(){
    console.log("Hey, i am", this.name);
};

// It automatically links instance's internal [[Prototype]]
// to constructor function's prototype.
const p1 = new Person("Punit", 21);
const p2 = new Person("John", 24);

console.log(p1);

p1.talk();
p2.talk();

console.log(p1.talk === p2.talk);
// true - as we used prototype and new keyword here,
// so same function is referred for both instances.

// ------------------------------------------------------------
// ? new keyword - It is used to create new, unique instance
// of an object from a constructor function.
// ------------------------------------------------------------

// * Things new keyword performs -
// 1. Creates an empty object in memory.
// 2. Links new object instance's [[Prototype]] to
//    constructor function's prototype (inheritance).
// 3. Binds this (inside constructor function) to the
//    current instance of object being created, and
//    calls function with specified arguments.
// 4. Returns newly created and initialized object
//    (implicitly).
