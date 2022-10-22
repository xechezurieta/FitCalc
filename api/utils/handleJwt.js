const jwt = require('jsonwebtoken')
const JWT_SECRET = process.env.JWT_SECRET

const signToken = ({ email, name, surnames }) => {
  return jwt.sign({ email, name, surnames },
    JWT_SECRET,
    { expiresIn: '24h' })
}

const verifyToken = (token) => {
  try {
    return jwt.verify(token, JWT_SECRET)
  } catch (e) {
    return null
  }
}

module.exports = { signToken, verifyToken }
