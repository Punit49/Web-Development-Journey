// ? prototype - 
let arr1 = [1, 2, 3, 4];
arr1.__proto__.sayHello = () => {
    console.log("Hello, i am arr");
}

let arr2 = ["a", "b", "c"];
// arr2.sayHello(); // accesible

let sum = (a, b) => {a + b};
// console.log(typeof(sum)); // function

// * Importance of new keyword - 
function createUser(username, score){
    this.username = username;
    this.price = score;
}

createUser.prototype.increament = function(){
    price++;
}

createUser.prototype.printMe = function(){
    console.log(this.price);
}

const chai = new createUser("chai", 25); // after new
const tea = new createUser("tea", 250);

// * it will not work, coz we haven't used new keyword that time -
// console.log(chai.printMe()); 

// chai.printMe();
// tea.printMe();

// console.log(createUser.prototype);

// * String prototype 
String.prototype.trueLength = function() {
    let trimmed = this.trim();
    return `true Length of this string is: ${trimmed.length}`;
}

console.log("Punit    ".trueLength());

// * Object prototype -
let heroPowers = {
    thor: "hammer",
    spiderman: "web",

    getSpiderPow: function(){
        console.log(this.spiderman);
    }
}

heroPowers.getSpiderPow();

// * Object Prototype inheritance -
Object.prototype.punit = () => {
    console.log("Punit is present in every object");
}

heroPowers.punit();
arr1.punit();
"hello".punit();
(1234).punit();
true.punit();
NaN.punit();

// undefined.punit();
// null.punit();

// * creating length property for every object using prototype - 
Object.prototype.length = function(){
    let count = 0;
    for (const key of Object.keys(this)) {
        count++;
    }
    return count;
}

console.log(heroPowers.length());

// * Array prototype - method and properties doesn't goes upwards.
Array.prototype.arrProp = function() {
    console.log("I am defined on Array prototype");
}

arr1.arrProp()

// 
// * Instances Doesn't have prototype directly, But Constructor function have 
    console.dir(parent.prototype); 
    console.dir(Child.prototype); 