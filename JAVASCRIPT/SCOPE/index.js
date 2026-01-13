// ! GLOBAL SCOPE - VARIABLE DECLARED IN GLOBAL SCOPE CAN BE ACCESIBLE ANYWHERE IN THE CODE.
    // * VAR, LET, CONST - 
        const name = "Punit";
        // console.log(name);

        // {
        //     console.log(name);
        // }

        // if(true){
        //     console.log(name);
        // }

        // for (let i = 1; i==1; i++){
        //     console.log(name);
        // }

        // function name1(){
        //     console.log(name);
        // }
        // name1();

// ! FUNCTION SCOPE - Variables defined inside a function are not accessible from outside the function and variables declared with var, let and const are quite similar when declared inside a function.
    // * VARIABLE IN FUNCTION - NOT DEFINED
    // function temp (){
    //     var ch= 10;
    //     let cl = 20;
    //     const cv = 30;
    // }    
    // console.log(c1);

    // * TRYING TO ACCESS OBJECT FROM OUSTIDE THE FUNCTION 
    // function name1 (){
    //     let obj1 = {
    //         name : "Ounit"
    //     }
    // }
    // console.log(obj1);

// ! BLOCK SCOPE 
    // *  Variables declared with the var keyword cannot have block scope and they can be declared inside a { } block and can be accessed from outside the block.
        // * var - working
        // {
        //     var variable10 = 20;
        // }
        // console.log(variable10);

        //  * let - variable11 is not defined
        // {
        //     let variable11 = 20;
        // }
        // console.log(variable11);

        // * const - variable12 is not defined
        // {
        //     const variable12 = 30;
        // }
        // console.log(variable12);

        // ! TRYING TO ACCESS THINGS FROM BLOCK SCOPE - USE VAR TO STORE OBJECTS, AND USE THEM ANYWHERE.
        // {
        //     let obj2 = {
        //         name: "punit"
        //     }
        //     var arr = [10];
        // }
        // console.log(arr);
        // console.log(obj2);

// ? The variable is declared inside the function and can only be accessed inside that block or nested block is called lexical scope.
// function abcd(){
//     let var1 = "Punit";

//     {
//         console.log(var1);
//     }
// }

// abcd();