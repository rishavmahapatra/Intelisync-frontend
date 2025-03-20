import Image from "next/image";

export default function GrowthHealthcare() {
  return (
    <section className="bg-[#000B18] text-white relative py-10 px-6 md:px-12 ">
      <div className="absolute w-[200px] h-[300px] blur-[100px]  bottom-[50px] left-[80%] right-0 rotate-[148.52deg] 
                      bg-[linear-gradient(256.74deg,rgba(4,158,188,0.5)_47.38%,rgba(0,55,90,0.5)_61.04%,rgba(73,0,116,0.5)_70.05%)]">
      </div>
      
      {/* Heading */}
      <div className="max-w-6xl mx-auto text-center mt-8">
        <h2 className="text-2xl md:text-3xl font-semibold mb-1 font-poppins text-[30px] leading-[40px]">
          Accelerate the Growth of Your Healthcare
        </h2>
        <h2 className="font-poppins text-2xl md:text-3xl font-semibold mb-4">
          Business with Our Expert Team to:
        </h2>
        <p className="font-poppins text-[15px] text-gray-300 mb-16">
          No matter what your marketing needs are, Intelisync’s team has the expertise to <br />
          deliver creative, data-driven results across all channels.
        </p>
      </div>

      {/* Grid Layout */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
        {/* Left Column */}
        <div className="space-y-8">
          {[
            { img: "/photos/expert1.png", text: "Increase patient acquisition and retention." },
            { img: "/photos/expert2.png", text: "Build trust and establish authority in the healthcare sector." },
            { img: "/photos/expert3.png", text: "Drive revenue and improve profitability through strategic marketing." }
          ].map((item, index) => (
            <div key={index} className="flex items-center space-x-4">
              <Image src={item.img} alt={`Expert ${index + 1}`} width={36} height={36} />
              <p className="font-poppins text-[16px] leading-[24px]">{item.text}</p>
            </div>
          ))}
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {[
            "Strengthen your digital presence and enhance patient engagement.",
            "Optimize your marketing approach for sustainable,long-term growth."
          ].map((text, index) => (
            <div key={index} className="flex items-center space-x-4">
              <div className="w-[36px] h-[36px]"></div>  
              <p className="font-poppins text-[16px] leading-[24px]">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
