const mongoose = require('mongoose')
const mongooseDelete = require('mongoose-delete')
const UserDayMealsSchema = new mongoose.Schema(
  {
    date: {
      type: Date,
      required: true
    },
    breakfast: [
      {
        name: { type: String, required: true },
        brand: { type: String },
        quantity: { type: Number, required: true },
        calories: { type: Number, required: true },
        fats: { type: Number, required: true },
        proteins: { type: Number, required: true },
        carbohydrates: { type: Number, required: true },
        food_id: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Food'
        }
      }
    ],
    launch: [
      {
        name: { type: String, required: true },
        brand: { type: String },
        quantity: { type: Number, required: true },
        calories: { type: Number, required: true },
        fats: { type: Number, required: true },
        proteins: { type: Number, required: true },
        carbohydrates: { type: Number, required: true },
        food_id: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Food'
        }
      }
    ],
    dinner: [
      {
        name: { type: String, required: true },
        brand: { type: String },
        quantity: { type: Number, required: true },
        calories: { type: Number, required: true },
        fats: { type: Number, required: true },
        proteins: { type: Number, required: true },
        carbohydrates: { type: Number, required: true },
        food_id: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Food'
        }
      }
    ],
    appetizers: [
      {
        name: { type: String, required: true },
        brand: { type: String },
        quantity: { type: Number, required: true },
        calories: { type: Number, required: true },
        fats: { type: Number, required: true },
        proteins: { type: Number, required: true },
        carbohydrates: { type: Number, required: true },
        food_id: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Food'
        }
      }
    ],
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    }

  },
  {
    timestamps: true,
    versionKey: false
  }
)

UserDayMealsSchema.plugin(mongooseDelete, { overrideMethods: 'all' })
module.exports = mongoose.model('UserDayMeals', UserDayMealsSchema)
