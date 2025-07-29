import React from "react";

const Banner = ({ title}) => {
  return (
    <section
      className="banner-section text-white d-flex align-items-center justify-content-center">
      <div className="overlay"></div>
      <h1 className="z-1 position-relative text-uppercase fw-bold">{title}</h1>
    </section>
  );
};

export default Banner;
