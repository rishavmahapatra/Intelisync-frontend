import Image from "next/image";

export default function StayAhead() {
  return (
    <section className="bg-[#000B18] text-white py-16 px-6 sm:px-10 md:px-12">
      <div className="max-w-6xl mx-auto text-center md:text-left md:ml-20">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 leading-10">
          <span className="block font-bold font-poppins">
            Propel Your Business Forward with 
          </span>
          Our Fintech Experts To:
        </h2>
      </div>

      {/* Grid Container */}
      <div className="relative max-w-7xl mx-auto mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16 items-start">
        
        {/* Expert Items */}
        {expertData.map((item, index) => (
          <div key={index} className="relative flex flex-col items-center md:items-start text-center md:text-left w-full">
            
            {index > 0 && (
              <div className="hidden lg:block absolute top-20 -left-40 w-[240px] border-t border-dotted border-gray-400"></div>
            )}

            {/* Image Container */}
            <div className="bg-[#00C7E6] p-4 rounded-lg inline-flex items-center justify-center mt-10 sm:ml-0 md:ml-20">
              <Image src={item.image} alt={item.title} width={55} height={55} />
            </div>

            {/* Title & Description */}
            <h3 className="text-lg text-[17px] font-semibold mt-6">{item.title}</h3>
            <p className="text-sm text-gray-300 mt-4 max-w-xs mb-8">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

// Data Array for Images & Text
const expertData = [
  {
    image: "/photos/propel1.svg",
    title: "Comprehensive Audit & Analysis",
    description: "We begin by conducting an in-depth audit of your fintech strategy to understand your current position."
  },
  {
    image: "/photos/propel2.svg",
    title: "Data Driven Strategy Blueprint",
    description: "Armed with valuable insights, our team develops a tailored, data-driven roadmap that aligns with your business goals and propels you toward success."
  },
  {
    image: "/photos/propel3.svg",
    title: "Strategic Implementation & Monitoring",
    description: "We put the plan into action, executing the strategy while closely monitoring the performance of your campaigns, tracking KPIs, and ensuring regular updates."
  },
  {
    image: "/photos/propel4.svg",
    title: "Continuous Testing & Optimization",
    description: "We are committed to constant improvement. By testing, refining, and optimizing your campaigns."
  }
];
