import Link from "next/link";

export default function CartMemorable() {
  const content =[
         "A well designed web application is more than just a tool. It should be intuitive, engaging, and built to enhance user experience. We develop high-performing web applications that are easy to navigate, visually appealing, and optimized for efficiency."
  ]

  return (
    <div className="bg-[#020B17] text-white py-16 px-6 md:px-20 lg:px-32 w-full max-w-full">
      
      <div className="max-w-6xl">
        {/* Breadcrumbs */}
        <div className="text-gray-400 text-sm mb-6 flex flex-wrap gap-1">
          <Link href="/" className="hover:text-gray-300 transition text-[14px] sm:text-[15px]">
            Homepage
          </Link>
          <span className="mx-1">&gt;</span>
          <Link href="/services" className="hover:text-gray-300 text-[14px] sm:text-[15px] transition">
            Services
          </Link>
          <span className="mx-1">&gt;</span>
          <span className="text-cyan-400 font-[400px] text-[14px] sm:text-[15px] hover:text-cyan-300 transition">
          Web App Development
          </span>
        </div>

        {/* Title */}
        <h2 className="font-poppins font-[500px] text-[28px] sm:text-[35px] md:text-[40px] leading-[38px] sm:leading-[45px] md:leading-[50px] tracking-tight">
        Web App Development Services for Scalable and High-Performance Solutions
        </h2>

        {/* Content */}
        <div className="mt-6">
          {content.map((paragraph, index) => (
            <p key={index} className="font-poppins text-[14px] sm:text-[16px] font-[400px] leading-[26px] sm:leading-[30px] tracking-tight text-gray-300 mt-4 w-full md:w-[80%] lg:w-[50%]">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}



