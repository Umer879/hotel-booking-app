import { FaCheck } from "react-icons/fa"; // ✅ Feather icon from react-icons

export default function AboutCommunity() {
  const items = [
    {
      heading: "Largest Community",
      des: "Lorem ipsum dolor sit amet, et sectetu adipiscing elit, sed do lilae eiusmod at tempor.",
    },
    {
      heading: "24 hours service",
      des: "Lorem ipsum dolor sit amet, et sectetu adipiscing elit, sed do lilae eiusmod at tempor.",
    },
    {
      heading: "lifetime support",
      des: "Lorem ipsum dolor sit amet, et sectetu adipiscing elit, sed do lilae eiusmod at tempor.",
    },
  ];

  return (
    <section className="py-5">
      <div className="container">
        <div className="row g-4">
          {items.map((item, index) => (
            <div key={index} className="col-12 col-sm-6 col-lg-4">
              <div className="p-4 h-100">
                <div className="d-flex align-items-center mb-2">
                  <FaCheck className=" check me-2" />
                  <h5 className="fw-bold mb-0">{item.heading}</h5>
                </div>
                <p className="mt-2">{item.des}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
