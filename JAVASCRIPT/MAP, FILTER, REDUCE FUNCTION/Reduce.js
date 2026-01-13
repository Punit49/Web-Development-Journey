// ? REDUCE - The reduce() method in JavaScript is used to execute a reducer function 
// ?          on each element of the array, resulting in a single output value. 
// ?          It's a powerful method for array manipulation, enabling you to accumulate values 
// ?          and perform operations such as summing numbers, finding maximum values, and more.

// * initialValue (optional): A value to use as the first argument to the first call of the callbackFunction. If no initialValue is supplied, the first element in the array will be used, and reduce() starts from the second element.

let Myarray = [10, 20, 30];

// * EXAMPLE - 1
    let intialvalue = 0;
    let ReducedArray = Myarray.reduce( (accumultor, currentvalue) => accumultor + currentvalue /* 0 */ );
    console.log(ReducedArray);

// * EXAMPLE - 2
    const shoppingCart = [
        {
            itemName: "js course",
            price: 2999
        },
        {
            itemName: "py course",
            price: 999
        },
        {
            itemName: "mobile dev course",
            price: 5999
        },
        {
            itemName: "data science course",
            price: 12999
        },
    ]

    let Totalcart = shoppingCart.reduce( (acc, cur) => (acc + cur.price), 0);
    console.log(Totalcart);

    // Here accumulator 1st uses intialvalue [0] to begin then use sum of acc + cur.