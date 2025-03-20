'use client';

export default function Cryptobanner() {
    return (
        <div className="relative flex items-center justify-centre w-full h-screen text-white bg-[#000B18] z-10"
            >
           <div className="absolute -top-40 inset-0 bg-[url('/banner.webp')] bg-cover bg-center bg-no-repeat -z-10"></div>
            <div className="w-3/1 pl-[2%] ml-25"> 
                <h1 className="font-Poppins font-[500] text-[35px] leading-[42px] text-white">
                Ignite Your Blockchain & Crypto Project’s <br/> Growth and Watch It Boom!
                </h1>
                <p className="font-Poppins font-[400] mt-4 text-gray-200 text-[20px] leading-[28px]">
                Accelerate your blockchain and crypto project’s growth with Intelisync’s tailored<br/> marketing strategies. We focus on expanding your reach, enhancing engagement,<br/> and helping you lead in a dynamic digital landscape.
                </p>
                <button className="mt-8 w-[200px] h-[50px] bg-gradient-to-r from-[#00CBE2] via-[#148FBC] to-[#006AFF] text-white rounded-full font-semibold shadow-md transition relative overflow-hidden hover:bg-transparent hover:border-2 hover:border-white">
                    Book a demo
                </button>
            </div>
        </div>
    );
}
