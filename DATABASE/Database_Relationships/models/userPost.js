// Handling Deletion -

const mongoose = require("mongoose");
const { Schema } = mongoose;

main().then( console.log("connection succesfull") ).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/relationDemo');
}

const userSchema = new Schema({
    username: String,
    posts: [
        {
            type: Schema.Types.ObjectId,
            ref: "Post"
        }
    ]
});

const postSchema = new Schema({
    content: String,
});

const Post2 = mongoose.model("Post2", postSchema);
const User = mongoose.model("User", userSchema);

const addData = async () => {
    let user1 = new User({
        username: "Punit55"
    });

    let posts = await Post2.insertMany([{
            content: "Hello world"
        }, {
            content: "Good morning"
        }, {
            content: "What's up?"
        }
    ]);

    user1.posts.push(...posts);
    let result = await user1.save(); 
    console.log(result);
}

// addData();

// Delete data
const deleteData = async () => {
    let id = "69a7c14b0c84900a3fb4feb3";
    let user = await User.findByIdAndDelete(id);
    let posts = user.posts;
    
    posts.forEach(async (postId) => {
        let post = await Post2.findByIdAndDelete(postId.toString());
    });
}

deleteData();