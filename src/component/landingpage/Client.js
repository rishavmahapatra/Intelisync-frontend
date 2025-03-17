'use client';
 
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
 
const testimonials = [
  {
    id: 1,
    name: '— Abd-elrahman Salem, AVED - Jeddah, Saudi Arabia',
    text: `"Intelisync has been instrumental in expanding our digital presence and engagement. Their expertise in Web3 marketing and blockchain growth strategies has significantly boosted our reach across multiple platforms. The team’s dedication, strategic approach, and deep industry knowledge have made a real impact. It’s been a pleasure working with Intelisync, and I highly recommend them!"`,
  },
  {
    id: 2,
    name: '— Frederic Magnus, Ntangu - United States',
    text: `"Intelisync has been a game-changer for us at Ntangu. Their deep understanding of our industry and passion for Web3 have helped us gain invaluable exposure. Through strategic media placements, insightful articles, and high-profile speaking opportunities, they have significantly amplified our brand presence. The Intelisync team is always ahead of the curve, ensuring we stay visible and relevant in a competitive space. Thanks to their efforts, we've experienced a notable uptick in new business. Truly a top-tier partner!"`,
  },
  {
    id: 3,
    name: '— Amir Khan, JFS - United Arab Emirates',
    text: `"If you're launching a cryptocurrency brand or struggling to gain traction with your token, Intelisync is the partner you need. Their expertise in Web3 marketing, combined with an unmatched network of influencers, ensures maximum visibility and engagement. They truly lead the industry in driving blockchain and crypto projects to success. Highly recommended!"`,
  },
  {
    id: 4,
    name: '— Karn Kashyp, JFS - United Arab Emirates',
    text: `"Intelisync is a team of true professionals who go above and beyond to deliver exceptional results. Their strategic approach, dedication, and expertise make them an invaluable partner for any Web3 venture. Highly recommended!"`,
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
    <div className="bg-[#000B18] text-white flex flex-col items-center py-12 px-4 md:px-6">
      {/* Header */}
      <div className="relative  py-6 text-white font-medium text-center">

{/* Gradient Text */}
<h2 className="text-[30px] leading-[26px] tracking-tightest font-medium font-[Poppins] 
bg-gradient-to-r from-[#07CDFF] to-[#06FFF0] bg-clip-text text-transparent">
  What our Client Says

</h2>

{/* Underline (centered & dynamic width) */}
<div className="mt-3 mx-auto h-0.5 bg-gray-200 w-[calc(100%-2rem)] max-w-[18rem]"></div>

</div>
 
      {/* Testimonial Box */}
      <div className="relative bg-[rgba(217,217,217,0.05)] p-6 sm:p-8 md:p-10 rounded-lg w-full h-[400px] max-w-xl md:max-w-7xl shadow-lg border border-none mt-6">
        {/* Left Arrow */}
        <button
          onClick={prevTestimonial}
          className="absolute left-2 sm:left-6 top-[50%] transform -translate-y-1/2 text-gray-400 hover:text-white"
        >
          <ChevronLeft size={36} />
        </button>
 
        {/* Testimonial Content */}
        <p className="text-center text-gray-300 text-base text-[18px] max-w-[980px] mx-auto">
           {testimonials[currentIndex].text}
          </p>

        <p className="text-center text-white mt-20 text-base  text-[18px] font-semibold">
          {testimonials[currentIndex].name}
        </p>
 
        {/* Right Arrow */}
        <button
          onClick={nextTestimonial}
          className="absolute right-2 sm:right-6 top-[50%] transform -translate-y-1/2 text-gray-400 hover:text-white"
        >
          <ChevronRight size={36} />
        </button>
 
        {/* Dots Indicator */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
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
 