// MAKING OBJECT FOR COPY
    // let obj5 = {
    //     name: "punit",
    //     age: 19,
    //     social: {
    //         facebook: {
    //             ac1: "someone1",
    //             ac2: "someone2"
    //         },
    //         twitter: {
    //             ac3: "someone3",
    //             ac4: "someone4"
    //         }
    //     },
    // }

// DEEP COPY USING RECURSION
    // function deepcopymaker(obj) {
    //     if (typeof (obj) !== 'object' || obj === null) {
    //         return obj;
    //     }
    //     var copiedval = Array.isArray(obj) ? [] : {};
    //     var keys = Object.keys(obj);

    //     for (let i = 0; i < keys.length; i++) {
    //         copiedval[keys[i]] = deepcopymaker(obj[keys[i]]);
    //     }
    //     return copiedval;
    // }

    // var copy = deepcopymaker(obj5);
    // console.log(copy);

// DEEP COPY USING JSON.PARSE AND JSON.STRINGIFY
    // let deepcopy = JSON.parse(JSON.stringify(obj5));
    // console.log(deepcopy);