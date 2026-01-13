// ! REST PARAMETER - It used to gather or "collect" multiple elements into a single array or object. it allows a function to accept an indefinite number of arguments as an array
    // * ASKED IN INTERVIEWS THAT WHAT IS THE VALUE OF A, B AND INPUT -
    function restfunction (a, b, ...input){
        return input;
    }
    // console.log(restfunction(800,200,300,400));

    // ? 1. In Function Parameters - When a function needs to handle an unknown number of arguments, the rest operator collects these arguments into an array.
            function add(...nums){
                return nums.reduce((total, num) => total + num, 0);
            }

            // console.log(add(1, 2, 3, 4, 5));
    // ? 2. In Array Destructuring - It can collect the remaining elements of an array after extracting specific values.
            let arr = [10 , 20, 30, 40, 50];
            let [a, b, ...rest] = arr;
            // console.log(a, b);
            // console.log(rest);
            
    // ? 3. In Object Destructuring - The rest operator collects the remaining properties of an object into another object.
            let object1 = {
                name: "Punit", 
                age: 20,
                gender: "Male"
            };

            const {name, ...details} = object1;
            // console.log(name);
            // console.log(details);   