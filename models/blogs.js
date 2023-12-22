const mongoose  = require('mongoose')
const Schema = mongoose.Schema

const blogSchema = new Schema({
title: {
    type: String,
    require: true
},
short :{
    type: String,
    require
},
long: {
    type: String,
    require
}
}, {timestamps: true})

const Blog = mongoose.model('Blog', blogSchema)

module.exports = Blog