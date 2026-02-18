const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

main().then(() => console.log("Connection Successful"))
      .catch(err => console.log(err));

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

Chat.insertMany([
  {
    from: "Punit",
    to: "apnacollege",
    message: "Hello World",
    created_at: new Date()
  },
  {
    from: "Riya",
    to: "Aman",
    message: "Hey Aman, did you finish the assignment?",
    created_at: new Date()
  },
  {
    from: "Aman",
    to: "Riya",
    message: "Almost done, will submit tonight.",
    created_at: new Date()
  },
  {
    from: "Neha",
    to: "Rahul",
    message: "Are we still meeting tomorrow?",
    created_at: new Date()
  },
  {
    from: "Rahul",
    to: "Neha",
    message: "Yes, 10 AM at the cafe ☕",
    created_at: new Date()
  },
  {
    from: "Karan",
    to: "Sneha",
    message: "Can you share the notes from today’s class?",
    created_at: new Date()
  },
  {
    from: "Sneha",
    to: "Karan",
    message: "Sure, I’ll send them in some time.",
    created_at: new Date()
  },
  {
    from: "Arjun",
    to: "Meera",
    message: "Happy Birthday! 🎉",
    created_at: new Date()
  },
  {
    from: "Meera",
    to: "Arjun",
    message: "Thank you so much 😊",
    created_at: new Date()
  },
  {
    from: "System",
    to: "All",
    message: "Server maintenance scheduled at midnight.",
    created_at: new Date()
  }
]);

// Chat.deleteMany({}).then(res => {
//     console.log(res);
// }).catch(err => {
//     console.log(err);
// })