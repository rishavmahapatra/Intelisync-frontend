export default function CommunitySection() {
    return (

        <div className="h-screen relative text-white py-16 px-6 md:px-20 lg:px-32 text-center bg-[#020B17] z-0 flex flex-col items-center justify-center">
            <div className="absolute -top-40 inset-0 bg-[url('/banner.webp')] bg-cover bg-center bg-no-repeat -z-10"></div>
            <h1 className="w-[85%]  min-[320px]:max-[480px]:w-[95%] min-[320px]:max-[480px]:text-[25px]  min-[320px]:max-[480px]:leading-[30px] md:text-[35px] md:leading-[42px] font-semibold text-center tracking-[-0.01em] text-white">
                {/* Unite and Energize Your Crypto Community with Pro Telegram & Discord Management */}
                Web3 Community Management | Grow & Engage Your Project
            </h1>

            <p className=" text-gray-100 min-[320px]:max-[480px]:text-[15px]  text-[20px] leading-[33px] font-[500] tracking-[-0.01em] text-center mt-5 max-w-4xl mx-auto">
                Fuel community growth and engagement with tailored Telegram and Discord strategies.
                Our specialists build trust, foster connections, and drive long-term success for your brand.
            </p>

            <button className="mt-6 w-[227px] h-[55px] text-[20px] bg-[linear-gradient(90.08deg,#00CBE2_0.07%,#148FBC_62.33%,#006AFF_140.3%)]
 
                   text-white rounded-full font-[500] shadow-md transition
                   hover:border hover:border-white hover:bg-none hover:text-white leading-[55px]">
                Book a demo
            </button>
        </div>
    );
}