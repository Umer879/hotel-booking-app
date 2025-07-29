const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  email: { type: String, required: true },
  gender: String,
  mobile_number: String,
  city: String,
  arrive: Date,
  depart: Date,
  no_of_persons: Number,
  room_type: String,
  address: String,
}, { timestamps: true });

module.exports = mongoose.model('Booking', bookingSchema);
