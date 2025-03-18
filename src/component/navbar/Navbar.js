
'use client';
import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Ourservicedata, IndustryData , CompanyData} from '@/utils/Dropdown_Data';
import { GoArrowRight } from "react-icons/go";

export default function Navbar() {
  const [hoverIndex, setHoverIndex] = useState(null);

  return (
    <nav className="bg-black text-white py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6">
        {/* Logo */}
        <Link href="/">
          <div className="text-2xl font-bold">
            <span className="text-white">Inteli</span>
            <span className="text-teal-400">sync</span>
          </div>
        </Link>
 
        {/* Navigation Links */}
        <div className="hidden md:flex space-x-12 text-lg relative">

          {/* <Link href="/aboutuspage" className="hover:text-teal-400">Company</Link> */}
            
             {/* Company Dropdown */}
          <div className="relative group">
            <Link href="/company/aboutuspage" className="cursor-pointer">Company</Link>
            <div className="relative z-100">
              <motion.ul
                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                animate={{ opacity: 1, y: 5, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="absolute hidden group-hover:block left-0 -top-1 w-70 border border-gray-700 rounded-xl shadow-lg overflow-hidden backdrop-blur-md p-2"
                style={{ background: 'linear-gradient(135deg, #104073 0%, #03F0E2B2 100%)' }}
              >
                {CompanyData.map((company, index) => (
                  <li
                    key={index}
                    onMouseEnter={() => setHoverIndex(index)}
                    onMouseLeave={() => setHoverIndex(null)}
                    className="flex items-center px-1 py-3 text-white transition duration-300 "
                  >
                    {hoverIndex === index && <GoArrowRight className="text-white-teal-400 mr-2" />}
                    <Link href={company.link} className="block">
                      {company.title}
                    </Link>
                  </li>
                ))}
              </motion.ul>
            </div>
          </div>

          {/* Our Services Dropdown */}
          <div className="relative group">
            <Link href="/services" className="cursor-pointer">Our Services</Link>
            <div className="relative z-100">
              <motion.ul
                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                animate={{ opacity: 1, y: 5, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="absolute hidden group-hover:block left-0 -top-1 w-70 border border-gray-700 rounded-xl shadow-lg overflow-hidden backdrop-blur-md p-2"
                style={{ background: 'linear-gradient(135deg, #104073 0%, #03F0E2B2 100%)' }}
              >
                {Ourservicedata.map((service, index) => (
                  <li
                    key={index}
                    onMouseEnter={() => setHoverIndex(index)}
                    onMouseLeave={() => setHoverIndex(null)}
                    className="flex items-center px-1 py-3 text-white transition duration-300 "
                  >
                    {hoverIndex === index && <GoArrowRight className="text-white-teal-400 mr-2" />}
                    <Link href={service.link} className="block">
                      {service.title}
                    </Link>
                  </li>
                ))}
              </motion.ul>
            </div>
          </div>

          <Link href="/product" className="hover:text-teal-400">Our products</Link>

          {/* Industry Dropdown */}
          <div className="relative group">
            <Link href="/Industry"><span className='cursor-pointer'>Industry</span></Link>
            <div className="relative z-100">
              <motion.ul
                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                animate={{ opacity: 1, y: 5, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="absolute hidden group-hover:block left-0 -top-1 w-70 border border-gray-700 rounded-xl shadow-lg overflow-hidden backdrop-blur-md p-2"
                style={{
                  background: 'linear-gradient(135deg, #104073 0%, #03F0E2B2 100%)'
                }}
              >
                {IndustryData.map((industry, index) => (
                  <li
                    key={index}
                    onMouseEnter={() => setHoverIndex(index)}
                    onMouseLeave={() => setHoverIndex(null)}
                    className="flex items-center px-5 py-3 text-white transition duration-300 "
                  >
                    {hoverIndex === index && <GoArrowRight className="text-white-teal-400 mr-2" />}
                    <Link href={industry.link} className="block">
                      {industry.title}
                    </Link>
                  </li>
                ))}
              </motion.ul>
            </div>
          </div>
 
          
         
       
         
          <Link href="/event" className="hover:text-teal-400">Events</Link>
          <Link href="company/careers" className="hover:text-teal-400">Careers</Link>
          <Link href="company/blog" className="hover:text-teal-400">Blog</Link>
        </div>
 
        {/* Contact Button */}
        <Link href="/contact">
          <button className="cursor-pointer border border-teal-400 text-white px-4 py-2 rounded-md hover:bg-teal-400 hover:text-black transition">
            Contact
          </button>
        </Link>
      </div>
    </nav>
  );
}

