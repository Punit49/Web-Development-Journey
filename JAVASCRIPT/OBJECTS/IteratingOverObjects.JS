// ! How Many Ways to iterate over Object in Javascript -
    let MyObject = {
        key1: "Value1",
        Key2: "Value2",
        "$": "&",
        Key4: "Value4"
    }

// ? 1. Using Loops - 
    // * I. for loop - 
    // const keys = Object.keys(MyObject);
    // for(let i = 0; i < keys.length; i++){
    //     const key = keys[i];
    //     console.log(`${key}: ${MyObject[key]}`);
    // }

    // * 2. for in Loop - 
    // for (const key in MyObject) {
    //     if(MyObject.hasOwnProperty(key)){
    //         let val = MyObject[key];
    //         console.log(`${key}: ${val}`);
    //     }
    // }

    // * 3. forof Loop - 
    // let ObjKeys = Object.keys(MyObject);
    // for (const element of MyObject) {
    //     console.log(`${element}: ${MyObject[element]}`);
    // }

    // * 4. forEach Loop -
    // Object.keys(MyObject).forEach(key => {
    //     console.log(`${key}: ${MyObject[key]}`); 
    // });

// ? 2. Using Map Method - 
    // Object.entries(MyObject).map(item => {
    //     let key = item[0];
    //     let val = item[1];
    //     console.log(`${key}: ${val}`);
    // });
    
// ? 3. Using Reduce Method - 
    // Object.entries(MyObject).reduce((acc, [key, values]) => {
    //     console.log(`${key}: ${values}`);
    //     return acc;
    // }, {});

// ? 4. Using for...of with Destructuring and Object.entries()/Object.keys() - 
    // for (const key of Object.keys(MyObject)) {
    //     console.log(`${key}: ${MyObject[key]}`);
    // }

// ? 5. Using JSON.stringify() with JSON.parse() for Deep Iteration.
    // let jsonObject = (obj) => {
    //     JSON.parse(JSON.stringify(obj), (key, value) => {
    //         if (key) console.log(`${key}: ${value}`);
    //     });
    // }
    // jsonObject(MyObject);

// ? How to get Keys without using inbuilt functions (Object.keys()) ?
