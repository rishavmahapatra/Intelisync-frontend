"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Plus, Minus } from "lucide-react";

function Blogfaq({ blogfaq }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div
  id="Blogfaq"
  className="relative bg-white w-full mx-auto flex justify-center items-center py-20"
>
  {/* FAQ Section */}
  <div className="text-black w-full max-w-5xl px-4 sm:px-6 md:px-20 lg:px-32 flex flex-col items-center gap-12">
    {/* Title */}
    <div className="text-center">
      <h2 className="text-[25px] font-[400]  sm:text-xl md:text-2xl ">Frequently Ask Questions</h2>
    </div>

    {/* FAQ List */}
    <div className="w-full space-y-4">
      {blogfaq.map((faq, index) => (
        <div key={index} className="border-b border-gray-400">
          <div className="flex justify-between items-center gap-2">
            <button
              className="w-full flex justify-between items-center py-4 text-left text-black font-medium md:text-lg cursor-pointer"
              onClick={() => toggleFAQ(index)}
              aria-expanded={openIndex === index}
              aria-controls={`faq-answer-${index}`}
            >
              {faq.question}
              {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
            </button>
          </div>

          <motion.div
            id={`faq-answer-${index}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: openIndex === index ? "auto" : 0,
              opacity: openIndex === index ? 1 : 0,
            }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden text-gray-600 text-sm md:text-base"
          >
            <div className="pb-4">{faq.answer}</div>
          </motion.div>
        </div>
      ))}
    </div>
  </div>
</div>

  );
}

export default Blogfaq;
