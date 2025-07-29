const HotelRoom = require('../models/hotelRoom');

// Add Room
exports.addRoom = async (req, res) => {
  try {
    const { title, price } = req.body;
    console.log(req.body);
    
    const image = req.file ? req.file.filename : null;

    const newRoom = new HotelRoom({ title, price, image });
    await newRoom.save();

    res.status(201).json({ message: 'Room added successfully', room: newRoom });
  } catch (error) {
    res.status(500).json({ message: 'Failed to add room', error });
  }
};

// Get All Rooms
exports.getAllRooms = async (req, res) => {
  try {
    const rooms = await HotelRoom.find();
    res.status(200).json(rooms);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch rooms', error });
  }
};

// Get Room by ID
exports.getRoomById = async (req, res) => {
  try {
    const room = await HotelRoom.findById(req.params.id);
    if (!room) return res.status(404).json({ message: 'Room not found' });
    res.status(200).json(room);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch room', error });
  }
};

// Update Room
exports.updateRoom = async (req, res) => {
  try {
    const { title, price } = req.body;
    const updatedData = { title, price };

    if (req.file) {
      updatedData.image = req.file.filename;
    }

    const room = await HotelRoom.findByIdAndUpdate(req.params.id, updatedData, { new: true });
    if (!room) return res.status(404).json({ message: 'Room not found' });

    res.status(200).json({ message: 'Room updated successfully', room });
  } catch (error) {
    res.status(500).json({ message: 'Failed to update room', error });
  }
};

// Delete Room
exports.deleteRoom = async (req, res) => {
  try {
    const room = await HotelRoom.findByIdAndDelete(req.params.id);
    if (!room) return res.status(404).json({ message: 'Room not found' });

    res.status(200).json({ message: 'Room deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete room', error });
  }
};
