// ! THIS IS A KEYWORD WHICH REFERS TO CURRENT CONTEXT.
// ! USING THIS IN METHOD REFERS TO THE OBJECT ITSELF

// ? value of this in regular functions is calling object and any object its defqault value is global object but in strict mode value of this for global object is undefined.

// "use strict";
    // let myobject = {
    //     name: "punit",
    //     Age: 20,
    //     thisVal: this,
    //     myinfo: function (){
    //         let name = "King"; // No usage
    //         let age = 90;
    //         console.log(`MY NAME IS ${this.name} AND MY AGE IS ${this.Age} `);
    //         function newfun(){
    //             console.log(`MY NAME IS ${this}` );
    //         }
    //         // newfun is a regular function, so this refers to newfun function only and newfun func. does not have name variable.
    //         newfun();
    //     }
    // };

    // myobject.myinfo();
    // console.log(myobject.thisVal);

// ? Arrow functions does not have thier own this they inherit this from their enclosing lexical scope (the surrounding function or context). here scope = parent scope
    let myobject3 = {
        name: "punit",
        Age: 20,
        myinfo: () => {
            console.log(this);
            const yourIndo = () => {
                console.log(this);
            }
            yourIndo();
        }
    }
    // myobject3.myinfo();
    

    let myobject4 = {
        name: "punit",
        Age: 20,
        myinfo: function () {
            console.log(`MY NAME IS ${this.name} AND MY AGE IS ${this.Age} `);
            let newfun = () => {
                console.log(`MY NAME IS ${this.name}` );
            }
            newfun();
        }
    };

    // myobject4.myinfo(); 
    // console.log(myobject4.this); 

// * Why myobject.this is undefined
    // this is not a property of myobject:
    // In JavaScript, this is a special keyword and not a regular property of an object.
    // The value of this is determined dynamically based on how a function is invoked.
    // When you do myobject.this, JavaScript looks for a property named this inside myobject, but such a property does not exist.

// ? When a regular function is called as a method on an object, this refers to the object before the dot at the time of call. 
// ? for normal functions this points to calling object.
// * USING THIS IN FUNCTION
    // REFER TO GLOBAL OBJECT
    // function temp (){
    //     console.log(this);
    // }
    // temp();
    
    function greet (){
        console.log(`hello ${this.name}`); /* UNDEFINED */
    }
    // greet();

    // ASSIGNING GREET FUNCTION TO OTHER OBJECT KEY.
    let testobject1 = {
        name: "Punit",
        sayhello: greet
    }
    // testobject1.sayhello();
    // CALLING GREET FUNCTION WITHOUT ASSIGNING.
    let testobject2 = {
        name:"Rakesh"
    }
    // greet.call(testobject2);

    // When you invoke it as testobject1.sayhello(), the object before the dot (testobject1) becomes the value of this inside the function.

// ? arrow - this inside the arrow function refers to the this of the scope where the arrow function was created — which in this case is the global scope
let person = {
  name: "Punit",
  greet: () => {
    console.log(this.name);
  },
};
// person.greet(); // undefined (because arrow uses enclosing this, which is window/global)

// ? Key takeaways - 
// * 1. this has lexical scope inside arrow function
// * 2. if normal function inside method then this is undefined use variable to solve.

// https://chatgpt.com/share/68767ae7-db9c-800e-b377-868415c61597

// ? for normal function - value of this depends on how they are called, here in this example even though m1 is calling using an function of object so we think that this will return calling object which is getName method but this will return window object coz, m1 is normal function and its default value is window.

// ? Arrow function apne calling object k this ko apna this banate hai or normal function calling object ko apna banate h, this of arrow = where parent is declared.
// ? arrow function's this is determined by where the function is written in the code (its lexical scope), not where it's executed.

let obj = {
    name: "Punit",
    thisVal: this,

    getName: function() {
        console.log(this); // Calling object (obj)

        function m1(){
            console.log("I am m1 normal", this);
        }

        let m2 = () => {
            console.log("I am m2 arrow", this);
        }
        
        m1();
        m2();
    }, 
    
    getArrow: () => {
        console.log("Arrow function: ", this); // parent scope (global)
        
        function m3(){
            console.log("I am m2 arrow", this);
        }

        m3(); // Window object as it is standalone function without object call.

        let m4 = () => {
            console.log("m4", this); // global

            let m5 = () => {
                console.log("m5", this);
            }

            m5();
        }

        m4();
    },

    getInfo1: function(){
        setTimeout(function (){
            console.log(this); // window object
        }, 2000);
    },
    
    getInfo2: function() {
        console.log(this);
        setTimeout(() => {
            console.log(this); // Object itself 
        }, 2000);
    }
}

// obj.getName();

// obj.getInfo1();
// obj.getInfo2();

// obj.getArrow();

var length = 10; // why

function callBack(){
    console.log(this.length);
}

callBack();