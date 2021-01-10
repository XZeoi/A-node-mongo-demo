// 注册、登陆、退出
const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.render('index.html')
})
router.get('/login', (req, res) => {
  res.render('login.html')
})