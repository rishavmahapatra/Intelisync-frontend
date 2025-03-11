import React from 'react'

function Cryptobanner() {
  return (
    <div>
     <div className="relative h-[780px] text-white overflow-hidden md:py-50 px-20 md:px-20">
    {/* Background Image */}
    <div
        className="absolute inset-0 bg-center bg-cover"
        style={{ backgroundImage: "url('/banner.png')" }}
    ></div>

    {/* Overlay Effect (Optional, for a subtle gradient) */}
    <div className="absolute inset-0 bg-black"></div>

    {/* Content */}
    <div className="relative z-10 max-w-5xl ">
        <h1 className="font-poppins font-semibold text-[40px] md:text-[48px] leading-[1.2]">
            Ignite Your Blockchain & Crypto Project’s Growth and Watch It Boom!
        </h1>

        <p className="font-poppins font-normal text-[18px] md:text-[20px] leading-[1.6] text-gray-300 mt-4">
            Accelerate your blockchain and crypto project’s growth with Intelisync’s tailored 
            marketing strategies. We focus on expanding your reach, enhancing engagement, and 
            helping you lead in a dynamic digital landscape.
        </p>

        <button className="mt-6 px-6 py-3 bg-white text-black text-lg font-semibold rounded-full shadow-md hover:bg-gray-200 transition">
            Book a demo
        </button>
    </div>
</div>

    </div>
  )
}

export default Cryptobanner
