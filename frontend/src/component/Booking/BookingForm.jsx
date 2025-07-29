'use client';
import { useState } from 'react';
import Swal from "sweetalert2";
import api from '@/utils/api';

export default function BookingForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    gender: '',
    mobile: '',
    city: '',
    arrive: '',
    depart: '',
    persons: '',
    roomType: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const inputClass =
    'form-control border-0 border-bottom rounded-0 input-data shadow-none px-0 py-2 input-focus-green';

  const handleSubmit = async (e) => {
    e.preventDefault();

    const isEmpty = Object.values(formData).some(value => value.trim() === '');
    if (isEmpty) {
      Swal.fire({
        icon: 'error',
        title: 'Please fill all fields!',
        confirmButtonColor: '#d33',
      });
      return;
    }

    const payload = {
      first_name: formData.firstName,
      last_name: formData.lastName,
      email: formData.email,
      gender: formData.gender,
      mobile_number: formData.mobile,
      city: formData.city,
      arrive: formData.arrive,
      depart: formData.depart,
      no_of_persons: Number(formData.persons),
      room_type: formData.roomType,
      message: formData.message, // 🔁 changed from `address`
    };

    try {
      const res = await api.post('/bookings', payload);

      if (res.status === 200 || res.status === 201) {
        Swal.fire({
          icon: 'success',
          title: 'Booking Submitted!',
          confirmButtonColor: '#77ba00',
        });

        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          gender: '',
          mobile: '',
          city: '',
          arrive: '',
          depart: '',
          persons: '',
          roomType: '',
          message: '',
        });
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Submission failed!',
          text: 'Something went wrong.',
          confirmButtonColor: '#d33',
        });
      }
    } catch (err) {
      Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: 'Failed to connect to the server.',
        confirmButtonColor: '#d33',
      });
    }
  };

  return (
    <section className="py-5 bg-white bookingForm">
      <div className="container">
        <div className="container text-center mb-4 heading">
          <h4 className="fs-1">
            Book <span>Your Room</span>
          </h4>
          <img src="/assets/resources/tb2.avif" alt="underline" className="underline-img" />
        </div>
        <form className="row g-4" onSubmit={handleSubmit}>
          {/* First Name */}
          <div className="col-md-6">
            <input type="text" className={inputClass} placeholder="First Name" name="firstName" value={formData.firstName} onChange={handleChange} required />
          </div>

          {/* Last Name */}
          <div className="col-md-6">
            <input type="text" className={inputClass} placeholder="Last Name" name="lastName" value={formData.lastName} onChange={handleChange} required />
          </div>

          {/* Email */}
          <div className="col-md-6">
            <input type="email" className={inputClass} placeholder="Your Email" name="email" value={formData.email} onChange={handleChange} required />
          </div>

          {/* Gender */}
          <div className="col-md-6">
            <input type="text" className={inputClass} placeholder="Your Gender" name="gender" value={formData.gender} onChange={handleChange} required />
          </div>

          {/* Mobile */}
          <div className="col-md-6">
            <input type="tel" className={inputClass} placeholder="Your Phone Number" name="mobile" value={formData.mobile} onChange={handleChange} required />
          </div>

          {/* City */}
          <div className="col-md-6">
            <input type="text" className={inputClass} placeholder="Your City" name="city" value={formData.city} onChange={handleChange} required />
          </div>

          {/* Arrive */}
          <div className="col-md-6">
            <label htmlFor="check-in">Arrive</label>
            <input type="date" className={`form-control mt-2 ${inputClass}`} id="check-in" name="arrive" value={formData.arrive} onChange={handleChange} required />
          </div>

          {/* Depart */}
          <div className="col-md-6">
            <label htmlFor="check-out">Depart</label>
            <input type="date" className={`form-control mt-2 ${inputClass}`} id="check-out" name="depart" value={formData.depart} onChange={handleChange} required />
          </div>

          {/* Persons */}
          <div className="col-md-6">
            <select className={inputClass} name="persons" value={formData.persons} onChange={handleChange} required>
              <option value="">No. of Persons</option>
              {[...Array(10)].map((_, i) => (
                <option key={i + 1} value={i + 1}>{i + 1}</option>
              ))}
            </select>
          </div>

          {/* Room Type */}
          <div className="col-md-6">
            <select className={inputClass} name="roomType" value={formData.roomType} onChange={handleChange} required>
              <option value="">Room Type</option>
              <option value="standard">Standard</option>
              <option value="deluxe">Deluxe</option>
              <option value="suite">Suite</option>
              <option value="family">Family</option>
            </select>
          </div>

          {/* Message */}
          <div className="col-lg-12">
            <textarea rows="4" className='input-data form-control' placeholder="Message..." name="message" value={formData.message} onChange={handleChange}></textarea>
          </div>

          {/* Submit */}
          <div className="col-12 text-center mt-5">
            <button type="submit" className="globalBtn text-light fw-bold">
              Confirm Booking
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
