import React from "react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";



const articles = [
  {
    image: "/assets/Blog/1.avif",
    publishDate: "July 10, 2025",
    title: "Top 5 Beach Destinations",
    description: "Explore the most beautiful and peaceful beaches for your next vacation.",
    link: "https://worlds50beaches.com/top-50-worlds-best-beaches/?utm_source=chatgpt.com",
  },
  {
    image: "/assets/Blog/2.avif",
    publishDate: "July 08, 2025",
    title: "Travel Hacks You Must Know",
    description: "Save money and time on your trips with these helpful travel hacks.",
    link: "https://www.theguardian.com/thefilter/2025/jul/25/your-holiday-hacks?utm_source=chatgpt.com",
  },
  {
    image: "/assets/Blog/3.avif",
    publishDate: "July 05, 2025",
    title: "Hotel Room Selection Guide",
    description: "Find the perfect hotel room with our step-by-step selection guide.",
    link: "/contact",
  },
];


export default function Newsletter() {
  return (
    <section className="py-5 newsletter-section">
      <div className="container">
       <div className="container text-center mb-4 heading">
               <h2 className="fs-1">
                 Hotel <span>Room</span>
               </h2>
               <img src="/assets/resources/tb2.avif" alt="underline" className="underline-img" />
             </div>

        <div className="row g-4">
          {articles.map((item, index) => (
            <div key={index} className="col-12 col-md-6 col-lg-4">
              <div className="card h-100 shadow-sm">
                <img src={item.image} className="card-img-top" alt={item.title} />
                <div className="card-body d-flex flex-column">
                  <small className="text-muted mb-2">{item.publishDate}</small>
                  <h5 className="card-title fw-bold">{item.title}</h5>
                  <p className="card-text text-muted">{item.description}</p>
                  <Link href={item.link}  className="mt-auto text-decoration-none link fw-bold">
                    Read More <FaArrowRight className="ms-1" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
