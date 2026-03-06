const express= require("express")
const app = express();
const mongoose= require("mongoose");
const path= require("path");
const Chat = require("./models/chat");

app.set("views", path.join(__dirname,"views"));
app.set("view engine","ejs")
main()
.then(()=>{
  console.log("connection successful")

})
.catch((err)=>{console.log(err);})

async function main(){
  await mongoose.connect("mongodb://localhost:27017/whatsapp");
}

let chat1= new Chat({

  from: "Neha",
  to : "Priya",
  message: "Send me the notes bruhhh",
  created_at: new Date(),
});

chat1.save().then((res)=>{
  console.log(res);
});


//Index Route
app.get("/chats",async (req,res)=>{
   let chats= await Chat.find();
   console.log(chats);
   res.send("Working")
})

app.get("/",(req,res)=>{
    res.send("root node is working");
});

app.listen((8080),()=>{
    console.log("server is running on port http://localhost:8080");
});







