const express = require('express');
const router = express.Router();
const hotelRoomController = require('../controllers/hotelRoomController'); // Ye sahi import hai
const multer = require('multer');
const path = require('path');

// Multer setup for image upload
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Folder must exist
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  }
});

const upload = multer({ storage });

// API Routes
router.post('/', upload.single('image'), hotelRoomController.addRoom);
router.get('/', hotelRoomController.getAllRooms);
router.get('/:id', hotelRoomController.getRoomById);
router.put('/:id', upload.single('image'), hotelRoomController.updateRoom);
router.delete('/:id', hotelRoomController.deleteRoom);

module.exports = router;
