const express = require('express')
const nunjunks = require('nunjucks')

const server = express()

server.use(express.static('public'))

server.set("view engine", "njk")

nunjunks.configure("views", {
  express:server
})

server.get("/", function (req, res){
  return res.render("index")
})

server.get("/projects", function(req, res){
  return res.render("projects")
})

server.listen(5000, function(){
  console.log("Server is running")
})