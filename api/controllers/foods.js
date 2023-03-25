const { matchedData } = require('express-validator')
const { foodsModel } = require('../models')
const { handleHttpError } = require('../utils/handleError')

const addFood = async (req, res) => {
  try {
    const body = matchedData(req)
    const data = await foodsModel.create(body)
    res.send({ data })
  } catch (e) {
    handleHttpError(res, 'ERROR_ADD_FOOD')
  }
}

const updateFood = async (req, res) => {
  try {
    req = matchedData(req)
    const { id, ...body } = req
    const data = await foodsModel.findByIdAndUpdate(id, body, { new: true })
    res.send({ data })
  } catch (e) {
    handleHttpError(res, 'ERROR_UPDATE_FOOD')
  }
}

const findFood = async (req, res) => {
  try {
    const { id } = matchedData(req)
    const data = await foodsModel.findById(id)
    res.send({ data })
  } catch (e) {
    handleHttpError(res, 'ERROR_FIND_FOOD')
  }
}

const deleteFood = async (req, res) => {
  try {
    const { id } = matchedData(req)
    const deleted = await foodsModel.delete({ _id: id })
    res.send({ data: deleted, deleted: true })
  } catch (e) {
    handleHttpError(res, 'ERROR_DELETE_FOOD')
  }
}

module.exports = { addFood, updateFood, findFood, deleteFood }
