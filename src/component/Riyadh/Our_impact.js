import Link from "next/link";

export default function Ourimpact() {
    const impactcontent = [
        "Intelisync Riyadh is transforming industries with blockchain, AI, and Web3 solutions. In gaming and eSports, we enable Play-to-Earn economies and NFT-based assets. In finance, we drive blockchain-backed banking, DeFi platforms, and digital payments. Our solutions power decentralized media, blockchain-based governance, digital identity management, and cybersecurity. The retail sector benefits from AI-enhanced shopping experiences, crypto payments, and loyalty tokenization."
    ];

    const leadcontent = [
        "Partner with Intelisync Riyadh to harness Web3, AI, and blockchain for Saudi Arabia’s digital future. Let’s build secure, scalable, and innovative solutions that drive real-world impact."
    ];

    return (
        <div className="bg-[#020B17] text-white py-12 sm:py-16 px-6 md:px-16 lg:px-28 relative">
            {/* Background Gradient */}
            <div className="absolute top-0 left-0 w-[250px] sm:w-[300px] h-[250px] sm:h-[300px] rounded-full opacity-60 z-0 blur-[90px]
                bg-[radial-gradient(circle,_rgba(4,158,188,0.7)_20%,_rgba(0,55,90,0.6)_50%,_rgba(73,0,116,0.5)_80%)]">
            </div>

            {/* Content Wrapper */}
            <div className="relative z-10 max-w-3xl">
                {/* Title */}
                <h2 className="font-poppins font-semibold text-[30px] sm:text-[36px] md:text-[40px] leading-[38px] sm:leading-[44px] md:leading-[50px] tracking-tight">
                    Driving Digital Transformation in Saudi Arabia
                </h2>

                {/* Content */}
                <p className="font-poppins text-[16px] sm:text-[18px] leading-[26px] sm:leading-[28px] text-gray-300 mt-4">
                    {impactcontent[0]}
                </p>
            </div>

            {/* Secondary Section */}
            <div className="relative z-10 max-w-3xl mt-12">
                {/* Title */}
                <h2 className="font-poppins font-semibold text-[30px] sm:text-[36px] md:text-[40px] leading-[38px] sm:leading-[44px] md:leading-[50px] tracking-tight">
                    Ready to Lead in Riyadh?
                </h2>

                {/* Content */}
                <p className="font-poppins text-[16px] sm:text-[18px] leading-[26px] sm:leading-[28px] text-gray-300 mt-4">
                    {leadcontent[0]}
                </p>
            </div>
        </div>
    );
}
