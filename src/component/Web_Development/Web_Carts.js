import React from 'react'
import { Webdevelopment } from "@/utils/Cards_Data";



function Web_Carts() {
  return (
    <div>
      <div className="bg-[#020B17] text-white py-16 px-6 md:px-20 lg:px-32">
                  <div className="text-center mb-10">
                      <h2 className="text-3xl md:text-5xl font-bold leading-tight" style={{ fontSize: "30px", color: "#06FFFB" }}>
                      Tailored Web Development Services to Drive Your Business Forward
                      </h2>
                      <p className="font-poppins font-normal text-[13px] leading-[20px] tracking-[-0.01%] text-gray-300 mt-4 max-w-3xl mx-auto">
                      At Intelisync, we craft high-performing, user-centric websites that captivate your audience and foster lasting engagement, helping your business thrive in a competitive digital landscape.
                      </p>
      
                  </div>
      
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {Webdevelopment.map((solution, index) => (
                          <div
                              key={index}
                              className="p-6 border border-cyan-400 rounded-lg bg-[#081828] shadow-lg"
                          >
                              <h2 className="font-poppins font-semibold text-[19px] leading-[20px] tracking-[-0.01%]">
                                  {solution.title}
                              </h2>
      
                              <p className="font-poppins font-normal text-[13px] leading-[20px] tracking-[-0.01%] text-gray-300 mt-2">
                                  {solution.description}
                              </p>
      
                          </div>
                      ))}
                  </div>
              </div>
    </div>
  )
}

export default Web_Carts
