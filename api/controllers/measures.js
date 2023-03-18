const { matchedData } = require('express-validator')
const { usersModel, measuresModel } = require('../models')
const { handleHttpError } = require('../utils/handleError')

const addMeasures = async (req, res) => {
  try {
    const body = matchedData(req)
    const data = await measuresModel.create(body)
    const user = await usersModel.findById(data.user_id)
    if (user.measures) {
      const userCurrentMeasures = await measuresModel.findById(user.measures)
      if (data.date >= userCurrentMeasures.date) {
        const updatedUser = await usersModel.findByIdAndUpdate(user.id, { measures: data._id }, { new: true })
        res.send({ data, updatedUser })
      } else {
        res.send({ data, user })
      }
    } else {
      const updatedUser = await usersModel.findByIdAndUpdate(user.id, { measures: data._id }, { new: true })
      res.send({ data, updatedUser })
    }
  } catch (e) {
    handleHttpError(res, 'ERROR_ADD_MEASURES')
  }
}

const findMeasuresByUser = async (req, res) => {
  try {
    const body = matchedData(req)
    const user = await usersModel.findById(body.id)
    const userMeasures = await measuresModel.find({ user_id: body.id })
    res.send({ user, userMeasures })
  } catch (e) {
    handleHttpError(res, 'ERROR_FIND_MEASURES_USER')
  }
}

const updateMeasures = async (req, res) => {
  try {
    req = matchedData(req)
    const { id, ...body } = req
    const data = await measuresModel.findByIdAndUpdate(id, body, { new: true })
    res.send({ data })
  } catch (e) {
    handleHttpError(res, 'ERROR_UPDATE_MEASURES')
  }
}

const deleteMeasure = async (req, res) => {
  try {
    const { id } = matchedData(req)
    const { user_id: userId } = await measuresModel.findById(id)
    const deleted = await measuresModel.delete({ _id: id })
    const measuresList = await measuresModel.find({ user_id: userId })
    if (measuresList) {
      const latestMacronutrient = measuresList.reduce(function (a, b) { return a.date > b.date ? a : b })
      await usersModel.findByIdAndUpdate(userId, { measures: latestMacronutrient._id }, { new: true })
    }
    res.send({ data: deleted, deleted: true })
  } catch (e) {
    handleHttpError(res, 'ERROR_DELETE_MEASURE')
  }
}

module.exports = { addMeasures, findMeasuresByUser, updateMeasures, deleteMeasure }
