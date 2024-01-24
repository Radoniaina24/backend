
const express = require('express')
const router = express.Router()
const userContollers = require('../controllers/userControllers')
router.get(("/"), userContollers.getUsers)
module.exports = router