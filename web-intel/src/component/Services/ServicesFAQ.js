"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "How can Intelsync’s services help my business grow?",
    answer:
      "We leverage advanced blockchain and AI-driven technologies to streamline operations, enhance security, and unlock new revenue opportunities. Our expertise ensures seamless scalability and efficiency.",
  },
  {
    question: "What marketing strategies do you offer?",
    answer:
      "We provide end-to-end strategies, including branding, growth hacking, community building, and data-driven campaigns for Web3 and blockchain projects.",
  },
  {
    question: "Does Intelsync offer end-to-end Web3 development and marketing?",
    answer:
      "Absolutely! Intelisync offers end-to-end Web3 development and marketing. From smart contract development and dApp deployment to ecosystem strategy and growth marketing, we provide comprehensive solutions to scale your Web3 business.",
  },
  {
    question: "How do I determine the right budget for my marketing needs?",
    answer:
      "Intelisync provides the right budget strategy as we offer end-to-end Web3 development and marketing services, ensuring a tailored approach that fits your business needs. We help craft a budget strategy that maximizes ROI while aligning with your long-term growth objectives.",
  },
  {
    question: "How do I get started with Intelsync?",
    answer:
      "Connect with us to discuss your business needs. Our team will assess your goals and develop a customized strategy to help you leverage the power of blockchain and Web3.",
  },
];

export default function ServicesFAQ() {
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
