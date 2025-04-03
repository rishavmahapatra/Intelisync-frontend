import Link from "next/link";

export default function Ourimpact() {
    const impactcontent = [
        "Intelisync fuels Singapore’s digital rise with tokenized trade ecosystems (increasing efficiency by 30%), AI-enhanced gaming platforms, and sustainable blockchain solutions. In 2025, our privacy-first DeFi tools draw institutional interest, while metaverse integrations boost commerce. Our team keeps Singapore at Asia’s digital forefront."
    ];

    const leadcontent = [
        "Join Intelisync to lead Asia’s 2025 digital revolution from Singapore. Let’s turn your vision into a sustainable powerhouse."
    ];

    return (
        <div className="bg-[#020B17] text-white py-16 px-6 md:px-20 lg:px-32 relative">
            
            {/* Background Gradient */}
            <div className="absolute top-0 left-0 w-[300px] h-[300px] rounded-full opacity-80 z-0 blur-[90px] 
                bg-[radial-gradient(circle,_rgba(4,158,188,0.8)_20%,_rgba(0,55,90,0.7)_50%,_rgba(73,0,116,0.6)_80%)]">
            </div>

            {/* Content Wrapper */}
            <div className="relative z-10 max-w-4xl">
                {/* Title */}
                <h2 className="font-poppins font-medium text-[40px] sm:text-[40px] leading-[43px] sm:leading-[50px] tracking-tight">
                    Our Impact in Singapore
                </h2>
            </div>
        
            {/* Impact Content */}
            <div className="relative z-10 max-w-6xl lg:w-[80%]">
                {impactcontent.map((paragraph, index) => (
                    <p key={index} className="font-poppins text-[18px] sm:text-[18px] font-medium leading-[28px] sm:leading-[30px] tracking-tight text-gray-300 mt-4">
                        {paragraph}
                    </p>
                ))}
            </div>

            {/* Spacer */}
            <div className="mt-12"></div>

            {/* Ready to Rise Section */}
            <div className="relative z-10 max-w-4xl">
                <h2 className="font-poppins font-medium text-[40px] sm:text-[40px] leading-[43px] sm:leading-[50px] tracking-tight">
                    Ready to Rise in Singapore?
                </h2>
            </div>

            {/* Lead Content */}
            <div className="relative z-10 max-w-6xl lg:w-[80%]">
                {leadcontent.map((paragraph, index) => (
                    <p key={index} className="font-poppins text-[18px] sm:text-[18px] font-medium leading-[28px] sm:leading-[30px] tracking-tight text-gray-300 mt-4">
                        {paragraph}
                    </p>
                ))}
            </div>

        </div>
    );
}
