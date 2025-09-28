import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import "@fortawesome/fontawesome-free/css/all.min.css";


const Footer = () => {
  return (
   <footer
  className="relative bg-gray-900 text-gray-300 pt-20 "
>
  <svg className="absolute scale-y-40 top-0 origin-top" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffffff" fill-opacity="1" d="M0,96L60,117.3C120,139,240,181,360,181.3C480,181,600,139,720,149.3C840,160,960,224,1080,245.3C1200,267,1320,245,1380,234.7L1440,224L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>
      <div className="container mx-auto px-6 py-12 grid md:grid-cols-4 gap-10 border-b border-gray-700">
        {/* Logo and About */}
        <div>
          <div className="flex items-center gap-2 text-2xl font-bold text-[#d89a34] mb-4">
            🕋 Saad Uswah Travels And Tours
          </div>
          <p className="text-sm">
            Reflections on the significance of each ritual, immerse yourself in
            the richness of this spiritual endeavor and shape it to align
            perfectly with your intentions and aspirations.
          </p>
        </div>

        {/* Help & Support */}
        <div>
          <h3 className="text-[#d89a34] font-semibold mb-4">Help & Support</h3>
          <ul className="space-y-2 text-sm">
            <li>Help Center</li>
            <li>FAQ</li>
            <li>Product</li>
            <li>Services</li>
            <li>Payment</li>
          </ul>
        </div>

        {/* Payment + Socials */}
        <div>
          <h3 className="text-[#d89a34] font-semibold mb-4">Payment method</h3>
          <div className="flex flex-wrap gap-2 mb-6">
            <img src="https://img.icons8.com/ios-filled/50/ffffff/visa.png" alt="visa" className="h-6" />
            <img src="https://img.icons8.com/ios-filled/50/ffffff/mastercard.png" alt="mastercard" className="h-6" />
            <img src="https://img.icons8.com/ios-filled/50/ffffff/paypal.png" alt="paypal" className="h-6" />
            <img src="https://img.icons8.com/ios-filled/50/ffffff/apple-pay.png" alt="applepay" className="h-6" />
          </div>
          <h3 className="text-[#d89a34] font-semibold mb-4">Follow Us</h3>
          <div className="flex gap-4 text-[#d89a34]">
            <a href="#"><i className="fab fa-x-twitter text-xl"></i></a>
            <a href="#"><i className="fab fa-instagram text-xl"></i></a>
            <a href="#"><i className="fab fa-facebook text-xl"></i></a>
            <a href="#"><i className="fab fa-linkedin text-xl"></i></a>
          </div>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-[#d89a34] font-semibold mb-4">Contact</h3>
          <p className="flex items-center gap-2 mb-2 text-sm">
            <MapPin size={16} /> 50A – Wetland Avenue Coastline Boulevard, NY USA
          </p>
          <p className="flex items-center gap-2 mb-2 text-sm">
            <Phone size={16} /> 021 3456 768
          </p>
          <p className="flex items-center gap-2 text-sm">
            <Mail size={16} /> customer@qiblatour.com
          </p>
        </div>
      </div>

      {/* Company + Newsletter */}
      <div className="container mx-auto px-6 py-8 grid md:grid-cols-2 gap-10  border-b border-gray-700">
        <div>
          <h3 className="text-[#d89a34] font-semibold mb-4">Company</h3>
          <ul className="grid grid-cols-2 gap-2 text-sm">
            <li>About</li>
            <li>Contact</li>
            <li>Blog</li>
            <li>Jobs</li>
            <li>Terms of services</li>
            <li>Privacy policy</li>
          </ul>
        </div>

        <div>
          <h3 className="text-[#d89a34] font-semibold mb-4">Newsletter</h3>
          <p className="text-sm mb-4 ">
            Metus sed Disse aliquet amet ultrices faucibus mauris sit amet
            morbi suspendisse pellentesque pulvinar interdum justo
          </p>
          <div className="flex gap-3">
            <input
              type="email"
              placeholder="Your email address"
              className=" p-2 rounded bg-gray-800 text-white border border-gray-600 focus:outline-none "
            />
            <button className="bg-[#d89a34] px-4 py-2 rounded text-white">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-sm text-gray-400 py-4">
        Copyright© 2024 Qibla – All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
