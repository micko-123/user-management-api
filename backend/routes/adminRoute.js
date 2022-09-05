const express = require('express')
const router = express.Router()
const {    getEmployee,
    addEmployee,
    updateEmployee,
    deleteEmployee} = require('../controllers/adminController')

router.get('/', getEmployee)


router.post('/', addEmployee)


router.put('/:id', updateEmployee)


router.delete('/:id', deleteEmployee)


module.exports = router