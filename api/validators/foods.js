const { check } = require('express-validator')
const validateResults = require('../utils/handleValidator')

const validatorAddFood = [
  check('name')
    .exists()
    .notEmpty(),
  check('brand'),
  check('calories')
    .isNumeric(),
  check('fats.total')
    .exists()
    .notEmpty()
    .isNumeric(),
  check('fats.saturated_fat')
    .isNumeric(),
  check('fats.trans_fat')
    .isNumeric(),
  check('carbohydrates.total')
    .exists()
    .notEmpty()
    .isNumeric(),
  check('carbohydrates.dietary_fiber')
    .isNumeric(),
  check('carbohydrates.sugar.total')
    .isNumeric(),
  check('carbohydrates.sugar.added_sugar')
    .isNumeric(),
  check('proteins')
    .isNumeric(),
  check('cholesterol')
    .isNumeric(),
  check('sodium')
    .isNumeric(),
  (req, res, next) => {
    return validateResults(req, res, next)
  }
]

const validatorUpdateFood = [
  check('id')
    .exists()
    .notEmpty()
    .isMongoId(),
  check('name')
    .exists()
    .notEmpty(),
  check('brand'),
  check('calories')
    .isNumeric(),
  check('fats.total')
    .exists()
    .notEmpty()
    .isNumeric(),
  check('fats.saturated_fat')
    .isNumeric(),
  check('fats.trans_fat')
    .isNumeric(),
  check('carbohydrates.total')
    .exists()
    .notEmpty()
    .isNumeric(),
  check('carbohydrates.dietary_fiber')
    .isNumeric(),
  check('carbohydrates.sugar.total')
    .isNumeric(),
  check('carbohydrates.sugar.added_sugar')
    .isNumeric(),
  check('proteins')
    .isNumeric(),
  check('cholesterol')
    .isNumeric(),
  check('sodium')
    .isNumeric(),
  (req, res, next) => {
    return validateResults(req, res, next)
  }
]

const validatorFindFood = [
  check('id')
    .exists()
    .notEmpty()
    .isMongoId(),
  (req, res, next) => {
    return validateResults(req, res, next)
  }
]

const validatorDeleteFood = [
  check('id')
    .exists()
    .notEmpty()
    .isMongoId(),
  (req, res, next) => {
    return validateResults(req, res, next)
  }
]

module.exports = { validatorAddFood, validatorFindFood, validatorDeleteFood, validatorUpdateFood }
