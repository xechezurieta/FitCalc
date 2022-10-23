const express = require('express')
const { addMacronutrients } = require('../controllers/macronutrients')
const { validatorAddMacronutrients } = require('../validators/macronutrients')
const router = express.Router()

router.post('/', validatorAddMacronutrients, addMacronutrients)

module.exports = router
