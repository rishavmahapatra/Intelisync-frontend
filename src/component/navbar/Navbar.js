'use client';

import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-black text-white py-4 mt">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <span className="text-white">Inteli</span>
          <span className="text-teal-400">sync</span>
        </div>
        {/* Navigation Links */}
        <div className="hidden md:flex space-x-12 text-lg">
          <Link href="/company" className="hover:text-teal-400">Company</Link>
          <Link href="/service" className="hover:text-teal-400">Our services</Link>
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
