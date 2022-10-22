const { usersModel } = require('../models')
const { handleHttpError } = require('../utils/handleError')
const { compare, encrypt } = require('../utils/handlePassword')

const registerUser = async (req, res) => {
  try {
    const body = req.body
    const password = await encrypt(body.password)
    const hashedBody = { ...body, password }
    const dataUser = await usersModel.create(hashedBody)
    const data = {
      user: dataUser
    }
    res.status(201)
    res.send({ data })
  } catch (e) {
    handleHttpError(res, 'ERROR_REGISTER_USER')
  }
}

const loginUser = async (req, res) => {
  try {
    const body = req.body
    const user = await usersModel.findOne({ email: body.email })
    if (!user) {
      handleHttpError(res, 'ERROR_LOGIN_USER:USER_NOT_EXISTS', 404)
      return
    }
    const comparePassword = await compare(body.password, user.password)
    if (!comparePassword) {
      handleHttpError(res, 'ERROR_LOGIN_USER:INVALID_PASSWORD', 401)
      return
    }
    const data = {
      user
    }
    res.send({ data })
  } catch (e) {
    handleHttpError(res, 'ERROR_LOGIN_USER')
  }
}

module.exports = { registerUser, loginUser }
