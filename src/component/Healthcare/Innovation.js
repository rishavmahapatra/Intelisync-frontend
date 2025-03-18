'use client'

export default function Innovation() {
    return (
        <div
        className="flex items-center justify-center bg-[url('/banner.webp')] bg-cover bg-center bg-no-repeat h-[70vh] w-full text-white bg-black"
        >

            <div className="text-center md:text-left max-w-4xl md:max-w-5xl">
                <h1 className="font-poppins font-semibold text-[32px] sm:text-[40px] md:text-[48px] leading-[40px] sm:leading-[50px] md:leading-[55px] tracking-[-0.01px]">
                    Healthcare Marketing Agency Driving Growth and Innovation in Healthcare
                </h1>

                <p className="font-poppins font-medium text-[18px] sm:text-[24px] md:text-[30px] leading-[28px] sm:leading-[35px] md:leading-[40px] mt-6">
                    Count on our healthcare marketing strategies to elevate your practice, hospital, or healthcare technology company.
                </p>

                <button className="mt-10 w-full md:w-[200px] h-[55px] bg-transparent rounded-full font-semibold shadow-md border border-white hover:bg-gray-200 hover:text-black transition">
                    Book a Demo
                </button>
            </div>
        </div>
    );
}
