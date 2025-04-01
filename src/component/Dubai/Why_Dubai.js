import Link from "next/link";

export default function Whydubai() {
    const content = [
         "Dubai’s Smart Dubai initiative aims to make it the world's first blockchain-powered city by 2025, backed by the Virtual Assets Regulatory Authority (VARA) and a thriving Web3 ecosystem. The city’s focus on sustainability—highlighted by its net-zero goals—and its role as a luxury and logistics hub make it a perfect match for Intelisync. In 2025, Dubai is poised to lead in tokenized green finance and AI-driven smart cities, areas where we excel. "
    ];

    return (
        <div className="bg-[#020B17] text-white px-6 md:px-20 lg:px-32 relative ">
             
            <div className="max-w-4xl">
       
                {/* Title */}
                <h2 className="font-poppins font-[500px] text-[40px] sm:text-[40px] leading-[35px] sm:leading-[50px] tracking-tight">
                Why Dubai? 
                </h2>
            </div>
        
            {/* Content */}
            <div className="max-w-6xl">
                {content.map((paragraph, index) => (
                    <p key={index} className="font-poppins text-[18px] sm:text-[18px] font-[500px] leading-[28px] sm:leading-[30px] tracking-tight text-gray-300 mt-4 w-full md:w-[80%]">
                        {paragraph}
                    </p>
                ))}
            </div>
        </div>
    );
}
