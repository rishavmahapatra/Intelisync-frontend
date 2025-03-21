import Link from "next/link";

export default function CryptoCommunityManagement() {
    return (
        <div className="bg-[#000B18] relative text-white py-16 px-6 md:px-20 lg:px-32">
            {/* Breadcrumb */}
            <div className="text-gray-400 text-sm mb-6">
                <Link href="/" className="hover:text-white transition duration-200">
                    Homepage
                </Link>
                <span> &gt; </span>
                <Link href="/services" className="hover:text-white transition duration-200">
                    Services
                </Link>
                <span> &gt; </span>
                <span className="text-[#06FFFB]">Community Management</span>
            </div>
            <div className="absolute w-[200px] h-[500px] blur-[100px] top-[-50px] left-0 rotate-[148.52deg] 
                      bg-[linear-gradient(256.74deg,rgba(4,158,188,0.5)_47.38%,rgba(0,55,90,0.5)_61.04%,rgba(73,0,116,0.5)_70.05%)]">
            </div>
            {/* Title */}
            <h2 className=" max-w-3xl text-[28px] leading-[40px] md:text-[40px] md:leading-[50px] tracking-[-0.01em] text-white">
                {/* Turbocharge Your Crypto Project with Expert Telegram & Discord Community Management */}
                Web3 Community Management Agency Helping Crypto Projects Grow and Engage

            </h2>


            {/* Subheading */}
            <h2 className="text-[18px] md:text-[26px] leading-[30px] font-[500] md:leading-[50px] tracking-[-0.01em] text-[#fff] mt-4">
                Stand Out in the Crypto Space with Engaged Communities
            </h2>


            {/* Content */}
            <div className="text-gray-300 text-[16px] leading-[30px] mt-6 space-y-5  tracking-tight w-[70%] min-[320px]:max-[580px]:w-[95%]">
                <p>
                    The crypto space is competitive, and building a strong community is essential for success. Traditional marketing is not enough to attract investors and users. Real growth happens when you create an engaged and loyal community on platforms like Telegram and Discord. A well-managed community builds trust, increases brand awareness, and strengthens your project’s credibility.
                </p>
                <p>
                    As a leading Web3 community management agency, we help crypto projects foster meaningful conversations and connections. Discord provides real-time discussions for updates and announcements, while Telegram offers a secure space for active engagement. Both platforms are key to driving visibility and long-term growth.
                </p>
                <p>
                    With the right strategy, a strong community becomes the foundation of your project’s success. We ensure your brand stands out, attracts new users, and keeps your audience engaged. Work with an experienced team that understands how to grow and manage Web3 communities effectively.
                </p>
            </div>

        </div>
    );
}
