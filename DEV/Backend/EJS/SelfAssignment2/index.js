const express =require("express");
const app= express();
const port =8000;
const path = require("path")

app.use(express.urlencoded({extended: true}));

app.use(express.json());

app.set("view engine","ejs")
app.set("views",path.join(__dirname,"views"));
app.set(express.static(path.join(__dirname, "public")));


app.get("/",(req,res)=>{
res.render("index")
console.log(req.query.username);

})

app.post("/",(req,res)=>{
res.render("index")
console.log(req.body.username);

})



app.listen(port,()=>{
  console.log("http://localhost:8000/");
})