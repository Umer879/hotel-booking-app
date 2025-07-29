'use client';
import React from 'react';
import { FaShoppingCart, FaBook, FaEnvelopeOpenText, FaDollarSign } from 'react-icons/fa';
import DashboardChart from './Chart';
const cardData = [
  {
    title: 'Orders',
    value: 450,
    progress: 60,
    status: '60% Increase',
    icon: <FaShoppingCart />,
    bg: 'primary',
  },
  {
    title: 'New Booking',
    value: 135,
    progress: 75,
    status: '75% Increase',
    icon: <FaBook />,
    bg: 'success',
  },
  {
    title: 'Inquiry',
    value: 89,
    progress: 50,
    status: '50% Increase',
    icon: <FaEnvelopeOpenText />,
    bg: 'warning',
  },
  {
    title: 'Total Earning',
    value: '$5,230',
    progress: 90,
    status: '90% Increase',
    icon: <FaDollarSign />,
    bg: 'danger',
  },
];

export default function DashboardPage() {
  return (
    <div className="admin-main">
      <div className="container-fluid p-4 mb-5 dashboard">
        <h2 className="mb-4">Dashboard</h2>

        <div className="row g-4">
          {cardData.map((card, index) => (
            <div className="col-12 col-md-6 col-lg-3" key={index}>
              <div className={`card text-white bg-${card.bg} h-100`}>
                <div className="card-body d-flex justify-content-between align-items-center">
                  <div>
                    <h5 className="card-title">{card.title}</h5>
                    <h4 className="card-text">{card.value}</h4>
                    <div className="progress mt-2" style={{ height: '6px' }}>
                      <div
                        className="progress-bar bg-light"
                        style={{ width: `${card.progress}%` }}
                      ></div>
                    </div>
                    <small>{card.status}</small>
                  </div>
                  <div className="icon-circle bg-white text-dark ms-3">
                    {card.icon}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <DashboardChart />
    </div>
  );
}
