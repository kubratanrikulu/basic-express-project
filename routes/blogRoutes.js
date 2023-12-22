const express = require('express')
const router = express.Router()
const Blog = require("../models/blogs");
const blogController = require('../controllers/blogController')
router.get('/blog', blogController.blog_Index)
router.get("/blog/:id", blogController.blog_id);

module.exports = router