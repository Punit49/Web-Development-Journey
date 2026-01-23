/* ============================================================
   Factory functions - It is a function which creates and
   returns object without using new keyword or classes.
   ============================================================
*/

function PersonMaker(name, age){
    const obj = {
        name,
        age,
        talk(){
            console.log("Hey, i am", this.name);
        }
    };

    return obj;
}

// ------------------------------------------------------------

const p1 = PersonMaker("Punit", 21);
const p2 = PersonMaker("Steve", 25);

// p1.talk(); // Hey! i am Punit

/* ============================================================
   limitation - High memory consumption -
   Each object created using factory function, get its own copy
   for all methods and properties which leads to higher memory
   consumption, that's why we use new keyword.

   Object returned from factory function does not link to
   constructor function's prototype, and it is another reason
   why we need new keyword.
   ============================================================
*/

console.log(p1.talk === p2.talk);
// true → undefined === undefined

// ------------------------------------------------------------
// * Assigning function on constructor's prototype.
// ------------------------------------------------------------

PersonMaker.prototype.talk = function(){
    console.log("Hey, i am", this.name);
};

console.log(p1.talk === p2.talk);
// true → undefined === undefined

// Because prototype lookup goes like this:
// p1 → Object.prototype → null
// Object.prototype does not have talk function, so it returns undefined.

console.log(p1.__proto__ === Object.prototype);        // true
console.log(p1.__proto__ === PersonMaker.prototype);  // false
