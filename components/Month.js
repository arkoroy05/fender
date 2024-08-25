import React from "react";

const Month = () => {
  return (
    <div className="container mx-auto ">
      <p className="text-gray-500 text-base lg:text-xl font-medium uppercase">
        This Months Best Seller
      </p>
      <p className="text-gray-800 text-3xl lg:text-5xl font-medium capitalize">
        GOLD FOIL JAZZMASTER
      </p>
      <div className="flex flex-col lg:flex-row justify-center  lg:justify-between items-center gap-5 py-10 lg:py-20">
        <img src="/assets/goldfoil.jpeg" alt="" />
        <div className="flex flex-col gap-5 items-start">
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold">$1,199.99</p>
          <div className="flex items-center gap-2">
           
            <p className="text-gray-450">Fender-certified quality assurance</p>
            
          </div>
          <p className=" text-base sm:text-lg md:text-2xl lg:text-3xl">
            Inspired by the garage rock bands of the sixties and the cult classic guitars they played, the Gold Foil Collection combines timeless Fender® designs with the dazzling style of a bygone era.<br /> 
            
          </p>
          <button className='btn bg-black text-[#ffffff] border-none hover:text-[#d00000]  hover:bg-white capitalize rounded-full'>
                VIEW MORE
            </button>
        </div>
      </div>
    </div>
  );
};

export default Month;
