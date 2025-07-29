"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const bgImage = "/assets/Background/4.avif";
const user1 = "/assets/resources/t2.avif";
const user2 = "/assets/resources/t3.avif";
const user3 = "/assets/resources/t1.avif";


export default function Reviews() {
  const reviews = [
    {
      image: user1,
      name: "John Doe",
      role: "Traveler",
      message:
        "Amazing experience! The hotel was clean and the view was breathtaking. Highly recommended.",
    },
    {
      image: user2,
      name: "Emily Smith",
      role: "Guest",
      message:
        "A wonderful place to stay with great customer service. I’ll definitely come back again!",
    },
    {
      image: user3,
      name: "Alex Johnson",
      role: "Vacationer",
      message:
        "Perfect location and very peaceful. Staff was polite and food was delicious.",
    },
  ];

  return (
   <section
  className="reviews-section d-flex align-items-center text-center"
  style={{ backgroundImage: `url(${bgImage})` }}
>
  <div className="overlay w-100">
    <div className="container py-5">
      <Swiper
        modules={[Navigation, Autoplay, Pagination]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        className="mySwiper"
      >
        {reviews.map((review, index) => (
          <SwiperSlide key={index}>
            <div className="review-card text-white">
              <img src={review.image} alt={review.name} className="review-img mb-3" />
              <h3 className="fw-bold">{review.name}</h3>
              <p className=" role fw-bold">{review.role}</p>
              <p className="review-message fst-italic">{review.message}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  </div>
</section>

  );
}
