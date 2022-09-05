const mongoose = require('mongoose')

const employeeSchema = mongoose.Schema(
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
    gender: {
        type: String,
        required: [true]
    },
    dateOfBirth: {
        type: String,
        required: [true]
    },
    phoneNumber: {
        type: String,
        required:[true]    
    },
    addres:{
        type: String,
        required:[true]
    }
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('User', userSchema)
