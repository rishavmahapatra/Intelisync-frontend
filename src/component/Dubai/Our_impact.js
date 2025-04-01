import Link from "next/link";

export default function Ourimpact() {
    const impactcontent = [
        "Intelisync is redefining Dubai’s digital frontier. We’ve launched tokenized real estate platforms that slashed transaction times by 40%, built AI-driven analytics for luxury brands like Burberry, and pioneered privacy-first digital identity systems for seamless cross-border trade. In 2025, our carbon-neutral blockchain projects align with Dubai’s green agenda, while our metaverse integrations elevate retail experiences. Our Dubai team collaborates with enterprises to deliver solutions that cement the UAE’s status as a global tech leader"
    ];

    const leadcontent = [
        "Join Intelisync to harness 2025’s blockchain and AI breakthroughs, turning Dubai’s vision into your competitive edge. Let’s build a sustainable, decentralized future together. "
    ];

    return (
        <div className="bg-[#020B17] text-white py-16 px-6 md:px-20 lg:px-32 relative ">
             
            <div className="max-w-4xl">
       
                {/* Title */}
                <h2 className="font-poppins font-[500px] text-[40px] sm:text-[40px] leading-[43px] sm:leading-[50px] tracking-tight">
                Our Impact in Dubai? 
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
                Ready to Lead in Dubai? 
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
