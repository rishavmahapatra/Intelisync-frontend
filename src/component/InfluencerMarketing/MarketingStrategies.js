'use client';

import { InfluencerMarketingservices, MarketingStrategies } from "@/utils/Cards_Data";

export default function InfluencerStrategies() {
    return (
        <div className="bg-[#000B18] text-white py-16 px-6 md:px-20 lg:px-32">
            {/* Section Header */}
            <h2 className="text-cyan-400 text-[30px] md:text-[30px] font-semibold leading-[25px] text-center md:text-left">
                We craft dynamic, audience-centric content strategies that
            </h2>

            {/* Bullet Points */}
            <ul className="mt-4 text-gray-300 space-y-3 text-[17px] leading-[25px] list-disc pl-5">
                {MarketingStrategies.map((point, index) => (
                    <li key={index}>{point}</li>
                ))}
            </ul>

            {/* Subheading */}
            <h3 className="text-cyan-400 text-[30px] md:text-[30px] font-semibold leading-[25px] mt-10 text-center md:text-left">
                We offer comprehensive influencer marketing services that:
            </h3>

            {/* Service Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                {InfluencerMarketingservices.map((service, index) => (
                    <div key={index} className="bg-[#0c1925] border border-cyan-400 rounded-lg p-6 text-left">
                        <h4 className="text-[19px] font-semibold leading-[22px] text-white">
                            {service.title}
                        </h4>
                        <p className="mt-2 text-[13px] leading-[20px] text-gray-300">
                            {service.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}
