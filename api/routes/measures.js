const express = require('express')
const { addMeasures, findMeasuresByUser, deleteMeasure, updateMeasures } = require('../controllers/measures')
const { validatorAddMeasures, validatorFindMeasuresByUser, validatorDeleteMeasure, validatorUpdateMeasures } = require('../validators/measures')
const router = express.Router()

router.post('/', validatorAddMeasures, addMeasures)
router.post('/user', validatorFindMeasuresByUser, findMeasuresByUser)
router.put('/:id', validatorUpdateMeasures, updateMeasures)
router.delete('/:id', validatorDeleteMeasure, deleteMeasure)

module.exports = router
