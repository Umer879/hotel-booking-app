const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: {
  type: String,
  required: true,
  validate: {
    validator: async function (value) {
      const existing = await mongoose.models.Appointment.findOne({ email: value });
      return !existing;
    },
    message: 'Email already exists',
  }
},
  checkIn: { type: String, required: true },
  checkOut: { type: String, required: true },
  message: { type: String },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Appointment', appointmentSchema);
