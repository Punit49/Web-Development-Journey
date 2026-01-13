// Basic Operations on JavaScript Arrays
    let Myarray = ["Html", "css", "javascript", "Nodejs"];
    let arr = [10,20,30,40];
    // 1. Accessing Elements of an Array
        // MAKING LOOP TO ACCESS ELEMENTS OF ARRAY
        // for (let i = 0; i < Myarray.length; i++){
        //     console.log(Myarray[i]);
        // }

    // 2. Accessing the Last Element of an Array
        // console.log(Myarray[Myarray.length - 1]);

    // 3. Modifying the Array Elements
        // Myarray[3] = "React";
        // console.log(Myarray);

    // 4. Adding Elements to the Array
        // ADDING USING INDEXING
        // Myarray[4] = "React";
        // console.log(Myarray);

    // 8. Conversion of an Array to String
        // USING JOIN 
        // console.log(Myarray.join(" "));

        // USING tostring() METHOG [This method does not accept any parameter, original array is not changed ]
        // console.log(Myarray.toString());

        // DELETE OPERATOR [IN ARRAY IT WILL PUT EMPTY WHERE WE USE DELETE]
        // console.log(Myarray);
        // delete Myarray[0];
        // console.log(Myarray);

// METHODS

    // 5. Array reverse() method - The reverse() method is used to reverse the order of elements in an array. [CREATES REFERENCE OF SAME ARRAY NOT COPY] change original array.
        // let temp = arr.reverse(); 
        // console.log(temp);

    // TRYING TO MAKE SHALLOW COPY - !FAILED
        // let brr = Myarray;
        // brr[1]="Hello";
        // console.log(brr);
        // console.log(Myarray);

    // MAKING SHALLOW COPY
        // let brr = Myarray.slice(0);
        // brr[0]="hello";
        // console.log(brr);
        // console.log(Myarray);
