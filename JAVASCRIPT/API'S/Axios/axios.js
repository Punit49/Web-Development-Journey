// ? Axios is a library used for making http requests, it internally uses fetch and it does not need to parse into JSON.
let url = "https://randomuser.me/api/";

const axiosFunction = async () => {
    let res = await axios.get(url);
    console.log(res.data.results[0]);
}

// const promise1 = axiosFunction();

// ? Activity -
let results = document.querySelector("#results");
let btn = document.querySelector("#btn");

const getFact = async () => {
    try{
        let res = await axios.get("https://catfact.ninja/fact");
        results.textContent = res.data.fact;
    }
    catch(e) {
        console.error("Error: ", e);
    }
}

// btn.addEventListener('click',  () => {
//     getFact();
// });

// ? Headers
let url2 =  "https://icanhazdadjoke.com/";
let config = {
    headers: {
        'Accept': "application/json"
    }
}

const getJokes = async () => {
    try{
        let res = await axios.get(url2, config);
        console.log(res.data.joke);
    }
    catch(e) {
        console.error(e);
    }
}

getJokes();