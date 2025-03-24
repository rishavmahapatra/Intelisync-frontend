'use client';

import Image from 'next/image';

export default function StartupMarketing() {
    return (
        <div className='bg-[#000B18] text-white py-16 px-4 md:px-12'>
            <div className='py-3'>
                <h2 className="font-poppins font-medium text-[28px] sm:text-[32px] md:text-[35px] leading-[38px] sm:leading-[42px] md:leading-[48px] text-center capitalize">
                Unleash Your Startup&apos;s True Potential with Expert<br/>
                    <span><span className="text-[#00E2E7]"> Marketing Strategies</span></span>
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
                        Is your startup struggling to gain traction and attract the right customers? Building brand awareness and customer loyalty can feel like an uphill battle, but you don&apos;t have to face it alone
                        </p>
                        <p className="mt-4 text-gray-300 text-[15px] sm:text-[16px] leading-[26px] sm:leading-[28px]">
                        We specialize in crafting tailored marketing strategies that drive growth and establish a strong market presence for new businesses. Our team of industry experts brings diverse insights and years of experience to help you accelerate your success. Through data-driven analysis, creative content strategies, and strategic planning, we unlock the full potential of your product or service, enabling you to achieve your goals efficiently and effectively. Let us help you make your startup stand out and thrive in today&apos;s competitive market.
                        </p>
                        <p className="text-gray-300 text-[15px] sm:text-[16px] leading-[26px] sm:leading-[28px] mt-4">
                        With our expertise, you can overcome common startup hurdles like limited visibility, low brand recognition, and ineffective customer outreach. We&apos;re committed to helping you refine your brand, connect with your target audience, and fuel sustainable growth. Trust us to navigate the complexities of marketing while you focus on scaling your business.
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
}
