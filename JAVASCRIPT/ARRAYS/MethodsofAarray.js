// ! Methods of Array -

let arr = [1,2,3,4,5];

// ? LENGTH RETURNS LENGTH OF ARRAY? 
    // console.log(arr.length); 

// ? ADD VALUE AT LAST OF ARRAY - Adding Elements to the Array - Elements can be added to the array using methods like push() and unshift().
    const newArr2 = arr.push(6); //  returns the new length of the array after the elements have been added. 
    // console.log(newArr);

// ? POP REMOVES LAST VALUE FROM ARRAY and returns the removed last element from the array.
    // arr.pop();   
    arr.pop(0) // 0 here works as index starting from last

// ? SHIFT - REMOVES FIRST VALUE. it does not take any arguments and and returns that removed element
    // arr.shift(); 

// ? UNSHIFT - ADD VALUE AT FIRST [NOT GOOD FOR LARGE DATA AS IT REQUIRES TO SHIFT ALL THE OTHER DATA TO RIGHT], //  returns the new length of the array after the elements have been 
    // arr.unshift(40); 

// ? INCLUDES - USE TO FIND SOMETHING IS PRESENT IN ARRAY OR NOT [RETURNS T/F].
    // console.log(arr.includes(3));
    // console.log(marvel_hero.includes("thor"));

// ? INDEXOF - RETURNS INDEX OF PARTICULAR ELEMENT IN ARRAY. 
    // -1 is result if given value is not in array
    // console.log(arr.indexOf(4));

// ? JOIN - BINDS AND CONVERT THEM INTO STRING. When join() is called on an array with only one element, the separator is not used, and the single element is directly converted to a string and returned.
    // const newarr = [10,20,30];
    // console.log(arr.join(" "));
    // console.log(arr);
    // console.log(newarr);

    // * 2
    const arr2 = [5];
    // const newArr = new Array("Punit", "SAhu");

    // JOin
    // console.log(arr2.join(newArr));

// ? SLICE - The slice() method returns a new array containing a portion of the original array, based on the start and end index provided as arguments. last index is excluded, returns empty array if element is not valid.
    // console.log(arr.slice(0,3));
    // console.log(arr);

// ? SPLICE - The splice() method is used to Insert, replace and Remove elements in between the Array.
// splice(start, deleteCount, item1...itemN)
// If you only insert → splice returns []
// If you remove/replace → splice returns the removed items in array
    var myarr = arr.splice(0,3);
    console.log(myarr);
    console.log(arr);

    // Note - “forward loop + splice skips elements”.

// ! TRYING TO ADD TO ARRAYS. 
    let marvel_hero = ["thor", "ironman", "spiderman"]; 
    let dc_hero = ["superman", "flash", "batman"];
    let indian_hero = ["shaktiman", "mother", "prabhas"];

// ? 1. PUSHING ARRAY INSIDE ARRAY - the 2nd array will pushed as it is [array form] in the 1st one (return on existing array).
    // marvel_hero.push(dc_hero);
    // console.log(marvel_hero);

// ? 2. Array Concatenation - Combine two or more arrays using the concat() method. It returns new array containing joined arrays elements.
    // const allheros = marvel_hero.concat(dc_hero, indian_hero);
    // console.log(allheros);

// ? 3. USING SPREAD OPERATOR
    // const allnewhero = [...marvel_hero, ...dc_hero, ...indian_hero];
    // console.log(allnewhero);

// ? FLAT METHOD - The flat() method is used to flatten the array i.e. it merges all the given array and reduces all the nesting present in it.
    // let temparr = [1,3,4, [5,6], [9,[10,11]]]; 
    // let anotherarr = (temparr.flat(1));
    // console.log(anotherarr);

// ? CONVERTING ANYTHING INTO THE ARRAY USING ARRAY.FROM. - THIS WORKS ONLY FOR ARRAYS, STRINGS , INDIVIDUAL-VALUES, sets, maps
    // console.log(Array.from("PUNIT"));
    // console.log(Array.from([{name: "punit"}])); // [] we have to specify 
    // let arr1 = [1,2,3,4];
    // console.log(arr1);
    // console.log(Array.from(arr1));
    // console.log(Array.from(arr));

// * BASIC OPERATIONS ON ARRAYS - 
    // ? 1. Accessing the Last Element of an Array - We can access the last array element using [array.length – 1] index number.
        // console.log(MyArray[MyArray.length - 1]);

    // ? 4. Increase and Decrease the Array Length.
        // MyArray.length = 6;
        // MyArray.length = 4;
        // console.log(MyArray);

// ? Array reference -

// ? constant arrays - when you declare an array with const, it means that the reference (the memory address) to the array cannot change. But the contents inside the array can still be modified.
    const conArr = [10, 40, 70];
    // works
    conArr[0] = 100; 
    conArr.push(30); 
    // won't work - TypeError: Assignment to constant variable.
    // conArr = [50, 70, 85]; 

    // console.log(conArr);

// ? Nested Arrays -    
    const nestedArr = [["Names", ["Punit", "Prachi"]], [10, 20, [20.1, [20.01]]]];
    // console.log(nestedArr[1][2][1]);