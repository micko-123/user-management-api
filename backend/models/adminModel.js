const mongoose = require('mongoose')

const userSchema = mongoose.Schema(
  {
    lastName: {
      type: String,
      required: [true, 'Please add a last name'],
    },
    firstName: {
        type: String,
        required: [true, 'Please add a first name'],
      },
    email: {
      type: String,
      required: [true, 'Please add an email'],
      unique: true,
    },
    password: {
      type: String,
      required: [true, 'Please add a password'],
    },
    phoneNumber: {
        type: String,
        required:[true]    
    },
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('User', userSchema)
