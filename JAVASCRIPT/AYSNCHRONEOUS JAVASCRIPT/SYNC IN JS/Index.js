// ? Synchronous Code - It means the code runs in a particular sequence of instructions given in the program. Each instruction waits for the previous instruction to complete its execution.
    console.log("Hi");
    console.log("Hello");
    console.log("How are you?");

// ? Asynchronous Code - It allows multiple tasks to run independently of each other. In asynchronous code, a task can be initiated, and while waiting for it to complete, other tasks can proceed.
    console.log("Hello");
    setTimeout(() => {
        console.log("How r you");
    }, );
    console.log("Punit");

// ? Terms -
// * 1. Call Stack: The call stack is a data structure that tracks the execution of functions.  When a function is called, it's added to the stack, and when it finishes execution, it is removed from the stack.

// * 2. Callback Queue (or Task Queue): After an asynchronous operation is completed, its callback function is added to the callback queue. The callback queue holds all the callback functions that are ready to be executed once the call stack is empty.

// * 3. Event-Loop - An infinite loop that checks the call stack and the callback queue, The event loop continuously checks the call stack. If it’s empty, it pushes the functions from the callback queue (front) onto the stack for execution.
    
// ? Asynchronous Code Execution:
// * When an asynchronous function (like setTimeout, fetch, etc.) is called, the operation is handed over to a Web API or browser, and the function immediately returns without blocking the stack. Once the asynchronous operation is complete, the callback associated with it, is placed in the callback queue in front and when the call stack is empty then it excutes the callback function starting from front side. Every synchroneous operations has entry in call stack but in case of asynchrneous code this entry is removed temperorary and handed over to browser and in this meantime JS perform other synchronous tasks, once the browser is ready with results of that asynchronous code then it is pushed to callback queue, where event loop continously checks if the callback stack is empty then that asynchronous code is moved to call stack for its execution.