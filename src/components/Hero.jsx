import React from 'react'
import heroImg from "../assets/hero.jpg";
import { About } from './About';
import Featured from './Featured';
import TravelPackage from './TravelPackage';
import HomePackage from './HomePackage';

const Hero = () => {
  const data = [
    {
      title: "20+ Years",
      subtitle: "Years Of Trusted Service",
      text: "With over 20 years of experience in facilitating Hajj and Umrah pilgrimages.",
    },
    {
      title: "10,000+ Jamaah",
      subtitle: "Total Registered Hajj & Umrah",
      text: "Have entrusted Dome Tours for their sacred journey experiencing of service.",
    },
    {
      title: "99% Satisfied Jamaah",
      subtitle: "Satisfied Customer Use Our Service",
      text: "Luxurious accommodations to expert guidance ensures that your spiritual journey.",
    },
  ];

  return (
    <>
      <section
        className="relative bg-cover bg-center text-center text-white py-24 z-0"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.6) 50%), url(${heroImg})`,
        }}
      >
        <p className="text-5xl font-bold mb-2 text-[#d89a34]">
          WELCOME TO SAAD USWAH TRAVELS AND TOURS
        </p>
        <h1 className="text-3xl md:text-5xl font-semibold mb-4">
          Plan Your Umrah And Hajj Journey
        </h1>
        <p className="max-w-2xl mx-auto mb-6">
          Reflections on the significance of each ritual, immerse yourself in
          the richness of this spiritual endeavor and shape it to align
          perfectly with your intentions and aspirations.
        </p>
        <button className="bg-[#d89a34] text-white px-6 py-3 rounded hover:bg-[#b37c28]">
          Get Started →
        </button>

        {/* Stats */}
        <div className="container mx-auto grid md:grid-cols-3 gap-6 px-6 mt-30">
          {data.map((item, i) => (
            <div
              key={i}
              className="border border-gray-400 rounded-lg p-6 hover:shadow-lg bg-[rgba(61,65,65,0.8)]"
            >
              <h3 className="text-xl font-bold text-[#d89a34]">{item.title}</h3>
              <h4 className="text-lg font-semibold mt-2">{item.subtitle}</h4>
              <p className="text-gray-300 mt-2">{item.text}</p>
            </div>
          ))}
        </div>

        {/* SVG Curve */}
        <svg
          className="absolute bottom-[-70px] left-0 w-full scale-y-50 origin-bottom"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,32L80,64C160,96,320,160,480,154.7C640,149,800,75,960,53.3C1120,32,1280,64,1360,80L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
        </svg>
      </section>

      <About />
      <Featured />
      <TravelPackage />
      <HomePackage />
    </>
  );
};

export default Hero;
