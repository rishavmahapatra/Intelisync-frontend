import { CommunityManagementservices } from "@/utils/Cards_Data";

export default function CommunityServices() {

    return (
        <>
            <div className="bg-[#000B18] text-white py-16 px-6 md:px-20 lg:px-32">
                <h2 className="text-[28px] font-[500] md:text-[30px] leading-[35px] md:leading-[25px] text-[#06FFFB] text-left">
                    Web3 Community Management Agency for Crypto Growth
                </h2>

                <p className="text-gray-300 mt-4 max-w-3xl text-[13px] leading-[20px] font-[300]">
                    Building a community is easy, but keeping it engaged takes strategy. Our crypto community management services ensure active discussions, real-time support, and a loyal following on platforms like Discord and Telegram. We help your project gain trust, attract investors, and stand out in the Web3 space.
                </p>

                <div className="grid md:grid-cols-3 gap-8 mt-10">
                    {CommunityManagementservices.map((service, index) => (
                        <div
                            key={index}
                            className="p-px relative rounded-2xl shadow-lg bg-[#D9D9D90D]"

                        >
                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#00EEDF] via-[#7F7F7F] to-[#00A9CA]"></div>

                            <div className=" bg-[#0B1522] rounded-2xl relative h-full py-8 px-7">

                                <h3 className="text-[17px] md:text-[19px] font-[700] leading-[22px] w-[98%]">
                                    {service.title}
                                </h3>

                                <p className="mt-2 text-[13px] leading-[20px] text-gray-300 tracking-[-0.01em]">
                                    {service.description}
                                </p>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
            <div className="text-center pt-16 md:hidden block">
                <h2 className="text-[20px] md:text-2xl font-[500] text-white relative inline-block mb-6 pb-2 tracking-[-0.01%]">
                    Trusted by Top Innovators
                    <span className="absolute left-0 bottom-0 w-full h-[2px] bg-gradient-to-r from-[#06FFF0] via-[#00aaff] to-[#0192BA]"></span>
                </h2>
            </div>
        </>

    );
}
