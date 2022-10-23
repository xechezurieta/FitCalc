const { matchedData } = require('express-validator')
const { usersModel, measuresModel } = require('../models')

const addMeasures = async (req, res) => {
  const body = matchedData(req)
  const data = await measuresModel.create(body)
  const user = await usersModel.findById(data.user_id)
  if (user.measures) {
    const userCurrentMeasures = await measuresModel.findById(user.measures)
    if (data.date >= userCurrentMeasures.date) {
      const updatedUser = await usersModel.findByIdAndUpdate(user.id, { measures: data._id }, { new: true })
      res.send({ data, updatedUser })
    } else {
      res.send({ data, user })
    }
  } else {
    const updatedUser = await usersModel.findByIdAndUpdate(user.id, { measures: data._id }, { new: true })
    res.send({ data, updatedUser })
  }
}

module.exports = { addMeasures }
