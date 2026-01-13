// ? Closures in JavaScript are functions that retain access to variables from their containing scope even after the parent function has finished executing.
// ? Function binded with its required data. [not copy of data, but reference].

// * Ek esa case 2 functions nested hai or child func. jis val. pr depenedent hai vo memory se free ho chuki hai.
// * Binded data ki copy nahi bani just reference.

// * Example - 
    function Outer(){
        let Myname = "Punit";

        const Inner = () => {
            console.log(Myname);
        }

        return Inner;
    }

    let Response = Outer();

    // Here Myname is still accesible as it was binded with Inner function and Response has its reference.
    Response();

// ? Lexical scoping - when inner function can access its outside function variables and methods.