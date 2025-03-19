'use client'
export default function Section() {
    return (
        <div
            className="flex items-center justify-center h-[80vh] bg-gradient-to-bl from-[#089BC4] via-[#009CAD] to-[#00468C] text-white bg-black"
            style={{ backgroundImage: "url('/banner.webp')", objectFit: 'cover', backgroundRepeat: 'no-repeat' }}
        >
            <div className="text-center">
                <h1 className="font-semibold min-[320px]:max-[480px]:text-[30px] min-[320px]:max-[480px]:leading-[45px] text-[35px] leading-[45px] text-center">
                    Blockchain Development Solutions
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