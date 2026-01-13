
// ? DEFAULT PARAMETERES -
// * NORMAL FUNCTION - [WORKING]
    // function tempo(name = "King", age){
    //     console.log("My name = ", name, " Age is = ", age);
    // }
    // tempo("Punit");

// * WHEN PARAMETER IS DEPEND ON OTHER PARAMETER - [WORKING]
    // function tempo(fname, lastn = fname.toUpperCase()){
    //     console.log("My name = ", fname, " LastName is = ", lastn);
    // }
    // tempo("Punit");

// * WHEN AN OBJECT IS PASSED AS DEFUALT PARAMETER - [WORKING]
    // let object1 = {
    //     Name: "Singh"
    // }

    // function tempo2(Name1 = object1.Name){
    //     console.log("My name = ",Name1);
    // }
    // tempo2();

// * WHEN AN FUNCTION IS PASSED AS DEFUALT PARAMETER - [WORKING]
    // * 1. Making function while passing as defualt parameter.
    // function tempo8(Name1 = function () {return "hello";}){
    //     console.log("My name = ",Name1());
    // }
    // tempo8();

    // * 2. Making function Before passing as defualt parameter.
    // function greetme(){
    //     return "Hello Punit";
    // }

    // function tempo9(Name1 = greetme()){
    //     console.log(Name1);
    // }
    // tempo9();

// * WHEN AN ARAAY IS PASSED AS DEFUALT PARAMETER - [WORKING]
    // function tempo3(Name1 = ["Punit", "Sahu"]){
    //     console.log("My name = ",Name1);
    // }
    // tempo3();

// * WHEN NULL IS PASSED AS ARGUEMENT AND DEFUALT PARAMETER - IT WILL PRINT NULL 
    // * null
    // function tempo4(Name1 = "Bobby"){
    //     console.log("My name = ",Name1);
    // }
    // tempo4(null);

    // * null
    // function tempo5(Name1 = null){
    //     console.log("My name = ",Name1);
    // }
    // tempo5();

// * WHEN UNDEFINED IS PASSED AS ARGUEMENT AND DEFUALT PARAMETER - IT WILL NOT ASSING UNDEFINED, WILL ASSIGN DEFAULT VALUE.
    // * BOBBY
    // function tempo6(Name1 = "Bobby"){
    //     console.log("My name = ",Name1);
    // }
    // tempo6(undefined);

    // * undefined
    // function tempo7(Name1 = undefined){
    //     console.log("My name = ",Name1);
    // }
    // tempo7();

// * WHEN AN CLASS IS PASSED AS DEFUALT PARAMETER - [WORKING]
    // class Animal {
    //     constructor(name){
    //         this.name = name;
    //     }
    //     greetus(){
    //         return `Hello, ${this.name}`; 
    //     }
    // }

    // function CallaAnimal(name, Dclass = Animal){
    //     const var1 = new Dclass(name);
    //     console.log(var1.greetus());
    // }

    // CallaAnimal("Punit"); // we can also put class directly while calling function



