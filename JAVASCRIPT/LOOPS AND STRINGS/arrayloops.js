// HIGH ORDER ARRAY LOOPS
let Myarray = ["HTML",1 , null, "REACT"];
let greetings = "Hello World";

    // MAP HAS UNIQUE VALUES AND FOLLOWS SAME ORDER / SEQUENCE.
    const map = new Map();
    map.set("IN", "INDIA");
    map.set("USA", "AMERICA");
    map.set("FA", "FRANCE");
    // console.log(map);

    // FOR OF LOOP ON OBJECTS - object will not iterate object - it is preferable to not use for of loop for objects, use for in instead
    const obj = {
        class: "A",
        Section: "B"
    }
    
    // 2. FOR-IN LOOP - The for...in loop is used to iterate over the enumerable properties of an object (including properties inherited through the prototype chain).
    // ITERATING OBJECTS.
    // for (const key in obj) {
    //     console.log(`${key} : ${obj[key]}`);
    // }

    // ITERATING ARRAYS -  it is not prefered to use for in loop for array, use for of loop instead.
    for (const key in Myarray){
        // console.log(Myarray[key]);
    }

    // ITERATING MAPS
    // console.log(map);
    for(const key in map){
        // console.log(map);
    }
    // TRYING TO ITERATE MAP BY MAKING SHALLOW COPY.
    let newmap = [...map];
    for(const key in newmap){
        // console.log(newmap);
        break;
    }