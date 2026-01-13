// ? JSON - It stands for JavaScript Object Notation, is a lightweight, text-based data format used to represent structured data. It is primarily used for transmitting data between a server and a web application, or for storing data in files and databases. It is Array of Objects.
// ? In JSON all keys are strings while in objects they are not strings, does not have undefined
// ? By default JSON's data is in string.

// ! Characteristics of JSON
// * 1. Human-readable and writable: JSON is easy to read and write.
// * 2. Lightweight text-based data interchange format: JSON is simpler to read and write when compared to XML.
// * 3. Widely used: JSON is a common format for data storage and communication on the web.
// * 4. Language-independent: Although derived from JavaScript, JSON can be used with many programming languages.

// ! JSON METHODS - 
    // ? CONVERTING JSON TEXT TO JS OBJECT [json.parse()] - 
    let JsonData = '{"model":[{"carName":"Baleno","brandName":"Maruti" }, {"carName":"Aura","brandName":"Hyndai" }, {"carName":"Nexon","brandName":"Tata" }]}';

    console.log(JsonData);
    let jsObject = JSON.parse(JsonData);
    console.log(jsObject);

    console.log(`The Car Name is ${jsObject.model[1].carName} And BrandName is ${jsObject.model[1].brandName}`);
    
    // ? How do you convert a JavaScript object to a JSON string?