import React from "react";

const Values = () => {
  return (
    <div className="container mx-auto py-20">
      <p className="text-base lg:text-xl font-medium text-gray-500 text-center">
        WHATS NEW
      </p>
      <p className=" text-3xl lg:text-5xl font-semibold text-gray-500 text-center mt-3">
        GUITAR LIST
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-16 py-20 flex-row">
        <div className="flex flex-col gap-5 items-center hover:bg-gray-100 cursor-pointer">
          <img src="/assets/strat.png" className="h-[150px] w-[170px]" alt="v1" />
        
          <p className="text-gray-600 text-center">
           STRATOCASTER
          </p>
        </div>
        <div className="flex flex-col gap-5 items-center  hover:bg-gray-100 cursor-pointer">
          <img src="/assets/tele.png" className="h-[150px] w-[170px]" alt="v1" />
          
          <p className="text-gray-600 text-center ">
            MUSTANG
          </p>
        </div> 
        <div className="flex flex-col gap-5 items-center  hover:bg-gray-100 cursor-pointer">
          <img src="/assets/mustang.png" className="h-[130px] w-[160px]" alt="v1" />
         
          <p className="text-gray-600 text-center">
           JAGUAR
          </p>
        </div>
        
      </div>
    </div>
  );
};

export default Values;
