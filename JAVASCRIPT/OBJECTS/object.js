// ! OBJECTS - Objects are collections of key-value pairs, where each key is a string (also called a property name), and each value can be of any data type, including other objects and functions.
// ! Arrays and objects both are refernce types - means they don't store value of data instead they store meory location to that data.
// ! NOTE - Variables that are assigned a reference value are given a reference or a pointer to that value. That reference or pointer points to the location in memory where the object is stored. The variables don’t actually store the value.

    // Practice Object - Globally accesible
    let myobject = {
        name: "Punit",
        20: 19,

        // * Property names can also be strings with more than one space separated words. In that case, these property names must be enclosed in quotes :
        "Google Microsoft": "YES",
        Websites: {
            Code_cafe: {
                content: "Documentation"
            },
            Gravito: {
                content: "Universe"
            }
        }
    }
    // * In case the property names are numbers, they must be accessed using the “bracket notation” like this.
    // console.log("The value of key 20 is - ", myobject[`20`]);

    // console.log(myobject['Websites']['Code_cafe']['content']);

// ! CREATING OBJECTS - 
    // ? USING OBJECT LITERALS -
        // let myobject2 = {
        //     gender: "Male"
        // }

    // ? USING OBJECT CONSTRUCTOR - Object Constructor Function: In this, the user creates an explicit function to take required values as parameters and assign them as the properties of the desired object.
        function objectconstructor(name, age, gender){
            this.name = name;
            this.age = age;
            this.gender = gender;
        }
        let object1 = new objectconstructor("Punit", 29, "Male");
        console.log(object1);

    // ? UISNG NEW KEYWORD - Copy
        let newobject = new Object(myobject);
        // console.log(newobject);

    // ? USING OBJECT.CREATE() METHOD - The Object.create() method creates a new object, using an existing object as the prototype of the newly created object. new object will access properties and methods from parent object if js doesn't find it in child object. Takes refernce using prototype.
        // let objcreation = Object.create(myobject);
        // objcreation.new = "King"
        // console.log(objcreation);

// NOTE - Object And Arrays are passed by reference meaning their original value will be changed if they modify in as callback function.

    // let Obj = [{name: "Punit" }, {name: "King"}];

    // let upObj = Obj.map((val) => {
    //     val.age = 20;
    //     return val;
    // });

    // * Both Have Age property -
    // console.log(upObj);
    // console.log(Obj);

    // ? Solutin - Use copy of objects/arrays.
    
// ? Object destructoring -

let MyObject = {
    courseName: "JS",
    coureInst: "HItesh"
}

const {courseName: Name} = MyObject;
console.log(Name);

const obj = {
    1: "a",
    20: "b",
    null: "c",
    undefined: "d",
    NaN: "e"
}

// ? When we [] to access values of object, js automatically converts its value to string, same can happen with . operator but it does not converts number into string.
// console.log(obj[1]);

// console.log(obj.1);

// console.log(obj.NaN);
