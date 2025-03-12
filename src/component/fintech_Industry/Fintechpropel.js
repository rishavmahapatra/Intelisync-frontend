import Image from "next/image";

export default function FintechExperts() {
  return (
    <section className="bg-[#0B1320] text-white py-30 px-15  md:px-12">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-left leading-10">
          <span className="block font-bold font-poppins">
            Propel Your Business Forward with
          </span>
          Our Fintech Experts To:
        </h2>
      </div>

      {/* Grid Container */}
      <div className="relative max-w-7xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-4 gap-8 items-start">
        {/* Dotted Line Connector (Desktop Only) */}
        <div className="absolute top-10 left-0 right-0 hidden md:flex justify-between items-center">
          <div className="border-t border-dotted border-gray-400 w-2/4"></div>
          <div className="border-t border-dotted border-gray-400 w-2/4"></div>
          <div className="border-t border-dotted border-gray-400 w-2/4"></div>
        </div>

        {/* Fintech Items */}
        {expertData.map((item, index) => (
          <div key={index} className="relative text-center flex flex-col items-center">
            {/* Image Container */}
            <div className="bg-[#00C7E6] p-4 rounded-lg inline-flex items-center justify-center">
              <Image src={item.image} alt={item.title} width={55} height={55} />
            </div>

            {/* Title & Description */}
            <h3 className="text-lg font-semibold mt-5">{item.title}</h3>
            <h3 className="text-lg font-semibold">{item.subTitle}</h3>
            <p className="text-sm text-gray-300 mt-2 max-w-xs">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

// Data Array for Images & Text
const expertData = [
  {
    image: "/photos/propel1.png",
    title: "Comprehensive Audit",
    subTitle: "& Analysis",
    description: "We conduct an in-depth audit of your fintech strategy to understand your current position."
  },
  {
    image: "/photos/propel2.png",
    title: "Data Driven",
    subTitle: "Strategy Blueprint",
    description: "We develop a tailored, data-driven roadmap that aligns with your business goals."
  },
  {
    image: "/photos/propel3.png",
    title: "Strategic Implementation",
    subTitle: "& Monitoring",
    description: "We put the plan into action, monitoring campaign performance and tracking KPIs."
  },
  {
    image: "/photos/propel4.png",
    title: "Continuous Testing",
    subTitle: "& Optimization",
    description: "We ensure constant improvement by testing, refining, and optimizing your campaigns."
  }
];
