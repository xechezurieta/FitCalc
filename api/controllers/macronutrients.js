const { matchedData } = require('express-validator')
const { macronutriensModel, usersModel } = require('../models')

const addMacronutrients = async (req, res) => {
  const body = matchedData(req)
  const data = await macronutriensModel.create(body)
  const user = await usersModel.findById(data.user_id)
  if (user.macronutrients) {
    const userCurrentMacronutrients = await macronutriensModel.findById(user.macronutrients)
    if (data.date >= userCurrentMacronutrients.date) {
      const updatedUser = await usersModel.findByIdAndUpdate(user.id, { macronutrients: data._id }, { new: true })
      res.send({ data, updatedUser })
    } else {
      res.send({ data, user })
    }
  } else {
    const updatedUser = await usersModel.findByIdAndUpdate(user.id, { macronutrients: data._id }, { new: true })
    res.send({ data, updatedUser })
  }
}

module.exports = { addMacronutrients }
