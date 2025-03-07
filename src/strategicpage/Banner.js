'use client';
import React from 'react'

function Banner() {
    return (
        <div>
            <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-cyan-400 to-blue-600 p-6">
                <div className="text-center max-w-7xl">
                    <h1 className="text-white text-3xl md:text-5xl font-bold mb-4">
                        Elevate Your Business with Expert Guidance
                    </h1>
                    <p className="text-white font-medium text-[30px] md:text-xl leading-[42px] tracking-[-0.01em] font-[Poppins] max-w-[786px] mx-auto mb-6">
                        Unlock your company’s potential with our strategic
                        <span className="block">advisory services.</span>
                    </p>

                    <button className="px-9 py-3 bg-white text-black font-semibold rounded-full shadow-md hover:bg-gray-200 transition">
                        Book a demo
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Banner