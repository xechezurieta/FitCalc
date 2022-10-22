const { matchedData } = require('express-validator')
const { usersModel } = require('../models')
const { handleHttpError } = require('../utils/handleError')
const { signToken } = require('../utils/handleJWT')
const { compare, encrypt } = require('../utils/handlePassword')

const registerUser = async (req, res) => {
  try {
    const body = matchedData(req)
    const password = await encrypt(body.password)
    const hashedBody = { ...body, password }
    const dataUser = await usersModel.create(hashedBody)
    dataUser.set('password', undefined, { strict: false })
    const tokenInfo = {
      email: dataUser.email,
      name: dataUser.name,
      surnames: dataUser.surnames
    }
    const data = {
      user: dataUser,
      token: signToken(tokenInfo)
    }
    res.status(201)
    res.send({ data })
  } catch (e) {
    handleHttpError(res, 'ERROR_REGISTER_USER')
  }
}

const loginUser = async (req, res) => {
  try {
    const body = matchedData(req)
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
    user.set('password', undefined, { strict: false })
    const tokenInfo = {
      email: user.email,
      name: user.name,
      surnames: user.surnames
    }
    const data = {
      token: signToken(tokenInfo),
      user
    }
    res.send({ data })
  } catch (e) {
    handleHttpError(res, 'ERROR_LOGIN_USER')
  }
}

module.exports = { registerUser, loginUser }
