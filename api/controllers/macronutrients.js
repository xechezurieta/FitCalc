const { matchedData } = require('express-validator')
const { macronutriensModel, usersModel } = require('../models')
const { handleHttpError } = require('../utils/handleError')

const addMacronutrients = async (req, res) => {
  try {
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
  } catch (e) {
    handleHttpError(res, 'ERROR_ADD_MACRONUTRIENTS')
  }
}

const findMacronutrientsByUser = async (req, res) => {
  try {
    const body = matchedData(req)
    const user = await usersModel.findById(body.id)
    const userMacronutrients = await macronutriensModel.find({ user_id: body.id })
    res.send({ user, userMacronutrients })
  } catch (e) {
    handleHttpError(res, 'ERROR_FIND_MACRONUTRIENTS_USER')
  }
}

const updateMacronutrients = async (req, res) => {
  try {
    req = matchedData(req)
    const { id, ...body } = req
    const data = await macronutriensModel.findByIdAndUpdate(id, body, { new: true })
    res.send({ data })
  } catch (e) {
    handleHttpError(res, 'ERROR_UPDATE_MACRONUTRIENTS')
  }
}

const deleteMacronutrients = async (req, res) => {
  try {
    const { id } = matchedData(req)
    const matchedMacronutrients = await macronutriensModel.delete({ _id: id })
    res.send({ data: matchedMacronutrients, deleted: true })
  } catch (e) {
    handleHttpError(res, 'ERROR_DELETE_MACRONUTRIENTS')
  }
}

module.exports = { addMacronutrients, findMacronutrientsByUser, updateMacronutrients, deleteMacronutrients }
