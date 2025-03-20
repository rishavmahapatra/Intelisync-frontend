'use client'
import Link from "next/link";

export default function WebBanner(){
    return (
        <div
        className="relative flex items-center justify-center w-full h-screen text-white bg-[#020B17] z-10"
        >
            <div className="absolute -top-40 inset-0 bg-[url('/banner.webp')] bg-cover bg-center bg-no-repeat -z-10"></div>
            <div className="text-center max-w-5xl ">
                <h2 className="  font-semibold md:text-[40px] md:leading-[45px] tracking-[-0.01%] text-center min-[320px]:text-[35px] xs:leading-[10px]">
                Bespoke Web Development Solutions Designed to <br/> Elevate Your Business
                </h2>
 
                <p className="  font-medium md:text-[20px] md:leading-[40px] tracking-[-0.01%] text-center mt-2">
                Elevate your brand with custom web development that creates captivating, user-focused <br/>websites designed to boost engagement and drive business growth.
                </p>
 
                <button className="mt-6 w-[227px] h-[55px] text-[20px] bg-[linear-gradient(90.08deg,#00CBE2_0.07%,#148FBC_62.33%,#006AFF_140.3%)]

                   text-white rounded-full font-semibold shadow-md transition 
                   hover:border hover:border-white hover:bg-none hover:text-white">
                Book a demo
                </button>

 
            </div>
        </div>
    );
}
