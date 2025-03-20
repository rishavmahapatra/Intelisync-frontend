import Link from "next/link";

export default function CartMemorable() {

  const content =[
    "A well designed web application is more than just a tool. It should be intuitive, engaging, and built to enhance user experience. We develop high-performing web applications that are easy to navigate, visually appealing, and optimized for efficiency."
  ]
   
    return (
      <div className="bg-[#020B17] text-white py-16 px-6 md:px-20 lg:px-32">
        <div className="max-w-6xl">

        <div className="text-gray-400 text-sm mb-6 h-[20px] w-[389px] ">
                <Link href="/" className="hover:text-gray-300 transition text-[15px] font-[400]">Homepage</Link>
                <span className="mx-1">&gt;</span>

                <Link href="/services" className="hover:text-gray-300 text-[15px] font-[400]transition">Services</Link>
                <span className="mx-1">&gt;</span>

                <span className="text-cyan-400 font-[400] text-[15px] hover:text-cyan-300 transition">
                Web App Development 
                </span>
            </div>

          <h2 className="font-poppins font-[500px] text-[40px] leading-[50px] tracking-[-0.01%]">
          Web App Development Services for Scalable and High-Performance Solutions
          </h2>
          </div>

          {content.map((paragraph, index) => (
            <p key={index} className="font-poppins  text-[17px] font-[400px] leading-[30px] tracking-[-0.01%] text-gray-300 mt-4 w-[50%]">
              {paragraph}
            </p>
   
          ))}
      </div>
    );
  }
