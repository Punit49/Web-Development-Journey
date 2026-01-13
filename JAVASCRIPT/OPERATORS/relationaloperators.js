// JavaScript in Operator - The in-operator in JavaScript checks if a specified property exists in an object or if an index exists in an array. It returns a Boolean value. It does'nt check for elements.

    // IN ON ARRAY
    let Arr = ["html", "js", "css"];

    console.log(1 in Arr); 
    console.log(Arr.includes("html"));

    // IN ON OBJECT
    let Myobject = {
        name:"punit",
        age: 19
    }
    console.log("name" in Myobject);