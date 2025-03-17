export default function CommunitySection() {
    return (
        <div className="md:h-[70vh] text-white py-16 px-6 md:px-20 lg:px-32 text-center bg-black flex flex-col items-center justify-center"
            style={{ backgroundImage: "url('/banner.png')", backgroundRepeat: 'no-repeat' }}>
            <h2 className="w-[80%]  min-[320px]:max-[480px]:w-[95%] min-[320px]:max-[480px]:text-[25px]  min-[320px]:max-[480px]:leading-[30px] md:text-[35px] md:leading-[42px] font-semibold text-center tracking-[-0.01em] text-white">
                Unite and Energize Your Crypto Community with Pro Telegram & Discord Management
            </h2>
 
            <p className=" text-gray-100 min-[320px]:max-[480px]:text-[15px]  text-[20px] leading-[33px] font-medium tracking-[-0.01em] text-center mt-4 max-w-4xl mx-auto">
                Fuel community growth and engagement with tailored Telegram and Discord strategies.
                Our specialists build trust, foster connections, and drive long-term success for your brand.
            </p>
 
            <button className="mt-6 w-[200px] h-[55px] bg-gradient-to-r from-[#00CBE2] via-[#148FBC] to-[#006AFF] text-white rounded-full font-semibold shadow-md transition relative overflow-hidden hover:bg-transparent hover:border-2 hover:border-white">
                Book a demo
            </button>
        </div>
    );
}