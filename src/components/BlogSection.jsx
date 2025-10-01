// src/components/BlogSection.jsx
import React from "react";
import { ArrowRight } from "lucide-react";
import img6 from "../assets/img6.jpg"; // example for banner image
import img4 from "../assets/img4.jpeg"; // <-- add your card images
import img5 from "../assets/img5.jpg";
import { motion } from "framer-motion";
const sectionVar = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22,1,0.36,1] } },
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


const BlogSection = () => {
  const blogs = [
    {
      title: "Top 5 Packing Hacks for Your Hajj",
      date: "March 22, 2024",
      comments: "No Comments",
      excerpt:
        "Smart packing strategies, learn how to pack efficiently without compromising on comfort..",
      image: img4, // add image property
    },
    {
      title: "A Comprehensive Guide Umrah",
      date: "March 22, 2024",
      comments: "No Comments",
      excerpt:
        "From Tawaf to Sa’i, discover the significance and intricacies of each ritual, accompanied by..",
      image: img5,
    },
    {
      title: "Hajj 2024 Edition Travel",
      date: "March 22, 2024",
      comments: "No Comments",
      excerpt:
        "Whether you’re finalizing your itinerary or seeking last minute updates, trust our curated..",
      image: img6,
    },
  ];

  return (
    <motion.section
  className="w-full py-12 bg-white px-4"
  variants={sectionVar}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true, margin: "-80px" }}
>
  {/* Heading */}
  <motion.div className="text-center mb-10" variants={headingStagger} initial="hidden" animate="show">
    <motion.p variants={fadeUp} className="text-yellow-700 font-medium tracking-widest">✦ OUR NEWS</motion.p>
    <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold mt-2">
      Popular Blog &amp; News
    </motion.h2>
    <motion.p variants={fadeUp} className="text-gray-500 mt-3">
      Our curated content will ensure you’re well-prepared and inspired every
      step of the way.
    </motion.p>
  </motion.div>

  {/* Blog Cards */}
  <motion.div
    className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto"
    variants={cardsStagger}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, margin: "-80px" }}
  >
    {blogs.map((blog, index) => (
      <motion.div
        key={index}
        variants={cardVar}
        whileHover={{ y: -6, scale: 1.01 }}
        transition={{ type: "spring", stiffness: 240, damping: 18 }}
        className="bg-white shadow-md rounded-xl overflow-hidden border"
      >
        {/* Background Image (zoom on hover) */}
        <div className="h-48 w-full overflow-hidden">
          <motion.div
            className="h-full w-full bg-center bg-cover"
            style={{ backgroundImage: `url(${blog.image})` }}
            initial={{ scale: 1.02 }}
            whileHover={{ scale: 1.07 }}
            transition={{ duration: 0.5 }}
          />
        </div>

        {/* Content */}
        <div className="p-5">
          <h3 className="text-lg font-semibold text-gray-800">{blog.title}</h3>
          <p className="text-sm text-gray-400 mt-1">
            {blog.date} {blog.comments}
          </p>
          <p className="text-gray-600 mt-3 text-sm">{blog.excerpt}</p>
        </div>
      </motion.div>
    ))}
  </motion.div>

  {/* Umrah Banner */}
  <motion.div
    className="mt-14 max-w-6xl mx-auto"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.55, ease: [0.22,1,0.36,1] }}
  >
    <div className="relative bg-[#BB4D00] rounded-xl overflow-hidden">
      {/* Permanent pattern overlay (kept from your code) */}
      <div className="absolute inset-0 opacity-10 bg-[url('/pattern.png')]" />

      <div className="p-8 md:p-12 flex flex-col md:flex-row items-center justify-between">
        {/* Text */}
        <div className="text-white max-w-2xl">
          <motion.p
            className="uppercase text-sm tracking-wide"
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35 }}
          >
            ✦ Umrah Package
          </motion.p>

          <motion.h3
            className="text-2xl md:text-3xl font-bold mt-2"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
          >
            Join Dome Tours For An Unforgettable Hajj And Umrah
          </motion.h3>

          <motion.p
            className="mt-3 text-sm"
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: 0.05 }}
          >
            Join us and experience the difference firsthand.
          </motion.p>

          <motion.button
            whileHover={{ scale: 1.04, boxShadow: "0 10px 26px rgba(255,255,255,0.25)" }}
            whileTap={{ scale: 0.98 }}
            className="bg-white flex justify-center items-center gap-2 text-[#BB4D00] px-6 py-3 mt-4 rounded-lg font-semibold shadow hover:bg-gray-100 transition"
          >
            Book Now
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </div>

        {/* Banner image with gentle float */}
        <motion.div
          className="mt-4"
          initial={{ opacity: 0, y: 10, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          animate={{ y: [0, -4, 0] }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        >
          <img src={img6} alt="" />
        </motion.div>
      </div>
    </div>
  </motion.div>
</motion.section>

  );
};

export default BlogSection;
