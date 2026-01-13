// ? JavaScript is a prototype-based, automatically adds a prototype property to functions and objects upon creation. This prototype object allows attaching methods and properties, facilitating inheritance for all objects created from the function.
// ? Only Constructor Functions Have .prototype and .prototype property is specifically designed for use with the new keyword.

// ? A prototype is a property on a constructor function that defines the properties and methods shared by all instances created from it. It acts as a blueprint for objects created by that function. 

// ? The .__proto__ is a property on an object instance that points to the prototype object from which it was created. It's the actual link that forms the prototype chain for inheritance.

// ? Object Prototype - JS objects have a special property called prototype, Reference To an Object.
// * It is created automatically, it containes some inbuilt properties and functions.

// ? Function Prototype - arrow functions DON'T have .prototype
    function parent(name, age){
        this.name = name;
        this.age = age;
    }

    const Child = new parent('Punit', 19);
    // console.dir(Child);
    
// ? Setting Function In prototype - 
    function person(namer) {
        this.namer = namer;
    }

    person.prototype.sayHello = function() {
        return `Hello My name is ${this.namer}`;
    }

    let person1 = new person("Punit");
    // console.log(person1.sayHello());

    let person2 = new person("Ram");
    // console.log(person2.sayHello());

    // * Instances Doesn't have prototype directly, But Constructor function have 
        // console.dir(parent.prototype); 
        // console.dir(Child.prototype);   

    // * When you create an object using a constructor function (like Person), the new object’s prototype (__proto__) points to the constructor’s prototype property.
        // console.log('person', person);
        // console.log(person1);
        // console.log(person1.__proto__ === person.prototype);

    // * Constructor Property Points Back to Same main function -  
        // console.log(parent.prototype.constructor === parent);        

    // * Setting Prototype Using __proto. - to access properties of parent function, create a instance, coz parent is a constructor.
        // To access properties and methods of a function assign its prototype to child function
        // Way 1 - create instance using parent function.

        // Way 2 - create method in parent entity using .prototype -
            parent.prototype.Dosome = () => {
                console.log("Dosome");
            };

            function Hello(){
                console.log("Hello");
            }

            // Assigning prototype to hello function -  
            Hello.__proto__ = parent.prototype;

            // console.log(Hello.Dosome());
        
// ? Object Protoype - 
    let MyObject = {
        name: "Punit",
        Age: 19, 
        callme (){
            console.log("Myobject");
        }
    };  

    // ! NOTE - __proto__ is a property available on all objects in JavaScript but prototype property is only available on functions.
    // console.log(parent.prototype.__proto__);
    // console.log(parent.prototype);
    // console.log(MyObject.prototype);
    // console.log(MyObject.__proto__);

// ? __Proto__ = An internal property of an object that points to the prototype object [its constructor function] that the object was created from. 
// ? __proto__ Can be used to set prototype to an Object. 

    // * If parent object and child object have same named property or method then child's one will have higher preference.
        // For Example - 
        let Newobject = {
            fullname: "Punit Sahu",
            callme() {
                console.log("Newobject");
            }
        }
        // * Accesing Prototype parents only for functions created using new keyword - but it has proto
        // console.log(MyObject.prototype);
        // console.log(MyObject.__proto__);
        
        // * Setting myobject as prototype of new object -
        Newobject.__proto__ = MyObject;

        // Newobject.callme(); // "Newobject"
        // console.log(Newobject.__proto__); // "MyObject"
        
// ? Prototype Chain - Is a mechanism that allows objects to inherit properties and methods from other objects, via its prototype.
        
// ? Adding function to Object.prototype and accessing it in different data structures.
Object.prototype.readAloud = function (){
    console.log("Punit kumar sahu");
};

let yourObj = {
    name: "Ram",
    age: 22
}

let yourArr = ["King", "Queen"];

function yourFun(){
    console.log(18);
}

let yourStr = "Punit";

// yourObj.readAloud();
// yourArr.readAloud();
// yourFun.readAloud();
// yourStr.readAloud();

// ? Array prototype - 
let arr1 = [10, 20, 35, 45];
let arr2 = [1, 2, 3, 4, 5];

Array.prototype.sum = function(){
    let sum = 0;
    for(let i = 0; i < this.length; i++){
        sum += this[i];
    }
    return sum;
}

// console.log(arr1.sum());

// ? Protoype inheritance - 
function Animal(name){
    this.name = name;
}

Animal.prototype.speak = function() {
    console.log(this.name, "makes a noise");
}

function Dog(name){
    Animal.call(this, name);
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.speak = function () {
    console.log(this.name, "Barks");
}

// const d1 = new Dog("Rex");
// d1.speak();

// ? Way 1 - proto
let rabbit = {
    rabbitJumps: true
}

let animal = {
    animalEats: true
}

// rabbit.__proto__ = animal;
// console.log(rabbit.rabbitJumps)
// console.log(rabbit.animalEats);

// ? Way - 2
// const val = Object.setPrototypeOf(rabbit, animal);

// console.log(rabbit.rabbitJumps);
// console.log(rabbit.animalEats);

// ? Challenge 
String.prototype.trueLength = function() {
    console.log(this.trim().length);
}

let str = "Punit    ";
// str.trueLength();

// "Hitesh     ".trueLength();

// ? Protypel Inheritance - 
let Student = {
    rollNo: 21
}

let Teacher = {
    name: "mehta", 
    // __proto__: Student // Way 1
}

// * Way 2
// Teacher.__proto__ = Student

// * Way 3
const newObj = Object.setPrototypeOf(Teacher, Student);

// console.log(Teacher.rollNo);
// console.log(newObj);
