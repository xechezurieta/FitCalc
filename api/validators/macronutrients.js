const { check } = require('express-validator')
const validateResults = require('../utils/handleValidator')

const validatorAddMacronutrients = [
  check('date')
    .exists()
    .notEmpty()
    .isDate(),
  check('user_id')
    .exists()
    .notEmpty()
    .isMongoId(),
  check('calories')
    .exists()
    .notEmpty()
    .isNumeric(),
  check('proteins')
    .exists()
    .notEmpty()
    .isNumeric(),
  check('fats')
    .exists()
    .notEmpty()
    .isNumeric(),
  check('carbohydrates')
    .exists()
    .notEmpty()
    .isNumeric(),
  (req, res, next) => {
    return validateResults(req, res, next)
  }
]

const validatorFindMacronutrientsByUser = [
  check('id')
    .exists()
    .notEmpty()
    .isMongoId(),
  (req, res, next) => {
    return validateResults(req, res, next)
  }
]

const validatorUpdateMacronutrients = [
  check('id')
    .exists()
    .notEmpty()
    .isMongoId(),
  check('date')
    .exists()
    .notEmpty()
    .isDate(),
  check('user_id')
    .exists()
    .notEmpty()
    .isMongoId(),
  check('calories')
    .exists()
    .notEmpty()
    .isNumeric(),
  check('proteins')
    .exists()
    .notEmpty()
    .isNumeric(),
  check('fats')
    .exists()
    .notEmpty()
    .isNumeric(),
  check('carbohydrates')
    .exists()
    .notEmpty()
    .isNumeric(),
  (req, res, next) => {
    return validateResults(req, res, next)
  }
]

const validatorDeleteMacronutrients = [
  check('id')
    .exists()
    .notEmpty()
    .isMongoId(),
  (req, res, next) => {
    return validateResults(req, res, next)
  }
]

module.exports = { validatorAddMacronutrients, validatorFindMacronutrientsByUser, validatorUpdateMacronutrients, validatorDeleteMacronutrients }
