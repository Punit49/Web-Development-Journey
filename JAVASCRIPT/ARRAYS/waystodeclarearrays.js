// !In JavaScript, there are several ways to declare and initialize arrays. Here are some of the most common methods:
// ? Arrays are use to store all data under a single name. it is an object internally.

// ? 2. Using the Array Constructor - You can also create an array using the Array constructor.
    // const arr1 = new Array(1, 2, 3, 4);
    
    // * what is difference between new and literals - with single value in Array constructor creates empty array of length of that value.
    // * Use new Array() only when you specifically need to create an array of a certain length without initializing its elements.

// ? 3. Creating an Array with a Specific Length - If you want to create an array with a specific length, you can pass a single number to the Array constructor.
    // const arr = new Array(5); // Creates an array with 5 undefined elements
    // console.log(arr.length); // 5
    // console.log(arr); // [ <5 empty items> ]

// ? 4. Using Array.of - The Array.of method creates a new Array instance with a variable number of arguments, regardless of number or type of the arguments.
// ? creates a new array with the arguments provided as elements.
    // ? Why Use Array.of()? - To avoid the confusion caused by the new Array() constructor when passing a single number: As it creates that number of empty elements mentioned as arguements.
    // const arr1 = Array.of(1, 2, 3, 4);
    // const arr2 = Array.of('a', 'b', 'c');
    // const arr3 = Array.of(5); // Creates an array with a single element, 5
    // console.log(arr3.length); // 1
    // console.log(arr1); 
    // console.log(arr2); 
    // console.log(arr3); 

// ? 5. Using Array.from - The Array.from method creates a new, shallow - copied Array instance from an array - like or iterable object.
    // ?  creates a new array from an array-like or iterable object (e.g., strings, NodeLists, or Sets), It is particularly useful for converting non-array objects to arrays.
    // const arr1 = Array.from("Punit");
    // const arr2 = Array.from('abc'); // ['a', 'b', 'c'];
    // console.log(arr1);
    // // With a mapping function
    // const arr3 = Array.from([1, 2, 3, 4], x => x * 2); // [2, 4, 6, 8];

// ? 6. Using Spread Syntax - to create a new array from an existing array or array - like structure.
    // const arr1 = [1, 2, 3];
    // const arr2 = [...arr1, 4, 5, 6]; // [1, 2, 3, 4, 5, 6];
    // const str = 'hello';
    // const arr3 = [...str]; // ['h', 'e', 'l', 'l', 'o'];

// ! Ways to make copy of arrays
// * 1. Slice() -