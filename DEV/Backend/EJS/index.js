const express = require("express");
const app=express();
const path = require("path");

const port=8000;

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));

//static files usage for css and js
app.use(express.static(path.join(__dirname,"public")));

app.get("/",(req,res)=>{
res.render("index.ejs");
});

app.get("/ig/:username", (req, res)=>{
const instadata = require("./data.json");
const { username } = req.params;  
const data = instadata[username];
if(!data)
{
  return res.render("Error.ejs",{data})
}

res.render("index.ejs",{data,posts:data.posts})
});


app.listen(port,()=>{
  console.log("http://localhost:8000/");
});