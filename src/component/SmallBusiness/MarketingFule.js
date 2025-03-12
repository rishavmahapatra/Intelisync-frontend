'use client'


export default function MarketingFule() {
    return (
        <div className="relative h-screen text-white bg-black overflow-hidden md:py-50 px-20 md:px-20" style={{ backgroundImage: "url('/banner.png')" }}>


            <div className="text-left  max-w-5xl">
                <h1 className="font-poppins font-semibold text-[48px] leading-[55px] tracking-[-0.01%] ml-0">
                Fuel Your Small Business Growth with a Marketing Partner Who Understands You</h1>
 
                <p className="font-poppins font-medium text-[30px] leading-[40px] tracking-[-0.01%] ml-0 mt-6">
                Elevate your business with a dedicated marketing partner that specializes in small business success. We’ll help you enhance your online visibility, connect with more customers, and drive sustainable growth.
                </p>
 
                <button className="mt-10 w-[200px] h-[55px] bg-transprant rounded-full font-semibold shadow-md border border-white hover:bg-cyan-200 transition">
                    Book a demo
                </button>
 
            </div>
        </div>
    );
}
 