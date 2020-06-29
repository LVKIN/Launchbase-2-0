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
  const data = {  
    avatar_link: "https://rocketseat.com.br/static/images/logo-rocketseat.svg",
    name: "Rocketseat",
    site: "rocketseat.com.br",
    role: 'In the midst of so much information and the amount of tools that come up every day, you need someone to take you in the right direction.',
    desccription: "Our core technologies are:",
    links: [
      {
        name: "Instagram",
        url: "https://instagram.com/rocketseat"
      },
      {
        name: "Github",
        url: "https://github.com/rocketseat"
      },
      {
        name: "Facebook",
        url: "https://facebook.com/rocketseat"
      }
    ]
  }

  return res.render("about", { data })
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