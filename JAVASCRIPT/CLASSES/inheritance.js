// ? Extend Keyword - Used in class declarations to create a class that is a child (or subclass) of another class (called the parent or superclass). The child class inherits all the properties and methods of the parent class, and it can also define its own properties and methods.

    class Myclass {
        constructor(name, age){
            this.name = name;
            this.age = age;
        }

        speak(){
            console.log("I am Myclass");
        }
    };

    // * Extends - 
        // class NewClass extends Myclass{

        // };

        // let Newobject = new NewClass("Punit", 19);
        // Newobject.speak();

    // * Super - Used within a subclass to refer to its parent class. It has mainly two uses - 
        // * 1. Calling Parent class constructor - 
        class Class1 extends Myclass {
            constructor(name, age){
                super(name);
                this.age = age;
            }
        };
        
        let classObject = new Class1("Yuvraj", 21);
        // console.log(classObject.name);
        
        // * 2. Accessing The parent class methods in case of overriding - 
        class Class2 extends Myclass {
            constructor(name, age){
                super(name);
                this.age = age;
            }
            speak(){
                super.speak();
                console.log("I am Class1");
            }
        };
        let classObject2 = new Class2("Rakesh", 20);
        classObject2.speak();


