const express = require('express')
const { addUserDayMeal, updateUserDayMeal, deleteUserDayMeal, findUserDayMeal, findUserDayMealsByUser, getAllDayMeals } = require('../controllers/userDayMeals')
const { validatorAddUserDayMeal, validatorFindUserDayMeal, validatorUpdateUserDayMeal, validatorDeleteUserDayMeal } = require('../validators/userDayMeals')
const router = express.Router()

router.post('/', validatorAddUserDayMeal, addUserDayMeal)
router.post('/user', validatorFindUserDayMeal, findUserDayMealsByUser)
router.get('/', getAllDayMeals)
router.get('/:id', validatorFindUserDayMeal, findUserDayMeal)
router.put('/:id', validatorUpdateUserDayMeal, updateUserDayMeal)
router.delete('/:id', validatorDeleteUserDayMeal, deleteUserDayMeal)

module.exports = router
