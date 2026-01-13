/* 
    --Intoduction--
    Nodejs is a javascript runtime environment for executing js outside the browser, 
    built on chrome V8 engine, it enables server side rendering. 

---- Node REPL ---- 
    It is an interactive command line environment (like console in browser), used to javascript 
    directly in terminal.

---- How To access REPL ----
    In terminal type "node" and press enter, REPL interface will open with > sign.

---- How it Works ----
    The term REPL describes the continuous cycle of four actions: 
    1. Read: The REPL reads the JavaScript code input by the user.
    2. Eval: It evaluates the inputted code.
    3. Print: The result of the evaluation is printed to the console.
    4. Loop: The process loops back to the read state, waiting for new input. 

*/

/* 
    * Process Object - A process object is a global object in node.js, which is used to provide 
    information about and control over currently running node process. 

    * process.argv - It is an array that is used to store command line arguements passed
    while running a node file. By default it contains 2 values, path of node executables 
    and path of js file.

*/

// ? Accessing command line arguements.
let storedArguments = process.argv.slice(2);

for (const args of storedArguments) {
    console.log(args);
}

/* 
    * module.exports - 
    It is used to export data (function, objects, variables etc) 
    from one file to another for usage in other. 

    * exports - 
    It is a shorthand for module.exports, it points to same object as module.exports. 
    we can't reassign it as -
    
    export = 10;

    * require - 
    It is a built-in function used to import (load) modules into a file.
    order of loading = core modules --> node_modules (packages) --> local files

    *NOTE - 
    When a module is required for the first time, Node.js loads and executes it 
    and stores the result in cache. On subsequent require() calls, it returns a reference 
    to the same cached module, enhancing performance.
*/


// ? module.exports - default return value = {}
const math = require("./math");
console.log(math.mul(10, 22));

// ? importing files from different directory -
const fruits = require("./Fruits");
console.log(fruits);
