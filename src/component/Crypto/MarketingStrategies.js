'use client';

import Image from 'next/image';

export default function MarketingStrategies() {
    return (
        <div className='bg-[#000B18] text-white py-16 px-4 md:px-12'>
            <div className='py-3'>
                <h2 className="font-poppins font-medium text-[28px] sm:text-[32px] md:text-[35px] leading-[38px] sm:leading-[42px] md:leading-[48px] text-center capitalize">
                Supercharge Your Crypto Project with Dynamic<br className="hidden md:block" />
                    <span><span className="text-[#00E2E7]">Marketing Strategies</span></span>
                </h2>
            </div>

            {/* Content Container */}
            <div className="flex justify-center mt-6">
                <div className="flex flex-col md:flex-row flex-wrap items-center md:items-start justify-center gap-8 md:gap-12 px-4 sm:px-6 w-full">
                    
                    {/* Left Side - Image */}
                    <div className="w-[80px] sm:w-[94px] h-[80px] sm:h-[94px] flex justify-center md:justify-start">
                        <Image src="/gamingMarketingLogo.png" alt="Gaming Icon" width={94} height={94} />
                    </div>

                    {/* Right Side - Text */}
                    <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-2xl w-full">
                        <p className="text-gray-300 text-[15px] sm:text-[16px] leading-[26px] sm:leading-[28px] mt-4">
                        Crypto projects aren&apos;t just another business—they&apos;re digital revolutions with unique opportunities and untapped potential. To thrive in this fast-paced space, you need more than one-size-fits-all marketing. You need a partner who understands your vision and knows how to ignite real growth.
                        </p>
                        <p className="mt-4 text-gray-300 text-[15px] sm:text-[16px] leading-[26px] sm:leading-[28px]">
                        Our expert crypto marketing team crafts bold, customized strategies that amplify your project, engage your community, and accelerate your success. With a data-driven approach, we fine-tune every campaign to align with your goals and deliver results that matter.
                        </p>
                        <p className="mt-5 text-gray-300 text-[15px] sm:text-[16px] leading-[26px] sm:leading-[28px]">
                        From skyrocketing visibility to building a loyal user base, we help you cut through the noise and lead the way in the competitive crypto market. Ready to elevate your crypto project? We&apos;re here to power your next level of growth.
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
}
