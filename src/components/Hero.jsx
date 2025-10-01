import React from 'react'
import heroImg from "../assets/hero.jpg";
import { About } from './About';
import Featured from './Featured';
import TravelPackage from './TravelPackage';
import HomePackage from './HomePackage';
import ReviewSection from './ReviewSection';
import BlogSection from './BlogSection';
import { motion } from "framer-motion";


const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22,1,0.36,1] } },
};

const statCard = {
  hidden: { opacity: 0, y: 16 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const bgReveal = {
  hidden: { opacity: 0, scale: 1.05 },
  show:   { opacity: 1, scale: 1, transition: { duration: 0.8, ease: [0.22,1,0.36,1] } },
};


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
     <motion.section
  className="relative bg-cover bg-center text-center text-white py-24 z-0 mb-30 overflow-hidden"
  style={{
    backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.6) 50%), url(${heroImg})`,
  }}
  variants={container}
  initial="hidden"
  animate="show"
>
  {/* Optional background fade-in */}
  <motion.div
    aria-hidden
    className="absolute inset-0"
    variants={bgReveal}
  />

  <motion.p variants={fadeUp} className="text-5xl font-bold mb-2 text-[#d89a34]">
    WELCOME TO SAAD USWAH TRAVELS AND TOURS
  </motion.p>

  <motion.h1 variants={fadeUp} className="text-3xl md:text-5xl font-semibold mb-4">
    Plan Your Umrah And Hajj Journey
  </motion.h1>

  <motion.p variants={fadeUp} className="max-w-2xl mx-auto mb-6">
    Reflections on the significance of each ritual, immerse yourself in
    the richness of this spiritual endeavor and shape it to align
    perfectly with your intentions and aspirations.
  </motion.p>

  <motion.button
    variants={fadeUp}
    whileHover={{ scale: 1.04, boxShadow: "0 10px 28px rgba(216,154,52,0.35)" }}
    whileTap={{ scale: 0.98 }}
    className="bg-[#d89a34] text-white px-6 py-3 rounded hover:bg-[#b37c28]"
  >
    Get Started →
  </motion.button>

  {/* Stats */}
  <motion.div
    variants={fadeUp}
    className="container mx-auto grid md:grid-cols-3 gap-6 px-6 mt-30"
  >
    {data.map((item, i) => (
      <motion.div
        key={i}
        variants={statCard}
        whileHover={{ y: -6, scale: 1.02 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        className="border border-gray-400 rounded-lg p-6 hover:shadow-lg bg-[rgba(61,65,65,0.8)]"
      >
        <h3 className="text-xl font-bold text-[#d89a34]">{item.title}</h3>
        <h4 className="text-lg font-semibold mt-2">{item.subtitle}</h4>
        <p className="text-gray-300 mt-2">{item.text}</p>
      </motion.div>
    ))}
  </motion.div>

  {/* SVG Curve with subtle float */}
  <motion.svg
    initial={{ y: 16, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 1, ease: [0.22,1,0.36,1] }}
    className="absolute bottom-[-100px] left-0 w-full scale-y-50 origin-bottom"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1440 320"
  >
    <path
      fill="#ffffff"
      fillOpacity="1"
      d="M0,32L80,64C160,96,320,160,480,154.7C640,149,800,75,960,53.3C1120,32,1280,64,1360,80L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
    ></path>
  </motion.svg>
</motion.section>

      <HomePackage />
      <About />
      <Featured />
      <TravelPackage />
      <ReviewSection/>
      <BlogSection/>
    </>
  );
};

export default Hero;
