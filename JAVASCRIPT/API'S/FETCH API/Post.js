// ? Post Request 
let URL1 = "https://jsonplaceholder.typicode.com/posts";
let URL2 = ("https://jsonplaceholder.typicode.com/posts/5");

let options = {
    method: "POST",
    headers: {
        "Content-type" : "application/json"
    },
    body: JSON.stringify({
        title: "Punit1",
        body: "Sahu2",
        userId: 101,
    }),
};

// * Promises Chaining Example - 

let t1 = performance.now();

    fetch(URL1, options)
    .then((res) => res.json() )
    .then((json) => console.log(json));

let t2 = performance.now();
console.log(t2 - t1);

let t3 = performance.now();

    const MyAsync = async () => {
        let FetchedApi = await fetch(URL2);
        let Response = await FetchedApi.json();
        console.log(Response);
    };

    MyAsync();

// * Async Is Fast - 
let t4 = performance.now();
console.log(t4 - t3);