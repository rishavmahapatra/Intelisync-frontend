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
                <Link href="/service" className="hover:text-white transition duration-200">
                    Services
                </Link>
                <span> &gt; </span>
                <span className="text-[#06FFFB]">Community Management</span>
            </div>
            <div className="absolute w-[200px] h-[500px] blur-[100px] top-[-50px] left-0 rotate-[148.52deg] 
                      bg-[linear-gradient(256.74deg,rgba(4,158,188,0.5)_47.38%,rgba(0,55,90,0.5)_61.04%,rgba(73,0,116,0.5)_70.05%)]">
            </div>
            {/* Title */}
            <h1 className=" max-w-3xl min-[320px]:max-[480px]:text-[30px] sm-text-[30px] md:text-[40px] leading-[50px] tracking-[-0.01em] text-white">
                Turbocharge Your Crypto Project with Expert Telegram & Discord Community Management
            </h1>


            {/* Subheading */}
            <h2 className="min-[320px]:max-[480px]:text-[20px] md:text-[26px] min-[320px]:max-[480px]:leading-[30px] font-[500] leading-[50px] tracking-[-0.01em] text-[#fff] mt-4">
                Stand Out in the Crypto Space with Engaged Communities
            </h2>


            {/* Content */}
            <div className="text-gray-300 text-[16px] leading-[30px] mt-6 space-y-5  tracking-tight w-[70%] min-[320px]:max-[580px]:w-[95%]">
                <p>
                    The cryptocurrency market is fast-paced and highly competitive. Traditional marketing methods often fall short when it comes to attracting and engaging potential investors. With countless projects vying for attention, what sets successful ventures apart is a vibrant, loyal community.
                </p>
                <p>
                    By creating interactive spaces on platforms like Discord and Telegram, you can foster meaningful conversations and collaboration among your brand advocates. These platforms not only help build trust and credibility but also offer new prospects a chance to see what makes your project special—driving excitement, engagement, and real growth.
                </p>
                <p>
                    Discord has become a hub for crypto discussions, offering real-time communication to share updates, announcements, and build deep connections with your community. Meanwhile, Telegram provides a secure, private environment ideal for fostering active conversations and cultivating a supportive network.
                </p>
                <p>
                    Harness the power of these platforms to create thriving communities, boost brand visibility, and attract new users and investors. Transform your project into a trusted name in the crypto space today!
                </p>
            </div>

        </div>
    );
}
