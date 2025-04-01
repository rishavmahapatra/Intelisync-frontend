'use client';
import Link from "next/link";
export default function InfluencerPartnerShip() {
    return (
        <div className="bg-[#000B18] relative text-white py-8 px-6 md:px-20 lg:px-32">
            {/* Breadcrumb */}
            <div className="text-gray-400 text-sm mb-6">
                <Link href="/" className="hover:text-gray-300 transition">Homepage</Link>
                <span className="mx-1">&gt;</span>

                <Link href="/services" className="hover:text-gray-300 transition">Services</Link>
                <span className="mx-1">&gt;</span>

                <span className="text-cyan-400 font-medium hover:text-cyan-300 transition">
                    Influencer Marketing
                </span>
            </div>
            <div className="absolute w-[200px] h-[500px] blur-[100px] top-[-50px] left-0 rotate-[148.52deg] 
                      bg-[linear-gradient(256.74deg,rgba(4,158,188,0.5)_47.38%,rgba(0,55,90,0.5)_61.04%,rgba(73,0,116,0.5)_70.05%)]">
            </div>
            {/* Heading */}
            <h2
                className="font-[500] text-[30px] md:text-[40px] leading-[45px] md:leading-[50px] text-white"
            >
                {/* Tap into unique influencer partnerships to spark<br/> meaningful connections
                with your perfect audience. */}
                Our Web3 Influencer Marketing Agency Helping <br /> Brands Connect with the Right Audience

            </h2>

            {/* Description */}
            <p className="text-gray-300 mt-4 text-[16px] leading-[30px] max-w-2xl">
                Web3 is changing how brands build trust and grow communities, and influencer marketing is at the heart of it. People no longer rely on traditional ads. They turn to influencers they trust. That is why strategy influencer marketing is key to reaching engaged audiences who are ready to take action.
            </p>

            <p className="text-gray-300 mt-4 text-[16px] leading-[26px] max-w-3xl">
                At Intelisync, our campaign influencer marketing connects brands with the right <Link href='/Industry/crypto-marketing/' className="underline">crypto influencers </Link>to amplify their message and build credibility. Whether you are looking for top crypto influencers to boost visibility or niche experts to reach a specific audience, our crypto influencer marketing agency has got you covered. Our influencer marketing services focus on creating real connections that not only increase brand awareness but also drive long term loyalty.
            </p>
            <p className="text-gray-300 mt-4 text-[16px] leading-[26px] max-w-3xl">
                With our deep understanding of Web3, we ensure every influencer partnership is authentic, impactful, and results driven. Let us help you grow your brand and make a lasting impact in the crypto and blockchain space.
            </p>
        </div>
    );
}
