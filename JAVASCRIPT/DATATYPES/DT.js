// ? DATA TYPES 
// * NUMBERS 
    // parseInt and parseFloat
    let strnum = "10";
    let fltnum = "10.55";

    console.log(typeof(strnum));
    console.log(typeof(fltnum));

    // DataType changed to number after parsing - 
    let parint = parseInt(strnum);
    let parflt = parseFloat(fltnum);
    
    console.log(typeof(parint));
    console.log(typeof(parflt));
// * DATA-TYPES
    // let a = 10;
    // let b = "punit";
    // let c = 99.50;
    // let d = true;
    // let e; // undefined
    // let f = null; // object
    // let g = NaN; // number
    // console.log(typeof(g));
    
    // let sym1 = Symbol();
    // let sym2 = Symbol('description');
// ? Undefined -
// * A variable that has not been assigned a value or when we are trying to access is not right, or a value about which js does not know.
    let c = undefined;
    // console.log(c);
    
// ? Null - It represents intentional absence of a value, means the value is abscent.
    let b = null;
    // console.log(typeof(b)); // Object