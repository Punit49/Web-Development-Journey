let arr = [1,2,3,4,5,6,7,8,9,10];

// ? FILTER - The filter() method creates a new array filled with elements that pass a test provided by a function, ignores empty elements
// ?          creates a shallow copy of a portion of a given array. Jo true hoga vhi pass hoga

// *if {} is used then we have to exciplitly return value, when () is used values will automatically returns.

    // * 1. {}
    // let newarr = arr.filter( (num) => {
    //     return 
    //     num > 6
    // }) 
    // console.log(newarr);

    // * 2. ()
    // let newarr = arr.filter( (num, arr) => (num > 4));
    // console.log(newarr);

    // * 3. Using foreach loop - as for each doesn't return anything.
    // let temp = [];
    // arr.forEach(element => {
    //    if(element > 4){
    //     temp.push(element);
    //    }
    // });
    // console.log(temp);

// * EXAMPLE-1
    // function canVote(age){
    //     return age > 18;
    // }

    // let filtered = [24, 17, 18, 20, 35].filter(canVote);
    // console.log(filtered);

// * EXAMPLE-2 - 
    const books = [
        { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
        { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
        { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
        { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
        { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
        { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
        { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
        { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
        { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
    ];

    // * 1 Books Whose genre is History.
    // let userbooks = books.filter( (bk) => (bk.genre == "History") );
    // console.log(userbooks);

    // * 2. Books Whose genre is history and publish date is 1995.
    // userbooks = books.filter( (bk) => { return bk.publish >= 1995 && bk.genre === "History"} );
    // console.log(userbooks);

// ? Combining Map, filter and Reduce Together - 
    // let evenArr = arr.filter((num) => num % 2 == 0)
    //                 .map((num) => num + 10)
    //                 .reduce((acc, cur) => acc + cur);
    // console.log(evenArr);