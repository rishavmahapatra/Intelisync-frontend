'use client'

export default function ServiceSection() {
  return (
    <div className="h-[551px] flex flex-col items-center justify-center text-white text-center px-4 bg-black"
      style={{ backgroundImage: "url('/banner.png')", backgroundRepeat: 'no-repeat' }}>
      <h1 className="text-[35px] md:text-[35px] leading-[47px] font-semibold">
        Revolutionizing Businesses with <br /> Scalable Tech Services
      </h1>
      <button className="mt-6 w-[200px] h-[55px] bg-gradient-to-r from-[#00CBE2] via-[#148FBC] to-[#006AFF] text-white rounded-full font-semibold shadow-md transition relative overflow-hidden hover:bg-transparent hover:border-2 hover:border-white">
        Book a demo
      </button>
    </div>
  );
}
