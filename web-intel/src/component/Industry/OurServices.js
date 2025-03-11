'use client';

import { IndustryOurservices } from "@/utils/Cards_Data";

export default function OurServices() {
    return (
        <section className="py-16 bg-[#020d19] text-white">
            <div className="max-w-5xl mx-auto text-center">
                <h2 className="text-xl font-semibold bg-gradient-to-r from-cyan-400 to-blue-500 border-b border-cyan-600 p-6 text-white inline-block px-6 py-2 rounded-full">
                    Our Services
                </h2>
                <p className="mt-4 w-[70%] mx-auto text-gray-300 text-[17px] leading-[25px] tracking-[-0.01%] text-center font-poppins font-normal">
                    From automation to decentralization, our solutions redefine industry standards.
                    Discover how Intelisync empowers businesses across industries with scalable,
                    future-proof technology, driving efficiency, security, and growth.
                </p>

            </div>

            <div className="w-11/12 max-w-6xl mx-auto mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {IndustryOurservices.map((service, index) => (
                    <div
                        key={index}
                        className="bg-[#08182F] border-b border-cyan-400 rounded-lg p-6 text-left"
                    >
                        <h3 className="text-lg font-semibold text-white-400 text-center">{service.title}</h3>
                        <p className="mt-2 text-gray-300 text-sm">{service.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
