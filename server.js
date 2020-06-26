const express = require('express')
const nunjunks = require('nunjucks')

const server = express()
const projs = require("./data.js")

server.use(express.static('public'))

server.set("view engine", "njk")

nunjunks.configure("views", {
  express:server
})

server.get("/", function (req, res){
  return res.render("about")
})

server.get("/videos", function(req, res){
  return res.render("videos", {items: projs})
})

server.listen(5000, function(){
  console.log("Server is running")
})