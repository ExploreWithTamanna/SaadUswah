import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HomePackage from "../components/HomePackage";
import PackagesSection from "../components/PackagesSection";
import heroImg from "../assets/hero.jpg";
import TravelPackage from "../components/TravelPackage";
import ReviewSection from "../components/ReviewSection";


const PackagePage = () => {
  return (
    <div>
      <Navbar />
      <section
        className="relative bg-cover bg-center text-center text-white py-24 z-0"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.6) 50%), url(${heroImg})`,
        }}
      >
        <div>
          <p className="text-xl">PACKAGE</p>
          <h1 className=" text-3xl md:text-5xl font-semibold mb-4 text-[#d89a34]">
            We Make Best Quality Travel Muslim For Everyone
          </h1>
          <p className=" text-[#d89a34] text-lg">✦</p>
          <p className="text-xl">Home &#8594; Package</p>
        </div>
        {/* SVG Curve */}
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
      <HomePackage />
      <PackagesSection />
      <TravelPackage/>
      <ReviewSection/>
      <Footer />
    </div>
  );
};

export default PackagePage;
