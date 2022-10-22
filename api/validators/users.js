const { check } = require('express-validator')
const validateResults = require('../utils/handleValidator')

const validatorRegister = [
  check('email')
    .exists()
    .notEmpty()
    .isEmail(),
  check('password')
    .exists()
    .notEmpty()
    .isLength({ min: 3, max: 15 }),
  check('name'),
  check('surnames'),
  (req, res, next) => {
    return validateResults(req, res, next)
  }
]

const validatorLogin = [
  check('password')
    .exists()
    .notEmpty()
    .isLength({ min: 3, max: 15 }),
  check('email')
    .exists()
    .notEmpty()
    .isEmail(),
  (req, res, next) => {
    return validateResults(req, res, next)
  }
]

module.exports = { validatorRegister, validatorLogin }
