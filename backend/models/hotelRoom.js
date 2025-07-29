const mongoose = require('mongoose');

const hotelRoomSchema = new mongoose.Schema({
  title: { type: String, required: true },
  price: { type: String, required: true },
  image: { type: String } // Just the filename
}, {
  timestamps: true
});

module.exports = mongoose.model('HotelRoom', hotelRoomSchema);
