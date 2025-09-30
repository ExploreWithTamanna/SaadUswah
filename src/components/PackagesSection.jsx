// PackagesSection.jsx
import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import img7 from "../assets/img7.jpg";

const PackagesSection = () => {
  const navigate = useNavigate();

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
daily breakfast and dinner, air-conditioned group transport, and dedicated religious guidance 
throughout your journey.`,
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
meals included, group transportation, and a dedicated guide. Activities are arranged to make the trip 
easier for children and elderly members.`,
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
  // ✅ Generate filter buttons dynamically
  const days = ["All", ...new Set(packages.map((pkg) => pkg.daysLabel))];

  const [activeDay, setActiveDay] = useState("All");

  // ✅ Filter logic
  const filteredPackages =
    activeDay === "All"
      ? packages
      : packages.filter((pkg) => pkg.daysLabel === activeDay);

  return (
    <section className="section-container bg-gray-50 text-center">
      {/* Heading */}
      <span className="uppercase tracking-widest text-yellow-600 font-semibold">
        ✦ All Packages
      </span>
      <h2 className="text-3xl md:text-4xl font-bold mb-2">
        Explore Our 2026 Hajj Packages
      </h2>
      <p className="text-gray-600 mb-12">
        *Package price will be declared after government announcement
      </p>

      {/* Days Filter Buttons */}
      <div className="flex justify-center gap-3 mb-8 flex-wrap">
        {days.map((day) => (
          <button
            key={day}
            onClick={() => setActiveDay(day)}
            className={`px-5 py-2 rounded-md font-semibold transition cursor-pointer ${
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
        {filteredPackages.map((pkg, index) => (
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
              <h3 className="text-lg font-semibold text-gray-900">
                {pkg.title}
              </h3>
              <p className="mt-2 text-gray-600">
                Start From:{" "}
                <span className="text-red-600 font-bold">{pkg.price}</span>{" "}
                <span className="text-sm text-gray-500">({pkg.duration})</span>
              </p>

              {/* Features */}
              <h4 className="mt-4 font-semibold text-amber-600">Package Details</h4>
              <ul className="grid grid-cols-2 gap-y-2 gap-x-4 mt-2 text-gray-700 text-sm">
                {pkg.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-2 ">
                    • <span>{f}</span>
                  </li>
                ))}
              </ul>

              {/* Additional */}
              <h4 className="mt-4 font-semibold text-amber-600">Additional</h4>
              <ul className="grid grid-cols-2 gap-y-2 gap-x-4 mt-2 text-gray-700 text-sm">
                <li className="flex items-start gap-2">• Accommodation</li>
                <li className="flex items-start gap-2">• Transportation</li>
              </ul>

              {/* Button */}
             <button
                className="mt-6 w-full bg-yellow-600 text-white font-semibold py-2 rounded flex items-center justify-center gap-2 hover:bg-yellow-700 transition"
                onClick={() => navigate(`/package/${pkg.id}`, { state: pkg })} // ✅ send package data
              >
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
