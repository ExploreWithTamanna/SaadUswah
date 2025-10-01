import React from "react";
import img7 from "../assets/img7.jpg";
import { motion } from "framer-motion";
const sectionVar = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22,1,0.36,1] } },
};

const headingStagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
};

const fadeUpSm = {
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


// Sample review data
const reviews = [
  {
    name: "Fatima Ahmed",
    role: "Business Owner",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    message:
      "Every aspect of our journey was handled with utmost professionalism. From the moment we arrived until our return, the team ensured our comfort and safety.",
  },
  {
    name: "Mohammed Khan",
    role: "Business Owner",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/men/75.jpg",
    message:
      "Perfect opportunity for personal reflection and rejuvenation. The guidance and support offered throughout our pilgrimage were exceptional.",
  },
  {
    name: "Ayesha Malik",
    role: "Teacher",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
    message:
      "Assurance that every detail would be taken care of, allowing me to focus on my spiritual journey. Visa processing to accommodation was flawlessly executed.",
  },
];

const ReviewSection = () => {
  return (
    <motion.section
  className="py-16 bg-gray-50"
  variants={sectionVar}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true, margin: "-80px" }}
>
  <div className="max-w-6xl mx-auto px-4">
    {/* Heading */}
    <div className="grid md:grid-cols-2 gap-8 mb-12 items-center">
      <motion.div variants={headingStagger} initial="hidden" animate="show">
        <motion.p variants={fadeUpSm} className="text-sm uppercase text-amber-600 font-semibold mb-2">
          ❖ Qablah Jamaah
        </motion.p>

        <motion.h2 variants={fadeUpSm} className="text-3xl font-bold text-gray-900 mb-4">
          Hear What Our Travelers Say With Their Spiritual Journey
        </motion.h2>

        <motion.p variants={fadeUpSm} className="text-gray-500 mb-6">
          Discover their experiences, reflections, and profound moments that
          have transformed their lives. Join the countless believers who
          have found solace and fulfillment through our dedicated support
          and travel arrangements.
        </motion.p>

        <motion.button
          variants={fadeUpSm}
          whileHover={{ scale: 1.03, boxShadow: "0 10px 26px rgba(234,179,8,0.35)" }}
          whileTap={{ scale: 0.98 }}
          className="bg-amber-600 text-white font-semibold px-6 py-2 rounded hover:bg-amber-700 transition"
        >
          See All &gt;
        </motion.button>
      </motion.div>

      <motion.div
        className="bg-gray-300 h-64 md:h-72 rounded-lg overflow-hidden"
        initial={{ opacity: 0, scale: 1.03 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.22,1,0.36,1] }}
      >
        <motion.img
          src={img7}
          alt="Spiritual Journey"
          className="w-full h-full object-cover rounded-lg"
          whileHover={{ scale: 1.05, x: 2, y: 1 }}
          transition={{ duration: 0.5 }}
        />
      </motion.div>
    </div>

    {/* Reviews */}
    <motion.div
      className="grid md:grid-cols-3 gap-8"
      variants={cardsStagger}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
    >
      {reviews.map((review, index) => (
        <motion.div
          key={index}
          variants={cardVar}
          whileHover={{ y: -6, scale: 1.01 }}
          transition={{ type: "spring", stiffness: 240, damping: 18 }}
          className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition"
        >
          {/* Avatar row */}
          <div className="flex items-center mb-4">
            <motion.div
              className="w-12 h-12 rounded-full border-2 border-amber-500 mr-4 overflow-hidden"
              initial={{ rotate: -6, opacity: 0 }}
              whileInView={{ rotate: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <img src={review.avatar} alt={review.name} className="w-full h-full object-cover" />
            </motion.div>

            <div>
              <p className="font-semibold text-amber-600">{review.name}</p>
              <p className="text-xs text-gray-400 uppercase">{review.role}</p>

              {/* Rating with subtle pop-in */}
              <div className="flex text-yellow-400 text-sm mt-1">
                {Array(review.rating)
                  .fill(0)
                  .map((_, i) => (
                    <motion.span
                      key={i}
                      initial={{ scale: 0, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ type: "spring", stiffness: 300, damping: 18, delay: i * 0.05 }}
                    >
                      ★
                    </motion.span>
                  ))}
              </div>
            </div>
          </div>

          {/* Review message */}
          <h4 className="font-semibold text-gray-900 mb-2">Great Customer Service!</h4>
          <motion.p
            className="text-gray-500 text-sm bg-gray-50 p-3 rounded"
            initial={{ opacity: 0, y: 6 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35 }}
          >
            {review.message}
          </motion.p>
        </motion.div>
      ))}
    </motion.div>
  </div>
</motion.section>

  );
};

export default ReviewSection;
