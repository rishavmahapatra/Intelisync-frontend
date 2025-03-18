import Image from "next/image";

export default function GrowthHealthcare() {
  return (
    <section className="bg-[#020B17] text-white py-10 px-6 md:px-12">
      {/* Heading */}
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-semibold mb-1 font-poppins text-[30px] leading-[40px]">
          Propel Your Business Forward with
        </h2>
        <h2 className="font-poppins text-2xl md:text-3xl font-semibold mb-10">
          Our Fintech Experts To
        </h2>
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
            <div key={index} className="flex items-start space-x-4">
              <Image src={item.img} alt={`Expert ${index + 1}`} width={40} height={40} />
              <p className="font-poppins text-[16px] leading-[24px]">{item.text}</p>
            </div>
          ))}
        </div>

        {/* Right Column */}
        <div className="space-y-8 mt-4">
          {[
            "Strengthen your digital presence and enhance patient engagement.",
            "Optimize your marketing approach for sustainable, long-term growth."
          ].map((text, index) => (
            <p key={index} className="font-poppins text-[16px] leading-[24px]">{text}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
