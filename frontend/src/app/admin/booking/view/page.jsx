'use client';
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { Modal } from 'react-bootstrap';
import api from '@/utils/api'; // ✅ import your axios instance

export default function BookingPage() {
  const [bookings, setBookings] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedBooking, setSelectedBooking] = useState(null);

  // ✅ Fetch bookings on load
  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const res = await api.get('/bookings'); // adjust endpoint if needed
        setBookings(res.data); // assuming res.data is array
      } catch (err) {
        console.error('Error fetching bookings:', err);
        Swal.fire('Error', 'Could not fetch bookings.', 'error');
      }
    };

    fetchBookings();
  }, []);

  const handleEdit = (id) => {
    const booking = bookings.find((b) => b._id === id); // or b.id depending on your backend
    setSelectedBooking({ ...booking });
    setShowModal(true);
  };

  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: 'Are you sure?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      confirmButtonColor: '#77ba00',
      cancelButtonColor: '#d33',
    });

    if (result.isConfirmed) {
      try {
        await api.delete(`/bookings/${id}`);
        setBookings(bookings.filter((b) => b._id !== id)); // or b.id
        Swal.fire('Deleted!', 'The booking has been deleted.', 'success');
      } catch (error) {
        Swal.fire('Error', 'Could not delete booking.', 'error');
      }
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSelectedBooking((prev) => ({ ...prev, [name]: value }));
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await api.put(`/bookings/${selectedBooking._id}`, selectedBooking);
      setBookings(
        bookings.map((b) =>
          b._id === selectedBooking._id ? selectedBooking : b
        )
      );
      setShowModal(false);
      Swal.fire('Updated!', 'The booking has been updated.', 'success');
    } catch (error) {
      Swal.fire('Error', 'Could not update booking.', 'error');
    }
  };

  return (
    <section className="py-5 admin-main">
      <h2 className="mb-4">All Bookings</h2>
      <div className="custom-table-responsive">
        <table className="table table-bordered table-hover text-center align-middle">
          <thead>
            <tr>
              <th>Name</th>
              <th>Mobile</th>
              <th>Email</th>
              <th>Arrive</th>
              <th>Depart</th>
              <th>Room Type</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking) => (
              <tr key={booking._id}>
                <td>{`${booking.first_name} ${booking.last_name}`}</td>
                <td>{booking.mobile_number}</td>
                <td>{booking.email}</td>
                <td>{booking.arrive?.substring(0, 10)}</td>
                <td>{booking.depart?.substring(0, 10)}</td>
                <td>{booking.room_type}</td>
                <td>
                  <button className="btn btn-sm btn-info me-2" onClick={() => handleEdit(booking._id)}>
                    <FaEdit />
                  </button>
                  <button className="btn btn-sm bg-danger text-white" onClick={() => handleDelete(booking._id)}>
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
            {bookings.length === 0 && (
              <tr>
                <td colSpan="7" className="text-center text-muted">No bookings found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Modal for Edit */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Edit Booking</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedBooking && (
            <form onSubmit={handleUpdate}>
              <div className="row g-3">
                <div className="col-md-6">
                  <input type="text" name="first_name" value={selectedBooking.first_name} onChange={handleInputChange} className="form-control" placeholder="First Name" />
                </div>
                <div className="col-md-6">
                  <input type="text" name="last_name" value={selectedBooking.last_name} onChange={handleInputChange} className="form-control" placeholder="Last Name" />
                </div>
                <div className="col-md-6">
                  <input type="email" name="email" value={selectedBooking.email} onChange={handleInputChange} className="form-control" placeholder="Email" />
                </div>
                <div className="col-md-6">
                  <input type="tel" name="mobile_number" value={selectedBooking.mobile_number} onChange={handleInputChange} className="form-control" placeholder="Mobile" />
                </div>
                <div className="col-md-6">
                  <input type="date" name="arrive" value={selectedBooking.arrive?.substring(0, 10)} onChange={handleInputChange} className="form-control" />
                </div>
                <div className="col-md-6">
                  <input type="date" name="depart" value={selectedBooking.depart?.substring(0, 10)} onChange={handleInputChange} className="form-control" />
                </div>
                <div className="col-12 text-center">
                  <button type="submit" className="globalBtn text-white fw-bold px-5">Update</button>
                </div>
              </div>
            </form>
          )}
        </Modal.Body>
      </Modal>
    </section>
  );
}
