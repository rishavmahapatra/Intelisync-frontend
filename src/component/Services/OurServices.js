import { services } from "@/utils/Cards_Data";

export default function OurServices() {

  return (
    <div className="bg-[#000B18] relative text-white py-16 px-6 md:px-20 lg:px-32 text-center">
      <div className="absolute w-[200px] h-[500px] blur-[100px] top-[-50px] left-0 rotate-[148.52deg] 
                      bg-[linear-gradient(256.74deg,rgba(4,158,188,0.5)_47.38%,rgba(0,55,90,0.5)_61.04%,rgba(73,0,116,0.5)_70.05%)]">
      </div>
      <h2 className="text-[25px] md:text-[25px] font-semibold text-[#06FFFB]">
        Our Services
      </h2>
      <p className="text-gray-300 mt-4 max-w-2xl mx-auto text-[17px] leading-[25px]">
        From multi-chain interoperability to tokenization, our solutions are built to scale and
        transform businesses. Discover how Intelsync can take your vision to the next level.
      </p>
      <div className="grid md:grid-cols-3 gap-6 mt-10">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-[#03283b] border-b border-cyan-400 rounded-lg p-6 text-left"
          >
            <h3 className="text-[19px] font-semibold leading-[30px]">{service.title}</h3>
            <p className="mt-2 text-[13px] leading-[20px] text-gray-300">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
