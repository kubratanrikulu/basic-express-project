const Blog = require("../models/blogs");

const blog_Index =(req, res) => {
    Blog.find().sort({ createdAt: -1 })
    .then((result) => {
      res.render("index", { title: "Anasayfa", blogs: result });
    })
    .catch((err) => {
      console.log(err);
    })
}
const blog_id =(req, res) => {
  const id = req.params.id;
  Blog.findById(id)
    .then((result) => {
      res.render("blog", { blog: result, title: "Detay" });
    })
    .catch((err) => {
      res.status(404).render("404", { title: "Error" });
    });
}
module.exports = {
    blog_Index,
    blog_id
}