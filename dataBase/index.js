const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/groceryList', {useNewUrlParser: true});

const connection = mongoose.connection

connection.once('open', (err)=>{
  if(err) {
    throw err
  } else {
    console.log('Connected to MongoDB')
  }
})

let Schema = mongoose.Schema

let item = new Schema(
  {
    name: {type: String, unique: true},
    description: {type: String}
  },
  {collection: 'items'},
  {keyVersion: false},
)

module.exports = mongoose.model('items', item)