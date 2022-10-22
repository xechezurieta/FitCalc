const express = require('express')
const { loginUser, registerUser } = require('../controllers/users')
const { validatorRegister, validatorLogin } = require('../validators/users')
const router = express.Router()

router.post('/register', validatorRegister, registerUser)
router.post('/login', validatorLogin, loginUser)

module.exports = router
