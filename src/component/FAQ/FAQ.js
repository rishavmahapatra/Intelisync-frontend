"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Plus, Minus } from "lucide-react";

export default function FAQSection({ faqs }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div id="faq" className="relative bg-[#000B18] w-full max-w-[1440px] mx-auto">
      {/* Background Gradient Effect */}
      <div className="absolute hidden md:block w-[200px] h-[300px] blur-[100px] top-[-50px] left-0 rotate-[148.52deg] 
                      bg-[linear-gradient(256.74deg,rgba(4,158,188,0.5)_47.38%,rgba(0,55,90,0.5)_61.04%,rgba(73,0,116,0.5)_70.05%)]">
      </div>

      {/* FAQ Section */}
      <div className="text-white py-12 px-4 sm:px-6 md:px-20 lg:px-32 flex flex-col md:flex-row gap-8">
        {/* Left Title */}
        <div className="md:w-1/3">
          <h2 className="text-lg sm:text-xl md:text-2xl font-medium">FAQ’S</h2>
        </div>

        {/* FAQ List */}
        <div className="md:w-2/3 space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-600">
              <button
                className="w-full flex justify-between items-center py-4 text-left text-white font-medium text-base sm:text-lg md:text-xl leading-[26px] tracking-[-0.01em] cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
                {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
              </button>

              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: openIndex === index ? "auto" : 0, opacity: openIndex === index ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden text-gray-300 text-sm md:text-base"
              >
                <p className="pb-4">{faq.answer}</p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
