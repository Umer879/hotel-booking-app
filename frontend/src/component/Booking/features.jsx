'use client';
import React, { useEffect, useState } from "react";
import { FaCheck } from "react-icons/fa";
import API from "@/utils/api"; // make sure your API file path is correct
import { useParams } from "next/navigation"; // for getting roomId from URL

const features = [
  "Master Bed",
  "Sea View Balcony",
  "Air Conditioned",
  "Free Wi-Fi",
  "Car Parking",
  "Private Bathroom",
  "Swimming Pool Access",
];

export default function BookingSection() {
  const [room, setRoom] = useState(null);
  const { id } = useParams(); // get dynamic id from URL

  useEffect(() => {
    if (id) {
      API.get(`/hotelRooms/${id}`)
        .then((res) => {
          setRoom(res.data);
        })
        .catch((err) => {
          console.error("Failed to fetch room:", err);
        });
    }
  }, [id]);

  if (!room) {
    return <p className="text-center py-5">Loading Room Data...</p>;
  }

  return (
    <section className="py-5 bg-light booking-features">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-md-6">
            <img
              src={`http://localhost:8000/uploads/${room.image}`}
              alt={room.title}
              className="img-fluid"
            />
          </div>

          <div className="col-12 col-md-6">
            <div className="container mb-4 heading">
              <h2 className="fs-1">
                {room.title} <span>Room</span>
              </h2>
              <img
                src="/assets/resources/tb2.avif"
                alt="underline"
                className="underline-img"
              />
            </div>
            <p className="text-muted">{room.description}</p>
            <ul className="list-unstyled mb-4">
              {features.map((item, i) => (
                <li key={i} className="mb-2 d-flex align-items-center">
                  <FaCheck className="me-2 check" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
