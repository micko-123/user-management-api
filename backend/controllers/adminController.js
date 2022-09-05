const asyncHandler = require('express-async-handler')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

const Employee = require('../models/employeeModel')
const Admin = require('../models/adminModel')

const getEmployee = asyncHandler( async (req, res) => {
    const employees = await Employee.find()

  res.status(200).json(employees)

})

const addEmployee =  asyncHandler( async(req, res) => {
   
      const goal = await Goal.create({
        lastName: req.body.lastName,
        firstName: req.body.firstName,
        email:req.body.email,
        password:req.body.password,
        gender:req.body.gender,
        adress:req.body.adress,
        dateOfBirth:req.body.dateOfBirth,
        phoneNumber: req.body.phoneNumber,
        admin: req.admin.id,
      })
    
      res.status(200).json(goal)
})


const updateEmployee = asyncHandler( async (req, res) => {
    const employee = await Employee.findById(req.params.id)

  if (!employee) {
    res.status(400)
    throw new Error('employee not found')
  }

})


const deleteEmployee = asyncHandler( async (req, res) => {
    const employee = await Employee.findById(req.params.id)

    if (!employee) {
      res.status(400)
      throw new Error('employee not found')
    }
  
    await employee.remove()
  
    res.status(200).json({ id: req.params.id })
  
})


// @desc    Register new user
// @route   POST /api/users
// @access  Public
const registerEmployee = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body

  if (!name || !email || !password) {
    res.status(400)
    throw new Error('Please add all fields')
  }

  // Check if user exists
  const userExists = await Employee.findOne({ email })

  if (userExists) {
    res.status(400)
    throw new Error('User already exists')
  }

  // Hash password
  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(password, salt)

  // Create user
  const employee = await Employee.create({
    name,
    email,
    password: hashedPassword,
  })

  if (employee) {
    res.status(201).json({
      _id: employee.id,
      name: employee.name,
      email: employee.email,
      token: generateToken(employee._id),
    })
  } else {
    res.status(400)
    throw new Error('Invalid user data')
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




const getMe = asyncHandler(async (req, res) => {
  res.status(200).json(req.employee)
})

// Generate JWT
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  })
}



module.exports = {
    getEmployee,
    addEmployee,
    updateEmployee,
    deleteEmployee,
    registerEmployee,
    loginUser,
    getMe,
}