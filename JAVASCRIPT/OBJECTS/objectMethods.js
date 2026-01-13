// ! METHODS OF AN OBJECT - 
// ? 1. hasownproperty - method is used to check whether an object has a specific property as its own (not inherited) property. This method is defined on the Object.prototype, 
// ? & it helps distinguish between properties that are defined directly on object & those that are inherited from object's prototype chain.
        // console.log(object1.hasOwnProperty("name"));

// ? 2. Object.entries() - The Object.entries() method is used to return an array of the object’s own enumerable string-keyed property pairs.
// ? 3. Object.keys() - object.keys() Method returns an array of keys of the object.
// ? 3. Object.values() - Returns array of values in object.
// ? 4. Object.freeze() - is used to make an object immutable — meaning you can't add, remove, or change properties of the object after freezing it.
// ? 5. Object.seal() - is used to prevent new properties from being added to an object, but allows existing properties to be modified. It does not make the object immutable like Object.freeze().

let object1 = {
    name: "Punit",
    age: 20
};

// Object.freeze(object1);
Object.seal(object1);
object1.name = "Sahu";
object1.rollNo = 68;

console.log(object1.name);
console.log(object1);

// object1
// console.log(object1.name);
