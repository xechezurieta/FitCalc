const { matchedData } = require('express-validator')
const { userDayMealsModel, usersModel } = require('../models')
const { handleHttpError } = require('../utils/handleError')

const getAllDayMeals = async (req, res) => {
  try {
    const data = await userDayMealsModel.find()
    res.send({ data })
  } catch (e) {
    handleHttpError(res, 'ERROR_GET_ALL_DAY_MEALS')
  }
}
const addUserDayMeal = async (req, res) => {
  try {
    const body = matchedData(req)
    const data = await userDayMealsModel.create(body)
    res.send({ data })
  } catch (e) {
    handleHttpError(res, 'ERROR_ADD_USER_DAY_MEAL')
  }
}

const updateUserDayMeal = async (req, res) => {
  try {
    req = matchedData(req)
    const { id, ...body } = req
    const data = await userDayMealsModel.findByIdAndUpdate(id, body, { new: true })
    res.send({ data })
  } catch (e) {
    handleHttpError(res, 'ERROR_UPDATE_USER_DAY_MEAL')
  }
}

const findUserDayMeal = async (req, res) => {
  try {
    const { id } = matchedData(req)
    const data = await userDayMealsModel.findById(id)
    res.send({ data })
  } catch (e) {
    handleHttpError(res, 'ERROR_FIND_USER_DAY_MEAL')
  }
}

const findUserDayMealsByUser = async (req, res) => {
  try {
    const body = matchedData(req)
    const user = await usersModel.findById(body.id)
    const userDayMeals = await userDayMealsModel.find({ user_id: body.id })
    res.send({ user, userDayMeals })
  } catch (e) {
    handleHttpError(res, 'ERROR_FIND_USER_DAY_MEALS_BY_USER')
  }
}

const deleteUserDayMeal = async (req, res) => {
  try {
    const { id } = matchedData(req)
    const deleted = await userDayMealsModel.delete({ _id: id })
    res.send({ data: deleted, deleted: true })
  } catch (e) {
    handleHttpError(res, 'ERROR_DELETE_USER_DAY_MEAL')
  }
}

module.exports = { getAllDayMeals, addUserDayMeal, updateUserDayMeal, findUserDayMealsByUser, findUserDayMeal, deleteUserDayMeal }
