// ? Fetch API - Provides interface for making HTTP requests and processing the responses, way to retrieve resources from a server. It returns a Promise that resolves to a Response object, encapsulating the server’s response to your request.
// ? fetch() only rejects the promise on network errors — not on HTTP errors.
// ? Headers -  HTTP headers provide additional information to both the client and the server.
let para = document.querySelector(".para");
let btn = document.querySelector(".btn");

// * Get - By default with url only, it will be a get request - 
    const url  = "https://catfact.ninja/";
    async function fetchFuntion(){
        console.log("getting data....");
        let response = await fetch(url);
        let data = await response.json();
        console.log(data);
        para.innerText = data;
    }

    fetchFuntion()

    // ? Doing Same with promise chaining - 
        function funcitonFecth(){
            console.log("getting data....");
            fetch(url).then((res) => {
                console.log(res);                
                return res.json();
            }).then((data) => {
                console.log(data);
                para.innerText = data[1].text;
            })
        }

        funcitonFecth();

// * Post Rquest
        jsonData = {
            key1: "Value1",
            Key2: "Value2"
        };

        const options = {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(jsonData)
        }

        const postURL = "https://api.restful-api.dev/objects";

        async function postRequest(){
            let response = await fetch(postURL, options);
            let data = await response.json();
            console.log("response from postApi");
            let idData = data.id;
            console.log(data);    
            console.log("Parsed Data BY JSON -");
            console.log(response);  
            
            let getresponse = await fetch(`https://api.restful-api.dev/objects?id=${idData}`);
            console.log(getresponse);
            let getdata = await getresponse.json();
            console.log(getdata);
        }

        // postRequest();
        // jsonData = {
        //     key1: "Value1",
        //     Key2: "Value2"
        // };

        // const options = {
        //     method: "POST",
        //     headers: {
        //         'content-type': 'application/json'
        //     },
        //     body: JSON.stringify(jsonData)
        // }

        // const postURL = "https://api.restful-api.dev/objects";

        // async function postRequest(){
        //     let response = await fetch(postURL, options);
        //     let data = await response.json();
        //     console.log("response from postApi");
        //     let idData = data.id;
        //     console.log(data);    
        //     console.log("Parsed Data BY JSON -");
        //     console.log(response);  
            
        // }

        // postRequest();

// ? Get Request to get user data - 
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(data => {
            let li = `<tr><th>Name</th><th>Email</th></tr>`;

            data.forEach(ele => {
                li = li + `<tr>
                       <td>${ele.name}</td>
                       <td>${ele.email}</td>
                    </tr>`
            });

            document.getElementById("tb").innerHTML = li;
        });