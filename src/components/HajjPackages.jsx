import React from "react";
import TravelPackage from "./TravelPackage";

const HajjPackages = ({ pkg }) => {
  if (!pkg) {
    return <p className="text-center py-10 text-gray-500">No package selected.</p>;
  }

  return (
    <>
    <section className="bg-white py-16">
      <div className="max-w-5xl mx-auto px-6">
        {/* Top grid: Image + Details */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {/* Image */}
          <div className="relative h-80 rounded-xl overflow-hidden shadow-md">
            <img
              src={pkg.image}
              alt={pkg.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text Content */}
          <div className="bg-white rounded-xl p-6 shadow-md">
            <h2 className="text-2xl font-bold text-gray-900">{pkg.title}</h2>
            <p className="mt-2 text-lg">
              Start From:{" "}
              <span className="text-red-600 font-bold">{pkg.price}</span>{" "}
              <span className="text-gray-500 text-sm">({pkg.duration})</span>
            </p>

            <h4 className="mt-6 font-semibold text-amber-600">Package Details</h4>
            <ul className="grid grid-cols-2 gap-y-2 gap-x-4 mt-2 text-gray-700 text-sm">
              {pkg.features.map((f, i) => (
                <li key={i}>• {f}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* ✅ More Details Section */}
        {pkg.moreDetails && (
          <div className="bg-gradient-to-b from-amber-300 to-amber-600 text-white border rounded-xl p-6 shadow-md hover:shadow-lg transition">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              More Details:
            </h3>
            <p className="text-gray-700 leading-relaxed whitespace-pre-line">
              {pkg.moreDetails}
            </p>
          </div>
        )}
      </div>
    </section>
    <TravelPackage />
    </>
  );
};

export default HajjPackages;
