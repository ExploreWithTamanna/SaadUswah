import React from "react";
import img7 from "../assets/img7.jpg";

// Sample review data
const reviews = [
  {
    name: "Fatima Ahmed",
    role: "Business Owner",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    message:
      "Every aspect of our journey was handled with utmost professionalism. From the moment we arrived until our return, the team ensured our comfort and safety.",
  },
  {
    name: "Mohammed Khan",
    role: "Business Owner",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/men/75.jpg",
    message:
      "Perfect opportunity for personal reflection and rejuvenation. The guidance and support offered throughout our pilgrimage were exceptional.",
  },
  {
    name: "Ayesha Malik",
    role: "Teacher",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
    message:
      "Assurance that every detail would be taken care of, allowing me to focus on my spiritual journey. Visa processing to accommodation was flawlessly executed.",
  },
];

const ReviewSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <div className="grid md:grid-cols-2 gap-8 mb-12 items-center">
          <div>
            <p className="text-sm uppercase text-amber-600 font-semibold mb-2">
              ❖ Qablah Jamaah
            </p>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Hear What Our Travelers Say With Their Spiritual Journey
            </h2>
            <p className="text-gray-500 mb-6">
              Discover their experiences, reflections, and profound moments that
              have transformed their lives. Join the countless believers who
              have found solace and fulfillment through our dedicated support
              and travel arrangements.
            </p>
            <button className="bg-amber-600 text-white font-semibold px-6 py-2 rounded hover:bg-amber-700 transition">
              See All &gt;
            </button>
          </div>
          <div className="bg-gray-300 h-64 md:h-72 rounded-lg overflow-hidden">
            <img
              src={img7}
              alt="Spiritual Journey"
              className="w-full h-full object-cover rounded-lg transform transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>

        {/* Reviews */}
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition"
            >
              {/* Avatar */}
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full border-2 border-amber-500 mr-4 overflow-hidden">
                  <img
                    src={review.avatar}
                    alt={review.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold text-amber-600">{review.name}</p>
                  <p className="text-xs text-gray-400 uppercase">
                    {review.role}
                  </p>
                  {/* Rating */}
                  <div className="flex text-yellow-400 text-sm mt-1">
                    {Array(review.rating)
                      .fill("★")
                      .map((star, i) => (
                        <span key={i}>{star}</span>
                      ))}
                  </div>
                </div>
              </div>

              {/* Review message */}
              <h4 className="font-semibold text-gray-900 mb-2">
                Great Customer Service!
              </h4>
              <p className="text-gray-500 text-sm bg-gray-50 p-3 rounded">
                {review.message}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewSection;
