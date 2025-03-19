import Link from "next/link";

export default function CartMemorable() {

  const content =[
             "Your website should do more than just exist—it should captivate, engage, and inspire. We design sleek, responsive websites that offer intuitive navigation and exceptional user experiences, ensuring visitors stay longer and connect with your brand’s story."          
  ]
   
    return (
      <div className="bg-[#020B17] text-white py-16 px-6 md:px-20 lg:px-32">
        <div className="max-w-6xl">

        <div className="text-gray-400 text-sm mb-6 h-[20px] w-[389px] ">
                <Link href="/" className="hover:text-gray-300 transition text-[15px]">Homepage</Link>
                <span className="mx-1">&gt;</span>

                <Link href="/service" className="hover:text-gray-300 text-[15px] transition">Services</Link>
                <span className="mx-1">&gt;</span>

                <span className="text-cyan-400 font-medium text-[15px] hover:text-cyan-300 transition">
                Web App Development 
                </span>
            </div>

          <h1 className="font-poppins font-[500px] text-[40px] leading-[50px] tracking-[-0.01%]">
          Craft Memorable Digital Experiences with Custom Web Development
          </h1>
          </div>

          {content.map((paragraph, index) => (
            <p key={index} className="font-poppins  text-[17px] font-[400px] leading-[30px] tracking-[-0.01%] text-gray-300 mt-4 w-[50%]">
              {paragraph}
            </p>
   
          ))}
      </div>
    );
  }
