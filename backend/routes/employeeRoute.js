const express = require('express')
const router = express.Router()
const { updateProfile } = require('../controllers/employeeController')
const {loginUser}  = require('../controllers/adminController')
// router.get('/', getEmployee)

router.put('/:id', updateProfile)
router.post('/login', loginUser)
module.exports = router