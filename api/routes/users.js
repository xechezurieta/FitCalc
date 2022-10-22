const express = require('express')
const { loginUser, registerUser } = require('../controllers/users')
const router = express.Router()

router.post('/register', registerUser)
router.post('/login', loginUser)

module.exports = router
