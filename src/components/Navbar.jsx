import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-[#d89a34] text-white">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <div className="flex items-center gap-2 text-xl font-bold">
          <span className="text-2xl">🕋</span>
          <span>Saad Uswah Travels And Tours</span>
        </div>

        {/* Menu */}
        <ul className="hidden md:flex space-x-6">
          <li className="hover:text-gray-200 cursor-pointer">Home</li>
          <li className="hover:text-gray-200 cursor-pointer">About</li>
          <li className="hover:text-gray-200 cursor-pointer">Hajj & Umrah</li>
          <li className="hover:text-gray-200 cursor-pointer">Package</li>
          <li className="relative group cursor-pointer">
            <div className="flex items-center">
              Page <ChevronDown className="ml-1 w-4 h-4" />
            </div>
            {/* Dropdown */}
            <ul className="absolute left-0 mt-2 w-40 bg-white text-gray-700 rounded-md shadow-md hidden group-hover:block">
              <li className="px-4 py-2 hover:bg-[#d89a34] hover:text-white">
                Testimonials
              </li>
              <li className="px-4 py-2 hover:bg-[#d89a34] hover:text-white">
                Team
              </li>
              <li className="px-4 py-2 hover:bg-[#d89a34] hover:text-white">
                Pricing
              </li>
              <li className="px-4 py-2 hover:bg-[#d89a34] hover:text-white">
                FAQ
              </li>
              <li className="px-4 py-2 hover:bg-[#d89a34] hover:text-white">
                404
              </li>
              <li className="px-4 py-2 hover:bg-[#d89a34] hover:text-white">
                Coming Soon
              </li>
              <li className="px-4 py-2 hover:bg-[#d89a34] hover:text-white">
                Pop Up
              </li>
            </ul>
          </li>
          <li className="hover:text-gray-200 cursor-pointer">Blog</li>
          <li className="hover:text-gray-200 cursor-pointer">Contact Us</li>
        </ul>

        {/* Button */}
        <button className="bg-white text-black px-4 py-2 rounded hover:bg-gray-100">
          Get A Quote Now
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
          <li>Home</li>
          <li>About</li>
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