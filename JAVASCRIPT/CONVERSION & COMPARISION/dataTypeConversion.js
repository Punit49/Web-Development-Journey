// ! Conversion of Data types -

// ? Anything to boolean
// * 1. number to boolean - any number other than 0, is true [even -ve]
    let num = -10;
    // let newNum = Boolean(num);
    // console.log(newNum);

// * 2. string to boolean - all are true, expect empty [""] string. 
    let str = "";
    // let newStr = Boolean(str);
    // console.log(typeof newStr);
    // console.log(newStr);  

// * 3. object to boolean - true
    let obj = {
        key1 : "Value"
    };
    // let newObj = Boolean(obj);
    // console.log(newObj);
    // console.log(typeof newObj);
    
// * 4. null to boolean - false
    let n1 = null;
    // let newN1 = Boolean(n1);
    // console.log(typeof newN1);
    // console.log(newN1);

// * 5. undefined to boolean - false
    let un = undefined;
    // let newUn = Boolean(undefined);
    // console.log(typeof un);
    // console.log(newUn);
    
// * 6. NaN to boolean - false
    let NanVal = NaN;
    // let newVal = Boolean(NanVal);
    // console.log(newVal);
    // console.log(typeof newVal);
    
// ? Anything to String - 
// * 1. Number to string - As it is number 
// * 2. Boolean to string - Boolean text as string
// * 3. Null to string - null text
// * 4. NaN to string - NaN text
// * 5. Object to string - [object Object]
    // let newObj1 = String(obj);
    // console.log(newObj1);
    // console.log(typeof newObj1);

// * 6. Array to string - Array Elements as string, Empty string in case of empty array.
    let Arr = [120];
    // let NewArr = String(Arr);
    // console.log(Arr);
    // console.log(NewArr);
    // console.log(typeof NewArr);
    
// ? Anything to Number - 
// * 1. String to number - if string is a num, then num as it is, else NaN.
    // let string1 = "Punit!";
    // let numStr = Number(string1);
    // console.log(numStr);
    // console.log(typeof numStr);
    
// * 2. Boolean to number - 0 for false 1 for true.
    let Bool1 = false;
    // let BoolVal = Number(Bool1);
    // console.log(typeof BoolVal);
    // console.log(BoolVal);
    
// * 3. Null to Number - 0 number
    // let newNull = Number(n1);
    // console.log(newNull);
    // console.log(typeof newNull);

// * null and undefined
// null becomes 0 when compared with numbers using <, >, <=, >=.
// undefined becomes NaN in numeric comparison, which makes comparisons false.

// ? Objects / Arrays - When compared, objects/arrays try to convert to a primitive (string or number).

// * 4. object to number - NaN
    let newObj2 = Number(obj);
    // console.log(newObj2);

// * 5. Array to number - 0[when empty array], value of array[when 1 value only], else NaN.
    let arrNum = Number(Arr);
    // console.log(arrNum);
    
// * 6. NaN to number 
    let newNan = Number(NanVal);
    // console.log(newNan);

// ? Null behaviours - 
// * 1. null is not a object - In the early days of JavaScript, values were represented internally using a type tag and a value. The type tag for objects was 0. null was represented as the NULL pointer (0x00 in most platforms), which also had 0 as the type tag. This led to typeof null being "object".
    // console.log(null == {});
        
// * 2. null is = 0 - because null represents "nothing" or the absence of a value. In a numeric context, "nothing" is interpreted as 0.
    // console.log(n1 == 0); //false
    // console.log(n1 >= 0); // special case (true)

// * 3. null is = undefined - 
    // console.log(null == undefined);

// ? Anything to Object - 
// * 1. [number, string] to object - Will return dataype as key and value and value of object of 1st value only.
    let Objstr = Object(100, 20);
    let Objstr2 = Object("Punit");
    // console.log(Objstr);
    // console.log(Objstr2);
    
// * 2. array to object - Will put array as it in object.
    let Myarr = ["Punit", "Sahu"];
    let ObjectArr = Array(Myarr);
    // console.log(ObjectArr);
    // console.log(typeof ObjectArr);
    
// * 3. NaN to object - [Nunber: NaN]
    let objNan = Object(NaN);
    // console.log(objNan);

// * 4. null to object - Empty Object
    let nullObj = Object(null);
    // console.log(nullObj);
    
// ? Anything To Array - 
// * 1. Object To Array - array of object
    let objArr = Array({key1: "Val", key2: "Val2"}, {key1: "Val", key2: "Val2"});
    // console.log(objArr);
    
