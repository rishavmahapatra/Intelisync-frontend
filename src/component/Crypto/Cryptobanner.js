import React from 'react'

export default function Cryptobanner() {
  return (
    <div className="relative flex items-center justify-start h-[70vh] text-white overflow-hidden px-10 md:px-20">
    {/* Background Image */}
    <div
        className="absolute inset-0 bg-center bg-cover bg-black"
        style={{ backgroundImage: "url('/banner.png')" }}
    ></div>

    {/* Content */}
    <div className="relative text-left max-w-3xl z-10">
        <h1 className="font-poppins font-semibold text-[38px] md:text-[42px] leading-[50px] md:leading-[55px] tracking-[-0.01em]">
        Ignite Your Blockchain & Crypto Project’s Growth and Watch It Boom!
        </h1>

        <p className="font-poppins font-medium text-lg md:text-xl leading-[30px] text-gray-300 mt-4">
        Accelerate your blockchain and crypto project’s growth with Intelisync’s tailored marketing strategies. We focus on expanding your reach, enhancing engagement, and helping you lead in a dynamic digital landscape.
        </p>

        <button className="mt-6 px-8 py-3 border border-white text-white rounded-full font-medium shadow-md hover:bg-white hover:text-black transition">
            Book a demo
        </button>
    </div>
</div>
  )
}
