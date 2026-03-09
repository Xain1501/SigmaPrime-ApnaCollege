const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const Chat = require("./models/chat");
const methodOverride = require("method-override");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

main()
  .then(() => {
    console.log("connection successful");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect("mongodb://localhost:27017/whatsapp");
}

let chat1 = new Chat({
  from: "Neha",
  to: "Priya",
  message: "Send me the notes bruhhh",
  created_at: new Date(),
});

chat1.save().then((res) => {
  console.log(res);
});

//Index Route
app.get("/chats", async (req, res) => {
  let chats = await Chat.find();
  console.log(chats);
  res.render("index.ejs", { chats });
});

app.get("/", (req, res) => {
  res.send("root node is working");
});

//New Route
app.get("/chats/new", (req, res) => {
  res.render("new.ejs");
});

//Create Route
app.post("/chats/new", (req, res) => {
  let { from, to, msg } = req.body;

  let newChat = new Chat({
    from: from,
    to: to,
    message: msg,
    created_at: new Date(),
  });

  newChat
    .save()
    .then((res) => {
      console.log("chat was saved");
    })
    .catch((err) => {
      console.log(err);
    });

  console.log(newChat);
  res.redirect("/chats");
});

// Edit Route
app.get("/chats/:id/edit", async (req, res) => {
  let { id } = req.params;
  let chat = await Chat.findById(id);
  res.render("edit.ejs", { chat });
});

app.put("/chats/:id", async (req, res) => {
  let { id } = req.params;
  let { msg } = req.body;
  let updatedChat = await Chat.findByIdAndUpdate(
    id,
    { message: msg },
    { runValidators: true, new: true },
  );

  console.log(updatedChat);
  res.redirect("/chats");
});

app.listen(8080, () => {
  console.log("server is running on port http://localhost:8080/chats");
});
