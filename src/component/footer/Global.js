"use client";

import Slider from "react-slick";
import Image from "next/image";

const locations = [
  { image: "/photos/dubai.png", name: "Dubai-UAE" },
  { image: "/photos/singapore.png", name: "Singapore" },
  { image: "/photos/boston.png", name: "Boston" },
  { image: "/photos/uk.png", name: "London-United Kingdom" },
  { image: "/photos/riyadh.png", name: "Riyadh" },
  { image: "/photos/india.png", name: "India-Pune" },
];


const Global = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="bg-gray-900 p-6 rounded-xl">
      {/* Button at the top */}
      <div className="flex justify-center mb-6">
        <button className="px-6 py-2 bg-gradient-to-r from-blue-500 to-teal-400 text-white font-semibold rounded-full shadow-md hover:scale-105 transition-transform">
          Our Global Presence
        </button>
      </div>

      <Slider {...settings}>
        {locations.map((location, index) => (
          <div key={index} className="px-2">
            <div className="bg-gray-800 rounded-2xl overflow-hidden text-center shadow-lg">
              <Image
                src={location.image}
                alt={location.name}
                width={300}
                height={400}
                className="w-full h-80 object-cover"
              />
              <h3 className="text-white py-4 text-lg font-semibold">
                {location.name}
              </h3>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Global;
