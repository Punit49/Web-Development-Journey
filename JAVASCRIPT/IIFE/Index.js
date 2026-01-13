// ? IIFE - Immediately Invoked Function Expressions (IIFE) are JavaScript functions that are executed immediately after they are defined. They are typically used to create a local scope for variables to prevent them from polluting the global scope.


// * Example - 
    // (function (){
    //     console.log("Hello WOrld");
    // })();

    // (() => {
    //     console.log("Hello WOrld");
    // })();


let A = 10;
let a = 10;

(function () {
    console.log(A,a);
}) (A, a);