
const mongoose = require('mongoose')
const mongooseDelete = require('mongoose-delete')
const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String
    },
    surnames: {
      type: String
    },
    email: {
      type: String,
      unique: true,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    role: {
      type: String,
      enum: ['user', 'admin'],
      default: 'user'
    },
    macronutrients: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Macronutrients'
    },
    measures: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Measures'
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
)

UserSchema.plugin(mongooseDelete, { overrideMethods: 'all' })
module.exports = mongoose.model('User', UserSchema)
