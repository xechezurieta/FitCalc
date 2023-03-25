const { check } = require('express-validator')
const validateResults = require('../utils/handleValidator')

const validatorAddUserDayMeal = [
  check('date')
    .exists()
    .isDate(),
  check('breakfast.*.name'),
  check('breakfast.*.brand'),
  check('breakfast.*.quantity')
    .isNumeric(),
  check('breakfast.*.calories')
    .isNumeric(),
  check('breakfast.*.fats')
    .isNumeric(),
  check('breakfast.*.proteins')
    .isNumeric(),
  check('breakfast.*.carbohydrates')
    .isNumeric(),
  check('breakfast.*.food_id')
    .isMongoId(),
  check('launch.*.name'),
  check('launch.*.brand'),
  check('launch.*.quantity')
    .isNumeric(),
  check('launch.*.calories')
    .isNumeric(),
  check('launch.*.fats')
    .isNumeric(),
  check('launch.*.proteins')
    .isNumeric(),
  check('launch.*.carbohydrates')
    .isNumeric(),
  check('launch.*.food_id')
    .isMongoId(),
  check('dinner.*.name'),
  check('dinner.*.brand'),
  check('dinner.*.quantity')
    .isNumeric(),
  check('dinner.*.calories')
    .isNumeric(),
  check('dinner.*.fats')
    .isNumeric(),
  check('dinner.*.proteins')
    .isNumeric(),
  check('dinner.*.carbohydrates')
    .isNumeric(),
  check('dinner.*.food_id')
    .isMongoId(),
  check('appetizers.*.name'),
  check('appetizers.*.brand'),
  check('appetizers.*.quantity')
    .isNumeric(),
  check('appetizers.*.calories')
    .isNumeric(),
  check('appetizers.*.fats')
    .isNumeric(),
  check('appetizers.*.proteins')
    .isNumeric(),
  check('appetizers.*.carbohydrates')
    .isNumeric(),
  check('appetizers.*.food_id')
    .isMongoId(),
  check('user_id')
    .isMongoId(),

  (req, res, next) => {
    return validateResults(req, res, next)
  }
]

const validatorUpdateUserDayMeal = [
  check('id')
    .exists()
    .notEmpty()
    .isMongoId(),
  check('date')
    .exists()
    .isDate(),
  check('breakfast.*.name'),
  check('breakfast.*.brand'),
  check('breakfast.*.quantity')
    .isNumeric(),
  check('breakfast.*.calories')
    .isNumeric(),
  check('breakfast.*.fats')
    .isNumeric(),
  check('breakfast.*.proteins')
    .isNumeric(),
  check('breakfast.*.carbohydrates')
    .isNumeric(),
  check('breakfast.*.food_id')
    .isMongoId(),
  check('launch.*.name'),
  check('launch.*.brand'),
  check('launch.*.quantity')
    .isNumeric(),
  check('launch.*.calories')
    .isNumeric(),
  check('launch.*.fats')
    .isNumeric(),
  check('launch.*.proteins')
    .isNumeric(),
  check('launch.*.carbohydrates')
    .isNumeric(),
  check('launch.*.food_id')
    .isMongoId(),
  check('dinner.*.name'),
  check('dinner.*.brand'),
  check('dinner.*.quantity')
    .isNumeric(),
  check('dinner.*.calories')
    .isNumeric(),
  check('dinner.*.fats')
    .isNumeric(),
  check('dinner.*.proteins')
    .isNumeric(),
  check('dinner.*.carbohydrates')
    .isNumeric(),
  check('dinner.*.food_id')
    .isMongoId(),
  check('appetizers.*.name'),
  check('appetizers.*.brand'),
  check('appetizers.*.quantity')
    .isNumeric(),
  check('appetizers.*.calories')
    .isNumeric(),
  check('appetizers.*.fats')
    .isNumeric(),
  check('appetizers.*.proteins')
    .isNumeric(),
  check('appetizers.*.carbohydrates')
    .isNumeric(),
  check('appetizers.*.food_id')
    .isMongoId(),
  check('user_id')
    .isMongoId(),
  (req, res, next) => {
    return validateResults(req, res, next)
  }
]

const validatorFindUserDayMeal = [
  check('id')
    .exists()
    .notEmpty()
    .isMongoId(),
  (req, res, next) => {
    return validateResults(req, res, next)
  }
]

const validatorDeleteUserDayMeal = [
  check('id')
    .exists()
    .notEmpty()
    .isMongoId(),
  (req, res, next) => {
    return validateResults(req, res, next)
  }
]

module.exports = { validatorAddUserDayMeal, validatorFindUserDayMeal, validatorDeleteUserDayMeal, validatorUpdateUserDayMeal }
