const mongoose = require('mongoose')
const mongooseDelete = require('mongoose-delete')
const MeasuresSchema = new mongoose.Schema(
  {
    date: {
      type: Date,
      required: true
    },
    neck: {
      type: Number
    },
    chest: {
      type: Number
    },
    biceps: {
      type: Number
    },
    hip: {
      type: Number
    },
    waist: {
      type: Number
    },
    gluteus: {
      type: Number
    },
    quadriceps: {
      type: Number
    },
    calf: {
      type: Number
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
)

MeasuresSchema.plugin(mongooseDelete, { overrideMethods: 'all' })
module.exports = mongoose.model('Measures', MeasuresSchema)
