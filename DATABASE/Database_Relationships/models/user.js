const mongoose = require("mongoose");
const { Schema } = mongoose;

main().then( console.log("connection succesfull") ).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/relationDemo');
}

// One to Few Relationship -
const userSchema = new Schema({
    username: String,
    address: [
        {   _id: false,
            location: String,
            city: String
        }
    ]
});

const User = mongoose.model("User", userSchema);

const addUser = async () => {
    let user1 = new User({
        username: "Ironman45",
        address: [
            {
                location: "212 Baker Street",
                city: "london"
            }
        ]
    });

    user1.address.push(
        {
            location:  "Q32 wallstreat",
            city: "Berlin"
        }
    )

    let result = await user1.save();
    console.log(result);
}

addUser();
