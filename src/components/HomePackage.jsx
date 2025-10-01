import React from "react";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import img7 from "../assets/img7.jpg";
import { motion } from "framer-motion";

const sectionVar = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const headingStagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const cardsStagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const cardVar = {
  hidden: { opacity: 0, y: 18 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

const packages = [
  {
    id: 1,
    title: "Economy Umrah Package",
    price: "$2,200",
    duration: "9 days",
    daysLabel: "9 DAYS",
    image: img7,
    features: [
      "3 Star Hotel",
      "Transportation",
      "Guidance",
      "Meals",
      "Pilgrimage Services",
    ],
    moreDetails: `This Economy Umrah Package is designed for budget-conscious travelers.
It includes 3-star hotel accommodations within walking distance of the holy mosque,
daily meals, group transport, and religious guidance throughout your journey.`,
  },
  {
    id: 2,
    title: "Family-Friendly Umrah Experience",
    price: "$2,700",
    duration: "12 days",
    daysLabel: "12 DAYS",
    image: img7,
    features: [
      "4 Star Hotel",
      "Transportation",
      "Guidance",
      "Meals",
      "Pilgrimage Services",
    ],
    moreDetails: `Our Family-Friendly Umrah package provides 4-star accommodation with family rooms,
meals included, group transportation, and a dedicated guide. Activities are arranged
to make the trip easier for children and elderly members.`,
  },
  {
    id: 3,
    title: "Budget-Friendly Hajj Experience",
    price: "$15,500",
    duration: "30 days",
    daysLabel: "30 DAYS",
    image: img7,
    features: [
      "4 Star Hotel",
      "Transportation",
      "Guidance",
      "Meals",
      "Pilgrimage Services",
    ],
    moreDetails: `This Hajj package offers 30 days of comfortable 4-star accommodation,
all meals included, and private bus transport between holy sites.
It also covers government Hajj fees, visa processing, and religious seminars.`,
  },
];


const HomePackage = () => {
  const navigate = useNavigate();

  return (
    <motion.section
  className="py-16 bg-gray-50"
  variants={sectionVar}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true, margin: "-80px" }}
>
  {/* Heading */}
  <motion.div className="text-center mb-12" variants={headingStagger} initial="hidden" animate="show">
    <motion.span
      variants={fadeUp}
      className="uppercase tracking-widest text-yellow-600 font-semibold inline-flex items-center gap-2"
    >
      ✦ Best Package
    </motion.span>

    <motion.h2 variants={fadeUp} className="text-3xl font-bold text-gray-900 mt-2">
      Hajj And Umrah Special Offers
    </motion.h2>

    <motion.p variants={fadeUp} className="text-gray-500 mt-2">
      Don’t miss out on this exclusive opportunity to embark on a hajj &amp; umrah that is truly yours.
    </motion.p>
  </motion.div>

  {/* Cards */}
  <motion.div
    className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4"
    variants={cardsStagger}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, margin: "-80px" }}
  >
    {packages.map((pkg) => (
      <motion.div
        key={pkg.id}
        variants={cardVar}
        whileHover={{ y: -6, scale: 1.01 }}
        transition={{ type: "spring", stiffness: 240, damping: 18 }}
        className="bg-white rounded-xl shadow-md overflow-hidden border hover:shadow-lg transition"
      >
        {/* Top Section with background image and overlay */}
        <div className="relative h-56 overflow-hidden rounded-t-xl group">
          {/* image layer with hover zoom / subtle parallax */}
          <motion.div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${pkg.image})` }}
            initial={{ scale: 1.02 }}
            whileHover={{ scale: 1.08, x: 4, y: 2 }}
            transition={{ duration: 0.5 }}
          />
          <div className="absolute inset-0 bg-black/40" />

          {/* badges with tiny float-on-hover */}
          <div className="absolute top-3 left-3 space-y-2 text-xs z-10">
            <motion.span
              whileHover={{ y: -2 }}
              className="block bg-yellow-600 text-white font-semibold px-2 py-1 rounded"
            >
              DISC 15%
            </motion.span>
            <motion.span
              whileHover={{ y: -2 }}
              transition={{ delay: 0.05 }}
              className="block bg-white text-black font-medium px-2 py-1 rounded shadow"
            >
              {pkg.daysLabel}
            </motion.span>
            <motion.span
              whileHover={{ y: -2 }}
              transition={{ delay: 0.1 }}
              className="block bg-black text-white px-2 py-1 rounded shadow"
            >
              ✈ Premium Flight
            </motion.span>
          </div>
        </div>

        {/* Body */}
        <div className="p-6">
          <h3 className="text-lg font-semibold text-gray-900">{pkg.title}</h3>

          <p className="mt-2 text-gray-600">
            Start From:{" "}
            <span className="text-red-600 font-bold">{pkg.price}</span>{" "}
            <span className="text-sm text-gray-500">({pkg.duration})</span>
          </p>

          {/* Features */}
          <h4 className="mt-4 font-semibold text-amber-600">Package Details</h4>
          <ul className="grid grid-cols-2 gap-1 mt-2 text-gray-600 text-sm">
            {pkg.features.map((f, i) => (
              <motion.li key={i} whileHover={{ x: 3 }} className="flex items-start">• {f}</motion.li>
            ))}
          </ul>

          {/* Additional */}
          <h4 className="mt-4 font-semibold text-amber-600">Additional</h4>
          <ul className="grid grid-cols-2 gap-1 mt-2 text-gray-600 text-sm">
            <motion.li whileHover={{ x: 3 }}>• Accommodation</motion.li>
            <motion.li whileHover={{ x: 3 }}>• Transportation</motion.li>
          </ul>

          {/* Button */}
          <motion.button
            onClick={() => navigate(`/package/${pkg.id}`, { state: pkg })}
            whileHover={{ scale: 1.03, boxShadow: "0 10px 26px rgba(234,179,8,0.35)" }}
            whileTap={{ scale: 0.98 }}
            className="mt-6 w-full bg-yellow-600 text-white font-semibold py-2 rounded flex items-center justify-center gap-2 hover:bg-yellow-700 transition"
          >
            More Detail <ArrowRight size={16} />
          </motion.button>
        </div>
      </motion.div>
    ))}
  </motion.div>
</motion.section>

  );
};

export default HomePackage;
