import React from 'react'
import Image from "next/image";
const About = () => {
  return (
   <section className="container-fluid py-5 about-section">
  <div className="container myAbout">
    <div className="row align-items-center about-row">
      {/* Image Column */}
      <div className="col-12 col-md-12 col-lg-5 mb-4 mb-lg-0">
        <img
          src='/assets/resources/ab.avif'
          alt="About Section"
          className="img-fluid rounded shadow-sm"
        />
      </div>

      {/* Content Column */}
      <div className="col-12 col-md-12 col-lg-7">
         <div className="container mb-4 heading">
                <h2 className="fs-1">
                  About <span>Nilachol</span>
                </h2>
                <img src='/assets/resources/tb2.avif' alt="underline" className="underline-img" />
              </div>
        <h6 className="fw-bold mb-3">Lorem ipsum dolor sit amet,pro ne honestatis sadipscing detraxit salutatus mei. Omnis labor eos ne, scripta facilisi dissentias mel ex, ex vis semper adolescens delicatissimi.</h6>
        <p>
         Lorem ipsum dolor sit amet, ad vis dicat essent expetenda, an vel dicit choro ani Sumo repudiare ei pri. Eius intellegat per te. Quando oportere maiestatis qui ut, quo aeterno definiebas sadipscing ne. Eu fierent tacimates partiendo mea, meis putant vocent qui et,
        </p>
        <p>
         vis ei erroribus similique.Cum saepe disputationi in. Id mentitum perpetua mnesarchum per. Ne vix odio dicit numquam, audiam inermis eu nam. Eius intellegat per te. Quando oportere maiestatis qui ut, quo aeterno definiebas sadipscing ne. Lorem ipsum dolor sit amet, ad vis dicat essent expetenda, an vel dicit choro ani Sumo repudiare ei pri. Eius intellegat per te.
        </p>
      </div>
    </div>
  </div>
</section>

  )
}

export default About
