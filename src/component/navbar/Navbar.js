'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { GoArrowRight } from 'react-icons/go';
import { FiMenu, FiX, FiChevronDown } from 'react-icons/fi';
import { Ourservicedata, IndustryData, CompanyData, OurProductsData } from '@/utils/Dropdown_Data';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState('');
  const [hoverIndex, setHoverIndex] = useState(null);
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


  const toggleMenu = () => {
    setMenuOpen((prev) => {
      if (prev) setDropdownOpen('');
      return !prev;
    });
  };

  const toggleDropdown = (key) => {
    setDropdownOpen((prev) => (prev === key ? '' : key));
  };

  const renderDropdown = (data) => (
    <motion.ul
      initial={{ opacity: 0, y: -10, scale: 0.95 }}
      animate={{ opacity: 1, y: 5, scale: 1 }}
      exit={{ opacity: 0, y: -10, scale: 0.95 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className="absolute left-0 md:mt-2 w-70 border border-gray-700 rounded-xl shadow-lg backdrop-blur-md"
      style={{ background: 'linear-gradient(135deg, #104073 0%, #03F0E2B2 100%)' }}
    >
      {data.map((item, index) => (
        <li
          key={index}
          onMouseEnter={() => setHoverIndex(index)}
          onMouseLeave={() => setHoverIndex(null)}
          className="flex items-center px-4 py-2 md:py-3 text-white transition duration-300 cursor-pointer"
        >
          {hoverIndex === index && <GoArrowRight className="mr-2" />}
          <Link href={item.link} onClick={() => { setMenuOpen(false); setDropdownOpen(''); }}>{item.title}</Link>
        </li>
      ))}
    </motion.ul>
  );

  return (
    <nav className={` text-white py-4 w-full top-0 z-70 sticky ${show && "nav_blur"}`} >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 xl:px-0">
        <Link href="/">
          <div className="text-2xl font-bold cursor-pointer">
            <span className="text-white">Inteli</span>
            <span className="text-teal-400">sync</span>
          </div>
        </Link>

        <div className="max-lg:hidden lg:flex space-x-8 md:items-center lg:items-center xl:space-x-12 text-lg relative">
          <div className="relative group">
            <Link href="/company/aboutuspage" className="cursor-pointer flex items-center gap-1 hover:text-teal-400" >Company</Link>
            <div className="absolute inset-4 left-0 invisible group-hover:visible group-hover:pointer-events-auto">
              {renderDropdown(CompanyData)}
            </div>
          </div>

          <div className="relative group">
            <Link href="/services" className="cursor-pointer flex items-center gap-1 hover:text-teal-400">Our Services</Link>
            <div className="absolute inset-4 left-0 invisible group-hover:visible group-hover:pointer-events-auto">
              {renderDropdown(Ourservicedata)}
            </div>
          </div>

          <div className="relative group">
            <Link href="/Industry" className="cursor-pointer flex items-center gap-1 hover:text-teal-400">Industry</Link>
            <div className="absolute inset-4 left-0 invisible group-hover:visible group-hover:pointer-events-auto">
              {renderDropdown(IndustryData)}
            </div>
          </div>


          <div className="relative group">
            <Link href="/Industry" className="cursor-pointer flex items-center gap-1 hover:text-teal-400">Our Products</Link>
            <div className="absolute inset-4 left-0 invisible group-hover:visible group-hover:pointer-events-auto">
              {renderDropdown(OurProductsData)}
            </div>
          </div>


          <Link href="/events" className="hover:text-teal-400">Events</Link>
          <Link href="/company/careers" className="hover:text-teal-400">Careers</Link>
          <Link href="/company/blog" className="hover:text-teal-400">Blog</Link>
        </div>

        <div className="max-lg:hidden lg:flex space-x-8 lg:items-center xl:space-x-12 text-lg relative">
          <Link href="/contact">
            <button className="border border-teal-400 px-4 py-2 rounded-md hover:bg-teal-400 hover:text-black transition">Contact</button>
          </Link>
        </div>

        <button onClick={toggleMenu} className="lg:hidden">
          {menuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>
      </div>

      {menuOpen && (
        <div className="max-lg:block lg:hidden bg-[#020B17] text-white py-6 px-4 space-y-4">
          <div className="cursor-pointer flex items-center gap-1">
            <Link href="/company/aboutuspage" onClick={() => setMenuOpen(false)}>Company</Link>
            <FiChevronDown size={16} onClick={() => toggleDropdown('company')} />
          </div>
          {dropdownOpen === 'company' && renderDropdown(CompanyData)}

          <div className="cursor-pointer flex items-center gap-1">
            <Link href="/services" onClick={() => setMenuOpen(false)}>Our Services</Link>
            <FiChevronDown size={16} onClick={() => toggleDropdown('services')} />
          </div>
          {dropdownOpen === 'services' && renderDropdown(Ourservicedata)}

          <div className="cursor-pointer flex items-center gap-1">
            <Link href="/Industry" onClick={() => setMenuOpen(false)}>Industry</Link>
            <FiChevronDown size={16} onClick={() => toggleDropdown('industry')} />
          </div>
          {dropdownOpen === 'industry' && renderDropdown(IndustryData)}

          <div className="cursor-pointer flex items-center gap-1">
            <Link href="/product" className="block hover:text-teal-400" onClick={() => setMenuOpen(false)}>Our Products</Link>
            <FiChevronDown size={16} onClick={() => toggleDropdown('products')} />
          </div>
          {dropdownOpen === 'products' && renderDropdown(OurProductsData)}
          <Link href="/events" className="block hover:text-teal-400" onClick={() => setMenuOpen(false)}>Events</Link>
          <Link href="/company/careers" className="block hover:text-teal-400" onClick={() => setMenuOpen(false)}>Careers</Link>
          <Link href="/company/blog" className="block hover:text-teal-400" onClick={() => setMenuOpen(false)}>Blog</Link>
          <Link href="/contact" className="block hover:text-teal-400" onClick={() => setMenuOpen(false)}>Contact</Link>
        </div>
      )}
    </nav>
  );
}
