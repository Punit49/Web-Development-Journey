// ? Promises - It is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value. It acts as a placeholder for a value that may be available now, later, or never. It is container for future value.

// ! Promises solves the problem of inversion of code control, where we give control to our code to other part of the code and callbck hell

// ? Promise States:
// * 1. Pending: The initial state. The promise has not yet been resolved or rejected.
// * 2. Fulfilled: The operation completed successfully, and the promise has a value.
// * 3. Rejected: The operation failed, and the promise has a reason for the failure (typically an error object).

    // const promise = new Promise((resolve, reject) => {
    //     console.log("hello");
    //     setTimeout(() => {
    //         reject("some error occured");
    //     }, 2000);
    // });
    // console.log(promise);
    // setTimeout(() => {
    //     console.log(promise);
    // }, 2000);

// * Example 2 - Promise is saying i am giving promise immediatly, that i will give data after 5 seconds. //5000
    // const getData = (dataId) => {
    //     return new Promise((resolve, reject) => {
    //         setTimeout(() => {
    //             let x = "text";
    //             let y = "text1";
    //             if(x==y){
    //                 resolve("Resolved");
    //                 console.log("Done");                   
    //             }
    //             else {
    //                 reject("Rejected");
    //                 console.log("Not Done");
    //             }
    //         }, 3000);
    //     });
    // }; 
    // let result = getData(10);

// ? Use of Promies Using .then() and .catch();
// * 1. then() = Method is called when the promise is fulfilled. It takes a function as an argument, which will run when the promise is successful.
// * 2. catch() = Method is called when the promise is rejected. It also takes a function, which will run if there’s an error. can get global errors in prvious then's().
// * Both returns promise with undefined.

// * Example 1 -
    // result.then((res) => {
    //     console.log(res);
    // })
    // .catch((rej) => {
    //     console.log(rej);        
    // });

// * Example 2 -
    function AsynFunc0(){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                reject("error");
            }, 2000);   
        });
    }

    // let asy = AsynFunc0();

    // asy.then((res) => {
    //     console.log(0);
    // }).catch((rej) => {
    //     console.log(rej);
    // })

// * Condition Where catch will not work - Errors thrown asynchronously (like inside setTimeout) are not automatically caught by promises unless you explicitly reject the promise.
    // let prom1 = new Promise((resolve, reject) => {
    //     setTimeout(() => { throw new Error("Failure"); }, 1000);
    // });
    // prom1.catch((e) => { console.log(e) });

    // * How to handle - 
    // let prom2 = new Promise((resolve, reject) => {
    //     setTimeout(() => { reject(new Error("Failure")); }, 1000);
    // })
    // prom2.catch((e) => { console.log(e) });

// ? Promiese Chaining - Promise chaining allows you to perform a sequence of asynchronous tasks one after the other. Each .then() method returns a new promise, allowing you to chain multiple asynchronous operations.

// * Example 1 -
    // function AsynFunc1(){
    //     return new Promise((resolve, reject) => {
    //         setTimeout(() => {
    //             console.log("Data1");
    //             resolve("Success data1");
    //         }, 5000);
    //     });
    // }

    // function AsynFunc2(){
    //     return new Promise((resolve, reject) => {
    //         setTimeout(() => {
    //             console.log("Data2");
    //             resolve("Success Data2");
    //         }, 5000);
    //     });
    // }

    // console.log("Fetching Data1...");
    // AsynFunc1().then((res) => {
    //     console.log("Fetching data2...");
    //     AsynFunc2().then((res) => {} );
    // });

// ? Handeling Callback Hell With promise Chaining - 
    function getData2(dataid){
        return new Promise((resolve, reject) => {
            setTimeout(() =>{
                console.log(`Data: ${dataid}`);
                reject("not success");
                resolve("success");
            }, 3000);
        });
    }

    // * Way 1 - 
    // console.log("Fetching Data1...");
    // getData2(10).then((res) => {
    //     console.log("Fetching Data2...");
    //     getData2(20).then((res) => {
    //         console.log("Fetching Data3...");
    //         getData2(30).then((res) => {
    //             console.log("Finished!");               
    //         });
    //     });
    // });

    // * More Efficient Way - 
    // console.log("Fetching Data1...");
    // getData2(1).then((res) => {
    //     console.log("Fetching Data2...");
    //     return getData2(2);
    // }).then((res) => {
    //     console.log("Fetching Data3...");
    //     return getData2(3);
    // }).then((res) => {
    //     console.log("Fetching Data4...");
    //     getData2(4).then((res) => {
    //         console.log("Finished");
    //     });
    // });
    
// ? Shorthand for then with two arguments, 1 is for success and 2 is for rejected. Cant get global error 
    // getData2(10).then((e) => {
    //     console.log(e);
    // }), (e) => {
    //     console.log(e); 
    // }
    
// ? Promies.Finally -  It is designed to execute a callback when a promise is settled, whether it is fulfilled or rejected, and it doesn't receive the promise's result or error, It returns a promise
    // let datas = getData2(10).then((res) => {
    //     console.log("Done");
    // }).catch((err) => {
    //     console.log(`Error: ${err}`);
    // }).finally(() => {
    //     console.log("I am finally");
    // })

    // * Returns Promise By Promise.Finally - 
    // console.log(datas);

    // setTimeout(() => {
    //     console.log(datas);
    // }, 5000);
    
// ? Promise.All - Promise.all() method takes an array of promises and returns a single promise that resolves when all input promises are resolved or rejected if any promise fails. And get resolved values from promises.

// * Example 1 - 
// * Creating Promises to pass as array -
    // let MyPromise1 = new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //         console.log("I am Promise 1");
    //         reject("Promise1 Resolved");
    //     }, 2000)
    // });

    // let MyPromise2 = new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //         console.log("I am Promise 2");
    //         reject("Promise2 resolved");  
    //     }, 3000)  
    // });

    // let NewPromise = Promise.all([MyPromise1, MyPromise2]).then((values) => {
    //     console.log(values);
    // }).catch((err) => {
    //     console.log(err);
    // })

// * Example 2 -
    // const TimeFunc = (t) => {
    //     return new Promise((resolve, reject) => {
    //         setTimeout(() => {
    //             resolve(`Completed in ${t} miliseconds`);
    //         }, t);
    //     });
    // };

    // TimeFunc(3000).then((result) => { console.log(result); });

    // let AllPromise = Promise.all([TimeFunc(2000), TimeFunc(4000)]).then((values) => {
    //     console.log(values);
    // });

// ? Promise.allSettled() Method Waits for all promises to settle (fulfilled or rejected) Method and returns an array of their outcomes.
    
    // Promise.allSettled([MyPromise1, MyPromise2]).then((result) => {
    //     console.log(result);
    // })

// ? Promise.race() Method resolves or rejects as soon as the first promise settles.

    // Promise.race([MyPromise1, MyPromise2])
    //     .then((res) => console.log(res))
    //     .catch((error) => console.log("Error -" ,error));

// ? Promise.any() Method resolves with the first fulfilled promise. If all are rejected, it rejects with an AggregateError

    // Promise.any([MyPromise1, MyPromise2])
    //     .then((result) => {
    //         console.log(result);
    //     }).catch((error) => {
    //         console.log(error);
    //     })

// ? Promise.resolve() Method returns a promise that resolves with the given value.
    // Promise.resolve("Immidiatly Resolved")
    //         .then((result) => {
    //             console.log(result);
    //         }).catch((error) => {
    //             console.log(error)
    //         })
    
// ? Promise.reject() Method returns a promise that immediately rejects with a given reason.
    // Promise.reject("Immidiatly rejected")
    //     .then((result) => {
    //         console.log(result);
    //     }).catch((error) => {
    //         console.log(error)
    //     })

    