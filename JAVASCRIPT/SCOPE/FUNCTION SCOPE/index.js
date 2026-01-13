// ! FUNCTION SCOPE.
// * THINGS DECLARED IN MAIN OUTSIDE CAN BE ACCECIBLE ANYWHERE INSIDE FUNCTION.
// * INSIDE FUNCTION CAN ACCESS OUTSIDE FUNCTION'S THINGS COZ, FOR INSIDE FUNCTION OUTSIDE FUNCTION IS LIKE GLOBAL SCOPE.
// * BUT INSIDE FUNCTION THINGS IS NOT ACCECIBLE IN OUTSIDE FUNCTION.
    // function outside (){
    //     const user = "Punit";

    //     function inside(){
    //         const age = 19;
    //         console.log(user);
    //     }

    //     inside();
    //     console.log(age);
    // }
    // outside();

    // * SAME IN IF ELSE 
    // if (1){
    //     const var1 = 45;
    //     if(1){
    //         const var2 = 54;
    //         console.log(var1);
    //     }
    //     console.log(var2);
    // }
    // console.log(var1);