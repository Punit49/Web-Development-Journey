// ? Optional chaining allows you to safely access deeply nested properties of an object without worrying about 
// ? whether an intermediate property exists. If any property in the chain is null or undefined, the operation short-circuits and returns undefined instead of throwing an error.

// * Objects
    let object1 = {
        name: {
            first: "Punit",
        },
        age: {
            total: 20
        },
        add: () => {
            return "Hello";
        }
    }

    // console.log(object1.name.first);
    // console.log(object1.address.city); // Error

    // console.log(object1.address?.city);

// * Calling Methods
    // console.log(object1.add());
    // console.log(object1.add2?.());