'use client';

export default function GamingSection() {
    return (
        <div className="relative flex items-center justify-centre w-full h-screen text-white bg-[#000B18] z-10"
            >
           <div className="absolute -top-40 inset-0 bg-[url('/banner.webp')] bg-cover bg-center bg-no-repeat -z-10"></div>
            <div className="w-3/1 pl-[2%] ml-25"> 
                <h1 className="font-Poppins font-[500] text-[35px] leading-[42px] text-white">
                Gaming Marketing Solutions Fuel Your <br/> Game’s Growth and Impact
                </h1>
                <p className="font-Poppins font-[400] mt-4 text-gray-200 text-[20px] leading-[28px]">
                Unlock the full potential of your gaming business with our expert marketing<br/> strategies tailored to the gaming industry.
                </p>
                <button className="mt-8 w-[200px] h-[50px] bg-gradient-to-r from-[#00CBE2] via-[#148FBC] to-[#006AFF] text-white rounded-full font-semibold shadow-md transition relative overflow-hidden hover:bg-transparent hover:border-2 hover:border-white">
                    Book a demo
                </button>
            </div>
        </div>
    );
}
