// ? localStorage allows you to store data in the browser with no expiration. The data persists even after the browser is closed and reopened — until explicitly cleared.

// ? sessionStorage is similar to localStorage, but the data is only available for the duration of the page session. A session lasts as long as the browser tab is open — closing the tab deletes the data.


// ? IndexedDB - The indexedDB is an API used to store data inside the user's browser. indexedDB is more powerful than local storage and are useful for applications that requires to store large amount of the data. These applications can run more efficiency and load faster.

// ? Opening A DB - 
let openDb = indexedDB.open("MyDb", 21);

openDb.onsuccess = (e) => {
    console.log("Success:",e);
    let db = openDb.result;
    let transaction = db.transaction("students", "readwrite");
    let storeObject = transaction.objectStore("students");

    // * Insert date into DB - 
    // let request = storeObject.put({
    //     id: 29,
    //     name: 'King',
    //     email: 'virat@gmail.com',
    // });

    // * Get data from DB - 
    // let request = storeObject.delete(26);
    // console.log(request);
    
    // * Opening cursor - 
    let request = storeObject.openCursor();

    request.onsuccess = (e) => {
        let cursor = request.result;
        
        if(cursor){
            let {key, value} = cursor;
            console.log(key, value);
            cursor.continue();
        }
    }

    request.onerror = (e) => {
        console.log(e.target.error);   
    }
}

openDb.onupgradeneeded = (e) => {
    // ? Creating Table -
    let db = openDb.result;
    if(!db.objectStoreNames.contains("students")){
        let request = db.createObjectStore("students", {keyPath: "id"});
        request.createIndex("name", "name", {unique: false});
        request.createIndex("email", "email", {unique: true});
    }
}

openDb.onerror = (e) => {
    console.error("Error :", +e);
}