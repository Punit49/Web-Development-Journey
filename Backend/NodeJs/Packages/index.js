const figlet = require("figlet");

figlet("Punit Sahu", (err, data) => {
    if(err) console.error(err);
    console.log(data);
});