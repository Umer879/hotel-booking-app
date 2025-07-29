const express = require('express');
const router = express.Router();
const appointmentController = require('../controllers/appointmentController');

// POST - Add Appointment
router.post('/', appointmentController.createAppointment);

// GET - All Appointments
router.get('/', appointmentController.getAppointments);

// GET - Single Appointment by ID
router.get('/:id', appointmentController.getAppointmentById);

// PUT - Update Appointment
router.put('/:id', appointmentController.updateAppointment);

// DELETE - Delete Appointment
router.delete('/:id', appointmentController.deleteAppointment);

module.exports = router;
