// ? The forEach() method calls a function for each element in an array. It does not return a new array and does not modify the original array. It’s commonly used for iteration and performing actions on each array element. 
// * syntax = array.forEach(callback(element, index, arr), thisValue);

let arr = [1, 2, 3, 4];
let squaredArray = [];

function print(e){
    console.log(e);
}

const result = arr.forEach((e, index) => {
    squaredArray.push(e * e);
});

// console.log(result); 
// console.log(squaredArray);

let objArr = [
    {name: "Punit", marks: 93.8}, 
    {name: "Sahu", marks: 78.8}, 
    {name: "Singh", marks: 83.8}
]

// objArr.forEach((el) => {
//     console.log(el.name);
// });

// ? Map method - The map() method is an ES5 feature that creates a new array by applying a function to each element of the original array. It skips empty elements and does not modify the original array.
    // const mapresult = arr.map((item) => {
    //     console.log(item);
    // });
    // console.log(mapresult);

    const gpa = objArr.map((student) => {
        return Math.floor(student.marks * 10) / 100;
    }); 

    // console.log(gpa);

// ! Key differencec in forEach and map method 
// * 1. Return value -
    // forEach return undefined but map returns new array
    
// * 2. chaining -
    // Map supports method chaining, foreach does not.

    // const chainResult = arr.map((item) => item * 2).filter((dobouled) => dobouled > 4);
    // console.log(chainResult);

// * 3. Use case -
    // forEach used for performing function on each element of array, Map is used to transform elements and create new array.

// ? Filter method - The filter() method creates a new array containing elements that satisfy a specified condition. This method skips empty elements and does not change the original array, it returns elements for which condition returned true.

// const filterResult = arr.filter((item) => item % 2 === 0 );
// console.log(filterResult);

// ? The every() method iterates over each array element, returning true if the provided function returns true for all elements. It returns false if the function returns false for any element. This method does not operate on empty elements and leaves the original array unchanged.

// const everyResult = [201, 667, 123, 89].every((item) => item % 2 !== 0);
// console.log(everyResult);

// ? some method - checks if any array elements pass a test provided as a callback function, returning true if any do and false if none do. It does not execute the function for empty elements or alter the original array.

let integers = [10, 45, 78, 24, 36];

const someResult = integers.some((item) => item < 0);
// console.log(someResult);

// ? Reduce method iterates over an array, applying a reducer function to each element, accumulating a single output value. If no initial value is provided to the reduce method, it uses the first element of the array (array[0]) as the initial accumulator value.
// * array.reduce( function(total, currentValue, currentIndex, arr), initialValue )

// * 1.
// const reducedValue = integers.reduce((acc, num) => {
//     console.log(acc);
//     return acc + num;
// }); 

// console.log(reducedValue);

// * 2.
let strArray = ["Punit", 'Sahu', "Singh"];

// let stringLength = strArray.reduce((acc, str) => {
//     return acc + str.length;
// }, 0);

// console.log(stringLength);

// * 3.

let largest = integers.reduce((acc, val) => acc > val ? acc : val);
// console.log(largest);

// ? The JS array.sort() method rearranges the array elements alphabetically and returns a sorted array. It does not create a new array but updates the original array, it converts each element into a string and then sorts them based on their UTF-16 code unit values
let arrSort = [1, 10, 99, 0, -2 , -78, 34];
let strSort = ['html', 'css', 'js'];

// const rt = arrSort.sort((a, b) => a - b);
// const ft = strSort.sort();

// console.log(arrSort);
// console.log(rt);

// console.log(ft);

// * Sorting string using localcompare (we can also use array.reverse).
// strSort.sort((x, y) => x.localeCompare(y));
// console.log(strSort);

// * array of objects -
let a = [
    { name: 'Punit', age: 45 },
  { name: 'Zoya', age: 28 },
  { name: 'Ananaya', age: 32 },
  { name: 'Jatin', age: 21 }
];

// console.log("Before sorting - ", a)

// a.sort((a, b) => a.age - b.age)

// console.log("After age sorting - ", a)

// a.sort((a, b) => a.name.localeCompare(b.name));

// console.log("After name sorting - ", a)