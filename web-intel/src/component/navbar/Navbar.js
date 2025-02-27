//import React from 'react'
'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <div><nav className="bg-white shadow-md fixed w-full z-10">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between h-16 items-center">
        <div className="text-xl font-bold text-gray-900">Brand</div>
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="text-gray-700 hover:text-gray-900">Home</Link>
          <Link href="/about" className="text-gray-700 hover:text-gray-900">About</Link>
          <Link href="/services" className="text-gray-700 hover:text-gray-900">Services</Link>
          <Link href="/contact" className="text-gray-700 hover:text-gray-900">Contact</Link>
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-900 focus:outline-none">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </div>
    {isOpen && (
      <div className="md:hidden bg-white shadow-md">
        <div className="px-2 pt-2 pb-3 space-y-2">
          <Link href="/" className="block text-gray-700 hover:text-gray-900 px-3 py-2">Home</Link>
          <Link href="/about" className="block text-gray-700 hover:text-gray-900 px-3 py-2">About</Link>
          <Link href="/services" className="block text-gray-700 hover:text-gray-900 px-3 py-2">Services</Link>
          <Link href="/contact" className="block text-gray-700 hover:text-gray-900 px-3 py-2">Contact</Link>
        </div>
      </div>
    )}
  </nav></div>
  )
}

export default Navbar