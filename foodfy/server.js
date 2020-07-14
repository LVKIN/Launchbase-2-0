const express = require('express')
const nunjucks = require('nunjucks')

const server = express()
const data = require('./data.js')

server.use(express.static('public'))

server.set("view engine", "njk")

nunjucks.configure("views", {
  express:server,
  autoscape: false,
  noCache: true
})


server.get("/", function(req, res){
  return res.render("index", { items: data })
})

server.get("/sobre-nos", function(req, res){
  return res.render("about")
})

server.get("/receitas", function(req, res){
  return res.render("recipes", { items: data })
})
server.get("/receita", function(req, res){
  const id = req.query.id
  const recipe = data.find(function(recipe){
    return recipe.id == id
  })
  return res.render("recipe", {item: recipe})
})

server.listen(5050, function(){
  console.log("server is running!");
})