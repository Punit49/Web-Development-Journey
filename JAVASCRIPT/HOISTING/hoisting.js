// ! HOISTING - Hoisting in JavaScript is a behavior where declarations of variables, functions, and classes are conceptually moved to the top of their current scope during the compilation phase, before the code is executed. This allows these entities to be referenced before their actual declaration in the code. 
// ? 1. VARIABLE HOISTING -
    // * 1. IN VAR - ONLY DECLARATION IS HOISTED, SO VARIABLE IS DECLARED BUT NOT INTIALIZED [UNDEFINED].
    // ? Here declartion is hoisted but intializations not.
        // console.log(ch);
        // var ch = 20;
        // console.log(ch);

    // ! NOTE - Variables declared with let and const are hoisted but are not initialized. This creates a "temporal dead zone" (TDZ) from the start of the block until the declaration is encountered. 
            // !- Accessing the variable in the TDZ results in a ReferenceError.
    // * 2. LET - NOT WORK, REFERENCE ERROR [CANNOT ACCESS BEFORE INTIALIZATION]. let is hoisted but not initialized, so you can't use it before it's declared.
        // console.log(variable1); // in tdz
        // let variable1 = "King";
        // console.log(variable1);

    // * 3. CONST - NOT WORK, REFERENCE ERROR [CANNOT ACCESS BEFORE INTIALIZATION].
        // console.log(variable2);
        // const variable2 = "Queen";
        // console.log(variable2);

// ? 2. FUNCTION HOISTING - 
    // * 1. NORMAL FUNCTION - HOISITING WILL WORK.
        // funtemp();
        // function funtemp(){
        //     console.log("Hello");
        // }

    // * 2. FUNCTION EXPRESSIONS - NOT WORK, REFERENCE ERROR [CANNOT ACCESS BEFORE INTIALIZATION].
        // variable3();
        // let variable3 = function (){
        //     console.log("Hello");
        // }
        
    // * 3. ARROW FUNCTION - NOT WORK, REFERENCE ERROR [CANNOT ACCESS BEFORE INTIALIZATION].
        // variable4();
        // var variable4 = () => {
        //     console.log("Hello");
        // }

    // * 4. FUNCTION CONSTRUCTOR - HOISTING WORKS 
        // let myfun = new newfunction("Punit", 20);
        // console.log(myfun);
        // function newfunction(name, age){
        //     this.name = name;
        //     this.age = age;
        // }

// ? CLASS HOISTING - NOT WORK
        // console.log(human);
        // class human {

        // }

// ? Accessing Variables Declared Later in Loops
// console.log(i);
// for(var i = 1; i <= 5; i++){
//     setTimeout(function() {
//         console.log(i); // 3, 3, 3
//     }, 100);
// }
// console.log(i);