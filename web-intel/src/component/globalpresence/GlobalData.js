'use client';

import React from 'react'

function GlobalData() {
    const locations = [
        { name: "Dubai-UAE", image: "/image26.png", text:'Pune Pan card club' },
        { name: "Singapore", image: "/image25.png" },
        { name: "Boston", image: "/image24.png" },
        { name: "London-United Kingdom", image: "/image23.png" },
        { name: "Riyadh", image: "/image21.png" },
        { name: "India-Pune", image: "/image22.png" },
    ]; 
  return (
    <div>
        <div className="bg-black min-h-screen flex flex-col items-center py-12 ">
                {/* Glowing Button */}
                <button className="px-6 py-2 text-white text-lg font-semibold rounded-full 
                         bg-gradient-to-r from-cyan-500 to-teal-500 shadow-lg 
                         hover:shadow-cyan-400 transition-all duration-300 mt-20">
                    Our Global Presence
                </button>

                {/* Card Container */}

                    <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6
      px-4  ">
                        {locations.map((location, index) => (
                            <div key={index} className="bg-gray-900 border border-gray-700  rounded-2xl p-4 shadow-lg flex flex-col items-center">
                                <img
                                    src={location.image}
                                    alt={location.name}
                                    className="w-40 h-70 object-cover rounded-lg"
                                />
                                <p className="text-white text-center mt-2 font-semibold">{location.name}</p>
                                <p className="text-white text-center mt-2 font-semibold">{location.text}</p>
                            </div>
                        ))}
                    </div>
                
            </div>
    </div>
  )
}

export default GlobalData