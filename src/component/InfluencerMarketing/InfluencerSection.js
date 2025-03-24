import Link from "next/link";
export default function InfluencerCampaign() {
    return (
        <div className=" min-h-screen relative text-white py-32 flex flex-col  justify-center items-center px-6 md:px-20 lg:px-32 bg-[#020B17] z-0">
            <div className="absolute -top-40 inset-0 bg-[url('/banner.webp')] bg-cover bg-center bg-no-repeat -z-10"></div>
            <h1 className="mx-auto text-[30px] md:text-[35px] leading-[40px] md:leading-[40px] text-center font-[600]">
                {/* Transform Your Brand with Authentic High-Impact <br />Influencer Campaigns */}
                Web3 Influencer Marketing Agency | Grow Your Brand & Reach
            </h1>


            <p className="text-gray-100 mt-4 max-w-2xl mx-auto text-[18px] md:text-[20px] leading-[28px] md:leading-[33px] text-center">
                Tap into the power of authentic voices to strengthen your brand’s presence and build trust with your audience.
            </p>


            < button className="mt-6 w-[227px] h-[55px] text-[20px] bg-[linear-gradient(90.08deg,#00CBE2_0.07%,#148FBC_62.33%,#006AFF_140.3%)]

                   text-white rounded-full font-[500px] shadow-md transition 
                   hover:border hover:border-white hover:bg-none hover:text-white">
                    <Link href='/contact' >Book a demo</Link>
                
                </button>
        </div>
    );
}
