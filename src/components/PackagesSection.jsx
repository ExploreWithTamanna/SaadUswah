import React, { useState } from "react";
import { ArrowRight } from "lucide-react";

// Import images
import img7 from "../assets/img7.jpg";


const PackagesSection = () => {
  const [activeDay, setActiveDay] = useState("30 Days");

  const days = ["40 Days", "30 Days", "20 Days", "17 Days", "15 Days"];

  const packages = [
    {
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
    },
    {
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
    },
    {
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
    },
  ];

  return (
    <section className="section-container bg-white text-center">
     

      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold mb-2">
        Explore Our <span className="text-[#d89a34]">Hajj Packages</span>
      </h2>
      <p className="text-gray-600 mb-12">
        *Package price will be declared after government announcement
      </p>
       {/* Days Filter Buttons */}
      <div className="flex justify-center gap-3 mb-8">
        {days.map((day) => (
          <button
            key={day}
            onClick={() => setActiveDay(day)}
            className={`px-5 py-2 rounded-md font-semibold transition ${
              activeDay === day
                ? "bg-[#d89a34] text-white"
                : "bg-gray-200 hover:bg-[#d89a34] hover:text-white"
            }`}
          >
            {day}
          </button>
        ))}
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
        {packages.map((pkg, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md overflow-hidden border hover:shadow-lg transition"
          >
            {/* Top Section with background image and overlay */}
            <div className="relative h-56 overflow-hidden rounded-t-xl">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${pkg.image})` }}
              ></div>
              <div className="absolute inset-0 bg-black opacity-40"></div>
              <div className="absolute top-3 left-3 space-y-2 text-xs z-10">
                <span className="block bg-yellow-600 text-white font-semibold px-2 py-1 rounded">
                  DISC 15%
                </span>
                <span className="block bg-white text-black font-medium px-2 py-1 rounded shadow">
                  {pkg.daysLabel}
                </span>
                <span className="block bg-black text-white px-2 py-1 rounded shadow">
                  ✈ Premium Flight
                </span>
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
                  <li key={i}>• {f}</li>
                ))}
              </ul>

              {/* Additional */}
              <h4 className="mt-4 font-semibold text-amber-600">Additional</h4>
              <ul className="grid grid-cols-2 gap-1 mt-2 text-gray-600 text-sm">
                <li>• Accommodation</li>
                <li>• Transportation</li>
              </ul>

              {/* Button */}
              <button className="mt-6 w-full bg-yellow-600 text-white font-semibold py-2 rounded flex items-center justify-center gap-2 hover:bg-yellow-700 transition">
                More Detail <ArrowRight size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PackagesSection;
