const asyncHandler = require('express-async-handler')

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


module.exports = {
    getEmployee,
    addEmployee,
    updateEmployee,
    deleteEmployee
}