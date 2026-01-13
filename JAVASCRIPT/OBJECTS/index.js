// OBJECT
let obj = {
    name : "punit",
    age: 18,
    weight: 60,
    height: "6.3ft",
    Greet: function (){
        console.log("Namaste");
    }
};

    // console.log(typeof(obj.Greet));
    // * Accesing Value Using name of key - 
        // console.log(obj['name']);

    // obj.Greet();  /* Namaste */
    // console.log(typeof(obj)); /* OBJECT */

    // * Copying object
        // let obj2 = obj;
        // console.log(obj2); 
        // console.log(obj2 === obj);
        // obj2.age = 19;
        // console.log(obj.age);

// COPYING USING SPREAD OPERATOR - can creates shallow copy and allows you to expand elements of an iterable (like an array or object) into individual elements.
    // let obj4 = {...obj};
    // obj4.age = 40;
    // console.log(obj);
    // console.log(obj4);

    // LIMITTATIONS OF SPREAD
    let obj5 = {
        name: "punit",
        age: 19,
        social: {
            facebook: {
                ac1: "someone1",
                ac2: "someone2"
            },
            twitter: {
                ac3: "someone3",
                ac4: "someone4"
            }
        },
    }

    // console.log(obj5);
    // SHALLOW COPY
    // USING SPREAD OPERATOR
    // let obj6 = {...obj5};
    // obj6.social.facebook.ac1 = "king"; /* BOTH OBJECT VALUE CHANGED */
    // console.log(obj5.social.facebook.ac1);
    // console.log(obj6.social.facebook.ac1);
    // USING ASSIGN.OBJECT()
    // let obj7 = {
    //     sahu:"Sahu",
    // }
    // Object.assign(obj5, obj7);
    // console.log(obj5);
    // console.log(obj7);

    // SHALLOW COPY FOR ARRAYS
    let arr = [1,2,3];
    // let arr2 = {...arr};
    // arr2[1]= 20;
    // console.log(arr);
    // console.log(arr2);

    // USING SLICE
    // let arr2 = arr.slice();
    // arr2[0]= 10;
    // console.log(arr2);
    // console.log(arr);
    
    // USING ARRAY.FROM
        let arr3 = Array.from(arr);
        arr3[3]=4;
    // console.log(arr3);

    // DEEP COPY 
    let deepcopy = JSON.parse(JSON.stringify(obj5));
    deepcopy.social.facebook.ac2 = "queen";
    // console.log(deepcopy.social.facebook.ac2);
    // console.log(obj5.social.facebook.ac2);

    // DEEP COPY USING RECURSION
    function deepcopymaker (obj){
        if( typeof (obj) !== 'object' || obj === null){
            return obj;
        }
        var copiedval = Array.isArray(obj) ? [] : {};
        var keys = Object.keys(obj);

        for(let i = 0; i<keys.length; i++){
            copiedval[keys[i]] = deepcopymaker(obj[keys[i]]);
        }
        return copiedval;
    }

        var copy = deepcopymaker(obj5);
        // console.log(copy);
        
        // console.log(copy === obj5);
        copy.social.city = "Udaipur";
        copy.social.facebook.ac3 = "hello"
        // console.log(copy);
        // console.log(obj5);
        // console.log(copy.social.facebook.ac === obj5.social.facebook.ac1);

    // CHECKING ARRAY
    // console.log(Array.isArray([]));

    // OBJECT.KEYS() METHOD
    // console.log(Object.keys(arr));
    // console.log(Object.keys(obj5));