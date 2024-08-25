import React, { useRef } from "react";

const BigAd = () => {
  const scrollToRef = useRef(null);

  const handleScroll = () => {
    window.scrollTo({
      top: scrollToRef.current.offsetTop, 
      behavior: "smooth",
    });
  };

  return (
    <div>
      
      <div
        className="relative h-screen bg-cover bg-center"
        style={{ backgroundImage: 'url("https://stuff.fendergarage.com/images/V/c/q/Fender_Labor-Day_Amp-Guitar_HPS_Desktop@2x.jpg")' }}
      >
       
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="bg-black text:white" >
                LABOUR DAY SALE - UPTO 60% OFF
            </div>
        
        <div className="flex flex-col items-center justify-center h-full text-black relative z-10">
          <div className="text-5xl md:text-6xl font-extrabold">
            LABOUR DAY SALE
          </div>
          <p className="mt-4 text-4xl font:semibold text:red-400 md:text-4xl font:bold text-red-700 ">
            UPTO 60% OFF
          </p>
          <p className="mt-4 text-4xl font:semibold text:red-400 md:text-xl ">
            Save big at fender.com or participating dealers
          </p>
          <button
            onClick={handleScroll}
            className="mt-11 px-6 py-3 bg-blue-500 hover:bg-red-700 text-white font-semibold rounded-lg shadow-md"
          >
            See Offerrs
          </button>
        </div>
      </div>

      {/* Ad Section */}
      <div ref={scrollToRef} className="p-8 bg-white">
      <div className="container mx-auto py-20">
      <p className="text-3xl font-bold text-black uppercase">
       Selected Best Deals
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4  lg:gap-40 py-10 lg:py-20">
        <div className="flex flex-col gap-6 ">
          <img src="/assets/g1.jpg" className="hover:cursor-pointer " alt="v1" />
          <p className="text-xl font-semibold">American Professional II Stratocaster</p>
          <div className="flex items-center gap-2">
        
            <p className="text-red-700 font-semibold">
            $1,990.00
          </p>
          </div>
       
        </div>
        <div className="flex flex-col gap-6 ">
          <img src="/assets/g2.jpg" className="hover:cursor-pointer " alt="v1" />
          <p className="text-2xl font-semibold">American Ultra Stratocaster</p>
          <div className="flex items-center gap-2">
          
            <p className="text-red-700 font-semibold">
            $1,770.00
          </p>
          </div>
       
        </div>
        <div className="flex flex-col gap-6 ">
          <img src="/assets/g3.jpg" className="hover:cursor-pointer" alt="v1" />
          <p className="text-2xl font-semibold">American Performer Stratocaster</p>
          <div className="flex items-center gap-2">
            
            <p className="text-red-700 font-semibold">
         $1,880.00
          </p>
          </div>
       
        </div>
        <div className="flex flex-col gap-6 ">
          <img src="/assets/g4.jpg" className="hover:cursor-pointer " alt="v1" />
          <p className="text-2xl font-semibold">Player Plus Telecaster</p>
          <div className="flex items-center gap-2">
        
            <p className="text-red-700 font-semibold">
            $1,500.00
          </p>
          </div>
       
        </div>
      </div>
    </div>
      </div>
    </div>
  );
};

export default BigAd;
