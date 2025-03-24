import React from 'react';

function FutureReady() {
  return (
    <div>
      <section className="bg-[#000B18] text-white py-16 px-6 md:px-20 lg:px-32 w-full max-w-full">
        <div className="max-w-4xl ">
          {/* Heading */}
          <h2 className="text-[24px]  font[500] sm:text-[26px] md:text-[30px] font-medium leading-[32px] sm:leading-[38px] md:leading-[45px] tracking-tight" style={{ color: "rgba(6, 255, 251, 1)" }}>
            Expert Web App Development Services to Accelerate Your Business Growth
          </h2>

          {/* Description */}
          <p className="mt-4 text-gray-300 leading-relaxed text-[14px] font[400] sm:text-[16px] md:text-[17px]">
            We build high-performance, user-friendly web applications designed to enhance engagement, streamline operations, and drive long-term success. Our focus is on creating scalable solutions that adapt to your evolving business needs while providing seamless user experiences.
          </p>

          <p className="mt-4 text-gray-300 leading-relaxed text-[14px] font[400] sm:text-[16px] md:text-[17px]">
            As a trusted web app development company, we offer a full range of web application development services:
          </p>

          {/* Bullet Points */}
          <ul className="mt-6 space-y-3 font[400] text-[14px] sm:text-[16px] md:text-[17px]">
            <li className="flex items-start gap-2"><span className="text-white">•</span> Custom Web App Development</li>
            <li className="flex items-start gap-2"><span className="text-white">•</span> E-commerce Web Solutions</li>
            <li className="flex items-start gap-2"><span className="text-white">•</span> Third-Party API Integration</li>
            <li className="flex items-start gap-2"><span className="text-white">•</span> Mobile-Optimized Web Applications</li>
            <li className="flex items-start gap-2"><span className="text-white">•</span> Enterprise Web-Based Application Development</li>
            <li className="flex items-start gap-2"><span className="text-white">•</span> Cloud-Based Web App Development</li>
            <li className="flex items-start gap-2"><span className="text-white">•</span> UX/UI Design for Enhanced User Experience</li>
            <li className="flex items-start gap-2"><span className="text-white">•</span> CMS Development & Integration</li>
            <li className="flex items-start gap-2"><span className="text-white">•</span> Product Management & Digital Strategy</li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default FutureReady;
