import React from "react";
import { CheckCircle } from "lucide-react"; // icons for bullet points
import Navbar from "../components/Navbar";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.webp";
import img6 from "../assets/img6.jpg";
import { ArrowRight } from "lucide-react";



const AboutPage = () => {
  return (
    <div>
      <Navbar />
      <PageHeader />
      <div className="bg-white">
        {/* Section 1: About */}
        <section className="py-16 px-6 md:px-12 lg:px-20 bg-white">
              {/* About Section */}
              <div className="grid md:grid-cols-2 gap-10 items-center mb-20">
                {/* Left Image */}
                <div className="bg-gray-300 rounded-lg h-72 md:h-96">
        <img src={img2} alt="About Qablah" className="w-full h-full object-cover rounded-lg" />
                </div>
        
                {/* Right Content */}
                 <div className="bg-gray-50 p-8 rounded-xl shadow">
          <p className="text-yellow-700 font-medium tracking-widest">
            ● ABOUT QABLAH
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            We Make Best Quality Travel Muslim For Everyone
          </h2>
          <p className="text-gray-600 mt-4">
            With a dedicated focus on halal-certified services, prayer
            facilities, and accommodation arrangements that respect modesty and
            privacy. Our team of experienced professionals is committed to
            delivering seamless travel experiences, offering personalized
            assistance every step of the way.
          </p>

          <ul className="mt-4 space-y-3">
            <li className="flex items-start gap-3">
              <CheckCircle className="text-yellow-600 w-5 h-5 mt-1" />
              <span className="text-gray-700">
                Offer guidance on what to pack for Umrah, including appropriate
                clothing for Ihram, essential preparations, and practical tips
                for traveling light.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="text-yellow-600 w-5 h-5 mt-1" />
              <span className="text-gray-700">
                Provide advice on staying healthy and safe during Umrah,
                including recommendations for managing crowds, staying hydrated,
                and adhering to rituals.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="text-yellow-600 w-5 h-5 mt-1" />
              <span className="text-gray-700">
                With a dedicated focus on halal-certified services, prayer
                facilities, and accommodation arrangements that respect modesty
                and privacy.
              </span>
            </li>
          </ul>
        </div>
              </div>
        </section>

        {/* Section 2: Guiding Principles */}
        <section className="max-w-6xl mx-auto py-12 px-4 grid grid-cols-1 md:grid-cols-2 gap-6">
          

          {/* Left Content */}
          <div>
            <div className="bg-gray-50 p-8 rounded-xl shadow mb-6">
              <p className="text-yellow-700 font-medium tracking-widest">
                ● GUIDING PRINCIPLES
              </p>
              <h3 className="text-2xl font-bold mt-2">
                Guiding Every Decision We Make And Every Service We Provide
              </h3>
              <p className="text-gray-600 mt-3">
                Integrity, Excellence, Compassion, and Respect are the pillars
                upon which Dome Tours stands, ensuring that every pilgrim
                receives the highest standard of care, authenticity, and support
                throughout their sacred journey.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-yellow-700 text-white p-5 rounded-xl">
                <h4 className="text-xl font-bold">20+ Years</h4>
                <p className="text-sm mt-2">
                  Years Of Trusted Service With over 20 years of experience in
                  facilitating Hajj and Umrah pilgrimages.
                </p>
              </div>
              <div className="bg-yellow-700 text-white p-5 rounded-xl">
                <h4 className="text-xl font-bold">10,000+ Jamaah</h4>
                <p className="text-sm mt-2">
                  Total Registered Hajj & Umrah have entrusted Dome Tours for
                  their sacred journey.
                </p>
              </div>
              <div className="bg-yellow-700 text-white p-5 rounded-xl">
                <h4 className="text-xl font-bold">99% Satisfied Jamaah</h4>
                <p className="text-sm mt-2">
                  Satisfied Customer Use Our Service Luxurious accommodations &
                  expert guidance.
                </p>
              </div>
            </div>
            </div>
            {/* right Image Placeholder */}
           <div className="bg-gray-300 rounded-lg h-72 w-[700px] md:h-96">
        <img src={img2} alt="About Qablah" className="w-full h-full object-cover rounded-lg" />
                </div>
          
        </section>

        {/* Section 3: Services */}
   <section className="max-w-6xl mx-auto py-20 px-4 bg-cover bg-center">
  <div className="grid grid-cols-1 md:grid-cols-4 rounded-xl overflow-hidden">
    {/* Left Block */}
    <div className="bg-yellow-700 text-white p-8 md:col-span-1">
      <p className="uppercase text-sm tracking-wide">● Featured</p>
      <h3 className="text-2xl md:text-3xl font-bold mt-2">
        Services For Hajj And Umrah Travel
      </h3>
      <p className="mt-3 text-sm">
        Our dedicated team offers three distinct offerings to ensure a seamless
        and spiritually fulfilling experience.
      </p>
    </div>

    {/* Right 3 Columns */}
    <div
      className="relative md:col-span-3 text-white grid grid-cols-1 md:grid-cols-3"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${img6})` }}
      ></div>
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative p-6 flex flex-col justify-center items-center ">
        <h4 className="font-bold text-lg">ISLAMIC TOURS</h4>
        <p className="text-sm mt-2">
          Rich cultural and religious heritage of Islamic history with our
          meticulously curated tours.
        </p>
      </div>
      <div className="relative p-6 flex flex-col justify-center items-center">
        <h4 className="font-bold text-lg">HAJJ & UMRAH</h4>
        <p className="text-sm mt-2">
          Specializing in facilitating the logistics and arrangements necessary
          for the rites of Hajj and Umrah.
        </p>
      </div>
      <div className="relative p-6 flex flex-col justify-center items-center">
        <h4 className="font-bold text-lg">CUSTOMIZE TOUR</h4>
        <p className="text-sm mt-2">
          Experience to your unique preferences and requirements with our
          customizable tour packages.
        </p>
      </div>
    </div>
  </div>
</section>



        {/* Services Section */}
        <div className="grid md:grid-cols-2 gap-10 items-center py-16 px-6 md:px-12 lg:px-20 bg-white">
          {/* Left Content */}
          <div>
            <p className="text-sm text-[#d89a34] uppercase font-semibold tracking-wide mb-2">
              ✦ Our Services
            </p>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Tailored To Elevate Your Spiritual Journey
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              From Luxurious accommodations to expert guidance through sacred
              rituals, we’re dedicated to crafting unforgettable journeys that
              resonate with the essence of your faith. Explore our offerings and
              embark on a pilgrimage that transcends expectations.
            </p>
            <button className="bg-[#d89a34] text-white px-6 py-3 rounded-lg hover:bg-[#b37c28]">
              Learn More →
            </button>

            {/* Service Cards */}
            <div className="grid sm:grid-cols-2 gap-6 mt-10">
              <div className="bg-white rounded-xl shadow-md p-6">
                <h4 className="font-semibold mb-2">Best Hotels</h4>
                <p className="text-gray-600 text-sm">
                  Experience world-class amenities, breathtaking views, and
                  impeccable service, ensuring that your stay is nothing short
                  of extraordinary.
                </p>
              </div>
              <div className="bg-white rounded-xl shadow-md p-6">
                <h4 className="font-semibold mb-2">Guarantee Quality Tour</h4>
                <p className="text-gray-600 text-sm">
                  Trust in Dome Tours commitment, knowledgeable guides, and
                  seamless logistics. Embark on a journey of spiritual
                  enlightenment with confidence.
                </p>
              </div>
              <div className="bg-white rounded-xl shadow-md p-6">
                <h4 className="font-semibold mb-2">Easy Transfer</h4>
                <p className="text-gray-600 text-sm">
                  Seamlessly navigate to relax and enjoy the journey as we take
                  care of all the logistics, allowing you to focus on the sacred
                  experience ahead.
                </p>
              </div>
              <div className="bg-white rounded-xl shadow-md p-6">
                <h4 className="font-semibold mb-2">24/7 Assistance</h4>
                <p className="text-gray-600 text-sm">
                  Enjoy peace of mind knowing with Dome Tours, support is always
                  within reach, ensuring that your spiritual journey is smooth
                  and worry-free.
                </p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="bg-gray-300 rounded-lg h-72 md:h-96">
            <img src={img3} className="w-full h-full object-cover rounded-lg" />
          </div>
        </div>

         {/* Umrah Banner */}
      <div className="mt-14 max-w-6xl mx-auto px-4">
        <div className="relative bg-[#BB4D00] rounded-xl overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[url('/pattern.png')]"></div>

          <div className="p-8 md:p-12 flex flex-col md:flex-row items-center justify-between">
            {/* Text */}
            <div className="text-white max-w-2xl">
              <p className="uppercase text-sm tracking-wide">✦ Umrah Package</p>
              <h3 className="text-2xl md:text-3xl font-bold mt-2">
                Join Dome Tours For An Unforgettable Hajj And Umrah
              </h3>
              <p className="mt-3 text-sm">
                Join us and experience the difference firsthand.
              </p>
              <button className="bg-white flex justify-center items-center gap-2 text-[#BB4D00] px-6 py-3 mt-4 rounded-lg font-semibold shadow hover:bg-gray-100 transition">
                Book Now
                  <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            <div className="mt-4">
              <img src={img6} alt="" />
            </div>
          </div>
        </div>
      </div>
      </div>

      <Footer />
    </div>
  );
};

export default AboutPage;
