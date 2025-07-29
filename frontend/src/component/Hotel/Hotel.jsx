"use client";

import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import api from '@/utils/api'; // ✅ Axios instance
import Link from "next/link";
import Swal from "sweetalert2";

const tb2 = "/assets/resources/tb2.avif";

function Hotel() {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const res = await api.get('/hotelRooms');
        setRooms(res.data);
      } catch (err) {
        console.error('Error fetching rooms:', err);
        Swal.fire('Error', 'Could not fetch hotel rooms.', 'error');
      }
    };

    fetchRooms();
  }, []);

  return (
    <section className="hotel-room-section position-relative">
      <div className="hotel-bg"></div>

      <div className="container text-center mb-4 heading">
        <h2 className="fs-1 text-light">
          Hotel <span>Room</span>
        </h2>
        <img src={tb2} alt="underline" className="underline-img" />
      </div>

      <div className="slider-wrapper px-3 pb-5">
        {rooms.length > 0 ? (
          <Swiper
            modules={[Autoplay, Pagination]}
            loop={true}
            grabCursor={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            spaceBetween={20}
            breakpoints={{
              320: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {rooms.map((room, index) => (
              <SwiperSlide key={index}>
                <div className="room-card bg-white shadow-sm overflow-hidden">
                  <img
                    src={`http://localhost:8000/uploads/${room.image}`}
                    alt={room.title}
                    className="w-100 room-img"
                    style={{ height: "230px", objectFit: "cover" }}
                  />
                  <div className="p-3 text-center">
                    <div className="mb-2 d-flex justify-content-center">
                      {[...Array(5)].map((_, i) => (
                        <FaStar
                          key={i}
                          className="mx-1"
                          style={{ color: "#77ba00" }}
                        />
                      ))}
                    </div>
                    <h6 className="fw-bold text-uppercase">{room.title}</h6>
                    <div className="d-flex justify-content-between align-items-center mt-3 px-2">
                      <span className="fs-4 fw-bold">${room.price}</span>
                      <Link
                        href={`/booking/${room._id}`}
                        className="text-decoration-none room-link"
                      >
                        BOOK NOW
                      </Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <p className="text-center text-light">No Rooms Available</p>
        )}
      </div>
    </section>
  );
}

export default Hotel;
