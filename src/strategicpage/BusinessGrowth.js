'use client';
import React from 'react'

function BusinessGrowth() {
    const solutions = [
        {
            title: "Strategic Planning & Execution",
            description:
                "From vision to execution, we help you develop and implement actionable strategies that achieve measurable results. Our approach ensures that your business strategy is effective and aligned with your long-term goals.",
        },
        {
            title: "Growth & Performance Enhancement",
            description:
                "Our strategic advisory services focus on driving sustainable growth and improving overall business performance. We work with you to implement strategies that boost productivity, profitability, and market share.",
        },
        {
            title: "Market Research & Competitive Analysis",
            description:
                "Through comprehensive market research, we provide valuable insights and identify industry trends, helping your business stay ahead of competitors. Our analysis enables informed decision-making for future growth.",
        },
        {
            title: " Tailored Strategy Development",
            description:
                "We create customized business strategies that align with your specific goals, ensuring targeted growth. Our expert advisors work with you to craft solutions that maximize long-term success.",
        },
        {
            title: "Operational Efficiency Optimization",
            description:
                "Prepare for the unexpected with our proactive crisis management services. We develop and execute crisis response strategies that protect your brand’s reputation, minimize negative impact, and rebuild trust with key stakeholders",
        },
        {
            title: "Risk Management & Mitigation",
            description:
                "Position your brand as an industry leader with our thought leadership services. We craft compelling narratives, develop executive visibility plans, and publication opportunities to enhance your brand’s authority and influence.",
        },
       
    
    ];
  return (
    <div>
        <div className="bg-[#020B17] text-white py-16 px-6 md:px-20 lg:px-32">
            <div className="text-center mb-10">
                <h1 className="text-3xl md:text-5xl font-bold leading-tight" style={{ fontSize: "30px", color: "#06FFFB" }}>
                Strategic Advisory Services for Smart Business Growth
                </h1>
                <p className="font-poppins font-normal text-[13px] leading-[20px] tracking-[-0.01%] text-gray-300 mt-4 max-w-3xl mx-auto">
                Our strategic advisory services are designed to empower your business with data-driven insights and expert guidance. We help you navigate complex challenges, make informed decisions, and achieve sustainable growth. Here’s how we can support your journey:
                </p>
 
            </div>
 
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {solutions.map((solution, index) => (
                    <div
                        key={index}
                        className="p-6 border border-cyan-400 rounded-lg bg-[#081828] shadow-lg"
                    >
                        <h2 className="font-poppins font-semibold text-[19px] leading-[20px] tracking-[-0.01%]">
                            {solution.title}
                        </h2>
 
                        <p className="font-poppins font-normal text-[13px] leading-[20px] tracking-[-0.01%] text-gray-300 mt-2">
                            {solution.description}
                        </p>
 
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default BusinessGrowth