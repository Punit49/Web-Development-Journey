// ! OBJECT -
    let myobject = {
        Adress: "Udaipur",
        Age: 19,
        Websites: {
            Code_Cafe: "Working",
            Gravito: "Not Working"
        }
    }
    
// ? ASSIGNING OBJECTS IN REFERENCE VARIABLE - THIS IS NOT CLONING WE ARE JUST COPYING REFERENCE. 
    // let varobj = myobject;
    // varobj.Websites.Gravito = "Now working";
    // console.log(varobj.Websites.Gravito);
    // console.log(myobject.Websites.Gravito);

// ? CREATING SHALLOW COPY
    // * USING SPREAD OPERATOR -
        // let copyobj = {...myobject};
        // copyobj.Adress = "jaipur";
        // console.log(copyobj.Adress);
        // console.log(myobject.Adress);
        
        // As it is a deep copy nested properties will take reference from its parent.
        // copyobj.Websites.Code_Cafe = "Not working";
        // console.log(copyobj.Websites.Code_Cafe);
        // console.log(myobject.Websites.Code_Cafe);

    // * USING ASSIGN METHOD - 
        // let copyobj2 = Object.assign(myobject); // WRONG METHOD [CREATE REFERENCE]
        // let copyobj3 = Object.assign({}, myobject);
        // myobject.Adress = "Jaipur";
        // myobject.Websites.Code_Cafe = "LIVE";
        // console.log(copyobj3);
        // console.log(myobject);

    // * USING ITERATION - 
        // let itobject = {};
        // for(const key in myobject){
        //     let newkey = key;
        //     let newvalue = myobject[key];
        //     itobject[newkey] = newvalue; 
        // }
        // itobject.Age = 10;
        // console.log(itobject);
        // itobject.Websites.Gravito = "Punit";
        // console.log(itobject);
        // console.log(myobject);

// ? CREATING DEEP COPY USING JSON -
        // let newobj  = JSON.parse(JSON.stringify(myobject));
        // newobj.Websites.Code_Cafe = "Sometimes Work";
        // console.log(newobj.Websites);
        // console.log(myobject.Websites);

// ? DEEP COPY USING RECURSIVE FUNCTION -
        // let myobject = {
        //     Address: "Udaipur",
        //     Age: 19,
        //     Websites: {
        //         Code_Cafe: "Working",
        //         Gravito: "Not Working"
        //     }
        // };
        
        // let itobject = {};
        
        // // Function to deep copy an object
        // function deepCopy(obj) {
        //     if (obj === null || typeof obj !== 'object') {
        //         return obj;
        //     }
        
        //     // Create an array or object to hold the values
        //     let temp = Array.isArray(obj) ? [] : {};
        
        //     for (const key in obj) {
        //         if (obj.hasOwnProperty(key)) {
        //             // Recursively (deep) copy for nested objects, including arrays
        //             temp[key] = deepCopy(obj[key]);
        //         }
        //     }
        
        //     return temp;
        // }
        
        // itobject = deepCopy(myobject);
        
        // console.log(itobject);

// ? Using Lodash's _.cloneDeep
    // let original = { a: 1, b: { c: 2 } };
    // let copy = structuredClone(original);

    // copy.b.c = 30;
    // console.log(copy);
    // console.log(original);

// ? Other Methods (Less Common)
    // Using jQuery's $.extend
    // For jQuery users, $.extend can be used to deep copy objects.

    // let original = { a: 1, b: { c: 2 } };
    // let copy = $.extend(true, {}, original);
    // console.log(copy);

// ? Using Object.create() - This method is mainly used for creating a new object with the same prototype as the original object. It does not copy properties deeply.
    // let original = { a: 1, b: 2 };
    // let copy = Object.create(Object.getPrototypeOf(original), Object.getOwnPropertyDescriptors(original));


