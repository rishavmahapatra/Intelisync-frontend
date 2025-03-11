'use client';

export default function GamingSection() {
    return (
        <div className="flex items-center h-screen px-10 bg-black"
            style={{ backgroundImage: "url('/banner.png')" }}>
            {/* Left Content */}
            <div className="w-1/2 pl-[2%]">
                <h1 className="font-poppins font-semibold text-[32px] leading-[40px] tracking-tight text-white">
                    Gaming Marketing Solutions Fuel Your Game’s Growth and Impact
                </h1>
                <p className="mt-2 text-gray-200 text-[17px] leading-[25px] tracking-[-0.01%]">
                    Unlock the full potential of your gaming business with our expert marketing strategies tailored to the gaming industry.
                </p>
                <button className="mt-6 px-6 py-2 border border-white text-white rounded-full font-medium hover:bg-white hover:text-black transition">
                    Book a demo
                </button>
            </div>
        </div>
    );
}
