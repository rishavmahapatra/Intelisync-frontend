import { services } from "@/utils/Cards_Data";

export default function OurServices() {
  
    return (
      <div className="bg-[#020B17] text-white py-16 px-6 md:px-20 lg:px-32 text-center">
        <h2 className="text-[30px] md:text-[40px] font-semibold text-[#06FFFB]">
          Our Services
        </h2>
        <p className="text-gray-300 mt-4 max-w-2xl mx-auto text-[16px] leading-[24px]">
          From multi-chain interoperability to tokenization, our solutions are built to scale and
          transform businesses. Discover how Intelsync can take your vision to the next level.
        </p>
        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[#08182F] border-b border-cyan-400 rounded-lg p-6 text-left"
            >
              <h3 className="text-[19px] font-semibold leading-[20px]">{service.title}</h3>
              <p className="mt-2 text-[13px] leading-[20px] text-gray-300">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  