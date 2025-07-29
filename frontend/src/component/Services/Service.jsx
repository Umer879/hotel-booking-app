import React from "react";
import "./Service.css";
const tb2 = "/assets/resources/tb2.avif";


// 🟢 React Icons Import
import { FaBed, FaWater, FaCar, FaBath, FaPersonSwimming, FaUtensils } from "react-icons/fa6";

export default function Services() {
  const services = [
    { icon: <FaBed />, title: "Master BedRooms", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis amet harum odit modi voluptatum tempora dolores error ut animi quia." },
    { icon: <FaWater />, title: "Sea View Balcony", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis amet harum odit modi voluptatum tempora dolores error ut animi quia." },
    { icon: <FaCar />, title: "Car Parking", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis amet harum odit modi voluptatum tempora dolores error ut animi quia." },
    { icon: <FaBath />, title: "Bath Room", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis amet harum odit modi voluptatum tempora dolores error ut animi quia." },
    { icon: <FaPersonSwimming />, title: "Swimming Pool", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis amet harum odit modi voluptatum tempora dolores error ut animi quia." },
    { icon: <FaUtensils />, title: "Restaurant", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis amet harum odit modi voluptatum tempora dolores error ut animi quia." }
  ];

  return (
    <section className="services-section py-5">
      <div className="text-center mb-4">
        <h2 className="fs-1">Our <span>Services</span></h2>
        <img src={tb2} alt="text-decoration" />
      </div>

      <div className="container">
        <div className="row gy-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="col-12 col-sm-6 col-lg-4 d-flex justify-content-between"
            >
              <div className="service-card d-flex flex-column align-items-start p-3">
                <div className="icon-box service-icons d-flex justify-content-center align-items-center mb-3"
                >
                  {service.icon}
                </div>
                <h5 className="fw-bold service-title">{service.title}</h5>
                <p>{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
