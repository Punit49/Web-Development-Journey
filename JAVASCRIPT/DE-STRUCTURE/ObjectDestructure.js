let obj = {
    name : "punit",
    age: 18,
    weight: 60,
    height: "6.3ft",
    Greet: function (){
        console.log("Namaste");
    }
};

console.log(obj.name);

// Syntax
let {name: N} = obj;

console.log(N);