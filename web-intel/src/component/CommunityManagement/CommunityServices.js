import { CommunityManagementservices } from "@/utils/Cards_Data";

export default function CommunityServices() {

    return (
        <div className="bg-[#020B17] text-white py-16 px-6 md:px-20 lg:px-32">
            <h2 className="text-[30px] md:text-[34px] font-medium leading-[25px] tracking-[-0.01em] text-[#06FFFB] text-center">
                Tailored Crypto Community Management Services
            </h2>

            <p className="text-gray-300 mt-4 max-w-3xl mx-auto text-center text-[13px] leading-[20px] tracking-[-0.01em] font-normal">
                Simply having a Discord or Telegram group isn't enough—effective management is key to building a vibrant, engaged community. Our crypto community management services are designed to elevate your project's presence across multiple platforms, creating excitement and fostering trust. Here's how we can help:
            </p>

            <div className="grid md:grid-cols-3 gap-6 mt-10">
                {CommunityManagementservices.map((service, index) => (
                    <div key={index} className="bg-[#08182F] border border-cyan-400 rounded-lg p-6 text-left">
                        <h3 className="text-[19px] font-bold leading-[22px] tracking-[-0.01em]">
                            {service.title}
                        </h3>

                        <p className="mt-2 text-[13px] leading-[20px] text-gray-300 tracking-[-0.01em]">
                            {service.description}
                        </p>

                    </div>
                ))}
            </div>
        </div>
    );
}
