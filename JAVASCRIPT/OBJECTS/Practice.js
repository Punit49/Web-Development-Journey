// OBJECTS USING OBJECT LETERALS
    let obj = {
        name: "Punit Sahu",
        age: 19,
        Social: {
            Linkedin: {
                AC1: "Therealpunit",
                AC2: "DeveloperPunit"
            },
            Twitter: {
                AC3: "ItsPunit"
            }
        },
        p45: "King",
        myname: function (name){
            console.log(this.name);
            console.log(this); //imp
        }
    }

    // ? THIS KEYWORD
    // * WHEN USED WITHIN OBJECT METHOD THEN THIS POINTS TO THAT OBJECT
    // let obj2 = {
    //     name:"punit",
    //     age: 19,
    //     greet: function () {
    //         console.log(this); 
    //     }
    // }
    // obj2.greet();

    // let age = 22;

    // * WHEN THIS USED WITHIN FUNCTION THEN POINTS TO GLOABL OBJECT
    function verifyage(){
        console.log(this);
    }
    // verifyage();

    // this in arrow

    // console.log(obj.myname("King"));
    function temp(){
        console.log(this);
    }
    // temp();
    // console.log(this);
    // console.log(this);
    // console.log(obj.hasOwnProperty(`p45`));
    // console.log(obj.hasOwnProperty(`Social`));
    // hasOwnProperty can only give true if property is direct child of oject

    // let arr = [obj];
    // console.log(obj.p45);
    // console.log(arr);
    // console.log(typeof(obj));

    // EXPLICIT RETURN
    // let chai = (a,b) => {
    //     return a+b;
    // }

    // SHORTCUT FOR ARROW FUNCTIONS
    // IMPLECIT RETURN
    // let chai = (a,b) => a+b;
    // let chai = (a,b) => (a+b);

    // IF {} IS USED THEN RETURN LIKHNA HOGA, () ME NHI.

    // let chai = (a,b) => ({user: "Punit"});
    // let chai = (a,b) => {
    //     return {user: "Punit"}
    // };

    // console.log(chai(10,5));

    // LATER CREATING FUNCTION IN OBJECT
    // let myobject = {
    //     name:"punit",
    //     start: function (){
    //         console.log("STARTING");
    //     }
    // }
    // myobject.start();
    // myobject.stop = function () {
    //     console.log("STOPING");
    // }
    // myobject.stop();

// OBJECT ACCESSING
let myobject = {
    name:"punit",
    start: function (){
        console.log("STARTING");
    }
}
// myobject["start"]();
// console.log(myobject["name"]);

// let mynewobj = new myobject();


// CREATING OBJECT USING OBJECT CONSTRUCTOR FUNCTION
// function Universal (name, age, city){
//     this.Name = name,
//     this.Age = age,
//     this.City = city
//     // prtotype
// }

// var student1 = new Universal("punit", 19, "Udaipur");
// // student1.Nation = "India";
// console.log(student1);

// TRYING TO ADD 2 OBJECTS
    let obj1 = {
        Owner:"punit",
        umar: 15
    }

    // let obj = {
    //     lastname: "sahu",
        // Social: {
        //     Linkedin: {
        //         AC1: "Therealpunit",
        //         AC2: "DeveloperPunit"
        //     },
        //     Twitter: {
        //         AC3: "ItsPunit"
        //     }
        // },
    // }

    // ? using object assign - The Object.assign() method is used to copy the values and properties from one or more source objects to a target object.
    // let object5 = Object.assign({},obj, obj1);
    // console.log(object5);
    // console.log(object5 === obj);

    // ? USING SPREAD OPERTOR - The Spread operator’s primary use is to “spread” elements from an iterable (like an array) into individual elements. 
    // let object5 = {...obj, ...obj1};
    // console.log(object5);

    // OUT OF SUBJECT
    // HOW TO ACESS OBJECTS IN ARRAY WHEN DATA CAME FROM DATABASE
    // const user = [
    //     {
    //         ID: 121,
    //         EMAIL:"ABC"
    //     },
    //     {
    //         ID: 122,
    //         EMAIL:"XYZ"
    //     }
    // ]
    // console.log(user[1].EMAIL);

    // DELETING PROPERTY
    // delete coder.age;
    // console.log(coder);

    // ? Object.create() = Object.create is especially useful for creating objects that inherit directly from other objects, providing a way to set up simple inheritance without needing to define constructor functions. This approach is sometimes called prototypal inheritance.
    const newcoder = Object.create(myobject);
    newcoder.city = "Udaipur";
    // console.log(newcoder);
    
    // CREATING OBJECT USING new using existing object
    let person = new Object(myobject);
    // console.log(person);

    