const { check } = require('express-validator')
const validateResults = require('../utils/handleValidator')

const validatorAddMeasures = [
  check('date')
    .exists()
    .notEmpty()
    .isDate(),
  check('user_id')
    .exists()
    .notEmpty()
    .isMongoId(),
  check('neck')
    .optional()
    .exists()
    .notEmpty()
    .isNumeric(),
  check('chest')
    .optional()
    .exists()
    .notEmpty()
    .isNumeric(),
  check('biceps')
    .optional()
    .exists()
    .notEmpty()
    .isNumeric(),
  check('hip')
    .optional()
    .exists()
    .notEmpty()
    .isNumeric(),
  check('waist')
    .optional()
    .exists()
    .notEmpty()
    .isNumeric(),
  check('gluteus')
    .optional()
    .exists()
    .notEmpty()
    .isNumeric(),
  check('quadriceps')
    .optional()
    .exists()
    .notEmpty()
    .isNumeric(),
  check('calf')
    .optional()
    .exists()
    .notEmpty()
    .isNumeric(),
  (req, res, next) => {
    return validateResults(req, res, next)
  }
]

const validatorFindMeasuresByUser = [
  check('id')
    .exists()
    .notEmpty()
    .isMongoId(),
  (req, res, next) => {
    return validateResults(req, res, next)
  }
]

const validatorUpdateMeasures = [
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
  check('neck')
    .optional()
    .exists()
    .notEmpty()
    .isNumeric(),
  check('chest')
    .optional()
    .exists()
    .notEmpty()
    .isNumeric(),
  check('biceps')
    .optional()
    .exists()
    .notEmpty()
    .isNumeric(),
  check('hip')
    .optional()
    .exists()
    .notEmpty()
    .isNumeric(),
  check('waist')
    .optional()
    .exists()
    .notEmpty()
    .isNumeric(),
  check('gluteus')
    .optional()
    .exists()
    .notEmpty()
    .isNumeric(),
  check('quadriceps')
    .optional()
    .exists()
    .notEmpty()
    .isNumeric(),
  check('calf')
    .optional()
    .exists()
    .notEmpty()
    .isNumeric(),
  (req, res, next) => {
    return validateResults(req, res, next)
  }
]

const validatorDeleteMeasure = [
  check('id')
    .exists()
    .notEmpty()
    .isMongoId(),
  (req, res, next) => {
    return validateResults(req, res, next)
  }
]

module.exports = { validatorAddMeasures, validatorFindMeasuresByUser, validatorUpdateMeasures, validatorDeleteMeasure }
