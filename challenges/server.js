const express = require('express')
const nunjucks = require('nunjucks')

const server = express()
const content = require('./data')

server.use(express.static('public'))

server.set("view engine", "njk")

nunjucks.configure("views", {
  express: server
})

server.get("/", function(req, res){
  return res.render("about")
})

server.get("/contents", function(req, res){
  return res.render("contents", {items: content})
})

server.use(function(req, res){
  res.status(404).render("error-404")
})

server.listen(5005, function(){
  console.log("server is running");
})