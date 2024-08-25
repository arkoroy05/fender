import React from 'react'

const Navbar = () => {
  return (
    <div className=''>
        <div className="flex justify-evenly lg:justify-between items-center gap-5">
            <div>
                <img src="/assets/fenderlogo.png" className='h-70 w-40' alt="logo" />
            </div>
            <div className="flex flex-col lg:flex-row justify-center  lg:justify-between items-center gap-10 font-bold text-red-700 ml-20">
            <button className='btn bg-black text-[#ffffff] border-none hover:text-[#d00000]  hover:bg-white capitalize rounded-full'>
                GUITARS
            </button>
            <button className='btn bg-black text-[#ffffff] border-none hover:text-[#d00000]  hover:bg-white capitalize rounded-full'>
                BASSES
            </button>
            <button className='btn bg-black text-[#ffffff] border-none hover:text-[#d00000]  hover:bg-white capitalize rounded-full'>
                AMPS
            </button>
            </div>
            <button className='btn bg-black text-[#ffffff] border-none hover:text-[#d00000]  hover:bg-white capitalize rounded-full'>
                MY ACCOUNT
            </button>
        </div>
    </div>
  )
}

export default Navbar