// ? The call stack is a crucial concept in JavaScript’s runtime environment, representing the mechanism by which the JavaScript engine keeps track of function calls in a program. It operates as a Last In, First Out (LIFO) data structure, meaning that the last function called is the first one to be resolved.

// ? WORKING OF CALL STACK -
    /*  When a function is called, a stack frame containing its context (such as local variables and the point to return to) is pushed onto the stack. 
        The JavaScript engine executes the function at the top of the stack. If this function calls another function, a new frame is pushed onto the stack. 
        Once a function completes, its frame is popped off, and control returns to the previous function in the stack. This process continues until the stack is empty. 
        The call stack enables the orderly execution of code and is crucial for handling nested and recursive function calls. However, if too many frames are added without completing, 
        it can lead to a stack overflow error. 
    */

    // * FUNCTION CALL STACK
        // a();
        // function a(){
        //     console.log("i am A");
        //     b();
        //     console.log("Coming from b");
        // }
        // function b(){
        //     console.log("i am B");
        //     c();
        //     console.log("Coming from C");
        // }
        // function c(){
        //     console.log("i am C");
        //     d();
        //     console.log("Coming from D");
        // }
        // function d(){
        //     console.log("i am D");
        //     console.log("going to C");
        // }

        function one(){
            return 1;
        }

        function two () {
            return one() + one();
        }

        function three(){
            let ans = two() + one();
            console.log(ans);
        }

        three();