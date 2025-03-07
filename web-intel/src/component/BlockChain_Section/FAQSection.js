"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  { question: "How can blockchain improve my business?", answer: "Blockchain enhances transparency, security, and efficiency. It creates tamper-proof records, simplifies processes, and reduces costs by eliminating middlemen. Whether it’s managing supply chains or securing transactions, blockchain can give your business a competitive edge in today’s digital world." },
  { question: "What types of blockchain services do you offer?", answer: "We offer a full range of blockchain services, including smart contract development, private and public blockchain solutions, tokenization, decentralized apps (dApps), and blockchain consulting. Whatever your needs, we provide tailored solutions to help you unlock blockchain’s potential." },
  { question: "How secure are your blockchain solutions?", answer: "Security is at the core of our blockchain solutions. We follow best practices, including encryption, multi-signature authentication, and rigorous testing, to ensure data integrity. Our goal is to provide blockchain services that are as secure as they are innovative." },
  { question: "Can blockchain be integrated into my current systems?", answer: "Yes, blockchain can be seamlessly integrated into your existing infrastructure. We analyze your current systems and develop solutions that complement your operations without causing disruptions. This ensures a smooth transition and maximizes the benefits for your business." },
  { question: "How long does it take to implement blockchain solutions?", answer: "Implementation timelines vary based on complexity. Simple blockchain projects can be completed in weeks, while more advanced solutions may take several months. We’ll work with you to create a customized plan and timeline that meets your business needs efficiently." },
];

export default function FAQSection() {
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
