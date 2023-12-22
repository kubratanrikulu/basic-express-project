const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const Blog = require("./models/blogs");
const adminRoutes = require('./routes/adminRoutes')
const blogRoutes = require('./routes/blogRoutes')
require("dotenv").config();
const app = express();

const dbUrl = process.env.DB_URL;

mongoose
  .connect(dbUrl)
  .then(() => {
    app.listen(4000, () => {
      console.log("Server listening on port 4000");
    });
  })
  .catch((err) => {
    console.error("MongoDB bağlantı hatası:", err);
  });

app.use(express.static("public"));
app.use(express.urlencoded({extended: true}))
app.use(morgan("dev"));
app.set("view engine", "ejs");
// app.get('/add', (req, res) => {
//  const blog = new Blog({
//     title : 'yen yazı3',
//     short: 'kısa açıklama',
//     long: 'uzun açıklama'
//  })
//  blog.save()
//  .then((result) => {
//     res.send(result)
//  })
//  .catch ((err) => {
//     console.log(err);
//  })
// })

// app.get('/all', (req,res) => {
// Blog.find()
// .then ((result) => {
//     res.send(result)
// })
// .catch ((err) => {
// console.log(err)
// })
// })

app.get("/", (req, res) => {
 res.redirect('/blog')
});

app.use(adminRoutes)
app.use(blogRoutes)
app.get("/about", (req, res) => {
  res.render("about", { title: "Hakkımızda" });
});

app.get("/about-us", (req, res) => {
  res.redirect("/about");
});

app.get("/login", (req, res) => {
  res.render("login", { title: "Login" });
});

app.use((req, res) => {
  res.status(404).render("404", { title: "Error" });
});
