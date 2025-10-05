import React, { useState } from "react";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import heroImg from "../assets/hero.jpg";
import { ChevronDown, ArrowRight } from "lucide-react";
import img2 from "../assets/img2.jpg";
import img5 from "../assets/img5.jpg";
import img6 from "../assets/img6.jpg";
import { motion, AnimatePresence } from "framer-motion";

// ===== Variants =====
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

const cardsStagger = { hidden: {}, show: { transition: { staggerChildren: 0.12 } } };
const cardVar = { hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0, transition: { duration: 0.45 } } };

const curveIn = { hidden: { y: 16, opacity: 0 }, show: { y: 0, opacity: 1, transition: { duration: 0.8, ease: [0.22,1,0.36,1] } } };

// Smooth accordion (height auto)
const accContent = {
  collapsed: { opacity: 0, height: 0 },
  open: { opacity: 1, height: "auto" },
};

// ===== Page =====
const FaqPage = ({ bannerImg }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      title: "Common FAQs",
      items: [
        { q: "What documents do I need for international travel?", a: "Learn about the essential documents required for international travel, such as visa applications and passport requirements for certain regions." },
        { q: "How do I book my Hajj or Umrah pilgrimage?", a: "You can book directly through our official website or contact our travel agents." },
        { q: "Can I customize any itinerary with other destinations?", a: "Yes, customization is available upon request based on package type." },
        { q: "What accommodation options are available?", a: "We offer a wide range of hotels from budget to luxury depending on your preferences." },
        { q: "Are there any special requirements or documents needed?", a: "Some countries require additional permits or vaccinations; our team will guide you." },
      ],
    },
    {
      title: "Billing FAQs",
      items: [
        { q: "What payment methods do you accept?", a: "We accept Visa, MasterCard, bank transfers, and selected local payment gateways." },
        { q: "How often will I be billed?", a: "Payment depends on your chosen plan; typically 50% upfront and 50% before travel." },
        { q: "Can I view and download my invoices online?", a: "Yes, invoices are accessible anytime through your account dashboard." },
        { q: "What should I do if I believe there’s an error on my bill?", a: "Contact our billing support; we’ll review and correct any issues immediately." },
        { q: "Are there any additional charges I should be aware of?", a: "No hidden fees—taxes and service charges are clearly stated upfront." },
      ],
    },
  ];

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
        <motion.div variants={headingStagger} className="px-4">
          <motion.p variants={fadeUpSm} className='text-xl'>Frequently Asked Questions</motion.p>
          <motion.h1 variants={fadeUpSm} className=' text-3xl md:text-5xl font-semibold mb-1 text-[#d89a34]'>
            Your Guide to Hassle Free Travel, Umrah and Hajj
          </motion.h1>
          <motion.p variants={fadeUpSm} className=' text-[#d89a34] text-lg'>✦</motion.p>
          <motion.p variants={fadeUpSm} className='text-xl'>Home &#8594; FAQ</motion.p>
        </motion.div>

        {/* SVG Curve */}
        <motion.svg
          variants={curveIn}
          initial="hidden"
          animate="show"
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

        {/* ABOUT BLOCK */}
        <motion.div
          className="grid md:grid-cols-2 gap-10 items-center mt-20 px-10"
          variants={sectionVar}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
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
        </motion.div>

        {/* Wave separator */}
        <motion.div
          variants={sectionVar}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="relative"
        >
          <svg className="w-full" viewBox="0 0 1440 160" preserveAspectRatio="none">
            <path
              d="M0,80 C360,160 1080,0 1440,80 L1440,160 L0,160 Z"
              fill="url(#faqwave)"
            />
            <defs>
              <linearGradient id="faqwave" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="#d1d5db" />
                <stop offset="100%" stopColor="#f3f4f6" />
              </linearGradient>
            </defs>
          </svg>
        </motion.div>

        {/* FAQ SECTION */}
        <motion.section
          className="max-w-6xl mx-auto px-4 py-16 text-center"
          variants={sectionVar}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          <motion.p variants={fadeUpSm} className="text-amber-600 uppercase text-sm font-semibold tracking-widest">
            ✦ Essential Guide
          </motion.p>
          <motion.h2 variants={fadeUpSm} className="text-3xl md:text-4xl font-bold mt-2 mb-10">
            Hajj And Umrah Travel FAQs
          </motion.h2>
          <motion.p variants={fadeUpSm} className="text-gray-600 max-w-2xl mx-auto mb-12">
            Hajj and Umrah travel, designed to provide you with all the essential
            information you need for your spiritual journey.
          </motion.p>

          {/* Two-column FAQ cards */}
          <motion.div
            className="grid md:grid-cols-2 gap-8 text-left"
            variants={cardsStagger}
          >
            {faqs.map((faqGroup, idx) => (
              <motion.div
                key={idx}
                variants={cardVar}
                className="bg-white rounded-xl shadow-md border p-6 hover:shadow-lg transition"
              >
                <h3 className="text-lg font-semibold mb-4 text-amber-700">
                  {faqGroup.title}
                </h3>

                {faqGroup.items.map((item, i) => {
                  const key = `${idx}-${i}`;
                  const isOpen = openIndex === key;
                  return (
                    <div key={key} className="border-b border-gray-200 py-2">
                      <button
                        className="flex justify-between items-center w-full text-left text-gray-800 font-medium"
                        onClick={() => setOpenIndex(isOpen ? null : key)}
                      >
                        {item.q}
                        <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`} />
                      </button>

                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            key="content"
                            variants={accContent}
                            initial="collapsed"
                            animate="open"
                            exit="collapsed"
                            transition={{ duration: 0.25 }}
                          >
                            <p className="mt-2 text-gray-600 text-sm leading-relaxed">
                              {item.a}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Bottom Banner */}
        <motion.div
          className="relative bg-[#BB4D00] text-white py-10 px-6 md:px-12 rounded-t-xl max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8"
          variants={sectionVar}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.div variants={headingStagger} className="max-w-lg">
            <motion.p variants={fadeUpSm} className="uppercase text-xs tracking-widest opacity-90">
              ✦ Umrah Package
            </motion.p>
            <motion.h3 variants={fadeUpSm} className="text-2xl md:text-3xl font-semibold leading-snug mt-2">
              Join Dome Tours For An <br /> Unforgettable Hajj And Umrah
            </motion.h3>
            <motion.p variants={fadeUpSm} className="mt-3 text-sm opacity-95">
              Join us and experience the difference firsthand.
            </motion.p>
            <motion.button
              variants={fadeUpSm}
              whileHover={{ scale: 1.04, boxShadow: "0 10px 26px rgba(255,255,255,0.25)" }}
              whileTap={{ scale: 0.98 }}
              className="mt-5 inline-flex items-center gap-2 bg-white text-[#BB4D00] px-5 py-2 rounded-md text-sm font-semibold shadow hover:bg-gray-100 transition"
            >
              Book Now <ArrowRight className="w-4 h-4" />
            </motion.button>
          </motion.div>

          {/* Floating right image */}
          <motion.div
            className="w-full md:w-[350px] h-40 bg-gray-400 rounded-md overflow-hidden"
            initial={{ opacity: 0, y: 10, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            animate={{ y: [0, -4, 0] }}
            // repeat the float
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
          >
            <img src={img6} alt="Umrah Banner" className="w-full h-full object-cover" />
          </motion.div>
        </motion.div>

        {/* Extra bottom FAQ section */}
        <motion.section
          className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 py-16 grid md:grid-cols-2 gap-8 items-center"
          variants={sectionVar}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          {/* Image */}
          <motion.div className="bg-gray-200 rounded-lg h-64 overflow-hidden shadow" variants={imageEnter}>
            <motion.img src={img5} alt="Logistics" className="w-full h-full object-cover" whileHover={{ scale: 1.04 }} />
          </motion.div>

          {/* FAQ Card with Accordion */}
          <motion.div className="bg-white shadow-md border rounded-xl p-8" variants={cardVar}>
            <h3 className="text-lg font-semibold mb-4 text-amber-700">Logistical FAQ</h3>
            <p className="text-gray-600 mb-4">
              Whether you’re embarking on your first pilgrimage or traveling multiple times, logistical FAQs help you understand essential
              information for a smooth and convenient sacred journey.
            </p>

            {[
              { q: "What journey will I take for my Umrah or Hajj?", a: "Our team will guide you through every step of your journey, including flight schedules, accommodation, and ground transportation arrangements." },
              { q: "Will there be transportation provided for traveling?", a: "Yes, we provide comfortable, air-conditioned buses for all local transfers, ensuring convenience from arrival to departure." },
              { q: "What should I do if I believe there’s an error on my bill?", a: "If you notice a billing discrepancy, please contact our support team immediately. We’ll review your account and resolve the issue promptly." },
              { q: "Can I request special accommodations for myself?", a: "Absolutely. We cater to travelers with specific health, dietary, or accessibility needs. Please notify us during booking so we can make proper arrangements." },
            ].map((item, i) => {
              const key = `log-${i}`;
              const isOpen = openIndex === key;
              return (
                <div key={key} className="border-b border-gray-200 py-3">
                  <button
                    className="flex justify-between items-center w-full text-left text-gray-800 font-medium"
                    onClick={() => setOpenIndex(isOpen ? null : key)}
                  >
                    {item.q}
                    <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`} />
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="content"
                        variants={accContent}
                        initial="collapsed"
                        animate="open"
                        exit="collapsed"
                        transition={{ duration: 0.25 }}
                      >
                        <p className="mt-2 text-gray-600 text-sm leading-relaxed">{item.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </motion.div>
        </motion.section>
      </main>

      <Footer/>
    </div>
  );
};

export default FaqPage;
