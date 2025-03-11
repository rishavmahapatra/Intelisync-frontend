import React from 'react'
import { Crypto } from  "@/utils/Cards_Data";

function CryptoCarts() {
    return (
        <div>
            <div className="bg-[#020B17] text-white py-16 px-6 md:px-20 lg:px-32">
                <div className="text-center mb-10">
                    <h1 className="text-3xl md:text-4xl font-bold leading-tight" >
                    At Intelisync, we’ve got the expertise to elevate your crypto project. Here’s how we can help
                    </h1>
                    

                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {Crypto.map((solution, index) => (
                        <div
                            key={index}
                            className="p-6 border border-cyan-400 rounded-lg bg-[#081828] shadow-lg"
                        >
                            <h2 className="font-poppins text-center font-semibold text-[19px] leading-[20px] tracking-[-0.01%]">
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

export default CryptoCarts
