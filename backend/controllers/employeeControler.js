const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')

// const { model } = require('mongoose')
const Employee = require('../models/employeeModel')

const updateProfile = asyncHandler( async (req, res) => {
    const employee = await Employee.findById(req.params.id)

  if (!employee) {
    res.status(400)
    throw new Error('employee not found')
  }

})

const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body


  // Check for user email
  const Employee = await Employee.findOne({ email })

  if (user && (await bcrypt.compare(password, employee.password))) {
    res.json({
      _id: employee.id,
      name: employee.name,
      email: employee.email,
      token: generateToken(employee._id),
    })
  } else {
    res.status(400)
    throw new Error('Invalid credentials')
  }
})
 
module.export = {
       updateProfile,
       loginUser
      }