'use client';
import Link from "next/link";
export default function InfluencerPartnerShip() {
    return (
        <div className="bg-[#000B18] relative text-white py-8 px-6 md:px-20 lg:px-32">
            {/* Breadcrumb */}
            <div className="text-gray-400 text-sm mb-6">
                <Link href="/" className="hover:text-gray-300 transition">Homepage</Link>
                <span className="mx-1">&gt;</span>

                <Link href="/service" className="hover:text-gray-300 transition">Services</Link>
                <span className="mx-1">&gt;</span>

                <span className="text-cyan-400 font-medium hover:text-cyan-300 transition">
                    Influencer Marketing
                </span>
            </div>
            <div className="absolute w-[200px] h-[500px] blur-[100px] top-[-50px] left-0 rotate-[148.52deg] 
                      bg-[linear-gradient(256.74deg,rgba(4,158,188,0.5)_47.38%,rgba(0,55,90,0.5)_61.04%,rgba(73,0,116,0.5)_70.05%)]">
            </div>
            {/* Heading */}
            <h1
                className="font-semibold text-[40px] leading-[50px] text-white"
            >
                Tap into unique influencer partnerships to spark meaningful connections
                with your perfect audience.
            </h1>

            {/* Description */}
            <p className="text-gray-300 mt-4 text-[16px] leading-[30px] max-w-2xl">
                Influencer marketing is a powerful tool for maximizing ROI in today’s digital-first
                environment. The key lies in partnering with influencers who naturally align with your
                brand’s mission and values to ensure authenticity and meaningful connections. These genuine
                relationships help boost brand credibility and foster long-lasting trust with your audience.
            </p>

            <p className="text-gray-300 mt-4 text-[16px] leading-[26px] max-w-3xl">
                As consumers increasingly rely on influencer recommendations over traditional advertising,
                brands have the opportunity to reach engaged, ready-to-act audiences. Whether you need niche
                specialists or broad-reaching voices, our customized strategies are designed to expand reach,
                build community, and drive measurable business outcomes.
            </p>
        </div>
    );
}
