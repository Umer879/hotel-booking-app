const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema({
  room_number: { type: String, required: true },
  room_type: { type: String, required: true },
  ac: { type: String },
  meal: { type: String },
  cancellation: { type: String },
  bed_capacity: { type: String },
  phone: { type: String },
  rent: { type: String },
}, {
  timestamps: true,
});

module.exports = mongoose.model('Room', roomSchema);
