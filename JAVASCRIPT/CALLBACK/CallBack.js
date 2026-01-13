// ? Callback Function - A callback is a function that is passed as an argument to another function 
// ?    and is executed after the completion of that main function. In simple terms, 
// ?    a callback function is called at the end of a task to either deliver results or perform an action. 

// * Example 1 - 
    function sum(){
        return 10 + 15;
    }

    function total(sum){
        console.log(`${sum() + 10}`);
    }
    total(sum); 

// * Example 2 - 
    // CallBack Function -
    const add = (array) => {
        let sum = 0;
        for(let i of array){
            sum += i;
        }
        console.log(sum);
    }

    const mainfunction = (callbackFun) => {
        setTimeout( () => {
            callbackFun([2, 3, 4]);
        }, 1000);
    }
    mainfunction(add);

// ? CallBack Hell - Refers to the situation, where multiple nested callbacks create complex, deeply indented code, often called the “pyramid of doom”.

// * Example: Getting Data by Its Id One After Another - 
    // NOTE - We Can't call function in function in parameter.
    function getData(dataId, getNextData){
        setTimeout(() => {
            console.log(`Data: ${dataId}`);
            if(getNextData){
                getNextData();
            }
        }, 2000);
    }

// * Callback Hell - promises have better way to do it - 
    getData(1, () => {
        getData(2, () => {
            getData(3, () => {
                getData(4);
            });
        });
    });