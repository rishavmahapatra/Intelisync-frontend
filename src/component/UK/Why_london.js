import Link from "next/link";

export default function Whyuk() {
    const content = [
        "London’s fintech dominance, progressive blockchain regulations, and creative energy make it Intelisync’s European cornerstone. In 2025, the UK leads in institutional DeFi and metaverse commerce, with London at the helm. We’re harnessing this momentum to deliver solutions that redefine finance, gaming, and beyond."
    ];

    return (
        <div className="bg-[#020B17] text-white py-16 px-6 md:px-20 lg:px-32 relative">
            
            {/* Background Glow Effect */}
            <div className="absolute top-0 left-0 w-[300px] h-[300px] rounded-full opacity-80 z-0 blur-[90px] 
                bg-[radial-gradient(circle, rgba(4,158,188,0.8) 20%, rgba(0,55,90,0.7) 50%, rgba(73,0,116,0.6) 80%)]">
            </div>

            {/* Section Title */}
            <div className="max-w-4xl relative z-10">
                <h2 className="font-poppins font-semibold text-[32px] sm:text-[36px] md:text-[40px] leading-[40px] sm:leading-[48px] tracking-tight">
                    Why London?
                </h2>
            </div>
        
            {/* Content Section */}
            <div className="max-w-6xl relative z-10">
                {content.map((paragraph, index) => (
                    <p key={index} className="font-poppins text-[16px] sm:text-[18px] font-medium leading-[26px] sm:leading-[30px] tracking-tight text-gray-300 mt-4 w-full md:w-[80%]">
                        {paragraph}
                    </p>
                ))}
            </div>
        </div>
    );
}
