import React from "react";
import img4 from "../assets/img4.jpeg";   // replace with your images
import img5 from "../assets/img5.jpg";
import img6 from "../assets/img6.jpg";

const Featured = () => {
  const services = [
    {
      title: "ISLAMIC TOURS",
      desc: "Rich cultural and religious heritage of Islamic history with our meticulously curated tours",
      img: img4,
    },
    {
      title: "HAJJ & UMRAH",
      desc: "Specializing in facilitating the logistics and arrangements necessary for the rites of Hajj and Umrah",
      img: img5,
    },
    {
      title: "CUSTOMIZE TOUR",
      desc: "Experience your own preferences and requirements with our customizable tour packages",
      img: img6,
    },
  ];

  return (
    <section className="py-16 bg-white">
      {/* Header */}
      <div className="text-center mb-12">
        <span className="text-sm uppercase tracking-widest text-amber-600 font-semibold">
          ✦ Featured
        </span>
        <h2 className="text-3xl md:text-4xl font-bold mt-2">
          Services For Hajj And Umrah Travel
        </h2>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          Our dedicated section offers three distinct offerings to ensure a
          seamless and spiritually fulfilling experience
        </p>
      </div>

      {/* Services grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {services.map((service, i) => (
          <div
            key={i}
            className="relative rounded-lg overflow-hidden group h-64 flex items-center justify-center text-center"
            style={{
              backgroundImage: `url(${service.img})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/60 group-hover:bg-black/70 transition-all duration-300"></div>

            {/* Text */}
            <div className="relative z-10 px-6">
              <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-amber-400 transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-sm text-gray-200 group-hover:text-gray-100 transition-all duration-300">
                {service.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Featured;
