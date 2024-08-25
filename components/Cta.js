import React from 'react'

const Cta = () => {
  return (
    <div className='container mx-auto flex flex-col gap-5 items-center justify-center py-20'>
            
            <p className='text-base sm:text-lg lg:text-2xl font-medium text-center'>SUBSCRIBE TO THE FENDER NEWSLETTER</p>
            <div className="flex  lg:flex-row gap-3 lg:gap-10 items-center mt-5">
                <input type="text" className='px-5 py-5  w-72 lg:w-96 outline-none bg-[#dad5d5]' placeholder='enter your email' />
                <button className='btn btn-sm lg:btn-lg bg-[#c00808] btn-lg  border-none'>SUBSCRIBE</button>
            </div>
    </div>
  )
}

export default Cta