// const sum = (a, b) => a + b;
// const mul = (a, b) => a * b;
// const PI = 3.14;

/* 
    -- Method 1 --
    module.exports = {sum, mul, PI};

    -- Method 2 --
    module.exports.sum = (a, b) => a + b;
    module.exports.mul = (a, b) => a * b;
    module.exports.PI = 3.14;

    -- Method 3 --
    const obj = {
        sum: sum, 
        mul: mul, 
        PI: PI
    }

    module.exports = obj;

    -- Method 4 --
    exports.sum = (a, b) => a + b;
    exports.mul = (a, b) => a * b;
    exports.PI = 3.14;

    exports = sum (It will not work, coz js will not treat it as object)

*/

// For import -
export const sum = (a, b) => a + b;
export const mul = (a, b) => a * b;
export const PI = 3.14;
