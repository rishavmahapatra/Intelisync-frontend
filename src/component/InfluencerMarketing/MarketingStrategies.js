'use client';

import { InfluencerMarketingservices, MarketingStrategies } from "@/utils/Cards_Data";

export default function InfluencerStrategies() {
    return (
        <div className="bg-[#000B18] text-white py-8 px-6 md:px-20 lg:px-32">
            {/* Section Header */}
            <h2 className="text-[#06FFFB] text-[30px] md:text-[30px] font-[500] min-[320px]:max-[580px]:leading-[35px] leading-[25px] text-center md:text-left">
                We craft dynamic, audience-centric content strategies that
            </h2>

            {/* Bullet Points */}
            <ul className="mt-4 text-gray-300 space-y-4 text-[17px] leading-[25px] list-disc font-[400] w-[87%] mx-auto tracking-[-0.01em]">
                {MarketingStrategies.map((point, index) => (
                    <li key={index}>{point}</li>
                ))}
            </ul>

            {/* Subheading */}
            <h3 className="text-[#06FFFB] text-[30px] md:text-[30px] font-[500] min-[320px]:max-[580px]:leading-[35px] leading-[25px] mt-15 text-center md:text-left">
                We offer comprehensive influencer marketing services that:
            </h3>

            {/* Service Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                {InfluencerMarketingservices.map((service, index) => (

                    <div
                        key={index}
                        className="p-px relative rounded-2xl shadow-lg bg-[#D9D9D90D]"

                    >
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#00EEDF] via-[#7F7F7F] to-[#00A9CA]"></div>

                        <div key={index} className="bg-[#0B1522] rounded-2xl relative h-full p-8 text-left">
                            <h4 className="text-[19px] font-[600] leading-[22px] text-[#FFFFFFE5] tracking-[-0.01em]">
                                {service.title}
                            </h4>
                            <p className="mt-2 text-[13px] leading-[20px] text-[#FFFFFFE5] font-[400] tracking-[-0.01em]">
                                {service.description}
                            </p>
                        </div>

                    </div>
                ))}
            </div>
        </div>
    );
}
