'use client';

export default function IndustrySection() {
    return (
        <div className="flex items-center justify-center h-screen text-white bg-black"
            style={{ backgroundImage: "url('/banner.png')" }}>
            <div className="text-center">
                <h1 className="font-poppins font-semibold text-[32px] leading-[40px] tracking-tight">
                    Industries with Next-Gen Solutions
                </h1>

                <button className="mt-4 px-6 py-2 border border-white text-white rounded-full font-medium hover:bg-white hover:text-black transition">
                    Book a demo
                </button>
            </div>
        </div>
    );
}
