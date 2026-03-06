const port = 8000;
const path = require("path");

let posts = [
  { username: "xain saqib", content:"I am enjoying life" },
  { username: "zain Ahmed", content:"I am enjoying the suffering" },
  { username: "Ahmed saqib", content:"I am enjoying juice" },
];

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => res.redirect("/post"));

app.get("/post", (req, res) => {
  res.render("index", { posts });
});

app.post("/new", (req, res) => {
  const { username, content } = req.body;
  posts.push({ username, content });
  res.redirect("/post");
});


// app.post("/post",(req,res)=>{
// res.render("index")
// console.log(req.query.username);
// })

// app.get("/post/:id",(req,res)=>{
// res.render("index")
// console.log(req.query.username);
// })

// app.patch("/post/:id",(req,res)=>{
// res.render("index")
// console.log(req.query.username);
// })

// app.delete("/post/:id",(req,res)=>{
// res.render("index")
// console.log(req.query.username);
// })


app.listen(port,()=>{
  console.log("http://localhost:8000");
})

// get    /posts   to get data for all posts
// post   /posts   to add a new post
// Get    /post:id to get one post using Id 
// Patch  /post:id to get specific post
// Delete /post:id to delete a specific post