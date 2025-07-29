const express = require('express');
const router = express.Router();
const {
  addBooking,
  getAllBookings,
  getBookingById,
  updateBooking,
  deleteBooking
} = require('../controllers/bookingController');

router.post('/', addBooking);
router.get('/', getAllBookings);
router.get('/:id', getBookingById);
router.put('/:id', updateBooking);
router.delete('/:id', deleteBooking);

module.exports = router;
