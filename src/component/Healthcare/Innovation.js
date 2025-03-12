'use client'


export default function Innovation() {
    return (
        <div className="relative h-[780px] text-white bg-black overflow-hidden md:py-50 px-20 md:px-20" style={{ backgroundImage: "url('/banner.png')", objectFit:'cover',backgroundRepeat:'no-repeat'}}>


            <div className="text-left  max-w-5xl">
                <h1 className="font-poppins font-semibold text-[48px] leading-[55px] tracking-[-0.01%] ml-0">
                Healthcare Marketing Agency Driving Growth and Innovation in Healthcare</h1>
 
                <p className="font-poppins font-medium text-[30px] leading-[40px] tracking-[-0.01%] ml-0 mt-6">
                Count on our healthcare marketing strategies to elevate your practice, hospital, or healthcare technology company.
                </p>
 
                <button className="mt-10 w-[200px] h-[55px] bg-transprant rounded-full font-semibold shadow-md border border-white hover:bg-gray-200 transition">
                    Book a demo
                </button>
 
            </div>
        </div>
    );
}
 