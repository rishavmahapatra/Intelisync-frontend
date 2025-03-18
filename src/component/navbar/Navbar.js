'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Ourservicedata, IndustryData, CompanyData } from '@/utils/Dropdown_Data';
import { GoArrowRight } from 'react-icons/go';
import { FiMenu, FiX, FiChevronDown } from 'react-icons/fi';

export default function Navbar() {
  const [hoverIndex, setHoverIndex] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState('');

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const toggleDropdown = (key) => {
    setDropdownOpen((prev) => (prev === key ? '' : key));
  };

  const renderDropdown = (data) => (
    <motion.ul
      initial={{ opacity: 0, y: -10, scale: 0.95 }}
      animate={{ opacity: 1, y: 5, scale: 1 }}
      exit={{ opacity: 0, y: -10, scale: 0.95 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className="absolute z-50 left-0 mt-2 w-60 border border-gray-700 rounded-xl shadow-lg backdrop-blur-md p-2"
      style={{ background: 'linear-gradient(135deg, #104073 0%, #03F0E2B2 100%)' }}
    >
      {data.map((item, index) => (
        <li
          key={index}
          onMouseEnter={() => setHoverIndex(index)}
          onMouseLeave={() => setHoverIndex(null)}
          className="flex items-center px-4 py-3 text-white transition duration-300 cursor-pointer"
        >
          {hoverIndex === index && <GoArrowRight className="mr-2" />}
          <Link href={item.link}>{item.title}</Link>
        </li>
      ))}
    </motion.ul>
  );

  return (
    <nav className="bg-black text-white py-4 w-full top-0 z-50 sticky">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <div className="text-2xl font-bold cursor-pointer">
            <span className="text-white">Inteli</span>
            <span className="text-teal-400">sync</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex space-x-8 lg:items-center xl:space-x-12 text-lg relative">
          <div className="relative group">
            <div onClick={() => toggleDropdown('company')} className="cursor-pointer flex items-center gap-1">
              <Link href="/company/aboutuspage">Company</Link>
              <FiChevronDown size={16} />
            </div>
            {dropdownOpen === 'company' && renderDropdown(CompanyData)}
          </div>

          <div className="relative group">
            <div onClick={() => toggleDropdown('services')} className="cursor-pointer flex items-center gap-1">
              <Link href="/services">Our Services</Link>
              <FiChevronDown size={16} />
            </div>
            {dropdownOpen === 'services' && renderDropdown(Ourservicedata)}
          </div>

          <div className="relative group">
            <div onClick={() => toggleDropdown('industry')} className="cursor-pointer flex items-center gap-1">
              <Link href="/Industry">Industry</Link>
              <FiChevronDown size={16} />
            </div>
            {dropdownOpen === 'industry' && renderDropdown(IndustryData)}
          </div>

          <Link href="/product" className="hover:text-teal-400">Our Products</Link>
          <Link href="/event" className="hover:text-teal-400">Events</Link>
          <Link href="/company/careers" className="hover:text-teal-400">Careers</Link>
          <Link href="/company/blog" className="hover:text-teal-400">Blog</Link>
          <Link href="/contact">
            <button className="hidden lg:block border border-teal-400 px-4 py-2 rounded-md hover:bg-teal-400 hover:text-black transition">
              Contact
            </button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={toggleMenu} className="lg:hidden">
          {menuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="lg:hidden bg-black text-white py-6 px-4 space-y-4">
          <div onClick={() => toggleDropdown('company')} className="cursor-pointer flex items-center gap-1">
            <Link href="/company/aboutuspage">Company</Link>
            <FiChevronDown size={16} />
          </div>
          {dropdownOpen === 'company' && renderDropdown(CompanyData)}

          <div onClick={() => toggleDropdown('services')} className="cursor-pointer flex items-center gap-1">
            <Link href="/services">Our Services</Link>
            <FiChevronDown size={16} />
          </div>
          {dropdownOpen === 'services' && renderDropdown(Ourservicedata)}

          <div onClick={() => toggleDropdown('industry')} className="cursor-pointer flex items-center gap-1">
            <Link href="/Industry">Industry</Link>
            <FiChevronDown size={16} />
          </div>
          {dropdownOpen === 'industry' && renderDropdown(IndustryData)}

          <Link href="/product" className="block hover:text-teal-400">Our Products</Link>
          <Link href="/event" className="block hover:text-teal-400">Events</Link>
          <Link href="/company/careers" className="block hover:text-teal-400">Careers</Link>
          <Link href="/company/blog" className="block hover:text-teal-400">Blog</Link>
          <Link href="/contact" className="block hover:text-teal-400">Contact</Link>
        </div>
      )}
    </nav>
  );
}
