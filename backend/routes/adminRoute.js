const express = require('express')
const router = express.Router()
const {    getEmployee,
    addEmployee,
    updateEmployee,
    deleteEmployee} = require('../controllers/adminController')
    const {
        registerEmployee,
        loginUser,
        getMe,
      }  = require('../controllers/adminController')


const { protect } = require('../middleware/authMiddleware')


router.route('/').get(protect, getEmployee).post(protect, getEmployee)
router.route('/:id').delete(protect, deleteEmployee).put(protect, updateEmployee)


router.post('/', registerEmployee)
router.post('/login', loginUser)
router.get('/me', protect, getMe)

module.exports = router