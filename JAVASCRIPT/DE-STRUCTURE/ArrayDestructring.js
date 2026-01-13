let Subjects = ["javascript", "C++", "DBMS", "OS", "CN"];

// Example 1 - Syntax
    // let [js, cpp] = Subjects;

    // console.log(js);
    // console.log(cpp);

// Example - 2 Using , to skip element / syntax 2
    // let [n1, , n2] = ["Punit", "Rakesh", "Raghav"];
    // console.log(n1);
    // console.log(n2);

// Example - 3 Assigning rest elements to one variable using rest operator.
    // let [first, ...last] = Subjects;
    // console.log(last);

// Example 4: Values can also be swapped using destructuring assignment as below:
    // let [firstSub, lastSub] = Subjects;
    // console.log(firstSub);
    // console.log(lastSub);

    // Swapping
    // [firstSub, lastSub] = [lastSub, firstSub];
    // console.log(firstSub);
    // console.log(lastSub);

// Example 5: Extracting data returned from function
    // function CallMe(){
    //     return ["Oxygen", "Hydrogen", "Sodium"];
    // }

    // let [element1, element2] = CallMe();
    // console.log(element1);
    // console.log(element2);