'use client';
import React, { useState } from 'react';
import Link from "next/link"; // ✅ Correct import


export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      <nav className="custom-navbar bg-light">
        <div className="d-flex padding justify-content-between align-items-center h-100 px-5">
          <div className="fs-3 fw-bold text-uppercase" aria-label="Logo">
            <img src="/assets/logo/logo.avif" alt="Hotel Logo" />
          </div>

          <div
            className={`nav-links d-flex align-items-center gap-4 ${menuOpen ? "open" : ""}`}
            role="navigation"
            aria-label="Main Navigation"
          >
            <ul className="list-unstyled d-flex flex-md-row flex-column align-items-md-center gap-5 m-0 p-0">
              <li><Link href="/" className="fw-bold text-dark text-uppercase text-decoration-none" onClick={() => setMenuOpen(false)}>Home</Link></li>
              <li><Link href="/about" className="fw-bold text-dark text-uppercase text-decoration-none" onClick={() => setMenuOpen(false)}>About</Link></li>
              <li><Link href="/services" className="fw-bold text-dark text-uppercase text-decoration-none" onClick={() => setMenuOpen(false)}>Services</Link></li>
              <li><Link href="/rooms" className="fw-bold text-dark text-uppercase text-decoration-none" onClick={() => setMenuOpen(false)}>Rooms</Link></li>
              <li><Link href="/contact" className="fw-bold text-dark text-uppercase text-decoration-none" onClick={() => setMenuOpen(false)}>Contact</Link></li>
            </ul>

            <Link href="/appointment" className="btn globalBtn text-uppercase fw-bold ms-3 text-white rounded-pill" onClick={() => setMenuOpen(false)} role="button">
              Appointment
            </Link>
          </div>

          <button className="toggle-btn d-lg-none fs-1 bg-transparent border-0" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Close Menu" : "Open Menu"}>
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </nav>
    </header>
  );
}
