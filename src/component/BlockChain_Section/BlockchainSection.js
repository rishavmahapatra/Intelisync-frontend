'use client'
export default function Section() {
    return (
        <div
            className="flex items-center justify-center h-[80vh] bg-gradient-to-bl from-[#089BC4] via-[#009CAD] to-[#00468C] text-white bg-black" 
            style={{ backgroundImage: "url('/banner.png')",objectFit:'cover', backgroundRepeat: 'no-repeat' }}
        >
            <div className="text-center">
                <h1 className="font-semibold min-[320px]:max-[480px]:text-[30px] min-[320px]:max-[480px]:leading-[45px] text-[35px] leading-[55px] text-center">
                    Blockchain Development Solutions
                </h1>

                <p className="font-medium min-[320px]:max-[480px]:text-[15px] text-[20px] leading-[55px] text-center mt-2">
                    Simplify Your Path to Blockchain Success
                </p>

                <button className="mt-6 w-[200px] h-[55px] bg-gradient-to-r from-[#00CBE2] via-[#148FBC] to-[#006AFF] text-white rounded-full font-semibold shadow-md transition relative overflow-hidden hover:bg-transparent hover:border-2 hover:border-white">
                    Book a demo
                </button>

            </div>
        </div>
    );
}