const asyncHandler = require('express-async-handler')


const getEmployee = asyncHandler( async (req, res) => {
    res.send('geting employee')
})


const addEmployee =  asyncHandler( async(req, res) => {
    res.send('adding employee')
})


const updateEmployee = asyncHandler( async (req, res) => {
    res.send('updating employee')
})


const deleteEmployee = asyncHandler( async (req, res) => {
    res.send('deleting employee')
})


module.exports ={
    getEmployee,
    addEmployee,
    updateEmployee,
    deleteEmployee
}