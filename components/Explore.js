import React from 'react'

const Explore = () => {
  return (
    <div className="p-6 bg-white">
      <div className="container mx-auto py-10">
        <p className="text-3xl font-bold text-black uppercase">
          TOP CATEGORIES
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10 py-10 lg:py-20">
          <div className="flex flex-col gap-5">
            <img
              src="/assets/e1.jpg"
              className="hover:cursor-pointer transition-transform duration-300 transform hover:scale-105"
              alt="v1"
            />
            <p className="text-3xl font-semibold">SHOP NEW RELEASES</p>
          </div>
          <div className="flex flex-col gap-5">
            <img
              src="/assets/e2.jpg"
              className="hover:cursor-pointer transition-transform duration-300 transform hover:scale-105"
              alt="v1"
            />
            <p className="text-2xl font-semibold">SHOP ACOUSTICS</p>
          </div>
          <div className="flex flex-col gap-5">
            <img
              src="/assets/e3.jpg"
              className="hover:cursor-pointer transition-transform duration-300 transform hover:scale-105"
              alt="v1"
            />
            <p className="text-3xl font-semibold">SHOP BEGINNER GUITARS</p>
          </div>
          <div className="flex flex-col gap-5">
            <img
              src="/assets/e4.jpg"
              className="hover:cursor-pointer transition-transform duration-300 transform hover:scale-105"
              alt="v1"
            />
            <p className="text-2xl font-semibold">SHOP AMP PARTS</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Explore
