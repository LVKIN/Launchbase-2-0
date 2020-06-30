const express = require('express')
const nunjunks = require('nunjucks')

const server = express()
const projs = require("./data.js")

server.use(express.static('public'))

server.set("view engine", "njk")

nunjunks.configure("views", {
  express:server,
  autoscape: false,
  noCache: true
})

server.get("/", function (req, res){
  const data = {
    avatar_link: "https://avatars0.githubusercontent.com/u/58537046?s=400&v=4",
    name: "Lucas Passos",
    role: "Systems Analysis and Development Student",
    description: 'Future Full-stack programmer',
    links: [
      {
        name: "Github",
        url: "https://github.com/LVKIN"
      },
      {
        name: "Twitter",
        url:"https://www.twitter.com/iae_neguinn"
      },
      {
        name: "Linkedin",
        url: "https://www.linkedin.com/in/lvkin/"
      }
    ]
  }

  return res.render("about", {item: data})
})

server.get("/videos", function(req, res){
  return res.render("videos", {items: projs})
})

server.get("/videos/preview", function(req, res){
  const id = req.query.id

  const video = projs.find(function(video){
  return video.id == id})

  if(!video){
    return res.send("Video not found!")
  }

  return res.render("preview", {item: video})
})

server.use(function(req, res){
  res.status(404).render("error-404")
})

server.listen(5000, function(){
  console.log("Server is running")
})