import React from 'react'
import { motion } from "framer-motion";
const sectionVar = {
  hidden: { opacity: 0, y: 24 },
  show: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } 
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } 
  },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};


const TravelPackage = () => {
  return (
    <div>
         <motion.section
  className="relative py-20 bg-gradient-to-b from-white to-gray-300 overflow-hidden"
  variants={sectionVar}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true, margin: "-80px" }}
>
  {/* Optional soft background glow */}
  <motion.div
    aria-hidden
    className="absolute -top-20 right-0 h-64 w-64 bg-amber-300/20 rounded-full blur-3xl"
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
  />

  <motion.div
    className="max-w-5xl mx-auto px-6 md:px-12"
    variants={stagger}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true }}
  >
    <motion.span
      variants={fadeUp}
      className="text-sm uppercase tracking-widest text-amber-600 font-semibold"
    >
      ✦ Travel Package
    </motion.span>

    <motion.h2
      variants={fadeUp}
      className="text-3xl md:text-4xl font-bold mt-2"
    >
      Customize Your Own Umrah Package
    </motion.h2>

    <motion.p
      variants={fadeUp}
      className="text-gray-600 mt-4 max-w-3xl"
    >
      Customize every aspect of your journey, from accommodation preferences
      to excursion choices, to create a personalized itinerary that
      resonates with your faith and preferences.
    </motion.p>

    <motion.p
      variants={fadeUp}
      className="text-gray-600 mt-4 max-w-3xl"
    >
      With our easy-to-use platform and expert guidance, embark on a
      transformative journey that reflects your unique spiritual aspirations.
      Start crafting your dream Umrah experience today.
    </motion.p>

    {/* Button */}
    <motion.button
      variants={fadeUp}
      whileHover={{ scale: 1.05, boxShadow: "0 10px 26px rgba(245,158,11,0.35)" }}
      whileTap={{ scale: 0.96 }}
      className="mt-6 inline-block bg-amber-500 text-white px-6 py-3 rounded-md shadow hover:bg-amber-600 transition"
    >
      Book Now →
    </motion.button>
  </motion.div>

  {/* Optional bottom gradient fade for depth */}
  <motion.div
    aria-hidden
    className="absolute bottom-0 left-0 w-full h-16"
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    style={{
      background: "linear-gradient(to top, rgba(0,0,0,0.05), transparent)",
    }}
  />
</motion.section>

    </div>
  )
}

export default TravelPackage