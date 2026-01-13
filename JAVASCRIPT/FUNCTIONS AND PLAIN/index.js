// ! FUNCTIONS
// ? PASSING OBJECT AS ARGUEMENTS - OBJECTS CAN BE PASSED AS ARGUEMENTS
    let newobj = {
        name: "Punit",
        age: 19
    }
    function getobject(anyobject){
        console.log(anyobject.name);
        console.log(anyobject.age);
    }
    // getobject(newobj);

// ? MAKING OBJECT INSIDE FUNCTION CALL - POSSIBLE
    // getobject({
    //     name: "Yuvraj",
    //     age: 20
    // });

// ? PASSING ARRAY AS ARGUMENTS - POSSIBLE 
    // let myarray = [100,200,400,500];
    // function getarray(anyarray){
    //     return anyarray;
    // }
    // console.log(getarray(myarray));

// ? MAKING ARRAY INSIDE Function CALL - POSSIBLE
    // console.log(getarray([
    //     100,900,300
    // ]));

// * ACCESING FUNCTION WITHOUT USING (), WILL RETURN ITS OBJECTS.
    function sum(){
        return 10+5;
    }
    console.log(sum);

// ? CONSTRUCTOR FUNCTION - Constructor functions are used to create objects and are called using the new keyword. They are typically capitalized to distinguish them from regular functions. As it returns object it will return object with name and age keys.
    // function consttest (name,age){
    //     this.name = name;
    //     this.age = age;
    //     console.log(45);
    // } // IN DONO PROPERTIES KA OBJECT BANA KE RETURN KAREGA.
    // let newconstructor = new consttest("KIng", 33);
    // console.log(newconstructor);

// ? Default Parameters - You can define functions with default parameters that are used if no arguments are provided.
    // function greet(name = 'Guest') {
    //     return `Hello, ${name}!`;
    // }

    // console.log(greet());       // Output: Hello, Guest!
    // console.log(greet('Ivy')); // Output: Hello, Ivy!

// ? FUNCTIONS WITH REST PARAMETER -
    // function sum(...allsum){
    //     return allsum[0] + allsum[1];
    // }
    // console.log(sum(10,20,30));

// ! ADVANCE 
// ? GENERATOR FUNCTIONS - Is a special type of function that can be paused and resumed, allowing you to control the function's execution and manage asynchronous operations more effectively.
    // function* generatorfunction(){
    //     yield 11;
    //     yield 21;
    //     yield 33;
    // }
    // let get = generatorfunction();
    // console.log(get.next());
    
    // for (let x of get){
    //     console.log(x);
    // }

// WHY FUNCTIONS IS KNOWN AS FIRST CLASS CITIZEN IN JS.
// 1. IT CAN BE ASSIGNED TO A VARIABLE.
    let greet = function(){
        console.log("Namste");
    }
    // greet();

// 2. WE CAN PASS A FUNCTION AS A ARGUMENT.
        function greetme(greet, name){
            console.log("Hello", name);
            greet();
        }
        // greetme(greet, "Punit");
4
// 3. FUNCTION CAN BE RETURN INSIDE ANOTHER FUNCTION.
    function solve(num){
        console.log("I am solve");
        return function fun(){
            console.log("RETURN FUNCTION");
        }
    }
    // let returnfunction = solve();
    // returnfunction();

// 4. FUNCTION CAN BE USED IN DS [ARRAY OF FUNCTIONS].
// 1.
    // let functionarray = [greet, solve, greetme];
    // let arrayans =  functionarray[1];
    // arrayans();
// 2. 
    // let arrayfunction = [
    //     function a(a,b){
    //         return a+b;
    //     },
    //     function b(a,b){
    //         return a-b;
    //     }, 
    //     function c(a,b){
    //         return a*b;
    //     }
    // ]
    // let ansarray = arrayfunction[2];
    // let finalans = ansarray(10,2);
    // console.log(finalans);

// 5. FUNCTION CAN BE PASSED AS PROPERTY [IN OBJECTS].
    // let object1 = {
    //     Agefunction: function(age){
    //         console.log("YOUR AGE IS - ",age);
    //     }
    // }
    // object1.Agefunction(19);


