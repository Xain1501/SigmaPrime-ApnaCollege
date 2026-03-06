const mongoose = require("mongoose");
const Chat = require("./models/chat");

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

main()
.then(() => {
  console.log("connection successful");
})
.catch((err) => {
  console.log(err);
});

let allChats = [
  {
    from: "neha",
    to: "preeti",
    message: "send me notes for the exam",
    created_at: new Date(),
  },
  {
    from: "rohit",
    to: "mohit",
    message: "teach me JS callbacks",
    created_at: new Date(),
  },
  {
    from: "anit",
    to: "sumit",
    message: "all the best!",
    created_at: new Date(),
  },
];

Chat.insertMany(allChats)
.then((res) => {
  console.log(res);
})
.catch((err) => {
  console.log(err);
});