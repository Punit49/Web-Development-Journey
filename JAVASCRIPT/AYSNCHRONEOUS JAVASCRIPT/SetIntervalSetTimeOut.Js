// ? The setTimeout() function is used to add delay or scheduling the execution of a specific function after a certain period. It's a key feature of both browser environments and Node.js, enabling asynchronous behavior in code execution.

// ? Both are window functions and returna a number (id) which is used to or stop execution.

// ? The setInterval() method calls a function at specified intervals (in milliseconds). It continues calling the function until clearInterval() is called or the window is closed. 
 
// ? JavaScript SetTimeout and SetInterval are the only native function in JavaScript that is used to run code asynchronously, 
// ? It means allowing the function to be executed immediately, there is no need to wait for the current execution completion, 
// ? it will be for further execution.

// * Clearing Timers
// * Both setTimeout() and setInterval() return a unique timer ID that can be used to cancel the execution.

// * With arguements - 
let set2 = setInterval((name1, name2) => {
    console.log(`${name1} in ${name2}`);
}, 1000, "Alice", "Borderland");

console.log(set2);

setTimeout(() => {
    clearInterval(1);
}, 10000);