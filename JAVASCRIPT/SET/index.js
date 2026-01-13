// ? a Set is a built-in object that allows you to store a collection of unique values, regardless of their data type (primitive or object). 

let set1 = new Set([10, 10, 30, 10]);
console.log(set1);

let set2 = new Set("Fooooooood");
console.log(set2)

// * Add 
set1.add(22);
set1.add(21);
console.log(set1);

// * Delete
console.log(set1.delete(10))
console.log(set1);

// * clear
// set1.clear();
// console.log(set1.size);

// * entries
// const setEntries = set1.entries();
// console.log(setEntries.next().value);
// console.log(setEntries.next().value);
// console.log(setEntries.next());
// console.log(setEntries.next());

// * has
// console.log(set1.has(30));

// * values - 
// console.log(set1.values());

