const fs =require('fs')
const data = require('./data.json')

exports.post = function(req, res){
  const keys = Object.keys(req.body)
  for (key of keys){
    if (req.body[key] == ""){
      return res.render("fields")
    }
  }
  let { avatar_url, name, birth, subjects, class_type, education } = req.body

  birth = Date.parse(birth)
  const id = Number(data.teachers.length + 1)
  const created_at = Date.now()

  data.teachers.push({
    id,
    avatar_url,
    name,
    birth,
    education,
    class_type,
    subjects,
    created_at
  })
  fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err){
    if (err){
      return res.send("write file error")
    }
    return res.redirect("/teachers")
  })
}