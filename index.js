const express = require('express')
const app = express()
const port = 5050
const bodyParser = require('body-parser')

const config = require('./config/key')

const { User } = require('./models/User')

// application/x-www-form-urlencoded 이렇게 된 데이터를 분석해서 가져올 수 있게 한다
app.use(bodyParser.urlencoded({ extended: true }))
// application/json 이렇게 된 데이터를 분석해서 가져올 수 있게 한다
app.use(bodyParser.json())

const mongoose = require('mongoose')
mongoose.connect(config.mongoURI, {})
  .then(() => console.log('MongoDB conntcted...'))
  .catch(err => console.log(err))


app.get('/', (req, res) => {
  res.send('Hello World!g')
})

app.post('/register', (req, res) => {
  // 회원가입할 때 필요한 정보들을 client에서 가져오면 그것들을 데이터베이스에 넣어준다.
  const user = new User(req.body)
  //save()는 mongodb에서 오는 메서드
  user.save((err, userInfo) => {
    if (err) return res.json({ success: false, err }) // client에 에러가 있다고 json 형식으로 전달
    return res.status(200).json({
      success: true
    })
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})