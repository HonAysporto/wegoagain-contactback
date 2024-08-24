const express = require('express')
const router = express.Router()
const {addContact, displayContact, displayacontact} = require('../controllers/contact.controller')

router.post("/addContact", addContact)
router.get("/display", displayContact)
router.post('/contact', displayacontact)

module.exports = router