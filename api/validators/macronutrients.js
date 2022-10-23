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

module.exports = { validatorAddMacronutrients }
