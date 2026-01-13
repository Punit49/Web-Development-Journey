// ? TRY CATCH BLOCK - It used for handling errors and exceptions that occur during the execution of code.  

// ? try Block: 
// * Contains the code that might throw an error.
// * If no error occurs, the catch block is skipped.

// ? catch Block: 
// * Executes if an error is thrown in the try block.
// * Receives an error object containing information about what went wrong.

// ? finally Block (Optional):
// * Executes after the try and catch blocks, regardless of whether an error occurred or not.
// * Useful for cleanup operations, such as closing files or network connections.

    // try Wrap code that will throw error.
    try{
        console.log("Before error");
        console.log(x);
        console.log("After error");
    }

    // Catch - will excute it's inside code if error occured.
    catch(err){
        console.log("Bhai error hai usme");
        console.log(err);
    }

    // It will run everytime, regardless of error
    finally{
        console.log("Inside finally");
    }


    // * EXAMPLE -
    function divide(a, b) {
        if (b === 0) {
            throw new Error("Division by zero is not allowed");
        }
        return a / b;
    }
    
    try {
        let result = divide(10, 0);
        console.log(result);
    } catch (error) {
        console.error("An error occurred: " + error.message);
    } finally {
        console.log("This will always run, regardless of an error");
    }