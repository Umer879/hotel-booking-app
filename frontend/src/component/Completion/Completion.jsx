"use client";
import React from "react";
import { FaUsers, FaCoffee, FaTrophy, FaSmile } from "react-icons/fa";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

export default function ProjectCompletion() {
  const stats = [
    { title: "Happy Clients", count: 1200, icon: <FaSmile /> },
    { title: "Awards Winning", count: 350, icon: <FaTrophy /> },
    { title: "Our Staff", count: 45, icon: <FaUsers /> },
    { title: "Cup of Coffee", count: 18, icon: <FaCoffee /> },
  ];

  return (
    <section className="project-completion d-flex align-items-center my-5">
      <div className="container project-cont">
        <div className="row text-center">
          {stats.map((stat, index) => {
            const { ref, inView } = useInView({
              triggerOnce: true,
              threshold: 0.3,
            });

            return (
              <div key={index} className="col-12 col-md-6 col-lg-3" ref={ref}>
                <div className="p-3">
                  <div className="icon mb-2 fs-1 text-success">{stat.icon}</div>
                  <h4 className="fw-bold mb-0">
                    {inView ? (
                      <CountUp start={0} end={stat.count} duration={2} />
                    ) : (
                      0
                    )}
                    +
                  </h4>
                  <p className="mb-0 fw-bold fs-5">{stat.title}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
