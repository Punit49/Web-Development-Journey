// ? Async - The async keyword transforms a regular JavaScript function into an asynchronous function, causing it to return a Promise always.
// ? Using Async Await, asynchrnous code can be treated as synchrnous, It is used to handle promises - 
// * async functions always return a fulfilled promise, unless they throw an error that’s not caught.
    function getWheather(){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log("WheatherData");  
                resolve("success");          
            }, 3000);
        });
    }

// ? Await is used to wait for a promise to resolve. It can only be used within async function, It makes code wait until promise returns a result,
    async function result(){
        await getWheather();
        console.log("done");
    }
    // result();

    function getData(id){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log(`Data: ${id}`);
                resolve(`Resolved By ${id}`);
            }, 2000);
        });
    }

    // * Best Solution To Callback hell and Promise Chaining - 
    let tempFun = async () => {
        try{
            await getData(10);
            await getData(20);
            await getData(30);
            await getData(40);
            await getData(50);
        }
        catch(error){
            console.error("Error - ", error.message);
        }
        console.log("Reached");
    }

    tempFun();