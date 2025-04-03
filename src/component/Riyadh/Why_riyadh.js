import Link from "next/link";

export default function Whyriyadh() {
    const content = [
        "Saudi Arabia’s strategic investments in blockchain, AI, and digital transformation make Riyadh a prime location for Web3 adoption. With strong government backing, an evolving regulatory framework, and increasing private sector involvement, the city is poised to lead the next wave of decentralized technology."
    ];

    return (
        <div className="bg-[#020B17] text-white px-6 md:px-16 lg:px-28 py-12 sm:py-16 relative">
            {/* Background Gradient */}
            <div className="absolute top-0 left-0 w-[250px] sm:w-[300px] h-[250px] sm:h-[300px] rounded-full opacity-60 z-[0] blur-[90px]
                bg-[radial-gradient(circle,_rgba(4,158,188,0.8)_20%,_rgba(0,55,90,0.7)_50%,_rgba(73,0,116,0.6)_80%)]">
            </div>

            {/* Content Wrapper */}
            <div className="relative z-10 max-w-3xl">
                {/* Title */}
                <h2 className="font-poppins font-semibold text-[30px] sm:text-[36px] md:text-[40px] leading-[38px] sm:leading-[44px] md:leading-[50px] tracking-tight">
                    Why Riyadh?
                </h2>

                {/* Content */}
                <p className="font-poppins text-[16px] sm:text-[18px] leading-[26px] sm:leading-[28px] text-gray-300 mt-4">
                    {content[0]}
                </p>
            </div>
        </div>
    );
}
