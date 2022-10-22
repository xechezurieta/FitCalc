const bcrypt = require('bcrypt')

const encrypt = async (plainPassword) => {
  const hash = await bcrypt.hash(plainPassword, 10)
  return hash
}

const compare = async (plainPassword, hashedPassword) => {
  return await bcrypt.compare(plainPassword, hashedPassword)
}

module.exports = { encrypt, compare }
