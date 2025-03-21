import React from 'react';
import { Crypto } from "@/utils/Cards_Data";

function CryptoCarts() {
    return (
        <div className="bg-[#020B17] relative text-white py-16 px-6 md:px-10 lg:px-20">
            {/* Gradient Background Effect */}
            <div className="absolute w-[150px] h-[400px] blur-[150px] bottom-[100px] right-0 rotate-[148.52deg] 
                bg-[linear-gradient(256.74deg,rgba(4,158,188,0.5)_47.38%,rgba(0,55,90,0.5)_61.04%,rgba(73,0,116,0.5)_70.05%)]">
            </div>

            {/* Heading Section */}
            <div className="text-center mb-10">
                <h2 className="font-poppins font-semibold text-[24px] sm:text-[30px] leading-[32px] sm:leading-[40px] tracking-[-0.01%] text-white mt-4 max-w-4xl mx-auto">
                    At Intelisync, we’ve got the expertise to elevate your crypto <br className="hidden sm:block"/> project. Here&apos;s how we can help
                </h2>
            </div>

            {/* Responsive Grid Layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {Crypto.map((solution, index) => (
                    <div 
                        key={index}
                        className="p-6 border border-cyan-400 rounded-lg bg-[#081828] shadow-lg transition-all hover:scale-105"
                    >
                        <h2 className="font-poppins text-left font-semibold text-[18px] leading-[28px] tracking-[-0.01%]">
                            {solution.title}
                        </h2>

                        <p className="font-poppins font-normal text-[14px] leading-[22px] tracking-[-0.01%] text-gray-300 mt-2 mb-4">
                            {solution.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CryptoCarts;
