import React from "react";
import img4 from "../assets/img4.jpeg";   // replace with your images
import img5 from "../assets/img5.jpg";
import img6 from "../assets/img6.jpg";
import { motion } from "framer-motion";
const sectionVar = {
  hidden: { opacity: 0, y: 20 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22,1,0.36,1] } },
};

const headingStagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 14 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

const cardsStagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const cardVar = {
  hidden: { opacity: 0, y: 16 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.45 } },
};


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
    <motion.section
  className="py-16 bg-white"
  variants={sectionVar}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true, margin: "-80px" }}
>
  {/* Header */}
  <motion.div className="text-center mb-12" variants={headingStagger} initial="hidden" animate="show">
    <motion.span variants={fadeUp} className="text-sm uppercase tracking-widest text-amber-600 font-semibold">
      ✦ Featured
    </motion.span>
    <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold mt-2">
      Services For Hajj And Umrah Travel
    </motion.h2>
    <motion.p variants={fadeUp} className="text-gray-600 mt-4 max-w-2xl mx-auto">
      Our dedicated section offers three distinct offerings to ensure a seamless and spiritually fulfilling experience
    </motion.p>
  </motion.div>

  {/* Services grid */}
  <motion.div
    className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-5"
    variants={cardsStagger}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, margin: "-80px" }}
  >
    {services.map((service, i) => (
      <motion.div
        key={i}
        variants={cardVar}
        whileHover={{ y: -6, scale: 1.02 }}
        transition={{ type: "spring", stiffness: 240, damping: 18 }}
        className="relative rounded-lg overflow-hidden group h-64 flex items-center justify-center text-center"
        style={{
          backgroundImage: `url(${service.img})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Permanent dark overlay */}
        <motion.div
          className="absolute inset-0 bg-black/60"
          initial={{ opacity: 0.6 }}
          whileHover={{ opacity: 0.7 }}
          transition={{ duration: 0.3 }}
        />

        {/* Text on top */}
        <motion.div
          className="relative z-10 px-6"
          initial={{ y: 6, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-amber-400 transition-colors duration-300">
            {service.title}
          </h3>
          <p className="text-sm text-gray-200 group-hover:text-gray-100 transition-all duration-300">
            {service.desc}
          </p>
        </motion.div>
      </motion.div>
    ))}
  </motion.div>
</motion.section>


  );
};

export default Featured;
