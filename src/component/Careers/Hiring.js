"use client";

export default function HiringMarquee() {
  return (
    <div className="w-full overflow-hidden bg-white py-5">
      <div className="flex animate-scroll whitespace-nowrap">
        {Array(10)
          .fill("Hiring -")
          .map((text, index) => (
            <span
              key={index}
              className="px-4 py-5 text-[#E0F8FF] font-medium text-[96px] leading-[55px] tracking-[-0.01%] text-center align-middle"
            >
              {text}
            </span>
          ))}
      </div>

      {/* Tailwind Animation */}
      <style jsx>{`
        @keyframes scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-100%);
          }
        }

        .animate-scroll {
          animation: scroll 10s linear infinite;
        }
      `}</style>
    </div>
  );
}
