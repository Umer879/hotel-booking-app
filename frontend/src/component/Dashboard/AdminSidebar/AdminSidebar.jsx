'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import {
  FaUser, FaTachometerAlt, FaEnvelope, FaComments, FaSignOutAlt,
  FaCalendarAlt, FaChevronDown, FaChevronUp, FaKey, FaTimes
} from 'react-icons/fa';

export default function AdminSidebar() {
  const [showMobileSidebar, setShowMobileSidebar] = useState(false);
  const [animateSidebar, setAnimateSidebar] = useState(false);
  const [openBooking, setOpenBooking] = useState(false);
  const [openRooms, setOpenRooms] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) setShowMobileSidebar(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const openSidebar = () => {
    setShowMobileSidebar(true);
    setAnimateSidebar(true); // trigger slide-in animation
  };

  const closeSidebar = () => {
    setAnimateSidebar(false); // trigger slide-out
    setTimeout(() => setShowMobileSidebar(false), 300); // wait for animation to finish
  };

  const SidebarContent = () => (
    <div className="admin-sidebar bg-dark text-white p-3 h-100">
      <div className="text-center mt-4 admin-profile">
        <div className="profile-frame mx-auto mb-2">
          <img src="/assets/Profile/profile.avif" alt="Profile" className="profile-image" />
        </div>
        <h5 className="mb-0">Umer Gull</h5>
        <small>Manager</small>
      </div>

      <div className="admin-icons my-3 d-flex justify-content-around">
        <FaUser />
        <FaEnvelope />
        <FaComments />
        <FaSignOutAlt />
      </div>

      <ul className="list-unstyled fw-bold mt-3">
        <li className="mb-2 side-link rounded">
          <Link href="/admin/dashboard" className="text-white text-decoration-none px-3 py-2 d-block">
            <FaTachometerAlt className="me-2" /> Dashboard
          </Link>
        </li>

        {/* Booking Dropdown */}
        <li className="mb-2">
          <div
            className="d-flex justify-content-between align-items-center drop-down px-3 py-2 sidebar-toggle  side-link rounded"
            onClick={() => setOpenBooking(!openBooking)}
          >
            <span className='text-white'><FaCalendarAlt className="me-2" />Booking</span>
            {openBooking ? <FaChevronUp /> : <FaChevronDown />}
          </div>
          <div className={`dropdown-content ps-4 ${openBooking ? 'dropdown-show' : ''}`}>
            <Link href="/admin/booking/add" className="text-white text-decoration-none d-block mt-3">New Booking</Link>
            <Link href="/admin/booking/view" className="text-white text-decoration-none d-block mt-3">View Booking</Link>
          </div>
        </li>

        {/* Rooms Dropdown */}
        <li>
          <div
            className="d-flex justify-content-between align-items-center px-3 py-2 sidebar-toggle drop-down side-link rounded"
            onClick={() => setOpenRooms(!openRooms)}
          >
            <span className='text-white'><FaKey className="me-2" />Rooms</span>
            {openRooms ? <FaChevronUp /> : <FaChevronDown />}
          </div>
          <div className={`dropdown-content ps-4 ${openRooms ? 'dropdown-show' : ''}`}>
            <Link href="/admin/rooms/add" className="text-white text-decoration-none d-block mt-3">Add Room Details</Link>
            <Link href="/admin/rooms/view" className="text-white text-decoration-none d-block mt-3">View Rooms</Link>
          </div>
        </li>
      </ul>
    </div>
  );

  return (
    <>
        {/* Mobile Topbar (visible below 600px only) */}
    <div className="admin-mobile-navbar justify-content-between align-items-center bg-dark text-light p-2" style={{ display: 'none' }}>
      <h6 className="mb-0">Admin Panel</h6>
      <button className="btn btn-outline-light" onClick={openSidebar}>☰</button>
    </div>

    {/* Mobile Sidebar */}
    {showMobileSidebar && (
      <div className={`mobile-sidebar bg-dark text-white ${animateSidebar ? 'slide-in' : 'slide-out'}`}>
        <div className="d-flex justify-content-end p-2">
          <button className="btn btn-sm btn-outline-light" onClick={closeSidebar}>
            <FaTimes />
          </button>
        </div>
        {SidebarContent()}
      </div>
    )}

      {/* Desktop Sidebar */}
      <div className="d-none d-md-block desktop-sidebar admin-desktop-sidebar position-fixed h-100">
        {SidebarContent()}
      </div>
    </>
  );
}
