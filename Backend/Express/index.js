const express = require("express");
const app = express();

const PORT = 3000;

app.use((req, res) => {
    console.log("Request Received");
    let code = "<h1>Fruits</h1> <ul> <li>Apple</li> <li>Banana</li> </ul>";
    // res.send({name: "Punit", age: 21});
    res.send(code);
});

app.listen(PORT, () => {
    console.log(`Server Running On Port: ${PORT}`);
});