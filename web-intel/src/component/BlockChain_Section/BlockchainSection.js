'use client'
export default function Section() {
    return (
        <div
            className="flex items-center justify-center h-[595px] bg-gradient-to-bl from-[#089BC4] via-[#009CAD] to-[#00468C] text-white"
            style={{
                background: "linear-gradient(254.95deg, #086CC4 -2.44%, #9F30FF -2.43%, #00BBD8 50.15%, #00B0C4 68.3%, #068BFF 99.46%, #00468C 99.46%, #009CAD 99.46%)",
            }}
        >
            <div className="text-center">
                <h1 className="font-poppins font-semibold text-[48px] leading-[55px] tracking-[-0.01%] text-center">
                    Blockchain Development Solutions
                </h1>

                <p className="font-poppins font-medium text-[30px] leading-[55px] tracking-[-0.01%] text-center mt-2">
                    Simplify Your Path to Blockchain Success
                </p>

                <button className="mt-6 w-[200px] h-[55px] bg-white text-black rounded-full font-semibold shadow-md hover:bg-gray-200 transition">
                    Book a demo
                </button>

            </div>
        </div>
    );
}