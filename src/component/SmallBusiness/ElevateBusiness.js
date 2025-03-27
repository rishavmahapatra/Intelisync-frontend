'use client';

import Image from 'next/image';

export default function GetAhead() {
    return (
        <div className='bg-[#000B18] text-white py-16 px-4 sm:px-6 md:px-12 lg:px-24'>
            <div className='py-3'>
               <h2 className="font-poppins font-[500] text-center text-[28px] sm:text-[30px] md:text-[35px] leading-[38px] sm:leading-[42px] md:leading-[50px] tracking-[-0.01px]">
                   Elevate Your <span className="text-cyan-500">Small Business</span> 
                    with Smart, Tailored <br className="hidden md:block"/> Marketing Solutions
               </h2>
            </div>

            <div className="flex justify-center mt-6">
                <div className="flex flex-col md:flex-row items-center justify-center gap-8 sm:gap-10 px-4 sm:px-6">

                    {/* Left Side - Image */}
                    <div className="w-[80px] h-[80px] flex justify-center md:justify-start">
                        <Image src="/gamingMarketingLogo.png" alt="Small Business Digital Marketing" width={94} height={94} />
                    </div>

                    {/* Right Side - Text */}
                    <div className="flex flex-col items-center md:items-start max-w-3xl">
                        <p className="text-gray-300 text-[16px] leading-[26px] sm:leading-[28px] mt-4 text-center md:text-left">
                        Small businesses aren&apos;t just smaller versions of big corporations—they have their own unique stories, challenges, and opportunities. To thrive, you need more than cookie-cutter marketing strategies. You need a partner that understands how to turn your distinct brand into a competitive advantage.
                        </p>
                        <p className="mt-4 text-gray-300 text-[16px] leading-[26px] sm:leading-[28px] text-center md:text-left">
                        Our small business marketing team specializes in crafting bespoke strategies that help you build your brand, connect with your target audience, and drive growth. We take a hands-on, data-driven approach, fine-tuning every campaign to align with your business goals and budget.
                        </p>
                        <p className="mt-4 text-gray-300 text-[16px] leading-[26px] sm:leading-[28px] text-center md:text-left">
                        From boosting your online presence to nurturing loyal customers, we deliver real, lasting results. With our help, you&apos;ll transform challenges into opportunities and rise above the competition in today&apos;s digital marketplace. Ready to grow? We&apos;re here to help every step of the way.
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
}
