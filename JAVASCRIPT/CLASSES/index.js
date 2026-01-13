// ! CLASS - 
//  * Setter and Getter Usage: In JavaScript, setters and getters are used as properties, not as methods.
// * Calling Getters: You do not call getters as functions; you access them as properties.

class human {
    age = 10;
    #name1 = "Punit";
    // MAKING GETTER FUNCTION TO GET PRIVATE MEMBERS - 
    funget(){
        return this.#name1;
    }

    // SETTERS
    f2(newname){
        this.#name1 = newname;
    }
    set f2(newname){
        this.#name1 = newname;
    }

    // GETTERS
    get f1(){
        return this.#name1;
    }

    // CONSTRUCTOR
    constructor (Newage, Newname){
        this.age = Newage;
        this.#name1 = Newname;
    }
}

let h1 = new human(20, "Vansh");



// * ACCESSING PRIVATE MEMBERS OF CLASS -
    // console.log(h1.funget());

// * CREATING CLASS USING CLASS EXPRESSION - 
// 1 NAMED CLASS
    // let class1 = class c1 {
    //     name = "Punit";
    //     age = 19;
    // }

    // const x = new class1();
    // console.log(x.age);


// UNNAMED CLASS
    // const class2 = class {
    //     name = "King";
    //     age = 99;
    // }

    // const y = new class2();
    // console.log(y.age);

    // console.log(new class2().age);


// ! STATIC KEYWORD -  the static keyword is used to define properties or methods that belong to the class itself, rather than to instances of the class. This means they are shared among all instances of the class and can be accessed directly on the class without needing to create an instance.

// let class1 = class c1 {
//     name = "Punit";
//     age = 19;
// }


// console.log(class1.age); // AGE CANNOT BE ACCESEBLE COZ - The class itself is a template, and without instantiating it with new, you don’t have an actual object to work with.

// TO ACCESS THIS MAKE PROPERTIES STATIC

    // * You cannot directly access a property or method on a class without using the static keyword, unless you first create an instance of the class. 
        // class c5{
        //     name = "loo";
        // }
        // console.log(c5.name);
        
     // * but if we make them static it can used.
        // class c5{
        //    static name = "loo";
        // }
        // console.log(c5.name);

