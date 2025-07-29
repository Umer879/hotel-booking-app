import React from "react";

const Map = () => {
  return (
    <section className="map-section">
      <div className="map-overlay"></div>
      <iframe
        title="Google Map - Pakistan"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10847990.399024993!2d60.8723988705512!3d30.096621227601698!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38db52d498cc7eeb%3A0xb1c33edb0c09a5a4!2sPakistan!5e0!3m2!1sen!2s!4v1620438071525!5m2!1sen!2s"
        width="100%"
        height="400"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </section>
  );
};

export default Map;
