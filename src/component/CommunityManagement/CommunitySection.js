export default function CommunitySection() {
    return (

        <div className="md:h-[70vh] text-white py-16 px-6 md:px-20 lg:px-32 text-center bg-black flex flex-col items-center justify-center"
            style={{ backgroundImage: "url('/banner.webp')", backgroundRepeat: 'no-repeat' }}>
            <h2 className="w-[85%]  min-[320px]:max-[480px]:w-[95%] min-[320px]:max-[480px]:text-[25px]  min-[320px]:max-[480px]:leading-[30px] md:text-[35px] md:leading-[42px] font-semibold text-center tracking-[-0.01em] text-white">
                Unite and Energize Your Crypto Community with Pro Telegram & Discord Management
            </h2>

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