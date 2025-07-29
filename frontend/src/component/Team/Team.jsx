"use client";
import React from "react";
import { FaStar, FaFacebookF, FaTwitter, FaSkype } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const room1 = "/assets/team/1.avif";
const room2 = "/assets/team/2.avif";
const room3 = "/assets/team/3.avif";
const room4 = "/assets/team/4.avif";
const tb2   = "/assets/resources/tb2.avif";


export default function Team() {
  const rooms = [
    { image: room1, title: "Albart Muzad", des: "Co Founder" },
    { image: room2, title: "Robert Hafi", des: "Senior Staff" },
    { image: room3, title: "Juthii Sara", des: "President" },
    { image: room4, title: "Sunzida Akon", des: "Founder" },
    { image: room4, title: "Sunzida Akon", des: "Founder" },
  ];

  return (
    <section className="container-fluid team-section my-5">
      <div className="container text-center mb-4 heading">
        <h2 className="fs-1 text-dark">
          Meet <span>Our Team</span>
        </h2>
        <img src={tb2} alt="underline" className="underline-img" />
      </div>

      <div className="slider-wrapper px-3 pb-5">
        <Swiper
          modules={[Autoplay, Pagination]}
          loop={true}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          spaceBetween={20}
          breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
        >
          {rooms.map((room, index) => (
            <SwiperSlide key={index}>
              <div className="team-card bg-white shadow-sm overflow-hidden">
                <div className="team-img-wrapper position-relative">
                  <img src={room.image} alt={room.title} className="team-img w-100" />
                  <div className="team-overlay d-flex justify-content-center align-items-center">
                    <div className="social-icons d-flex gap-3">
                      <a href="#" className="d-flex justify-content-center align-items-center"><FaFacebookF /></a>
                      <a href="#" className="d-flex justify-content-center align-items-center"><FaTwitter /></a>
                      <a href="#" className="d-flex justify-content-center align-items-center"><FaSkype /></a>
                    </div>
                  </div>
                </div>
                <div className="p-3 text-center bg-white team-text">
                  <div className="mb-2 d-flex justify-content-center">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className="mx-1 stars" />
                    ))}
                  </div>
                  <h6 className="fw-bold text-uppercase">{room.title}</h6>
                  <p className="mb-0">{room.des}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
