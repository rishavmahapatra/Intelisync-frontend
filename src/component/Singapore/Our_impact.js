import Link from "next/link";

export default function Ourimpact() {
    const impactcontent = [
        "Intelisync fuels Singapore’s digital rise with tokenized trade ecosystems (increasing efficiency by 30%), AI-enhanced gaming platforms, and sustainable blockchain solutions. In 2025, our privacy-first DeFi tools draw institutional interest, while metaverse integrations boost commerce. Our team keeps Singapore at Asia’s digital forefront."
    ];

    const leadcontent = [
        "Join Intelisync to lead Asia’s 2025 digital revolution from Singapore. Let’s turn your vision into a sustainable powerhouse."
    ]

    return (
        <div className="bg-[#020B17] text-white py-16 px-6 md:px-20 lg:px-32 relative ">
             
            <div className="max-w-4xl">
       
                {/* Title */}
                <h2 className="font-poppins font-[500px] text-[40px] sm:text-[40px] leading-[43px] sm:leading-[50px] tracking-tight">
                Our Impact in Singapore 
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
                Ready to Rise in Singapore?
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
