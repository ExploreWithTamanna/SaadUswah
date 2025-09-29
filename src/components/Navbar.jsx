import React, { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [pageOpen, setPageOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setPageOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-[#d89a34] text-white relative z-50">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <div className="flex items-center gap-2 text-xl font-bold">
          <span className="text-2xl">🕋</span>
          <span>Saad Uswah Travels And Tours</span>
        </div>

        {/* Menu */}
        <ul className="hidden md:flex space-x-6">
          <li className="hover:text-gray-200 cursor-pointer"><a href="/">Home</a></li>
          <li className="hover:text-gray-200 cursor-pointer"><a href="/about">About</a></li>
          <li className="hover:text-gray-200 cursor-pointer">Hajj & Umrah</li>
          <li className="hover:text-gray-200 cursor-pointer">Package</li>

          {/* Dropdown (click only) */}
          <li className="relative cursor-pointer" ref={dropdownRef}>
            <div
              className="flex items-center"
              onClick={() => setPageOpen((prev) => !prev)}
            >
              Page <ChevronDown className="ml-1 w-4 h-4" />
            </div>

            {pageOpen && (
              <ul className="absolute left-0 mt-2 w-40 bg-white text-gray-700 rounded-md shadow-md z-50">
                <li className="px-4 py-2 hover:bg-yellow-500 hover:text-white">
                  Testimonials
                </li>
                <li className="px-4 py-2 hover:bg-yellow-500 hover:text-white">
                  Team
                </li>
                <li className="px-4 py-2 hover:bg-yellow-500 hover:text-white">
                  Pricing
                </li>
                <li className="px-4 py-2 hover:bg-yellow-500 hover:text-white">
                  FAQ
                </li>
                <li className="px-4 py-2 hover:bg-yellow-500 hover:text-white">
                  404
                </li>
                <li className="px-4 py-2 hover:bg-yellow-500 hover:text-white">
                  Coming Soon
                </li>
                <li className="px-4 py-2 hover:bg-yellow-500 hover:text-white">
                  Pop Up
                </li>
              </ul>
            )}
          </li>

          <li className="hover:text-gray-200 cursor-pointer">Blog</li>
          <li className="hover:text-gray-200 cursor-pointer">Contact Us</li>
        </ul>

        {/* Book Now Button (hidden on mobile) */}
        <button className="hidden md:inline-block bg-white text-black px-4 py-2 rounded hover:bg-gray-100">
          Book Now
        </button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setOpen((prev) => !prev)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <ul className="md:hidden bg-[#d89a34] px-6 pb-4 space-y-2">
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li>Hajj & Umrah</li>
          <li>Package</li>
          <li>Blog</li>
          <li>Contact Us</li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
