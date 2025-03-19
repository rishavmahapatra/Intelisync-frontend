export default function InfluencerCampaign() {
    return (
        <div className=" md:h-[551px] text-white py-32 px-6 md:px-20 lg:px-32 text-center bg-black"
            style={{ backgroundImage: "url('/banner.webp')", backgroundRepeat: 'no-repeat' }}>
            <h2 className="mx-auto text-[35px] md:text-[35px] leading-[40px] md:leading-[40px] text-center font-[600]">
                Transform Your Brand with Authentic High-Impact <br/>Influencer Campaigns
            </h2>


            <p className="text-gray-100 mt-4 max-w-2xl mx-auto text-[20px] md:text-[20px] leading-[33px] md:leading-[33px] text-center">
                Tap into the power of authentic voices to strengthen your brand’s presence and build trust with your audience.
            </p>


            <button className="mt-6 w-[227px] h-[55px] text-[20px] bg-[linear-gradient(90.08deg,#00CBE2_0.07%,#148FBC_62.33%,#006AFF_140.3%)]
 
                   text-white rounded-full font-[500] shadow-md transition
                   hover:border hover:border-white hover:bg-none hover:text-white leading-[55px]">
                    Book a demo
                </button>
        </div>
    );
}
