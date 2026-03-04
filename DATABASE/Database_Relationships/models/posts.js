const mongoose = require("mongoose");
const { Schema } = mongoose;

main().then( console.log("connection succesfull") ).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/relationDemo');
}

const userSchema = new Schema({
    username: String,
    email: String
});

const postSchamea = new Schema({
    content: String, 
    likes: Number,
    user: {
        type: Schema.Types.ObjectId, 
        ref: "User"
    }
});

const User = mongoose.model("User", userSchema);
const Post = mongoose.model("Post", postSchamea);

const addData = async () => {
    let user1 = new User({
        username: "drdomm24",
        email: "drdomm24@gmail.com"
    });

    let post1 = new Post({
        content: "Hello World",
        likes: 99
    });

    post1.user = user1;

    let res = await user1.save();
    let res2 = await post1.save();
    
    console.log(res);
    console.log(res2);
}

addData();

const addData2 = async () => {
    let user1 = await User.findOne({username: "drdomm24"});
    console.log(user1);

    let post2 = new Post({
        content: "Good Bye!",
        likes: 18
    });

    post2.user = user1;

    let res = await post2.save();
    console.log(res);
}

addData2();

const getData = async () => {
    let postData = await Post.find().populate("user"); 
    console.log(postData);
}

getData();