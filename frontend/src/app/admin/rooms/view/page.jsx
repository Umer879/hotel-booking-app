'use client';

import { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { Modal } from 'react-bootstrap';
import API from '@/utils/api'; // ✅ adjust path if needed

export default function ViewRoomsPage() {
  const [rooms, setRooms] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState(null);

  // ✅ Fetch rooms on mount
  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const res = await API.get('/rooms'); // ✅ your actual backend API
        console.log(res);
        
        setRooms(res.data); // Assuming response is an array of room objects
      } catch (error) {
        console.error('Error fetching rooms:', error);
        Swal.fire('Error', 'Failed to fetch rooms', 'error');
      }
    };

    fetchRooms();
  }, []);

  const handleEdit = (id) => {
    const room = rooms.find((r) => r._id === id || r.id === id); // support _id or id
    setSelectedRoom(room);
    setShowModal(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSelectedRoom({ ...selectedRoom, [name]: value });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await API.put(`/rooms/${selectedRoom._id || selectedRoom.id}`, selectedRoom);
      const updatedRooms = rooms.map((room) =>
        room._id === selectedRoom._id || room.id === selectedRoom.id ? selectedRoom : room
      );
      setRooms(updatedRooms);
      setShowModal(false);
      Swal.fire('Success', 'Room updated successfully!', 'success');
    } catch (error) {
      console.error('Error updating room:', error);
      Swal.fire('Error', 'Failed to update room', 'error');
    }
  };

  const handleDelete = async (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'This room will be deleted!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#77ba00',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await API.delete(`/rooms/${id}`);
          setRooms(rooms.filter((room) => room._id !== id && room.id !== id));
          Swal.fire('Deleted!', 'The room has been deleted.', 'success');
        } catch (error) {
          console.error('Delete error:', error);
          Swal.fire('Error', 'Failed to delete room', 'error');
        }
      }
    });
  };

  return (
    <section className="py-5 admin-main">
      <h2 className="mb-4">All Rooms</h2>
      <div className="custom-table-responsive">
        <table className="table table-bordered table-hover text-center align-middle custom-table-width">
          <thead>
            <tr>
              <th>#</th>
              <th>Room Number</th>
              <th>Type</th>
              <th>AC/Non AC</th>
              <th>Meal</th>
              <th>Bed Capacity</th>
              <th>Phone</th>
              <th>Rent</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {rooms.map((room, index) => (
              <tr key={room._id || room.id}>
                <td>{index + 1}</td>
                <td>{room.room_number}</td>
                <td>{room.room_type}</td>
                <td>{room.ac}</td>
                <td>{room.meal}</td>
                <td>{room.bed_capacity}</td>
                <td>{room.phone}</td>
                <td>{room.rent} PKR</td>
                <td className="edit">
                  <button
                    className="btn btn-sm btn-info icon-button me-2"
                    onClick={() => handleEdit(room._id || room.id)}
                  >
                    <FaEdit className="icon" />
                  </button>
                  <button
                    className="btn btn-sm bg-danger text-white icon-button"
                    onClick={() => handleDelete(room._id || room.id)}
                  >
                    <FaTrash className="icon" />
                  </button>
                </td>
              </tr>
            ))}
            {rooms.length === 0 && (
              <tr>
                <td colSpan="9" className="text-center text-muted">
                  No rooms found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* MODAL */}
      {selectedRoom && (
        <Modal show={showModal} onHide={() => setShowModal(false)} centered size="lg">
          <Modal.Header closeButton>
            <Modal.Title>Edit Room</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form onSubmit={handleUpdate} className="room-form">
              <div className="row g-4">
                <div className="col-sm-6 col-12">
                  <input
                    type="text"
                    name="roomNumber"
                    value={selectedRoom.roomNumber}
                    onChange={handleInputChange}
                    className="form-control"
                    placeholder="Room Number"
                  />
                </div>
                <div className="col-sm-6 col-12">
                  <select
                    name="roomType"
                    value={selectedRoom.roomType}
                    onChange={handleInputChange}
                    className="form-control"
                  >
                    <option value="">Select Room Type</option>
                    <option value="Single">Single</option>
                    <option value="Double">Double</option>
                    <option value="Suite">Suite</option>
                  </select>
                </div>
                <div className="col-sm-6 col-12">
                  <select
                    name="ac"
                    value={selectedRoom.ac}
                    onChange={handleInputChange}
                    className="form-control"
                  >
                    <option value="">AC</option>
                    <option value="AC">AC</option>
                    <option value="Non AC">Non AC</option>
                  </select>
                </div>
                <div className="col-sm-6 col-12">
                  <select
                    name="meal"
                    value={selectedRoom.meal}
                    onChange={handleInputChange}
                    className="form-control"
                  >
                    <option value="">Meal</option>
                    <option value="Included">Included</option>
                    <option value="Not Included">Not Included</option>
                  </select>
                </div>
                <div className="col-sm-6 col-12">
                  <input
                    // type="text"
                    name="bedCapacity"
                    value={selectedRoom.bedCapacity}
                    onChange={handleInputChange}
                    className="form-control"
                    placeholder="Bed Capacity"
                  />
                </div>
                <div className="col-sm-6 col-12">
                  <input
                    type="text"
                    name="phone"
                    value={selectedRoom.phone}
                    onChange={handleInputChange}
                    className="form-control"
                    placeholder="Phone"
                  />
                </div>
                <div className="col-sm-6 col-12">
                  <input
                    type="number"
                    name="rent"
                    value={selectedRoom.rent}
                    onChange={handleInputChange}
                    className="form-control"
                    placeholder="Rent"
                  />
                </div>
                <div className="col-12 text-center">
                  <button type="submit" className="globalBtn text-white fw-bold px-5">
                    Update Room
                  </button>
                </div>
              </div>
            </form>
          </Modal.Body>
        </Modal>
      )}
    </section>
  );
}
