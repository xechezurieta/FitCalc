const express = require('express')
const { addFood, updateFood, deleteFood, findFood } = require('../controllers/foods')
const { validatorAddFood, validatorUpdateFood, validatorFindFood, validatorDeleteFood } = require('../validators/foods')
const router = express.Router()

router.post('/', validatorAddFood, addFood)
router.get('/:id', validatorFindFood, findFood)
router.put('/:id', validatorUpdateFood, updateFood)
router.delete('/:id', validatorDeleteFood, deleteFood)

module.exports = router
