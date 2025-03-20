import Link from "next/link";

export default function CartMemorable() {

  const content =[
"The crypto space is competitive, and building a strong community is essential for success. Traditional marketing is not enough to attract investors and users. Real growth happens when you create an engaged and loyal community on platforms like Telegram and Discord. A well-managed community builds trust, increases brand awareness, and strengthens your project’s credibility.",
"As a leading Web3 community management agency, we help crypto projects foster meaningful conversations and connections. Discord provides real-time discussions for updates and announcements, while Telegram offers a secure space for active engagement. Both platforms are key to driving visibility and long-term growth.",
"With the right strategy, a strong community becomes the foundation of your project’s success. We ensure your brand stands out, attracts new users, and keeps your audience engaged. Work with an experienced team that understands how to grow and manage Web3 communities effectively."
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
          Web3 Community Management Agency Helping <br/>Crypto Projects Grow and Engage
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
