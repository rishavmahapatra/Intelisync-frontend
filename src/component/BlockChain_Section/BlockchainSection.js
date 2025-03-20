'use client'
export default function Section() {
    return (
        <div
            className="flex items-center justify-center h-screen relative text-white bg-[#020B17] z-0" >
            <div className="absolute -top-40 inset-0 bg-[url('/banner.webp')] bg-cover bg-center bg-no-repeat -z-10"></div>
            <div className="text-center">
                <h1 className="font-semibold min-[320px]:max-[480px]:text-[30px] min-[320px]:max-[480px]:leading-[45px] text-[35px] leading-[45px] text-center">
                    Reliable Blockchain Development Services for Your Business
                </h1>

                <p className="font-medium min-[320px]:max-[480px]:text-[15px] text-[20px] leading-[55px] text-center">
                    Simplify Your Path to Blockchain Success
                </p>

                <button className="mt-6 w-[227px] h-[55px] text-[20px] bg-[linear-gradient(90.08deg,#00CBE2_0.07%,#148FBC_62.33%,#006AFF_140.3%)]
 
                   text-white rounded-full font-[500] shadow-md transition
                   hover:border hover:border-white hover:bg-none hover:text-white leading-[55px]">
                    Book a demo
                </button>

            </div>
        </div>
    );
}