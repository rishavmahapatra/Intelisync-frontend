'use client';
import Link from "next/link";
export default function InfluencerPartnerShip() {
    return (
        <div className="bg-[#0A0F1B] text-white py-16 px-6 md:px-20 lg:px-32">
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

            {/* Heading */}
            <h1
                className="font-poppins font-semibold text-[40px] leading-[50px] tracking-tight text-white"
            >
                Tap into unique influencer partnerships to spark meaningful connections
                with your perfect audience.
            </h1>

            {/* Description */}
            <p className="text-gray-300 mt-4 text-[16px] leading-[26px] max-w-3xl">
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
