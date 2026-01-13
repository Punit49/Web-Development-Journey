// FUNCTION HOISTING - working in normal function
// printname("punit")
// function printname(name){
//     console.log(name);
// }

// FUNCTION EXPRESSION
// variable();
// const variable = function (){
//     console.log("hello");
// }

// ARROW FUNCTION- 
// temo("punit")
// var temo = (name) => {
//     console.log(name);
// }

// This will cause a TypeError
// sayHello(); // TypeError: sayHello is not a function

// var sayHello = () => {
//     console.log('Hello, world!');
// };

// console.log(ck);
// let ck = 45;

// HOISTING IN CLASS
// var object1 = new myclass();
// var myclass = class hello {

// };


// FUNCTION CALL STACK
// a();
// function a(){
//     console.log("i am A");
//     b();
//     console.log("Coming from b");
// }
// function b(){
//     console.log("i am B");
//     c();
//     console.log("Coming from C");
// }
// function c(){
//     console.log("i am C");
//     d();
//     console.log("Coming from D");
    
// }
// function d(){
//     console.log("i am D");
//     console.log("going to C");
// }

