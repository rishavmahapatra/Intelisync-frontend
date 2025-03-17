import Link from "next/link";

export default function Condtionspage() {
   
   
    return (
      <div className="bg-[#020B17] text-white py-16 px-6 md:px-20 lg:px-32">
        <div className="max-w-3xl">

        <div className="text-gray-400 text-sm mb-6">
                <Link href="/" className="hover:text-gray-300 transition">Homepage</Link>
                <span className="mx-1">&gt;</span>

                <span className="text-cyan-400 font-medium hover:text-cyan-300 transition">
                Terms & Conditions
                </span>
            </div>

          <h1 className="font-poppins font-medium text-[40px] leading-[50px] tracking-[-0.01%]">
             Terms & Conditions          
          </h1>



        </div>
      </div>
    );
  }