"use client"; // If using Next.js App Router

import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    { question: "What are your Marketing Specialities?", answer: "We specialize in digital marketing, SEO, social media, and branding strategies." },
    { question: "How can my business benefit from partnering with your Agency?", answer: "Our tailored marketing approach helps you increase reach, engagement, and conversions." },
    { question: "How does your approach differ from traditional marketing agencies?", answer: "We leverage data-driven insights and innovative techniques to maximize ROI." },
    { question: "Can you share success stories from previous clients?", answer: "Yes! We have helped multiple brands achieve significant growth and revenue increases." },
    { question: "What industries do you specialize in?", answer: "We cater to e-commerce, SaaS, real estate, healthcare, and more." },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-black text-white py-16 px-8 flex justify-center">
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 items-start gap-8">
        {/* Left Side - FAQ Title */}
        <h2 className="text-4xl font-bold">FAQ’S</h2>

        {/* Right Side - FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-600">
              <button
                className="w-full flex justify-between items-center py-4 text-left"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-lg">{faq.question}</span>
                {openIndex === index ? (
                  <FaMinus className="text-gray-400" />
                ) : (
                  <FaPlus className="text-gray-400" />
                )}
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-gray-400 pb-4">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
