import Link from "next/link";

export default function Ourimpact() {
    const impactcontent = [
        "Intelisync Riyadh is transforming industries with blockchain, AI, and Web3 solutions. In gaming and eSports, we enable Play-to-Earn economies and NFT-based assets. In finance, we drive blockchain-backed banking, DeFi platforms, and digital payments. Our solutions power decentralized media, blockchain-based governance, digital identity management, and cybersecurity. The retail sector benefits from AI-enhanced shopping experiences, crypto payments, and loyalty tokenization. "
    ];

    const leadcontent = [
        "Partner with Intelisync Riyadh to harness Web3, AI, and blockchain for Saudi Arabia’s digital future. Let’s build secure, scalable, and innovative solutions that drive real-world impact. "
    ]

    return (
        <div className="bg-[#020B17] text-white py-16 px-6 md:px-20 lg:px-32 relative ">
             <div className="absolute top-0 left-0 w-[300px] h-[300px] rounded-full opacity-80 z-[50] blur-[90px] 
        bg-[radial-gradient(circle,_rgba(4,158,188,0.8)_20%,_rgba(0,55,90,0.7)_50%,_rgba(73,0,116,0.6)_80%)]"></div>
            <div className="max-w-4xl">
       
                {/* Title */}
                <h2 className="font-poppins font-[500px] text-[40px] sm:text-[40px] leading-[43px] sm:leading-[50px] tracking-tight">
                Driving Digital Transformation in Saudi Arabia 
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
                Ready to Lead in Riyadh?
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
