export default function InfluencerCampaign() {
    return (
        <div className=" md:h-[551px] text-white py-32 px-6 md:px-20 lg:px-32 text-center bg-black"
            style={{ backgroundImage: "url('/banner.webp')", backgroundRepeat: 'no-repeat' }}>
            <h2 className=" w-[90%] mx-auto text-[35px] md:text-[35px] font-semibold leading-[40px] md:leading-[40px] text-center">
                Transform Your Brand with Authentic High-Impact Influencer Campaigns
            </h2>


            <p className="text-gray-100 mt-4 max-w-2xl mx-auto text-[20px] md:text-[20px] leading-[33px] md:leading-[33px] text-center">
                Tap into the power of authentic voices to strengthen your brand’s presence and build trust with your audience.
            </p>


            <button className="mt-6 w-[200px] h-[55px] bg-gradient-to-r from-[#00CBE2] via-[#148FBC] to-[#006AFF] text-white rounded-full font-semibold shadow-md transition relative overflow-hidden hover:bg-transparent hover:border-2 hover:border-white">
                Book a demo
            </button>
        </div>
    );
}
