import Link from "next/link";

export default function Whysingapore() {
    const content = [
        "Singapore’s Smart Nation vision, blockchain-friendly Monetary Authority (MAS), and 2025 focus on green tech make it Intelisync’s Asian powerhouse. As a Web3 leader, Singapore drives institutional adoption and metaverse growth, perfect for our cutting-edge solutions in fintech, gaming, and trade."
    ];

    return (
        <div className="bg-[#020B17] text-white px-6 md:px-20 lg:px-32 py-16 relative">
            
            {/* Background Gradient */}
            <div className="absolute top-0 left-0 w-[300px] h-[300px] rounded-full opacity-80 z-0 blur-[90px] 
            bg-[radial-gradient(circle,_rgba(4,158,188,0.8)_20%,_rgba(0,55,90,0.7)_50%,_rgba(73,0,116,0.6)_80%)]">
            </div>

            {/* Content Wrapper */}
            <div className="relative z-10 max-w-4xl">
                {/* Title */}
                <h2 className="font-poppins font-medium text-[40px] sm:text-[40px] leading-[40px] sm:leading-[50px] tracking-tight">
                    Why Singapore?
                </h2>
            </div>
        
            {/* Text Content */}
            <div className="relative z-10 max-w-6xl lg:w-[80%]">
                {content.map((paragraph, index) => (
                    <p key={index} className="font-poppins text-[18px] sm:text-[18px] font-medium leading-[28px] sm:leading-[30px] tracking-tight text-gray-300 mt-4">
                        {paragraph}
                    </p>
                ))}
            </div>
        </div>
    );
}
