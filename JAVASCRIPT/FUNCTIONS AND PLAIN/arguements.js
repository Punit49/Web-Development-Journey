// ? The arguments object is a local, array-like object available inside all non-arrow functions. It contains an entry for each argument passed to the function, allowing you to access them by index (e.g., arguments[0]).
function sum(n){
    console.log(arguments[2]);
    arguments.porpl = 20;
}

sum(20, 45, 55, 66);