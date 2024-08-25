import React from "react";
import Navbar from "./Navbar";

const Hero = () => {
  return (
    <>
      {/* Desktop */}
      <div className="relative h-screen bg-cover bg-center hidden lg:block" style={{ backgroundImage: "url('https://i.pinimg.com/originals/20/9f/2f/209f2fc035fbd9bf5e61e5dcf0eb13d4.jpg')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative container mx-auto px-6 lg:px-16 py-10 rounded-3xl flex flex-col justify-center h-full">
          <div className="absolute top-4 left-0 right-0">
            <Navbar />
          </div>
          <div className="flex flex-col lg:flex-row justify-center lg:justify-between items-center gap-5">
            <div className="flex flex-col gap-5 lg:gap-10 text-center lg:text-left">
              <p className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-red-700">
                ICONIC SOUND. TIMELESS STYLE
              </p>
              <p className="text-sm sm:text-base lg:text-lg text-white">
                Discover the best music and join our community.<br className="lg:hidden" />
              </p>
              <button className="bg-white text-black rounded-full border-none py-2 px-4 lg:py-3 lg:px-6 w-36 lg:w-44 capitalize hover:text-[#d00000]  hover:bg-black capitalize transition-colors duration-300">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile screens */}
      <div className="lg:hidden flex flex-col justify-center items-center h-screen bg-gray-900 text-white p-6">
        <Navbar />
        <div className="text-center mt-10">
          <p className="text-2xl sm:text-4xl md:text-5xl font-bold text-red-700">
            ICONIC SOUND. TIMELESS STYLE
          </p>
          <p className="text-sm sm:text-base lg:text-lg mt-4">
            Discover the best music and join our community.
          </p>
          <button className="bg-white text-black rounded-full border-none py-2 px-4 mt-4 w-36 capitalize hover:bg-red-200 transition-colors duration-300">
            Get Started
          </button>
        </div>
      </div>
    </>
  );
};

export default Hero;
