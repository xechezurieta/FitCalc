const express = require('express')
const { addMeasures } = require('../controllers/measures')
const { validatorAddMeasures } = require('../validators/measures')
const router = express.Router()

router.post('/', validatorAddMeasures, addMeasures)

module.exports = router
