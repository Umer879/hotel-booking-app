import React from "react";
import {
  FaBed,
  FaWater,
  FaCar,
  FaBath,
  FaSwimmer,
  FaUtensils,
} from "react-icons/fa";
import ownerImg from "../../assets/service/1.avif";

export default function ServiceSection() {
  const services = [
    {
      heading: "Luxury Living",
      des: "Experience unmatched comfort and scenic beauty with our premium services.",
    },
    {
      heading: "Elegant Stay",
      des: "Enjoy all modern amenities and a tranquil atmosphere tailored for your needs.",
    },
  ];

  const features = [
    { icon: <FaBed />, label: "Master BedRooms" },
    { icon: <FaWater />, label: "Sea View Balcony" },
    { icon: <FaCar />, label: "Car Parking" },
    { icon: <FaBath />, label: "Bath Room" },
    { icon: <FaSwimmer />, label: "Swimming Pool" },
    { icon: <FaUtensils />, label: "Restaurant" },
  ];

  return (
    <section className="py-5 bg-light">
      <div className="container">
        <div className="row g-4">
          {/* Left Column */}
          <div className="col-12 col-sm-6 col-lg-4 col-xl-4">
            {services.map((item, idx) => (
              <div
                key={idx}
                className="p-4 bg-white rounded shadow-sm h-100 d-flex flex-column gap-3"
              >
                <h5 className="fw-bold">{item.heading}</h5>
                <p>{item.des}</p>
                <div className="d-flex flex-wrap gap-3">
                  {features.map((f, i) => (
                    <div
                      key={i}
                      className="d-flex align-items-center gap-2 text-muted"
                    >
                      {f.icon}
                      <small>{f.label}</small>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Middle Column - Owner Image */}
          <div className="col-12 col-sm-12 col-lg-4 col-xl-4 d-flex justify-content-center align-items-center">
            <img
              src={ownerImg}
              alt="Owner"
              className="img-fluid rounded-circle shadow"
              style={{ maxWidth: "240px" }}
            />
          </div>

          {/* Right Column */}
          <div className="col-12 col-sm-6 col-lg-4 col-xl-4">
            {services.map((item, idx) => (
              <div
                key={idx}
                className="p-4 bg-white rounded shadow-sm h-100 d-flex flex-column gap-3"
              >
                <h5 className="fw-bold">{item.heading}</h5>
                <p>{item.des}</p>
                <div className="d-flex flex-wrap gap-3">
                  {features.map((f, i) => (
                    <div
                      key={i}
                      className="d-flex align-items-center gap-2 text-muted"
                    >
                      {f.icon}
                      <small>{f.label}</small>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
