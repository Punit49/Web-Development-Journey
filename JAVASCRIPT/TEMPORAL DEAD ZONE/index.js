// ! The Temporal Dead Zone (TDZ) is the period between entering a scope and the line where a let or const variable is declared. During this "zone," the variable is in scope but has not yet been initialized, and any attempt to access it will result in a ReferenceError. In the TDZ, a variable exists but it cannot be accessed until it is not declared. 

    // console.log(var1); // TDZ STARTED
    console.log("IN TEMPORAL DEAD ZONE");
    console.log("IN TEMPORAL DEAD ZONE");
    console.log("IN TEMPORAL DEAD ZONE");
    let var1 = 20; // TDZ END

// Jaha variable intialize karne se pehle use hua vaha se jaha vo variable actually intialize hua vaha tak temporal dead zone hota hai.

// To avoid TDZ issues, it’s important to declare variables before trying to access it