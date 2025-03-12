
import Image from "next/image";
 
export default function StayAhead() {
  return (
    <section className="bg-[#0B1320] text-white py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-left leading-10">
          <span className="block font-bold font-poppins">
          Stay Ahead in Healthcare: Keep Your 
          </span>
          Health Updated with Us:
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
              <Image src={item.image} alt={item.title} width={50} height={50} />
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
    title: "Meet Your ",
    subTitle: "Marketing Partner",
    description: "Your dedicated industry expert becomes the ultimate ally in your brand's growth journey."
  },
  {
    image: "/photos/propel2.png",
    title: "Design Your Path to ",
    subTitle: "Success",
    description: " Our team of specialists will seamlessly integrate with yours, providing a fresh perspective and executing with excellence."
  },
  {
    image: "/photos/propel3.png",
    title: "Unlock Your Expert Hours",
    subTitle:"",
    description: "Whether it’s revamping your brand, launching an email campaign, or enhancing social media presence, we’ve got it covered plus, we handle the day-to-day digital grind."
  },
  {
    image: "/photos/propel4.png",
    title: "Stay Informed with Weekly",
    subTitle: " Progress Updates",
    description: "Every week, receive a clear report showcasing progress made and hours spent. "
  }
];
 
 