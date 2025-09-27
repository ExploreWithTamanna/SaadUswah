import React from 'react'

const TravelPackage = () => {
  return (
    <div>
         <section className="relative py-20 bg-gradient-to-b from-white to-gray-300">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <span className="text-sm uppercase tracking-widest text-amber-600 font-semibold">
          ✦ Travel Package
        </span>
        <h2 className="text-3xl md:text-4xl font-bold mt-2">
          Customize Your Own Umrah Package
        </h2>
        <p className="text-gray-600 mt-4 max-w-3xl">
          Customize every aspect of your journey, from accommodation preferences
          to excursion choices, to create a personalized itinerary that
          resonates with your faith and preferences.
        </p>
        <p className="text-gray-600 mt-4 max-w-3xl">
          With our easy-to-use platform and expert guidance, embark on a
          transformative journey that reflects your unique spiritual aspirations.
          Start crafting your dream Umrah experience today.
        </p>

        {/* Button */}
        <button className="mt-6 inline-block bg-amber-500 text-white px-6 py-3 rounded-md shadow hover:bg-amber-600 transition">
          Book Now →
        </button>
      </div>
    </section>
    </div>
  )
}

export default TravelPackage