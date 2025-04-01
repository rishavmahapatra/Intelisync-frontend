'use client';

import Link from "next/link";

export default function MarketingFule() {
    return (
        <div className="relative flex items-center justify-center md:justify-start w-full min-h-screen text-white bg-[#000B18] z-10 px-6 md:px-16 lg:px-24">
            {/* Background Image */}
            <div className="absolute -top-40 inset-0 bg-[url('/banner.webp')] bg-cover bg-center bg-no-repeat -z-10"></div>

            <div className="w-full max-w-3xl md:max-w-5xl text-center md:text-left">
                <h1 className="font-poppins font-[500] text-[28px] sm:text-[35px] leading-[36px] sm:leading-[40px] text-white">
                    Fuel Your Small Business Growth with a Marketing <br className="hidden md:block" />
                    Partner Who Understands You
                </h1>
                <p className="font-poppins font-[400] mt-4 text-gray-200 text-[16px] sm:text-[20px] leading-[24px] sm:leading-[28px]">
                    Elevate your business with a dedicated marketing partner that specializes in small business success. <br className="hidden md:block" />
                    We&apos;ll help you enhance your <Link href='/services/web3-branding-agency/' className="underline">online visibility</Link>, connect with more customers, and drive <br className="hidden md:block" />
                    sustainable growth.
                </p>
                <button className="mt-6 sm:mt-8 px-6 py-3 sm:w-[200px] sm:h-[50px] bg-gradient-to-r from-[#00CBE2] via-[#148FBC] to-[#006AFF] text-white rounded-full font-semibold shadow-md transition-all hover:bg-transparent hover:border-2 hover:border-white">
                <Link href="/contact">Book a demo</Link>
                </button>
            </div>
        </div>
    );
}
