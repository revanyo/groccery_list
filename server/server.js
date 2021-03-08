const express = require('express')
const path = require('path')
const db = require('../dataBase/index.js')

const app = express()
const PORT = 3000

app.use(express.json())
app.use(express.static(path.join(__dirname, "..", '/public')))

app.get('/list', (req, res)=>{
    db.find((err, data)=>{
      if(err) {
        res.status(400)
      } else {
        res.status(201)
        res.send(data)
      }
    })
})

app.post('/list', (req, res)=>{
    const item = {
        name: req.body.name,
        description: req.body.description
    }
    db.create(item, (err, data)=>{
        if(err) {
            res.status(400)
        }
        else {
            res.status(201)
            res.send(data)
        }
    })
})


app.listen(PORT, ()=>{
    console.log('Listening on', PORT)
})
