const mongoose = require('mongoose')
const mongooseDelete = require('mongoose-delete')
const FoodSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    brand: {
      type: String
    },
    calories: {
      type: Number
    },
    fats: {
      total: { type: Number, required: true },
      saturated_fat: { type: Number },
      trans_fat: { type: Number }
    },
    carbohydrates: {
      total: { type: Number, required: true },
      dietary_fiber: { type: Number },
      sugar: {
        total: { type: Number },
        added_sugar: { type: Number }
      }
    },
    proteins: {
      type: Number
    },
    cholesterol: {
      type: Number
    },
    sodium: {
      type: Number
    }

  },
  {
    timestamps: true,
    versionKey: false
  }
)

FoodSchema.plugin(mongooseDelete, { overrideMethods: 'all' })
module.exports = mongoose.model('Food', FoodSchema)
