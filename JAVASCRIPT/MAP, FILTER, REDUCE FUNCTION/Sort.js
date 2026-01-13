// ? The JS array.sort() method rearranges the array elements alphabetically and returns a sorted array.
// ? It does not create a new array but updates the original array.
// * Return value: This method returns the reference of the sorted original array.

// ! Parameters
// * arr: The array to be sorted.
// * compareFunction (Optional): A function that defines the sort order. If omitted, the array elements are sorted based on their string Unicode code points.

let arr = [3, 1, 4, 6, 2, 5];
let strArr = ["apple", "banana", "cherry", "date"];

// * 1. string Unicode code -
    // arr.sort();
    // console.log(arr);
    
// * 2. Ascending using compareFunction - 
    // arr.sort((a, b) => (a - b));
    // console.log(arr);

// * 3. Descending using compareFunction - 
    // arr.sort((a, b) => (b - a));
    // console.log(arr);

// * 4. Sorting Strings by Length 
    // strArr.sort((a, b) => (a.length - b.length));
    // console.log(strArr);

// * 5. Sorting an Array of Objects -
    const users = [
        { name: "Bob", age: 25 },
        { name: "Charlie", age: 30 },
        { name: "Alice", age: 20 }
    ];
  
    users.sort((a, b) => a.name.localeCompare(b.name));
    console.log(users);