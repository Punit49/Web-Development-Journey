// ? Strict Mode - Strict mode is a way to opt in to a restricted variant of JavaScript, introduced in ES5 (ECMAScript 5).
// ? It enforces stricter parsing and error handling in your code, helping to catch silent errors and improve performance and security.
// NOTE - Strict mode should always be on top in gloabl script, otherwise will not work.
// "use strict";

// ! Characterstics of strict mode -
// * 1. Can't use undeclared variable in strict mode:  
    // var1 = 10;
    // console.log(var1);

// * 2. Elimination of this in Global Context: Strict mode eliminates the default binding of this to the global object.
    // function temp(){
    //     console.log(this); // undefined but in non-strict mode it will be window
    // }
    // temp();

// * 3. No Duplicate Parameter Names: 
    // function temp1(a, a){ // in non strict mode second last parameter wins 
    //     return a + a;
    // }
    // console.log(temp1(1, 4));

// * 4. Reserved Keywords for Future Versions:
    // function let(){
    //     console.log(10+1); 
    // }
    // let();

// * 5. Disallows delete on Variables:
    // var k1 = 15;
    // console.log(k1);
    // delete k1;
    // console.log(k1);
    
// * 6. Strict mode doesn’t work with block statements enclosed in {} braces. 
    // {
    //     "use strict";

    //     b1 = 19;
    //     console.log(b1);        
    // }

// * 7. Octal Numeric Literals (starting with 0) are not allowed in strict mode.
    // let r1 = 0123;
    // console.log(r1);

// ? Way 2 - function specific -
    var2 = 69;
    console.log(var2);

    function myname(){
        "use strict";
        var3 = 54;
        console.log(var3);
    }
    myname();
