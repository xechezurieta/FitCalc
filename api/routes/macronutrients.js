const express = require('express')
const { addMacronutrients, findMacronutrientsByUser, deleteMacronutrients, updateMacronutrients } = require('../controllers/macronutrients')
const { validatorAddMacronutrients, validatorFindMacronutrientsByUser, validatorDeleteMacronutrients, validatorUpdateMacronutrients } = require('../validators/macronutrients')
const router = express.Router()

router.post('/', validatorAddMacronutrients, addMacronutrients)
router.post('/user', validatorFindMacronutrientsByUser, findMacronutrientsByUser)
router.put('/:id', validatorUpdateMacronutrients, updateMacronutrients)
router.delete('/:id', validatorDeleteMacronutrients, deleteMacronutrients)

module.exports = router
