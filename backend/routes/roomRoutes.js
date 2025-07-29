const express = require('express');
const multer = require('multer');
const path = require('path');
const {
  addRoom,
  getAllRooms,
  getRoomById,
  updateRoom,
  deleteRoom
} = require('../controllers/roomController');

const router = express.Router();

// Multer config
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/rooms');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname.replace(/\s+/g, ''));
  }
});
const upload = multer({ storage });

// Routes
router.post('/', upload.single('image'), addRoom);
router.get('/', getAllRooms);
router.get('/:id', getRoomById);
router.put('/:id', upload.single('image'), updateRoom);
router.delete('/:id', deleteRoom);

module.exports = router;
