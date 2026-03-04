const mongoose = require("mongoose");
const { cursorTo } = require("node:readline");
const { Schema } = mongoose;

main().then( console.log("connection succesfull") ).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/relationDemo');
}

const orderSchema = new Schema({
    item: String,
    price: Number,
});

const customerSchema = new Schema({
    name: String,
    orders: [
        {
            type: Schema.Types.ObjectId,
            ref: "Order"
        }
    ],
});

// * Mongoose middlewares -
// customerSchema.pre("findOneAndDelete", async () => {
//     console.log("pre middleware");
// });

customerSchema.post("findOneAndDelete", async (customer) => {
    if(customer.orders.length) {
        let res = await Order.deleteMany({_id: { $in: customer.orders }});
        console.log(res);
    }
});

const Order = mongoose.model("Order", orderSchema);
const Customer = mongoose.model("Customer", customerSchema);

const addCustomers = async () => {
    let cust1 = new Customer({
        name: "John Wick", 
    })

    let order1 = await Order.findOne({item: "PeanutButter"});
    let order2 = await Order.findOne({item: "Choclate"});

    cust1.orders.push(order1);
    cust1.orders.push(order2);

    let res = await cust1.save();
    console.log(res);
};

// addCustomers();

// ? Populate method -
const findCustomers = async () => {
    let customers = await Customer.find({}).populate("orders");
    console.log(customers[0]);
}

// findCustomers();

// const addOrders = async () => {
//     let result = await Order.insertMany([{
//         item: "PeanutButter", 
//         price: 99    
//     }, {
//         item: "Apple", 
//         price: 49
//     }, {
//         item: "Choclate", 
//         price: 270
//     }]);

//     console.log(result);
// };

// addOrders();

// ? Handling Deletion
const addCust = async () => {
    let newCust = new Customer({
        name: "Spiderman"
    });

    let newOrder = new Order({
        item: "Pizza", 
        price: 149
    });

    newCust.orders.push(newOrder);
    await newCust.save();
    await newOrder.save();

    console.log("Customer Added");
}

// addCust();

const deleteCust = async () => {
    let id = "69a862ba51efe8cf6943cf02";
    let res = await Customer.findByIdAndDelete(id);
    console.log(res, "Deleted");
}

// deleteCust();