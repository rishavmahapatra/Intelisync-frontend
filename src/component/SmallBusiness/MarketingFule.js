'use client'

export default function MarketingFule() {
    return (
        <div
        className="flex items-center justify-center bg-[url('/banner.webp')] bg-cover bg-center bg-no-repeat h-[70vh] w-full text-white bg-black"
        >
            <div className="max-w-4xl">
                <h1 className="font-poppins font-semibold text-[28px] sm:text-[32px] md:text-[40px] leading-[36px] sm:leading-[45px] md:leading-[50px] tracking-[-0.01px]">
                    Fuel Your Small Business Growth with a Marketing Partner Who Understands You
                </h1>
 
                <p className="font-poppins font-medium text-[16px] sm:text-[20px] md:text-[24px] leading-[24px] sm:leading-[30px] md:leading-[35px] mt-6">
                    Elevate your business with a dedicated marketing partner that specializes in small business success. We’ll help you enhance your online visibility, connect with more customers, and drive sustainable growth.
                </p>
 
                <button className="mt-10 w-full sm:w-[250px] h-[55px] bg-transparent rounded-full font-semibold shadow-md border border-white hover:bg-cyan-200 transition">
                    Book a demo
                </button>
            </div>
        </div>
    );
}
