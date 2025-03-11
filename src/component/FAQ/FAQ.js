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
    <div className="bg-[#0A0F1A] text-white py-16 px-6 md:px-20 lg:px-32 flex flex-col md:flex-row">
      {/* Left Title */}
      <div className="md:w-1/3">
        <h2 className="text-2xl md:text-3xl font-medium">FAQ’S</h2>
      </div>

      {/* FAQ List */}
      <div className="md:w-2/3 space-y-2">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-600">
            <button
              className="w-full flex justify-between items-center py-4 text-left text-white text-lg"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
            </button>

            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: openIndex === index ? "auto" : 0, opacity: openIndex === index ? 1 : 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden text-gray-300 text-sm"
            >
              <p className="pb-4">{faq.answer}</p>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}
