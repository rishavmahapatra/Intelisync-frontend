import Link from "next/link";

export default function Ourimpact() {
    const impactcontent = [
        "Intelisync transforms London with tokenized financial instruments (boosting liquidity by 35%), AI-powered gaming platforms, and blockchain-secured supply chains. In 2025, our privacy-focused DeFi tools attract European banks, while metaverse integrations redefine retail. Our London team blends tradition with innovation to lead Europe’s digital charge. "
    ];

    const leadcontent = [
        "With Intelisync, seize London’s 2025 opportunities in blockchain and AI. Let’s redefine Europe’s digital landscape, together. "
    ]

    return (
        <div className="bg-[#020B17] text-white py-16 px-6 md:px-20 lg:px-32 relative ">
             <div className="absolute top-0 left-0 w-[300px] h-[300px] rounded-full opacity-80 z-[50] blur-[90px] 
        bg-[radial-gradient(circle,_rgba(4,158,188,0.8)_20%,_rgba(0,55,90,0.7)_50%,_rgba(73,0,116,0.6)_80%)]">
        </div>
            <div className="max-w-4xl">
       
                {/* Title */}
                <h2 className="font-poppins font-[500px] text-[40px] sm:text-[40px] leading-[43px] sm:leading-[50px] tracking-tight">
                Our Impact in London
               </h2>
            </div>
        
            {/* Content */}
            <div className="max-w-6xl">
                {impactcontent.map((paragraph, index) => (
                    <p key={index} className="font-poppins text-[18px] sm:text-[18px] font-[500px] leading-[28px] sm:leading-[30px] tracking-tight text-gray-300 mt-4 w-full md:w-[80%]">
                        {paragraph}
                    </p>
                ))}
            </div>

            <div className="max-w-4xl mt-15">
       
                {/* Title */}
                <h2 className="font-poppins font-[500px] text-[40px] sm:text-[40px] leading-[43px] sm:leading-[50px] tracking-tight">
                Ready to Thrive in London?              
                 </h2>
            </div>

            {/* Content */}
            <div className="max-w-6xl">
                {leadcontent.map((paragraph, index) => (
                    <p key={index} className="font-poppins text-[18px] sm:text-[18px] font-[500px] leading-[28px] sm:leading-[30px] tracking-tight text-gray-300 mt-4 w-full md:w-[80%]">
                        {paragraph}
                    </p>
                ))}
            </div>

        </div>
    );
}
