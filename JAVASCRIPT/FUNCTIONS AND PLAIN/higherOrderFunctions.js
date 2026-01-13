// ? HIGHER ORDER FUNCTIONS/METHODS - A FUNCTION WHICH TAKES ANOTHER FUNCTION AS ASGUEMENT OR RETURNS A FUNCTION, IS KNOWN AS HIGHER ORDER FUNCTIONS.
function x(){ // here x will be called as callback function.
    console.log("Hello");
}
// * Here Y is higher order function and X is callback function - 
function y(){
    x();
}

// y(x);

// * In programming we prefer we should not repeat our code again [dry]. so we can use Higher order function to do so.

const radius = [3,1,2,4];

// * 1. area of circle 
    const area = function (radius){
        let output = [];
        for(let i = 0; i < radius.length; i++){
            output.push(3.14 * radius[i] * radius[i]);
        }
        return output;
    }

    let result = area(radius)
    // console.log(result);


// * 2. Circumference of circle.
    const circumference = function (){
        let output = [];
        for(let i = 0; i < radius.length; i++){
            output.push(2 * 3.14 * radius[i]);
        }
        return output;
    }
    let result2 = circumference(radius)
    // console.log(result2);

// * 3. diameter.
    // const diameter = function (){
    //     let output = [];
    //     for(let i = 0; i < radius.length; i++){
    //         output.push(2 * radius[i]);
    //     }
    //     return output;
    // }
    // let result3 = circumference(radius)
    // console.log(result3);

    // 1.
    const myarea = function (radius){
        return 3.14 * radius * radius;
    }
    // 2.
    const circum = function(radius){
        return 2 * 3.14 * radius;
    }
    // 3. 
    const diameter2 = function(radius){
        return 2 * radius;
    }
    
    // Common function for area, circumference, diameter.
    const circle = function (logic, radius){
        let output = [];
        for(let i = 0; i < radius.length; i++){
            output.push(logic(radius[i]));
        }
        return output;
    }

    // console.log(circle(diameter2, radius));

    let Myradius = [3, 1, 2, 4];

    var radiusResult = [];

    const returnRadius = (radiusArr) => {
        radiusArr.forEach((radius) => {
            radiusResult.push(radius * radius * Math.PI);
        });
    };

    // returnRadius(Myradius);
    // console.log(radiusResult);  

    // * Approach 2 - 
    const circleArithmetic = (radius, Val) => {
        if(Val == 1){
            return (radius * radius * Math.PI);
        }
        else if(Val == 2){
            return (2 * Math.PI * radius);
        }
        else if(Val == 3){
            return (2 * radius);
        }
    };

    // let value = circleArithmetic(2, 1);
    // console.log(value);
    
    function newradius(){
        Myradius.forEach((radius) => {
            let val = myarea(radius);
            radiusResult.push(val);
        });
    };
    
    // newradius();
    // console.log(radiusResult);

    // console.log(radiusResult);
    
    Array.prototype.calculate = (arr, logic) => {
        arr.forEach((radius) => {
            radiusResult.push(logic(radius));
        })
    };
    // calculate(Myradius, myarea);
    
    // console.log(radiusResult);
    
    console.log(radiusResult);
    
    // console.log(radiusResult);
    Myradius.calculate(Myradius, myarea);
    console.log(radiusResult);