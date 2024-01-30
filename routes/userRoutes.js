
const express = require('express')
const router = express.Router()
const userContollers = require('../controllers/userControllers')


router.get(("/"), userContollers.getUsers)
router.get(("/:uid"), userContollers.getOneUser)
router.get(("/delete/:uid"), userContollers.deleteUser)
router.put(("/update/:uid"), userContollers.updateUser)
router.post(("/"), userContollers.postUser)

module.exports = router