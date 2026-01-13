// ? MAP - The map() method in JavaScript creates a new array by applying a function 
// ?       to each element of the original array. It skips empty elements 
// ?       and does not alter the original array. 
// ?       it iterates on every elemnt regardless of condition.

// ? NOTE -  It automatically skips executing the callback function for empty 
// ?         elements, focusing solely on processing non-empty values.

let myNums = [1, 2 ,3 ,4 ,5 ,6 ,7 ,8 ,9 ,10];
let stringarray = [ "Punit", '20', "30", "40", "50" ];

// * EXAMPLE - 1
    // * 1. WHEN {} IS USED EACH VALUE = UNDFINED.
        // let newNum = myNums.map( (num) =>  {num + 10} ); 
        // console.log(newNum);

    // * 2. ()
        // let newNum1 = myNums.map( (num) => (num + 10) ); 
        // console.log(newNum1);

// * EXAMPLE - 2  transforming each element of the input array into an object containing the index and the value.
    // let ObjectArray = myNums.map( function (val, index) {
    //     return {
    //         key: index,
    //         Value: val
    //     }
    // } )
    // console.log(ObjectArray);

// * EXAMPLE - 3 Using a callback function with an argument
    // let newstringArray = stringarray.map((str) => parseInt(str));
    // console.log(newstringArray);

// ? Using condition in map - not working.
    // let newNum = myNums.map( (num) => {
    //     if(num > 5){
    //         return num;
    //     }
    //     else{
    //         return "";
    //     }
    // } ); 
    // console.log(newNum);

// ? CHAINING CONCEPT - USING MULTIPLE METHODS IN ONE ARRAY SIMULTANEOUSLY.
    // let newNumbers = myNums
    //                     .map( (num) => (num * 10)) // Yaha tak process hone ke baad jo value aayegi vo 2nd method me use hogi na ki old values.
    //                     .map( (num) => (num + 1) )
    //                     .filter((num) => (num >= 51)); 

    // console.log(newNumbers);

// ! Map on Strings - 
// let MyStr = "Punit Sahu!";
// let newStr = Array.from(MyStr).map((val) => val.toUpperCase());
// console.log(newStr.join(''));

// ! Map on Objects -
    let myObject = {
        key1: "Value 1",
        key2: "Value 2",
        key3: "Value 3",
    }
    
    let newObj = Object.entries(myObject).map(([key, val]) => `${key}: ${val}`);
    console.log(newObj);