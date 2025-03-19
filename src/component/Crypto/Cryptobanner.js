'use client';

export default function Cryptobanner() {
    return (
        <div className="flex items-center h-[595px] px-10 bg-black bg-no-repeat bg-cover bg-[center_top_-150px]"
            style={{ backgroundImage: "url('/banner.webp')" }}>
            {/* Left Content */}
            <div className="w-3/1 pl-[2%] ml-8"> 
                <h1 className="font-Poppins text-[35px] leading-[42px] text-white">
                Ignite Your Blockchain & Crypto Project’s <br/>Growth and Watch It Boom!
                </h1>
                <p className="font-Poppins mt-4 text-gray-200 text-[20px] leading-[28px]">
    Accelerate your blockchain and crypto project’s growth with Intelisync’s tailored <span className="block mb-1"></span>
    marketing strategies. We focus on expanding your reach, enhancing engagement,<span className="block mb-1"></span>
    and helping you lead in a dynamic digital landscape.
</p>

                <button className="mt-8 w-[200px] h-[50px] bg-gradient-to-r from-[#00CBE2] via-[#148FBC] to-[#006AFF] text-white rounded-full font-semibold shadow-md transition relative overflow-hidden hover:bg-transparent hover:border-2 hover:border-white">
                    Book a demo
                </button>
            </div>
        </div>
    );
}
