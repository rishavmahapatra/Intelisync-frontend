import Image from "next/image";

export default function StayAhead() {
  return (
    <section className="bg-[#000B18] text-white py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto text-center md:text-left md:ml-20">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 leading-10">
          <span className="block font-bold font-poppins">
            Stay Ahead in Healthcare: Keep Your
          </span>
          Health Updated with Us:
        </h2>
      </div>

      {/* Grid Container */}
      <div className="relative max-w-7xl mx-auto mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16 items-start">
        
        {/* Expert Items */}
        {expertData.map((item, index) => (
          <div key={index} className="relative flex flex-col items-center text-center md:text-left w-full">
            
            {/* Dotted Line (Only for Desktop, Between Items) */}
            {index > 0 && (
              <div className="hidden lg:block absolute top-20 -left-25 w-[240px] border-t border-dotted border-gray-400"></div>
            )}

            {/* Image Container */}
            <div className="bg-[#00C7E6] p-4 rounded-lg inline-flex items-center justify-center mt-10 sm:ml-0 md:ml-20">
              <Image src={item.image} alt='HealthCare Marketing Agency' width={55} height={55} />
            </div>

            {/* Title & Description */}
            <h3 className="text-lg text-[17px] font-semibold mt-6 sm:ml-0 md:ml-16">
              {item.title}
            </h3>
            <p className="text-sm text-gray-300 mt-4 max-w-xs sm:ml-0 md:ml-16">
              {item.description}
            </p>
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
    title: "Meet Your Marketing Partner",
    description: "Your dedicated industry expert becomes the ultimate ally in your brand's growth journey."
  },
  {
    image: "/photos/propel2.svg",
    title: "Design Your Path to Success",
    description: "Our team of specialists will seamlessly integrate with yours, providing a fresh perspective and executing with excellence."
  },
  {
    image: "/photos/propel3.svg",
    title: "Unlock Your Expert Hours",
    description: "Whether it’s revamping your brand, launching an email campaign, or enhancing social media presence, we’ve got it covered plus, we handle the day-to-day digital grind."
  },
  {
    image: "/photos/propel4.svg",
    title: "Stay Informed with Weekly Progress Updates",
    description: "Every week, receive a clear report showcasing progress made and hours spent."
  }
];
