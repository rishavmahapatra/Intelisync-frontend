'use client';

export default function GamingSection() {
    return (
        <div className="flex items-center h-[551px] px-10 bg-black"
            style={{ backgroundImage: "url('/banner.png')", backgroundRepeat: 'no-repeat' }}>
            {/* Left Content */}
            <div className="w-1/2 pl-[2%]">
                <h1 className="font-semibold text-[35px] leading-[42px] text-white">
                    Gaming Marketing Solutions Fuel Your Game’s Growth and Impact
                </h1>
                <p className="mt-2 text-gray-200 text-[20px] leading-[28px]">
                    Unlock the full potential of your gaming business with our expert marketing strategies tailored to the gaming industry.
                </p>
                <button className="mt-6 w-[200px] h-[50px] bg-gradient-to-r from-[#00CBE2] via-[#148FBC] to-[#006AFF] text-white rounded-full font-semibold shadow-md transition relative overflow-hidden hover:bg-transparent hover:border-2 hover:border-white">
                    Book a demo
                </button>
            </div>
        </div>
    );
}
