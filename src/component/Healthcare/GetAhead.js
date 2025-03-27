'use client';

import Image from 'next/image';

export default function GetAhead() {
    return (
        <div className='bg-[#000B18] text-white py-16 px-4 md:px-12'>
            <div className='py-3'>
                <h2 className="font-poppins font-medium text-[28px] sm:text-[32px] md:text-[35px] leading-[38px] sm:leading-[42px] md:leading-[48px] text-center capitalize">
                    Get ahead of the competition with tailored <br className="hidden md:block" />
                    <span>Marketing Strategies for <span className="text-[#00E2E7]">The healthcare industry</span></span>
                </h2>
            </div>

            {/* Content Container */}
            <div className="flex justify-center mt-6">
                <div className="flex flex-col md:flex-row flex-wrap items-center md:items-start justify-center gap-8 md:gap-12 px-4 sm:px-6 w-full">
                    
                    {/* Left Side - Image */}
                    <div className="w-[80px] sm:w-[94px] h-[80px] sm:h-[94px] flex justify-center md:justify-start">
                        <Image src="/gamingMarketingLogo.png" alt="HealthCare Marketing Agency" width={94} height={94} />
                    </div>

                    {/* Right Side - Text */}
                    <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-2xl w-full">
                        <p className="text-gray-300 text-[15px] sm:text-[16px] leading-[26px] sm:leading-[28px] mt-4">
                            Building a successful healthcare business requires more than providing great care—it demands a thoughtful, strategic marketing approach to drive growth. With the right marketing strategy, you can easily attract new patients, engage with your audience, and streamline your operations, while we take care of the marketing.
                        </p>
                        <p className="mt-4 text-gray-300 text-[15px] sm:text-[16px] leading-[26px] sm:leading-[28px]">
                            We specialize in crafting healthcare marketing strategies that deliver measurable results. Our deep industry knowledge and customized approach help you stand out in the competitive healthcare space. Whether it’s increasing visibility or boosting patient engagement, we ensure your business stays at the forefront of the industry. Through data-driven decisions and continuous optimization, we make sure your growth is sustainable and aligns with industry trends. Let us design a marketing strategy that positions your healthcare business as an authority and drives long-term success.
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
}
