let url = "https-notFound";

// * Using Fetch - 
async function fetchCheck(){
    try{
        let res = await fetch(url);
        console.log("Fetch Resolved!");
        console.log("Status: ", res.status);
        
        if(!res.ok){
            throw new Error(`Http error code: ${res.status}`);
        }
        
        let data = await res.json();
        console.log("Data", data);
    }
    catch(err) {
        console.error("Error: ", err);
        // throw err; // To make promise reject
    }
}
let promise1 = fetchCheck();

// * Using Axios - 
async function axiosCheck(){
    try{
        let res = await axios.get(url);
        console.log(res);
        console.log(res.status);
    }
    catch(err) {
        console.error(`Error - ${err}`);
        console.error(`Status - ${err.response?.status}`);        
        // throw err; 
    }
}

let promise2 = axiosCheck();