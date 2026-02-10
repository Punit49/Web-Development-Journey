const { faker } = require("@faker-js/faker");
const mysql = require("mysql2");

// Function to get random user using faker package.
const getRandomUser = () => {
  return [
    faker.string.uuid(),
    faker.internet.username(),
    faker.internet.email(),
    faker.internet.password(),
  ]
}

// Creating a conncetion to MySQL DataBase.
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'delta_app',
  password: 'Punit1234!@'
});

// Inserting single User data -
    // let query = "INSERT INTO user VALUES (?, ?, ?, ?)";
    // let userData = ["123", "123_newuser", "abc@gmail.com", "abc"];

    // try {
    //     connection.query(query, userData, (err, result) => {
    //         if(err) throw err;
    //         console.log(result);
    //     }); 
    // } catch (error) {
    //     console.error(err);
    // }

// Inserting Multiple Users at once -
// let query2 = "INSERT INTO user VALUES ?";
// let users = [
//     ["123b", "123_newuserb", "abc@gmail.comb", "abcb"],
//     ["123c", "123_newuserc", "abc@gmail.comc", "abcc"]
// ]; 

// try {
//     connection.query(query2, users, (err, result) => {
//         if(err) throw err;
//         console.log(result);
//     }); 
// } catch (error) {
//     console.error(err);
// }

// Inserting Random users data in bulk -
let query3 = "INSERT INTO user VALUES ?";
let data = [];

for(let i = 1; i <= 100; i++){
    data.push(getRandomUser());
}

try{
    connection.query(query3, [data], (err, result) => {
        if(err) throw err;
        console.log(result);
    })
} catch(err) {
    console.error(err);
}

connection.end();