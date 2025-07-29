"use client";
import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import "./Hero.css";

const hero1 = "/assets/slider/1.avif";
const hero2 = "/assets/slider/2.avif";
const hero3 = "/assets/slider/3.avif";


export default function HeroSlider() {
  const slides = [
    {
      image: hero1,
    },
    {
      image: hero2,

    },
    {
      image: hero3,
    },
  ];

  return (
    <section className="hero-slider">
      <Swiper
        modules={[Autoplay, Pagination]}
        loop={true}
        effect="fade"
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        breakpoints={{
          1024: { slidesPerView: 1 },
        }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="hero-slide"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="hero-overlay">
                <div className="hero-content text-white text-start px-4">
                  <h1 className="text-uppercase fw-bold">
                    Travel Brings Power & Love back to your Life
                  </h1>
                  <p>
                    Your journey begins here. Discover our services today.
                    Discover our services today. Discover our services today.
                  </p>
                  <div className="hero-btn d-flex gap-4">
                    <Link href='/about'>
                    <button
                      className="btn text-uppercase fw-bold mt-2 text-light myBtn"
                      style={{ border: '2px solid #77ba00' }}
                    >
                      About us
                    </button>
                    </Link>
                    <Link href='/contact'>
                    <button
                      className="btn text-uppercase fw-bold mt-2 text-light myBtn second-btn"
                    >
                      Contact us
                    </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}