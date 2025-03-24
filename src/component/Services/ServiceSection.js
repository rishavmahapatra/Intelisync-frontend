'use client'
import Link from "next/link";
export default function ServiceSection() {
  return (
    <div className="h-screen relative flex flex-col items-center justify-center text-white text-center px-4 bg-[#020B17] z-0">
      <div className="absolute -top-40 inset-0 bg-[url('/banner.webp')] bg-cover bg-center bg-no-repeat -z-10"></div>
      <h1 className="text-[30px] md:text-[35px] leading-[40px] md:leading-[47px] font-semibold tracking-[ -0.01em]">
        Revolutionizing Businesses with <br /> Scalable Tech Services
      </h1>
      < button className="mt-6 w-[227px] h-[55px] text-[20px] bg-[linear-gradient(90.08deg,#00CBE2_0.07%,#148FBC_62.33%,#006AFF_140.3%)]

                   text-white rounded-full font-[500px] shadow-md transition 
                   hover:border hover:border-white hover:bg-none hover:text-white">
                    <Link href='/contact' >Book a demo</Link>
                
                </button>
    </div>
  );
}
