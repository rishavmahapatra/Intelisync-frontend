'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black text-white py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <span className="text-white">Inteli</span>
          <span className="text-teal-400">sync</span>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-12 text-lg relative">
          <Link href="/company" className="hover:text-teal-400">Company</Link>

          {/* Our Services Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white transition duration-300 hover:text-teal-400 hover:scale-105 focus:outline-none flex items-center space-x-2"
            >
              <span className='cursor-pointer'>Our Services</span>
            </button>
            <div className="relative z-100">
            {isOpen && (
              <motion.ul
                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                animate={{ opacity: 1, y: 5, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="absolute left-0 mt-2 w-70 border border-gray-700 rounded-xl shadow-lg overflow-hidden backdrop-blur-md p-2"
                style={{
                  background: 'linear-gradient(135deg, #104073 0%, #03F0E2B2 100%)'
                }}
              >
                {[
                  { title: 'Artificial Intelligence (AI)', link: '/services/artificial-intelligence' },
                  { title: 'Growth Marketing', link: '/services/growth-marketing' },
                  { title: 'Blockchain Services', link: '/services/blockchain' },
                  { title: 'Public Relations', link: '/services/public-relations' },
                  { title: 'Strategic Advisory', link: '/services/strategic-advisory' },
                  { title: 'Community Management', link: '/services/community-management' },
                  { title: 'Web App Development', link: '/services/web-development' },
                  { title: 'Influencer Marketing', link: '/services/influencer-marketing' },
                  { title: 'Branding', link: '/services/branding' }
                ].map((service, index) => (
                  <li key={index}>
                    <Link
                      href={service.link}
                      className="block px-5 py-3 text-white transition duration-300 hover:bg-teal-400 hover:text-black"
                    >
                      {service.title}
                    </Link>
                    <div className="border-b border-gray-500 mx-5"></div>
                  </li>
                ))}
              </motion.ul>
            )}
          </div>
          </div>

          <Link href="/product" className="hover:text-teal-400">Our products</Link>
          <Link href="/industry" className="hover:text-teal-400">Industry</Link>
          <Link href="/event" className="hover:text-teal-400">Events</Link>
          <Link href="/careers" className="hover:text-teal-400">Careers</Link>
          <Link href="/blog" className="hover:text-teal-400">Blog</Link>
        </div>

        {/* Contact Button */}
        <Link href="/contact">
          <button className="border border-teal-400 text-white px-4 py-2 rounded-md hover:bg-teal-400 hover:text-black transition">
            Contact
          </button>
        </Link>
      </div>
    </nav>
  );
}
