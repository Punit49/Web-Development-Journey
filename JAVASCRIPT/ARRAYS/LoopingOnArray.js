// ? WAYS TO LOOPING OVER ARRAYS
let Myarray = ["Spider", "ant", "hulk", "Shaktiman"];

//* 1. For of Loop
    for(item of Myarray){
        console.log(item);
    }
    
    console.log();
//* 2. For In Loop - Not preferable
    for (const key in Myarray) {
        console.log(Myarray[key]);
    }

//* 3. For Loop / while loop
    // for(let i = 0; i<Myarray.length; i++){
    //     console.log(Myarray[i]);
    // }

//* 4. For each Loop
    Myarray.forEach(function (item){
        console.log(item);
    });

//* 5. map() Method
//* 6. reduce() Method

// * 7. The some() method is a built-in array method that tests whether at least one element in the array passes the test implemented by the provided function. Doesn't modify array

let arr1 = ["html", "css", "js", 20, 30, NaN];
let ele = "js";

let result = arr1.some(element => ele === element);
console.log(result);