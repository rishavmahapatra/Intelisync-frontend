'use client';
 
import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react'; // Import icons
 
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
 
  return (
    <nav className="bg-black/80 backdrop-blur-md text-white py-4 fixed w-full top-0 z-50 max-w-6xl mx-auto">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <span className="text-white">Inteli</span>
          <span className="text-teal-400">sync</span>
        </div>
 
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-12 text-lg">
          <Link href="/company" className="hover:text-teal-400">Company</Link>
          <Link href="/service" className="hover:text-teal-400">Our services</Link>
          <Link href="/product" className="hover:text-teal-400">Our products</Link>
          <Link href="/industry" className="hover:text-teal-400">Industry</Link>
          <Link href="/event" className="hover:text-teal-400">Events</Link>
          <Link href="/careers" className="hover:text-teal-400">Careers</Link>
          <Link href="/blog" className="hover:text-teal-400">Blog</Link>
        </div>
 
        {/* Contact Button (Always Visible) */}
        <div className="hidden md:block">
          <Link href="/contact">
            <button className="border border-teal-400 text-white px-4 py-2 rounded-md hover:bg-teal-400 hover:text-black transition">
              Contact
            </button>
          </Link>
        </div>
 
        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
 
      {/* Mobile Menu */}
      <div className={`md:hidden fixed top-0 left-0 w-full h-screen bg-black/80 backdrop-blur-lg flex flex-col items-center justify-center space-y-6 transition-transform ${isOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <button
          className="absolute top-6 right-6 text-white"
          onClick={() => setIsOpen(false)}
        >
          <X size={32} />
        </button>
        <Link href="/company" className="text-xl text-white hover:text-teal-400" onClick={() => setIsOpen(false)}>Company</Link>
        <Link href="/service" className="text-xl text-white hover:text-teal-400" onClick={() => setIsOpen(false)}>Our services</Link>
        <Link href="/product" className="text-xl text-white hover:text-teal-400" onClick={() => setIsOpen(false)}>Our products</Link>
        <Link href="/industry" className="text-xl text-white hover:text-teal-400" onClick={() => setIsOpen(false)}>Industry</Link>
        <Link href="/event" className="text-xl text-white hover:text-teal-400" onClick={() => setIsOpen(false)}>Events</Link>
        <Link href="/careers" className="text-xl text-white hover:text-teal-400" onClick={() => setIsOpen(false)}>Careers</Link>
        <Link href="/blog" className="text-xl text-white hover:text-teal-400" onClick={() => setIsOpen(false)}>Blog</Link>
        <Link href="/contact">
          <button className="border border-teal-400 text-white px-6 py-2 rounded-md hover:bg-teal-400 hover:text-black transition">
            Contact
          </button>
        </Link>
      </div>
    </nav>
  );
}
 
 