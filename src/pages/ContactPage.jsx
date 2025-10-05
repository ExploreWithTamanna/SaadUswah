import React from 'react'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import heroImg from "../assets/hero.jpg";
import img6 from "../assets/img6.jpg";
import {
  MapPin,
  Mail,
  Phone,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";
const sectionVar = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22,1,0.36,1] } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

const cardVar = {
  hidden: { opacity: 0, scale: 0.98, y: 10 },
  show:   { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5 } },
};


const ContactPage = () => {
  return (
    <div>
       <Navbar/>

      {/* HERO */}
<motion.section
  className="relative bg-cover bg-center text-center text-white py-24 z-0 overflow-hidden"
  style={{
    backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.6) 50%), url(${heroImg})`,
  }}
  variants={sectionVar}
  initial="hidden"
  animate="show"
>
  <motion.div variants={stagger} className="px-4">
    <motion.p variants={fadeUp} className="text-xl">Contact Us</motion.p>
    <motion.h1 variants={fadeUp} className="text-3xl md:text-5xl font-semibold mb-1 text-[#d89a34]">
      Let's Connect With Our Travel Experts
    </motion.h1>
    <motion.p variants={fadeUp} className="text-[#d89a34] text-lg">✦</motion.p>
    <motion.p variants={fadeUp} className="text-xl">Home &#8594; Contact Us</motion.p>
  </motion.div>

  {/* SVG Curve */}
  <motion.svg
    initial={{ y: 16, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.8, ease: [0.22,1,0.36,1] }}
    className="absolute bottom-[-70px] left-0 w-full scale-y-50 origin-bottom"
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

<main className="bg-white text-gray-900 overflow-hidden">
  {/* CONTACT SECTION */}
  <motion.section
    className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10"
    variants={sectionVar}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, margin: "-80px" }}
  >
    {/* Left Side */}
    <motion.div variants={stagger}>
      <motion.p variants={fadeUp} className="text-amber-600 uppercase font-semibold tracking-widest text-sm mb-2">
        ✦ Get In Touch
      </motion.p>
      <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold leading-snug mb-4">
        Have Questions About Our <br /> Travel Packages For Umrah <br /> And Hajj?
      </motion.h2>
      <motion.p variants={fadeUp} className="text-gray-600 mb-6 leading-relaxed max-w-md">
        Whether you need assistance with itinerary customization, accommodation preferences, or general inquiries about your
        pilgrimage, we’re just a message away. Reach out to us today to begin your transformative journey.
      </motion.p>

      <motion.ul variants={stagger} className="space-y-3 mb-8 text-gray-700">
        <motion.li variants={fadeUp} className="flex items-center gap-3">
          <MapPin className="text-amber-600 w-5 h-5" /><span>021 Hollywood Boulevard, LA</span>
        </motion.li>
        <motion.li variants={fadeUp} className="flex items-center gap-3">
          <Mail className="text-amber-600 w-5 h-5" /><span>customer@example.com</span>
        </motion.li>
        <motion.li variants={fadeUp} className="flex items-center gap-3">
          <Phone className="text-amber-600 w-5 h-5" /><span>(021) 345-6789</span>
        </motion.li>
      </motion.ul>

      <motion.div variants={fadeUp}>
        <p className="font-medium mb-3">Follow Us</p>
        <div className="flex items-center gap-3">
          <motion.a whileHover={{ scale: 1.08 }} className="h-8 w-8 rounded-full bg-amber-600/10 flex items-center justify-center hover:bg-amber-600/20 transition">
            <Facebook className="h-4 w-4 text-amber-700" />
          </motion.a>
          <motion.a whileHover={{ scale: 1.08 }} className="h-8 w-8 rounded-full bg-amber-600/10 flex items-center justify-center hover:bg-amber-600/20 transition">
            <Twitter className="h-4 w-4 text-amber-700" />
          </motion.a>
          <motion.a whileHover={{ scale: 1.08 }} className="h-8 w-8 rounded-full bg-amber-600/10 flex items-center justify-center hover:bg-amber-600/20 transition">
            <Instagram className="h-4 w-4 text-amber-700" />
          </motion.a>
          <motion.a whileHover={{ scale: 1.08 }} className="h-8 w-8 rounded-full bg-amber-600/10 flex items-center justify-center hover:bg-amber-600/20 transition">
            <Youtube className="h-4 w-4 text-amber-700" />
          </motion.a>
        </div>
      </motion.div>
    </motion.div>

    {/* Right Side - Form Card */}
    <motion.div
      variants={cardVar}
      className="bg-gradient-to-b from-amber-300 to-amber-600 p-8 rounded-xl shadow-md relative overflow-hidden"
    >
      <h3 className="text-2xl font-semibold text-white mb-2">Send A Message</h3>
      <p className="text-white/90 text-sm mb-6">
        Please feel free to contact us; we will get back to you as soon as possible.
      </p>

      <form className="space-y-4">
        <motion.input
          whileFocus={{ scale: 1.01 }}
          type="text"
          placeholder="Full name"
          className="w-full rounded-md px-4 py-2 text-sm border bg-gray-50 border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
        />
        <motion.input
          whileFocus={{ scale: 1.01 }}
          type="email"
          placeholder="Email address"
          className="w-full rounded-md px-4 py-2 text-sm border bg-gray-50 border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
        />
        <motion.textarea
          whileFocus={{ scale: 1.01 }}
          rows="5"
          placeholder="Message"
          className="w-full rounded-md px-4 py-2 text-sm border bg-gray-50 border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
        />
        <motion.button
          type="submit"
          whileHover={{ scale: 1.03, boxShadow: "0 8px 24px rgba(0,0,0,0.25)" }}
          whileTap={{ scale: 0.98 }}
          className="w-full bg-black text-white py-2 rounded-md font-medium hover:bg-gray-900 transition"
        >
          Send Message
        </motion.button>
      </form>
    </motion.div>
  </motion.section>

  {/* Wave Separator */}
  <motion.div
    initial={{ opacity: 0, y: 12 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="relative"
  >
    <svg className="w-full" viewBox="0 0 1440 160" preserveAspectRatio="none">
      <path
        d="M0,80 C360,160 1080,0 1440,80 L1440,160 L0,160 Z"
        fill="url(#wave)"
      />
      <defs>
        <linearGradient id="wave" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#d1d5db" />
          <stop offset="100%" stopColor="#f3f4f6" />
        </linearGradient>
      </defs>
    </svg>
  </motion.div>

  {/* Bottom Umrah Banner */}
  <motion.div
    className="relative bg-[#BB4D00] text-white py-10 px-6 md:px-12 rounded-t-xl max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8"
    variants={sectionVar}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true }}
  >
    <motion.div variants={stagger} className="max-w-lg">
      <motion.p variants={fadeUp} className="uppercase text-xs tracking-widest opacity-90">
        ✦ Umrah Package
      </motion.p>
      <motion.h3 variants={fadeUp} className="text-2xl md:text-3xl font-semibold leading-snug mt-2">
        Join Dome Tours For An <br /> Unforgettable Hajj And Umrah
      </motion.h3>
      <motion.p variants={fadeUp} className="mt-3 text-sm opacity-95">
        Join us and experience the difference firsthand.
      </motion.p>
      <motion.button
        variants={fadeUp}
        whileHover={{ scale: 1.04, boxShadow: "0 10px 26px rgba(255,255,255,0.25)" }}
        whileTap={{ scale: 0.98 }}
        className="mt-5 inline-flex items-center gap-2 bg-white text-[#BB4D00] px-5 py-2 rounded-md text-sm font-semibold shadow hover:bg-gray-100 transition"
      >
        Book Now <ArrowRight className="w-4 h-4" />
      </motion.button>
    </motion.div>

    {/* Right Banner Image with gentle float */}
    <motion.div
      className="w-full md:w-[350px] h-40 bg-gray-400 rounded-md overflow-hidden"
      initial={{ opacity: 0, y: 10, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      animate={{ y: [0, -4, 0] }}
      // repeating float
      transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
    >
      <img src={img6} alt="Umrah Banner" className="w-full h-full object-cover" />
    </motion.div>
  </motion.div>
</main>

  

       <Footer/>



    </div>
  )
}

export default ContactPage