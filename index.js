const express = require('express')
const app = express()
const port = 5050

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://whyyouarei:614map@boiler-plate.hamkfl8.mongodb.net/?retryWrites=true&w=majority', {})
  .then(() => console.log('MongoDB conntcted...'))
  .catch(err => console.log(err))


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})