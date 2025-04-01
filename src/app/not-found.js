"use client";
import Link from 'next/link'
export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#000B18] text-white px-4">
      <div className="flex items-center text-7xl font-extrabold">
        <span>404</span>
        <span className="text-8xl font-light mx-7 text-white/50 leading-none"> | </span>
        <span className="text-2xl font-normal text-white/80">
          Oops! This page is missing or doesn’t exist.
        </span>
      </div>
      <Link
        href="/"
        className="mt-6 px-6 py-3 bg-white text-[#000B18] font-semibold rounded-full shadow-lg hover:bg-gray-200 transition-all"
      >
        Go Back Home
      </Link>
    </div>
  );
}
