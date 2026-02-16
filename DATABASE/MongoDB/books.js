const mongoose = require("mongoose");

main().then(res => {
    console.log("Connceted to amazon DB");
}).catch(err => {
    console.log(err);
})

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/amazon");
}

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minLength: 10
    },
    author: {
        type: String
    }, 
    price: {
        type: Number,
        default: 199,
        min: [1, 'Price Must be at least 1, got {VALUE}']
    },
    category: {
        type: String,
        enum: ["non-fiction", "fiction"]
    }
});

const Book = mongoose.model("Book", bookSchema);

// let book1 = new Book({
//     title: "Dopamine Detox",
//     author: "Unknown", 
//     price: "199",
//     category: "non-fiction"
// })

// book1.save().then(res => {
//     console.log(res);
// }).catch(err => {
//     console.log(err);
// })

Book.findByIdAndUpdate("6993116701599b9fa797924e", {price: -400}, {runValidators: true}).then(res => {
    console.log(res);
}).catch(err => {
    console.log(err.errors.price.properties.message);
})
