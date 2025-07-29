import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import Link from "next/link";

// Dummy images
const logo = "/assets/logo/logo2.avif";
const inst1 = "/assets/resources/i1.avif";
const inst2 = "/assets/resources/i2.avif";
const inst3 = "/assets/resources/i3.avif";
const bgImage = "/assets/Background/6.avif";


export default function Footer() {
  return (
    <footer
      className="footer-section text-white"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="overlay">
        <div className="container py-5">
          <div className="row g-4">

            {/* Column 1 */}
            <div className="col-12 col-sm-6 col-lg-3">
              <img src={logo} alt="Logo" className="mb-3" style={{ width: "150px" }} />
              <p><FaMapMarkerAlt className="me-2" />23/223 Apple Street, New York</p>
              <p><FaPhone className="me-2" />+123-456-7890</p>
              <p><FaEnvelope className="me-2" />Mail@Nilacholteam.com</p>
            </div>

            {/* Column 2 - Services */}
            <div className="col-12 col-sm-6 col-lg-3">
              <h5 className="fw-bold">Our Services</h5>
              <ul className="list-unstyled mt-3">
                <li>Parking</li>
                <li>BedRoom</li>
                <li>Swimming Pool</li>
                <li>Restaurant</li>
              </ul>
            </div>

            {/* Column 3 - Pages */}
            <div className="col-12 col-sm-6 col-lg-3">
              <h5 className="fw-bold">Pages</h5>
              <ul className="list-unstyled mt-3">
                <Link href={'/'} className="text-light text-decoration-none" ><li>Home</li></Link>
                <Link href={'/about'} className="text-light text-decoration-none" ><li>About</li></Link>
                <Link href={'/services'} className="text-light text-decoration-none" ><li>Services</li></Link>
                <Link href={'/contact'} className="text-light text-decoration-none" ><li>contact</li></Link>
              </ul>
            </div>

            {/* Column 4 - Instagram */}
            <div className="col-12 col-sm-6 col-lg-3">
              <h5 className="fw-bold">Instagram</h5>
              <div className="d-flex gap-2 mt-3">
                <img src={inst1} alt="Insta 1" className="img-fluid rounded" style={{ width: "30%" }} />
                <img src={inst2} alt="Insta 2" className="img-fluid rounded" style={{ width: "30%" }} />
                <img src={inst3} alt="Insta 3" className="img-fluid rounded" style={{ width: "30%" }} />
              </div>
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
}
