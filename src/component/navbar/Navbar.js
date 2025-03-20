'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { color, motion } from 'framer-motion';
import { Ourservicedata, IndustryData, CompanyData } from '@/utils/Dropdown_Data';
import { GoArrowRight } from "react-icons/go";
import Image from "next/image";
import { useRouter } from 'next/navigation';

export default function Navbar() {
  const [show, handleShow] = useState(false);

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else handleShow(false);
  }

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);

    return () => {
      window.removeEventListener('scroll', transitionNavBar)
    }
  }, [])


  const [hoverIndex, setHoverIndex] = useState(null);
  const router = useRouter();

  return (
    <nav className={` text-white py-4 fixed w-full z-50 ${show && "nav_blur"}`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6">
        {/* Logo */}
        <Link href="/">
          <div className="w-[141px] h-[33px] relative">
            <Image
              src="/photos/logo.png" // Replace with your actual image path
              alt="Intelisync Logo"
              layout="intrinsic"
              width={141}
              height={33}
              priority
            />
          </div>
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-12 text-lg relative">

          {/* <Link href="/aboutuspage" className="hover:text-teal-400">Company</Link> */}

          {/* Company Dropdown */}
          <div className="relative group">
            <button className="hover:text-teal-400 cursor-pointer">Company</button>
            <div className="relative z-50">
              <motion.ul
                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                animate={{ opacity: 1, y: 5, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="absolute hidden group-hover:block left-0 -top-1 w-70 border  border-gray-700 rounded-xl shadow-lg overflow-hidden backdrop-blur-md p-2"
                style={{ background: 'linear-gradient(135deg, rgba(16, 64, 115, 0.95) 0%, rgba(3, 240, 226, 0.95) 100%)' }}
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
            <Link href="/services" className="hover:text-teal-400 cursor-pointer">Our Services</Link>
            <div className="relative z-100">
              <motion.ul
                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                animate={{ opacity: 1, y: 5, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="absolute hidden group-hover:block left-0 -top-1 w-70 border border-gray-700 rounded-xl shadow-lg overflow-hidden backdrop-blur-md p-2"
                style={{ background: 'linear-gradient(135deg, rgba(16, 64, 115, 0.95) 0%, rgba(3, 240, 226, 0.95) 100%)' }}
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
            <Link href="/Industry"><span className=' hover:text-teal-400 cursor-pointer'>Industry</span></Link>
            <div className="relative z-100">
              <motion.ul
                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                animate={{ opacity: 1, y: 5, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="absolute hidden group-hover:block left-0 -top-1 w-70 border border-gray-700 rounded-xl shadow-lg overflow-hidden backdrop-blur-md p-2"
                style={{
                  background: 'linear-gradient(135deg, rgba(16, 64, 115, 0.95) 0%, rgba(3, 240, 226, 0.95) 100%)'
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
          <button className="hover:text-teal-400 cursor-pointer" onClick={() => router.push('/company/careers')}>Careers</button>
          <button className="hover:text-teal-400 cursor-pointer" onClick={() => router.push('/company/blog')}>Blog</button>
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