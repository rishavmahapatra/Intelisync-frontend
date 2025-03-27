'use client';

import Image from 'next/image';

export default function GamingMarketingSection() {
    return (
        <div className='bg-[#000B18] text-white py-16 px-4 sm:px-6 md:px-12'>
            {/* Heading */}
            <div className='py-3 text-center'>
                <h2 className="font-poppins font-medium text-[22px] sm:text-[24px] leading-[30px] sm:leading-[32px] tracking-tight capitalize">
                    Unlock The Full Potential Of Your Gaming Business With Our Expert <br className="hidden md:block" />
                    <span>Marketing Strategies Tailored To The <span className="text-[#00EEDF]">Gaming Industry</span></span>
                </h2>
            </div>

            {/* Content Section */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-10 px-4 sm:px-6">
                
                {/* Left Side - Image */}
                <div className="w-[70px] sm:w-[80px] h-[70px] sm:h-[80px] flex justify-center md:justify-start">
                    <Image src="/gamingMarketingLogo.png" alt="Gaming Marketing Solutions" width={64} height={64} />
                </div>

                {/* Right Side - Text */}
                <div className="flex flex-col items-center md:items-start max-w-3xl text-center md:text-left">
                    <p className="text-gray-300 text-[15px] sm:text-[16px] leading-[26px] sm:leading-[28px] mt-4">
                        Achieving success in the gaming sector is more than just creating an exciting game; it requires smart, strategic marketing to capture and engage your audience. With the right marketing approach, you can drive quality traffic, expand your community, and elevate your brand, all while we handle the intricacies of your digital strategy.
                    </p>
                    <p className="mt-4 text-gray-300 text-[15px] sm:text-[16px] leading-[26px] sm:leading-[28px]">
                        We specialize in delivering gaming-focused marketing strategies that deliver measurable results. With in-depth knowledge of the gaming market and a data-driven approach, we help you engage players, boost visibility, and scale your business. From creating a strong digital presence to enhancing player engagement, our strategies ensure your game stays ahead of the competition.
                    </p>
                </div>
            </div>
        </div>
    );
}
