'use client';
import React, { useRef, useState } from "react";
import Swal from "sweetalert2";
import api from "@/utils/api"; // Adjust path based on your project

const AppointmentForm = () => {
  const formRef = useRef(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    checkIn: "",
    checkOut: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await api.post("/appointments", formData); // ✅ Your API route
      console.log(res);
      
      Swal.fire({
        title: "Appointment Booked!",
        text: res.data.message || "Your appointment has been successfully submitted.",
        icon: "success",
        confirmButtonColor: "#77ba00",
        confirmButtonText: "OK",
      }).then(() => {
        formRef.current.reset();
        setFormData({ name: "", email: "", checkIn: "", checkOut: "", message: "" });
      });
    } catch (err) {
      Swal.fire({
        title: "Error",
        text: err.response?.data?.message || "Something went wrong",
        icon: "error",
      });
    }
  };

  return (
    <section className="py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fs-1 fw-bold">
            Make An <span>Appointment</span>
          </h2>
          <p className="text-muted">
            Please fill out the form to book your appointment with us.
          </p>
        </div>
        <form
          ref={formRef}
          className="row g-4 justify-content-center"
          onSubmit={handleSubmit}
        >
          <div className="col-md-6">
            <input
              type="text"
              name="name"
              className="form-control input-data"
              placeholder="Your Name"
              required
              onChange={handleChange}
            />
          </div>
          <div className="col-md-6">
            <input
              type="email"
              name="email"
              className="form-control input-data"
              placeholder="Your Email"
              required
              onChange={handleChange}
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">Check-in Date</label>
            <input
              type="date"
              name="checkIn"
              className="form-control input-data"
              required
              onChange={handleChange}
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">Check-out Date</label>
            <input
              type="date"
              name="checkOut"
              className="form-control input-data"
              required
              onChange={handleChange}
            />
          </div>
          <div className="col-12">
            <textarea
              name="message"
              className="form-control input-data"
              rows="5"
              placeholder="Message"
              required
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="col-12 text-center">
            <button
              type="submit"
              className="btn text-uppercase px-4 fw-bold mt-2 text-light globalBtn"
            >
              Submitt
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default AppointmentForm;
