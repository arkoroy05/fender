import React from "react";

const Artists = () => {
  return (
    <div className="container mx-auto py-20">
      <p className="text-base lg:text-xl font-medium text-gray-500 uppercase">
       Our History
      </p>
      <p className="text-3xl lg:text-5xl font-semibold text-gray-500  mt-3">
      Meet our iconic musicians across time
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-16 py-10 lg:py-20">
        <div className="flex flex-col gap-5 ">
          <img src="/assets/clapton fender.jpg" className="hover:cursor-pointer " alt="v1" />
          <p className="text-2xl font-semibold">Eric Clapton</p>
          <div className="flex items-center gap-2">
        
            <p className="text-gray-500">
            Layla- Eric Clapton (1970)
          </p>
          </div>
       
        </div>
        <div className="flex flex-col gap-5 ">
          <img src="/assets/jimi1.avif" className="hover:cursor-pointer " alt="v1" />
          <p className="text-2xl font-semibold">Jimi Hendrix</p>
          <div className="flex items-center gap-2">
          
            <p className="text-gray-500">
            Purple Haze - (1957)
          </p>
          </div>
       
        </div>
        <div className="flex flex-col gap-5 ">
          <img src="/assets/gilmour.jpg" className="hover:cursor-pointer" alt="v1" />
          <p className="text-2xl font-semibold">David Gilmour</p>
          <div className="flex items-center gap-2">
            
            <p className="text-gray-500">
          Comfortably Numb - (1994)
          </p>
          </div>
       
        </div>
      </div>
    </div>
  );
};

export default Artists;
