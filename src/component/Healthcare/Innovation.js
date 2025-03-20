'use client';

export default function Innovation() {
    return (
        <div className="flex items-center h-[595px] px-10 bg-[#000B18] bg-no-repeat bg-cover bg-[center_top_-150px]"
            style={{ backgroundImage: "url('/banner.webp')" }}>
            {/* Left Content */}
            <div className="w-3/1 pl-[2%] ml-8"> 
                <h1 className="font-Poppins text-[35px] leading-[42px] text-white">
                Healthcare Marketing Agency Driving Growth <br/> and Innovation in Healthcare
                </h1>
                <p className="font-Poppins mt-4 text-gray-200 text-[20px] leading-[28px]">
                Count on our healthcare marketing strategies to elevate your practice, hospital,<br/> or healthcare technology company.
                </p>
                <button className="mt-8 w-[200px] h-[50px] bg-gradient-to-r from-[#00CBE2] via-[#148FBC] to-[#006AFF] text-white rounded-full font-semibold shadow-md transition relative overflow-hidden hover:bg-transparent hover:border-2 hover:border-white">
                    Book a demo
                </button>
            </div>
        </div>
    );
}
