const mongoose = require('mongoose')
const mongooseDelete = require('mongoose-delete')
const MacronutrientsSchema = new mongoose.Schema(
  {
    date: {
      type: Date,
      required: true
    },
    user_id: {
      type: mongoose.Schema.Types.ObjectId
    },
    calories: {
      type: Number,
      required: true
    },
    proteins: {
      type: Number,
      required: true
    },
    fats: {
      type: Number,
      required: true
    },
    carbohydrates: {
      type: Number,
      required: true
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
)

MacronutrientsSchema.plugin(mongooseDelete, { overrideMethods: 'all' })
module.exports = mongoose.model('Macronutrients', MacronutrientsSchema)
