const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
  name: {
    type: String,
    maxlength: 50
  },
  email: {
    type: String,
    trim: true,
    unique: 1
  },
  password: {
    type: String,
    minlength: 5
  },
  lastname: {
    type: String,
    maxlength: 50
  },
  role: {
    type: Number,
    default: 0
  },
  image: String,
  token: {  // token을 이용해서 나중에 유효성 같은 거 관리
    type: String
  },
  tokenExp: { // token 사용할 수 있는 유효 기간
    type: Number
  }
})

// schema를 model로 감싸준다
const User = mongoose.model('User', userSchema) // 모델의 이름, 스키마

module.exports = { User }