import React from 'react'
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.webp";

export const About = () => {
  return (
    <div>

 <section className="py-16 px-6 md:px-12 lg:px-20 bg-white">
      {/* About Section */}
      <div className="grid md:grid-cols-2 gap-10 items-center mb-20">
        {/* Left Image */}
        <div className="bg-gray-300 rounded-lg h-72 md:h-96">
<img src={img2} alt="About Qablah" className="w-full h-full object-cover rounded-lg" />
        </div>

        {/* Right Content */}
        <div className="bg-white rounded-xl shadow-md p-8">
          <p className="text-sm text-[#d89a34] uppercase font-semibold tracking-wide mb-2">
            ✦ About Qablah
          </p>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            We Make Best Quality Travel Muslim For Everyone
          </h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            With a dedicated focus on halal-certified services, prayer
            facilities, and accommodation arrangements that respect modesty and
            privacy. Our team of experienced professionals is committed to
            delivering seamless travel experiences, offering personalized
            assistance every step of the way.
          </p>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Welcome to a world of quality travel, tailored for everyone who
            seeks the harmony of faith and wanderlust.
          </p>
          <button className="bg-[#d89a34] text-white px-6 py-3 rounded-lg hover:bg-[#b37c28]">
            Learn More →
          </button>
        </div>
      </div>

      {/* Services Section */}
      <div className="grid md:grid-cols-2 gap-10 items-center">
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
                impeccable service, ensuring that your stay is nothing short of
                extraordinary.
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
                within reach, ensuring that your spiritual journey is smooth and
                worry-free.
              </p>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="bg-gray-300 rounded-lg h-72 md:h-96">
          <img src={img3} className="w-full h-full object-cover rounded-lg" />
        </div>
      </div>
    </section>
    </div>
  )
}
