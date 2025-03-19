'use client';

export default function GamingSection() {
    return (
        <div className="flex items-center h-[595px] px-10 bg-black bg-no-repeat bg-cover bg-[center_top_-150px]"
            style={{ backgroundImage: "url('/banner.webp')" }}>
            {/* Left Content */}
            <div className="w-3/1 pl-[2%] ml-8"> 
                <h1 className="font-Poppins text-[35px] leading-[42px] text-white">
                Fuel Your Small Business Growth with a Marketing <br/>Partner Who Understands You
                </h1>
                <p className="font-Poppins mt-4 text-gray-200 text-[20px] leading-[28px]">
                Elevate your business with a dedicated marketing partner that specializes in small business <br/> success. We’ll help you enhance your online visibility, connect with more customers, and drive  <br/>sustainable growth.
                </p>
                <button className="mt-8 w-[200px] h-[50px] bg-gradient-to-r from-[#00CBE2] via-[#148FBC] to-[#006AFF] text-white rounded-full font-semibold shadow-md transition relative overflow-hidden hover:bg-transparent hover:border-2 hover:border-white">
                    Book a demo
                </button>
            </div>
        </div>
    );
}
