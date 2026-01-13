// ! VARIABLES - HOLDS REFERENCE TO THE DATA, NOT ACTUALLY STORES THE DATA, containers for storing data values
// * VAR - Declares variables with function or global scope and allows re-declaration and updates within the same scope.

// VAR GLOBAL SCOPE
    // {
    //     var ab = 20;
    //     console.log(ab);
    // }
    // console.log(ab);

// VAR FUNCTION SCOPE
    // var ch = 15;
    // function temp (){
    //     var ab = 10;
    //     console.log(ch);
    // }
    // temp();
    // console.log(ab); /* ab is not defined */

// VAR REDECLARATION AND REASSIGNMENT - Can be re-declared and updated
    // var dg = 29;
    // var dg = 39;
    // dg = 40;
    // console.log(dg);
    
// * LET - Declares variables with block scope, allowing updates but not re-declaration within the same block.
    // BLOCK SCOPE
    // {
    //     let d = 35;
    //     d = 45;
    //     console.log(d);
    // }
    
    // CAN'T ACCESS OUTSIDE BLOCK
    // console.log(d); 

    // REDECLARING OUTSIDE BLOCK
    // let d = 50;
    // console.log(d);
    
    // REDECLARING INSIDE ANOTHOR BLOCK WILL NOT CHANGE OUTSIDE'S BLOCK VALUE
    // let c = 10;
    // console.log(c);
    // {
    //     let c = 20;
    //     console.log(c);
    // }
    // console.log(c);

    // * updating in another block
    // let hg = "pp";
    // console.log(hg)
    // {
    //     hg = "op"
    //     console.log(hg)
    // } 
    // console.log(hg);

// * CONST -  Block scope, Cannot be re-declared or updated after being assigned. You must initialize a const variable when you declare it.
// IT CAN'T REDECLARED AND REASSIGNED IN SAME BLOCK
    const f = 90;
    // f = 88;
    // const f = 11;
    // console.log(f);

    // REDECLARING IN ANOTHER BLOCK - Cannot be reassigned in any block. but can be redeclared in other block.
    // {
    //     const f = 45;
    //     console.log(f);
    // }
    // console.log(f);
    
    // MUST DECLARED
    // const z;

// ! NOTES 
// ? DEFAULT VALUES 
    // * Const will give error 
    // const c;
    // console.log(c);

    // * Var and let = undefined
    // var ch;
    // console.log(ch);

// ? Global Variables in HTML - The Global variables defined with the var keyword are part of the window object. The window object is the global scope in HTML.

// In modern JavaScript (let and const), variables are block-scoped and do not become properties of the global object (window in browsers).