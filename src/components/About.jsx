import React from "react";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.webp";
import { motion } from "framer-motion";
const sectionVar = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22,1,0.36,1] } },
};

const headingStagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

const fadeUpSm = {
  hidden: { opacity: 0, y: 14 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

const imageEnter = {
  hidden: { opacity: 0, scale: 1.03 },
  show:   { opacity: 1, scale: 1, transition: { duration: 0.6, ease: [0.22,1,0.36,1] } },
};

const cardsStagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const cardVar = {
  hidden: { opacity: 0, y: 16 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.4 } },
};


export const About = () => {
  return (
    <div>
      <motion.section
  className="py-16 px-6 md:px-12 lg:px-20 bg-white"
  variants={sectionVar}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true, margin: "-80px" }}
>
  {/* About Section */}
  <div className="grid md:grid-cols-2 gap-10 items-center mb-20">
    {/* Left Image */}
    <motion.div className="bg-gray-300 rounded-lg h-72 md:h-96 overflow-hidden" variants={imageEnter}>
      <motion.img
        src={img2}
        alt="About Qablah"
        className="w-full h-full object-cover rounded-lg"
        whileHover={{ scale: 1.05, x: 3, y: 2 }}
        transition={{ duration: 0.5 }}
      />
    </motion.div>

    {/* Right Content */}
    <motion.div className="bg-white rounded-xl shadow-md p-8" variants={headingStagger}>
      <motion.p variants={fadeUpSm} className="text-sm text-[#d89a34] uppercase font-semibold tracking-wide mb-2">
        ✦ About Qablah
      </motion.p>
      <motion.h2 variants={fadeUpSm} className="text-2xl md:text-3xl font-bold mb-4">
        We Make Best Quality Travel Muslim For Everyone
      </motion.h2>
      <motion.p variants={fadeUpSm} className="text-gray-600 mb-6 leading-relaxed">
        With a dedicated focus on halal-certified services, prayer facilities, and accommodation arrangements that respect modesty
        and privacy. Our team of experienced professionals is committed to delivering seamless travel experiences, offering
        personalized assistance every step of the way.
      </motion.p>
      <motion.p variants={fadeUpSm} className="text-gray-600 mb-6 leading-relaxed">
        Welcome to a world of quality travel, tailored for everyone who seeks the harmony of faith and wanderlust.
      </motion.p>
      <motion.button
        variants={fadeUpSm}
        whileHover={{ scale: 1.03, boxShadow: "0 10px 26px rgba(216,154,52,0.35)" }}
        whileTap={{ scale: 0.98 }}
        className="bg-[#d89a34] text-white px-6 py-3 rounded-lg hover:bg-[#b37c28]"
      >
        Learn More →
      </motion.button>
    </motion.div>
  </div>

  {/* Services Section */}
  <div className="grid md:grid-cols-2 gap-10 items-center">
    {/* Left Content */}
    <motion.div variants={headingStagger} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }}>
      <motion.p variants={fadeUpSm} className="text-sm text-[#d89a34] uppercase font-semibold tracking-wide mb-2">
        ✦ Our Services
      </motion.p>
      <motion.h2 variants={fadeUpSm} className="text-2xl md:text-3xl font-bold mb-4">
        Tailored To Elevate Your Spiritual Journey
      </motion.h2>
      <motion.p variants={fadeUpSm} className="text-gray-600 mb-6 leading-relaxed">
        From Luxurious accommodations to expert guidance through sacred rituals, we’re dedicated to crafting unforgettable journeys
        that resonate with the essence of your faith. Explore our offerings and embark on a pilgrimage that transcends expectations.
      </motion.p>
      <motion.button
        variants={fadeUpSm}
        whileHover={{ scale: 1.03, boxShadow: "0 10px 26px rgba(216,154,52,0.35)" }}
        whileTap={{ scale: 0.98 }}
        className="bg-[#d89a34] text-white px-6 py-3 rounded-lg hover:bg-[#b37c28]"
      >
        Learn More →
      </motion.button>

      {/* Service Cards */}
      <motion.div className="grid sm:grid-cols-2 gap-6 mt-10" variants={cardsStagger} initial="hidden" whileInView="show" viewport={{ once: true }}>
        <motion.div variants={cardVar} whileHover={{ y: -6, scale: 1.02 }} transition={{ type: "spring", stiffness: 240, damping: 18 }} className="bg-white rounded-xl shadow-md p-6">
          <h4 className="font-semibold mb-2">Best Hotels</h4>
          <p className="text-gray-600 text-sm">
            Experience world-class amenities, breathtaking views, and impeccable service, ensuring that your stay is nothing short of extraordinary.
          </p>
        </motion.div>

        <motion.div variants={cardVar} whileHover={{ y: -6, scale: 1.02 }} transition={{ type: "spring", stiffness: 240, damping: 18 }} className="bg-white rounded-xl shadow-md p-6">
          <h4 className="font-semibold mb-2">Guarantee Quality Tour</h4>
          <p className="text-gray-600 text-sm">
            Trust in Dome Tours commitment, knowledgeable guides, and seamless logistics. Embark on a journey of spiritual enlightenment with confidence.
          </p>
        </motion.div>

        <motion.div variants={cardVar} whileHover={{ y: -6, scale: 1.02 }} transition={{ type: "spring", stiffness: 240, damping: 18 }} className="bg-white rounded-xl shadow-md p-6">
          <h4 className="font-semibold mb-2">Easy Transfer</h4>
          <p className="text-gray-600 text-sm">
            Seamlessly navigate to relax and enjoy the journey as we take care of all the logistics, allowing you to focus on the sacred experience ahead.
          </p>
        </motion.div>

        <motion.div variants={cardVar} whileHover={{ y: -6, scale: 1.02 }} transition={{ type: "spring", stiffness: 240, damping: 18 }} className="bg-white rounded-xl shadow-md p-6">
          <h4 className="font-semibold mb-2">24/7 Assistance</h4>
          <p className="text-gray-600 text-sm">
            Enjoy peace of mind knowing with Dome Tours, support is always within reach, ensuring that your spiritual journey is smooth and worry-free.
          </p>
        </motion.div>
      </motion.div>
    </motion.div>

    {/* Right Image */}
    <motion.div className="bg-gray-300 rounded-lg h-72 md:h-96 overflow-hidden" variants={imageEnter} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }}>
      <motion.img
        src={img3}
        alt="Our Services"
        className="w-full h-full object-cover rounded-lg"
        whileHover={{ scale: 1.05, x: -3, y: 2 }}
        transition={{ duration: 0.5 }}
      />
    </motion.div>
  </div>
</motion.section>

    </div>
  );
};
