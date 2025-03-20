import React from 'react'
import { Crypto } from  "@/utils/Cards_Data";

function CryptoCarts() {
    return (
        <div>
            <div className="bg-[#020B17] relative text-white py-16 px-6 md:px-20 lg:px-32">
                <div className="absolute w-[150px] h-[400px] blur-[150px] bottom-[100px] right-0 rotate-[148.52deg] 
                      bg-[linear-gradient(256.74deg,rgba(4,158,188,0.5)_47.38%,rgba(0,55,90,0.5)_61.04%,rgba(73,0,116,0.5)_70.05%)]">
                    </div>
                <div className="text-center mb-10">
                <h2><p className="font-poppins font-[600] text-[30px] sm:text-[25px] sm:leading-[40px] tracking-[-0.01%] text-white mt-4 max-w-3xl mx-auto">
                At Intelisync, we’ve got the expertise to elevate your crypto<br/> project. Here’s how we can help
                </p>
                </h2>
                    

                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {Crypto.map((solution, index) => (
                        <div
                            key={index}
                            className="p-6 border border-cyan-400 rounded-lg bg-[#081828] shadow-lg"
                        >
                            <h2 className="font-poppins text-left font-[600] text-[18px] leading-[40px] tracking-[-0.01%]">
                                {solution.title}
                            </h2>

                            <p className="font-poppins font-normal text-[14px] leading-[20px] tracking-[-0.01%] text-gray-300 mt-2 mb-4">
                                {solution.description}
                            </p>

                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default CryptoCarts
