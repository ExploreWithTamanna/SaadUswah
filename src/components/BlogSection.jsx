// src/components/BlogSection.jsx
import React from "react";
import { ArrowRight } from "lucide-react";
import img6 from "../assets/img6.jpg"; // example for banner image
import img4 from "../assets/img4.jpeg"; // <-- add your card images
import img5 from "../assets/img5.jpg";

const BlogSection = () => {
  const blogs = [
    {
      title: "Top 5 Packing Hacks for Your Hajj",
      date: "March 22, 2024",
      comments: "No Comments",
      excerpt:
        "Smart packing strategies, learn how to pack efficiently without compromising on comfort..",
      image: img4, // add image property
    },
    {
      title: "A Comprehensive Guide Umrah",
      date: "March 22, 2024",
      comments: "No Comments",
      excerpt:
        "From Tawaf to Sa’i, discover the significance and intricacies of each ritual, accompanied by..",
      image: img5,
    },
    {
      title: "Hajj 2024 Edition Travel",
      date: "March 22, 2024",
      comments: "No Comments",
      excerpt:
        "Whether you’re finalizing your itinerary or seeking last minute updates, trust our curated..",
      image: img6,
    },
  ];

  return (
    <section className="w-full py-12 bg-white px-4">
      {/* Heading */}
      <div className="text-center mb-10">
        <p className="text-yellow-700 font-medium tracking-widest">✦ OUR NEWS</p>
        <h2 className="text-3xl md:text-4xl font-bold mt-2">
          Popular Blog & News
        </h2>
        <p className="text-gray-500 mt-3">
          Our curated content will ensure you’re well-prepared and inspired every
          step of the way.
        </p>
      </div>

      {/* Blog Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {blogs.map((blog, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-xl overflow-hidden border"
          >
            {/* Background Image */}
            <div
              className="h-48 w-full bg-center bg-cover"
              style={{ backgroundImage: `url(${blog.image})` }}
            ></div>

            {/* Content */}
            <div className="p-5">
              <h3 className="text-lg font-semibold text-gray-800">
                {blog.title}
              </h3>
              <p className="text-sm text-gray-400 mt-1">
                {blog.date} {blog.comments}
              </p>
              <p className="text-gray-600 mt-3 text-sm">{blog.excerpt}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Umrah Banner */}
      <div className="mt-14 max-w-6xl mx-auto">
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
    </section>
  );
};

export default BlogSection;
