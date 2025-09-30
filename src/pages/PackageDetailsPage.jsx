import React from 'react'
import { useParams, useLocation } from "react-router-dom";
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import heroImg from "../assets/hero.jpg";
import HajjPackages from '../components/HajjPackages';

// src/data/packages.js
import img7 from "../assets/img7.jpg"; // replace with real images
import img8 from "../assets/img8.jpg";

const packages = [
  {
    id: 1,
    title: "30 Days Premium Hajj",
    price: "$15,500",
    duration: "30 Days",
    image: img7,
    features: [
      "5 Star Hotel in Makkah & Madinah",
      "Full Board Meals (Breakfast, Lunch, Dinner)",
      "Private AC Bus Transportation",
      "Guided Tours & Scholars Lectures",
      "Visa & Insurance Included",
    ],
    moreDetails: `
      This 30-day premium package is tailored for those who want a 
      luxurious and stress-free Hajj experience. You will stay at 
      5-star hotels within walking distance of Haram in both Makkah 
      and Madinah. 

      Enjoy full daily meals, 24/7 ground staff support, 
      and guided religious lectures from renowned scholars. 

      Transportation is private and fully air-conditioned, 
      ensuring comfort during all rituals and transfers. 
      This package is ideal for families and elderly pilgrims 
      seeking maximum convenience.
    `,
  },
  {
    id: 2,
    title: "21 Days Standard Hajj",
    price: "$12,500",
    duration: "21 Days",
    image: img8,
    features: [
      "4 Star Hotel in Makkah & Madinah",
      "Breakfast & Dinner Included",
      "Shared Group Transportation",
      "Group Guidance & Assistance",
      "Visa Processing",
    ],
    moreDetails: `
      The 21-day standard Hajj package provides excellent value 
      while maintaining comfort. Pilgrims will stay in 4-star hotels 
      located within 1.5 km from Haram. 

      Breakfast and dinner are included daily, 
      along with group transportation and dedicated guides to help 
      you perform all rituals correctly. 

      This package is a great balance between comfort and affordability.
    `,
  },
  {
    id: 3,
    title: "15 Days Economy Hajj",
    price: "$9,500",
    duration: "15 Days",
    image: img7,
    features: [
      "3 Star Hotel (Shuttle Service Provided)",
      "Breakfast Included",
      "Group Bus Transportation",
      "Religious Guidance",
      "Visa & Support Staff",
    ],
    moreDetails: `
      Designed for budget-conscious pilgrims, this 15-day economy 
      Hajj package covers all essentials while keeping costs low. 

      Accommodation is provided in 3-star hotels with shuttle buses 
      to and from Haram. 

      Daily breakfast is served, and group transportation is arranged 
      for rituals. Our team ensures you receive all the guidance and 
      support needed for a successful Hajj.
    `,
  }
];



const PackageDetailsPage = () => {
  const { id } = useParams();
  const location = useLocation();

  // First try to get package from navigation state
  let packageData = location.state;

  // If not available (direct URL), find it in packages.js
  if (!packageData && id) {
    packageData = packages.find((pkg) => pkg.id === Number(id));
  }

  return (
    <div>
      <Navbar/>
      <section
        className="relative bg-cover bg-center text-center text-white py-24 z-0"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.6) 50%), url(${heroImg})`,
        }}
      >
        <div>
          <p className='text-xl'>Package Details</p>
          <h1 className=' text-3xl md:text-5xl font-semibold mb-4 text-[#d89a34]'>
            {packageData?.title || "Package"}
          </h1>
          <p className=' text-[#d89a34] text-lg'>✦</p>
          <p className='text-xl'>Home → Package Details</p>
        </div>
        <svg
          className="absolute bottom-[-70px] left-0 w-full scale-y-50 origin-bottom"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,32L80,64C160,96,320,160,480,154.7C640,149,800,75,960,53.3C1120,32,1280,64,1360,80L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
        </svg>
      </section>

      {/* If no package found, show a message */}
      {packageData ? (
        <HajjPackages pkg={packageData} />
      ) : (
        <p className="text-center py-16 text-gray-500">Package not found.</p>
      )}

      <Footer/>
    </div>
  )
}

export default PackageDetailsPage;
