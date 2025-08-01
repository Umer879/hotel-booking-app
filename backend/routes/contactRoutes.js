const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contactController');

// Routes
router.post('/', contactController.addContact);
router.get('/', contactController.getAllContacts);
router.get('/:id', contactController.getContactById);
router.put('/:id', contactController.updateContact);
router.delete('/:id', contactController.deleteContact);

module.exports = router;
