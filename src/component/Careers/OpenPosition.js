"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { positions } from "@/utils/Careers_Data";

export default function OpenPositions() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleAccordion = (index) =>
        setOpenIndex(openIndex === index ? null : index);

    return (
        <section className="bg-white py-3 px-4 flex flex-col items-center">
            {/* Header */}
            <h2 className="text-3xl font-semibold text-center mb-4">Open Positions</h2>
            <p className="text-gray-600 mb-8 text-center w-[40%] mx-auto">
                Apply to one of our open positions below, or send your resume and cover
                letter to{" "}
                <a href="mailto:hr@infinityinc.ai" className="text-black font-bold">
                    hr@infinityinc.ai
                </a>
            </p>

            {/* Job Listings */}
            <div className="w-full max-w-3xl">
                {positions.map((position, index) => (
                    <div key={position.id} className="border-b border-gray-200 mb-2">
                        {/* Accordion Header */}
                        <button
                            onClick={() => toggleAccordion(index)}
                            className="w-full flex justify-between items-center py-4 px-6 bg-[#C4EEF9] hover:bg-[#A8E1F5] transition-colors"
                        >
                            <span className="text-lg text-gray-800 text-[17px] font-semibold">{position.title}</span>
                            <div className="w-7 h-7 rounded-full bg-[#00ADC6] flex items-center justify-center">
                                {openIndex === index ? (
                                    <Minus className="text-white" size={18} />
                                ) : (
                                    <Plus className="text-white" size={18} />
                                )}
                            </div>
                        </button>

                        {/* Accordion Content */}
                        {openIndex === index && (
                            <div className="p-6 bg-white text-gray-700 space-y-6">
                                <div>
                                    <h3 className="text-lg font-semibold mb-2">Position Overview:</h3>
                                    <p>{position.overview}</p>
                                </div>

                                <div>
                                    <h3 className="text-lg font-semibold mb-2">Key Responsibilities:</h3>
                                    <ul className="list-disc pl-5 space-y-2">
                                        {position.responsibilities.map((item, idx) => (
                                            <li key={idx}>{item}</li>
                                        ))}
                                    </ul>
                                </div>

                                <div>
                                    <h3 className="text-lg font-semibold mb-2">Skills Required:</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {position.skills.map((skill, idx) => (
                                            <span
                                                key={idx}
                                                className="px-3 py-1 bg-[#e4f4f8] text-[#00ADB5] rounded-full text-sm font-medium"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <p>
                                        Send your resume to{" "}
                                        <a
                                            href={`mailto:${position.email}`}
                                            className="text-[#00ADB5] font-medium"
                                        >
                                            {position.email}
                                        </a>
                                    </p>
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}
