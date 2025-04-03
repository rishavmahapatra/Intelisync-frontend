"use client";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaAngleRight } from "react-icons/fa6";


// Importing images from the same path
const globals = [
  { id: 1, name: "Dubai - UAE", image: "/photos/global1.webp", text: 'Web3 Marketing in Dubai', link: "/global-presence/dubai" },
  { id: 2, name: "Singapore", image: "/photos/global2.webp", text: 'Web3 Marketing in Singapore', link: "/global-presence/singapore" },
  { id: 3, name: "Boston", image: "/photos/global3.webp", text: 'Web3 Marketing in Boston', link: '/global-presence/boston' },
  { id: 4, name: "London - United Kingdom", image: "/photos/global5.webp", text: 'Web3 Marketing in United Kingdom', link: '/global-presence/uk' },
  { id: 5, name: "Riyadh", image: "/photos/global4.webp", text: 'Web3 Marketing in Riyadh', link: "/global-presence/riyadh" },
  { id: 6, name: "India-Pune", image: "/photos/shanivarwada.png", text: 'Web3 Marketing in India', link: '/global-presence/india' },
];


function GlobalCard({ location }) {

  return (
    <div className="p-4 shadow-lg flex flex-col items-center pb-10">
      <Link href={location.link}>
        <Image
          src={location.image}
          alt={location.text}
          width={300} // Default size
          height={400}
          className="rounded-lg object-cover  max-w-[250px] sm:max-w-[200px]"
        />
      </Link>
      <p className="text-white text-center mt-5 font-normal">{location.name}</p>
    </div>
  );
}

function GlobalData() {
  const scrollRef = useRef(null);
  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += 300; // Adjust scrolling distance as needed
    }
  };
  return (
    <div id="global" className="relative bg-[#000B18]">
      <div className="min-h-screen flex flex-col items-center py-12 pb-20">
        {/* Glowing Button */}
        <div className="relative px-5 py-6 text-white font-medium text-center">
          <div className="inline-block bg-gradient-to-r from-[#07CDFF] to-[#06FFF0] opacity-100 bg-clip-text text-transparent">
            <h2 className="text-[24px] md:text-[30px] leading-[26px] tracking-tight font-semibold font-[Poppins] border-b border-white pb-2">
              Our Global Presence
            </h2>
          </div>
        </div>

        {/* Mobile Scrollable Wrapper */}
        <div className="sm:hidden relative w-full overflow-x-auto scrollbar-hide flex bg-gray-900">
          {/* Scrollable Image List */}
          <div ref={scrollRef} className="flex w-full gap-x-2 overflow-x-auto scroll-smooth scrollbar-hide">
            {globals.map((location) => (
              <div key={location.id} className="min-w-[80%]">
                <GlobalCard location={location} />
              </div>
            ))}
          </div>

          {/* Right Scroll Button (only on mobile) */}
          <button
            className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white bg-gray-700 p-2 rounded-full z-10"
            onClick={scrollRight}
          >
            <FaAngleRight />
          </button>
        </div>


        {/* Desktop Grid Layout */}
        <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 px-4 bg-gray-900 rounded-xl">
          {globals.map((location) => (
            <GlobalCard key={location.id} location={location} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default GlobalData;
