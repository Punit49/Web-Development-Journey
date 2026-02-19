const mongoose = require("mongoose");

const listingSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
    },
    image: {
        type: String,
        default: "https://cdni.iconscout.com/illustration/premium/thumb/house-illustration-svg-download-png-3960659.png",
        set: (v) => 
            v === "" ? "https://cdni.iconscout.com/illustration/premium/thumb/house-illustration-svg-download-png-3960659.png" : v 
    },
    price: {
        type: Number,
        default: 0
    },
    location: {
        type: String,
    },
    country: {
        type: String
    }
})

const Listing = mongoose.model("Listing", listingSchema);

module.exports = Listing;