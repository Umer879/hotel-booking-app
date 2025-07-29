const Appointment = require('../models/appointementModal');

// 👉 Add Appointment
exports.createAppointment = async (req, res) => {
  try {
    const { name, email, checkIn, checkOut, message } = req.body;

    if (!name || !email || !checkIn || !checkOut) {
      return res.status(400).json({ error: 'All required fields must be filled' });
    }

    const newAppointment = await Appointment.create({ name, email, checkIn, checkOut, message });
    res.status(201).json({ success: true, message: 'Appointment added successfully', data: newAppointment });
  } catch (error) {
    console.error('CREATE ERROR:', error);
    res.status(500).json({ error: 'Server error' });
  }
};

// 👉 Get All Appointments
exports.getAppointments = async (req, res) => {
  try {
    const appointments = await Appointment.find();
    res.status(200).json(appointments);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

// 👉 Get Single Appointment by ID
exports.getAppointmentById = async (req, res) => {
  try {
    const appointment = await Appointment.findById(req.params.id);
    if (!appointment) return res.status(404).json({ error: 'Appointment not found' });

    res.status(200).json(appointment);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

// 👉 Update Appointment by ID
exports.updateAppointment = async (req, res) => {
  try {
    const updated = await Appointment.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).json({ error: 'Appointment not found' });

    res.status(200).json({ success: true, message: 'Appointment updated', data: updated });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

// 👉 Delete Appointment by ID
exports.deleteAppointment = async (req, res) => {
  try {
    const deleted = await Appointment.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ error: 'Appointment not found' });

    res.status(200).json({ success: true, message: 'Appointment deleted' });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};
