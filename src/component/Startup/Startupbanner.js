'use client'

export default function Banner() {
    return (

        <div className="relative flex items-center justify-start h-[780px] text-white overflow-hidden px-10 md:px-20">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-center bg-cover bg-black"
                style={{ backgroundImage: "url('/banner.png')" }}
            ></div>

            {/* Content */}
            <div className="relative text-left max-w-3xl z-10">
                <h1 className="font-poppins font-semibold text-[38px] md:text-[42px] leading-[50px] md:leading-[55px] tracking-[-0.01em]">
                Drive Startup Growth with Expert Marketing Solutions 
                </h1>

                <p className="font-poppins font-medium text-lg md:text-xl leading-[30px] text-gray-300 mt-4">
                Partner with Intelisync to enhance your startup’s success. Create a strong digital presence and transform your business idea into a growth-driven reality                </p>

                <button className="mt-6 px-8 py-3 border border-white text-white rounded-full font-medium shadow-md hover:bg-white hover:text-black transition">
                    Book a demo
                </button>
            </div>
        </div>
    );
}

