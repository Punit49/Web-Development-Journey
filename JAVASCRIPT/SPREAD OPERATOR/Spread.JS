// ! Spread Operator - It is used to spread elements of an array or properties of an object into individual elements or properties. 
// ? 1. Spreading Elements in Arrays - The spread operator can copy or combine arrays by spreading their elements. [Shallow Copy]
    // * Example: Copying an Array
    let arr1 = [1, 2, 20, 4];
    let arr2 = [0, ...arr1, 5];
    // console.log(arr2);

    // * Example: Combining Arrays
    let arr3 = ["a", "b", "c"];
    let addArr = [...arr1, ...arr3];
    // console.log(addArr);

// ? 2. Spreading Properties in Objects - It can also be used to copy or merge objects by spreading their properties.
    // * Example: Copying an Object
    let obj1 = {
        name: "Punit",
        age: 20
    }

    let obj2 = {...obj1};
    // console.log(obj2);
    
    // * Example: Merging Objects
    let obj3 = {
        Sister: "Prachi",
        Umar: 19
    }
    let obj4 = {...obj2, ...obj3};
    // console.log(obj4);

// ? 3. Passing Arguments to Functions - The spread operator can pass array elements as arguments to functions.
    // * Example: Function Arguments
    // function add(a, b, c){
    //     return a + b + c;
    // }
    // let funArr = [1, 2, 4];
    // console.log(add(...funArr));

// ? 4. Converting arrays into objects - 
    let arrObj = {...arr3};
    // console.log(arrObj);    

// * Converting arrays into objects with custom keys- 
    let keys = ["name1", "name2", "name3"];

    let custObj = {...keys.map((key, index) => ({[key]: arr3[index]}))};
    // console.log(custObj);
    
// ? Finding max using spread - 
    console.log(Math.max(...arr1));