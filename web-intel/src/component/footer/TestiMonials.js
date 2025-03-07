'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: '— Abd-elrahman Salem, AVED - Jeddah, Saudi Arabia',
    feedback: 'Great service!',
    text: `"Intelisync has been instrumental in expanding our digital presence and engagement. Their expertise in Web3 marketing and blockchain growth strategies has significantly boosted our reach across multiple platforms. The team’s dedication, strategic approach, and deep industry knowledge have made a real impact. It’s been a pleasure working with Intelisync, and I highly recommend them!"`,
  },
  {
    id: 2,
    name: '— Jane Smith',
    feedback: 'Loved it!',
    text: `"Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia quis sapiente amet expedita debitis, voluptatum ipsa eaque libero!"`,
  },
  {
    id: 3,
    name: '— David Johnson',
    feedback: 'Highly recommend!',
    text: `"A fantastic team with incredible insights. Our marketing campaigns have never been better!"`,
  },
];

export default function TestiMonial() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="bg-[#0a0a0a] text-white flex flex-col items-center py-12 px-4 md:px-6">
      {/* Header */}
      <button className="text-lg font-semibold px-6 py-2  text-white font-medium rounded-full bg-gradient-to-r from-[#00B6F3] to-[#00EDDF] shadow-[0px_0px_20px_#00EDDF] hover:scale-105 transition-all opacity-80 transition-all">
        What Our Clients Say
      </button>

      {/* Testimonial Box */}
      <div className="relative bg-gray-900 p-6 sm:p-8 md:p-10 rounded-lg w-full max-w-xl md:max-w-7xl shadow-lg border border-none mt-6">
        {/* Left Arrow */}
        <button
          onClick={prevTestimonial}
          className="absolute left-2 sm:left-6 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
        >
          <ChevronLeft size={36} />
        </button>

        {/* Testimonial Content */}
        <p className="text-center text-gray-300 italic text-base sm:text-lg">
          {testimonials[currentIndex].text}
        </p>
        <p className="text-center text-gray-400 mt-4 text-sm sm:text-base">
          {testimonials[currentIndex].feedback}
        </p>
        <p className="text-center text-white mt-4 text-base sm:text-lg font-semibold">
          {testimonials[currentIndex].name}
        </p>

        {/* Right Arrow */}
        <button
          onClick={nextTestimonial}
          className="absolute right-2 sm:right-6 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
        >
          <ChevronRight size={36} />
        </button>

        {/* Dots Indicator */}
        <div className="flex space-x-2 mt-5 justify-center">
          {testimonials.map((_, index) => (
            <span
              key={index}
              className={`h-3 w-3 rounded-full transition-all ${
                index === currentIndex ? 'bg-cyan-400 scale-125' : 'bg-gray-500'
              }`}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
}
