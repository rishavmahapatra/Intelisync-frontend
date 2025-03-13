'use client';

export default function IndustrySection() {
    return (
        <div className="flex items-center justify-center h-[551px] text-white bg-black"
            style={{ backgroundImage: "url('/banner.png')", objectFit: 'cover', backgroundRepeat: 'no-repeat' }}>
            <div className="text-center">
                <h1 className="font-semibold text-[48px] leading-[55px] tracking-tight">
                    Industries with Next-Gen Solutions
                </h1>

                <button className="mt-6 w-[200px] h-[55px] bg-gradient-to-r from-[#00CBE2] via-[#148FBC] to-[#006AFF] text-white rounded-full font-semibold shadow-md transition relative overflow-hidden hover:bg-transparent hover:border-2 hover:border-white">
                    Book a demo
                </button>
            </div>
        </div>
    );
}
