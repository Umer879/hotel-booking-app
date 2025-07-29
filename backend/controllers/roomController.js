const Room = require('../models/Room');

// Add Room
exports.addRoom = async (req, res) => {
  try {
    const { room_number, room_type, ac, meal, cancellation, bed_capacity, phone, rent } = req.body;

    const newRoom = new Room({ room_number, room_type, ac, meal, cancellation, bed_capacity, phone, rent });
    await newRoom.save();

    res.status(201).json({ message: 'Room added successfully', room: newRoom });
  } catch (error) {
    res.status(500).json({ message: 'Failed to add room', error });
  }
};

// Get All Rooms
exports.getAllRooms = async (req, res) => {
  try {
    const rooms = await Room.find();

    // Show full data for user site, remove image for admin site
    if (req.headers['x-source'] === 'user') {
      res.status(200).json(rooms);
    } else {
      const filteredRooms = rooms.map(room => {
        const roomObj = room.toObject();
        delete roomObj.image; // Just in case it's present
        return roomObj;
      });
      res.status(200).json(filteredRooms);
    }
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch rooms', error });
  }
};

// Get Room by ID
exports.getRoomById = async (req, res) => {
  try {
    const room = await Room.findById(req.params.id);
    if (!room) return res.status(404).json({ message: 'Room not found' });

    const roomObj = room.toObject();

    // Remove image if request is not from user
    if (req.headers['x-source'] !== 'user') {
      delete roomObj.image;
    }

    res.status(200).json(roomObj);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch room', error });
  }
};

// Update Room
exports.updateRoom = async (req, res) => {
  try {
    const { room_number, room_type, ac, meal, cancellation, bed_capacity, phone, rent } = req.body;
    const updatedData = { room_number, room_type, ac, meal, cancellation, bed_capacity, phone, rent };

    const room = await Room.findByIdAndUpdate(req.params.id, updatedData, { new: true });
    if (!room) return res.status(404).json({ message: 'Room not found' });

    res.status(200).json({ message: 'Room updated successfully', room });
  } catch (error) {
    res.status(500).json({ message: 'Failed to update room', error });
  }
};

// Delete Room
exports.deleteRoom = async (req, res) => {
  try {
    const room = await Room.findByIdAndDelete(req.params.id);
    if (!room) return res.status(404).json({ message: 'Room not found' });

    res.status(200).json({ message: 'Room deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete room', error });
  }
};
