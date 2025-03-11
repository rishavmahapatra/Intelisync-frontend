import Link from "next/link";

export default function CryptoCommunityManagement() {
    return (
        <div className="bg-[#020B17] text-white py-16 px-6 md:px-20 lg:px-32">
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

            {/* Title */}
            <h1 className="text-[40px] md:text-[40px] font-medium leading-[50px] tracking-[-0.01em] text-white font-[Poppins]">
                Turbocharge Your Crypto Project with Expert Telegram & Discord Community Management
            </h1>


            {/* Subheading */}
            <h2 className="text-[26px] md:text-[26px] font-medium leading-[50px] tracking-[-0.01em] text-[#06FFFB] mt-4 font-[Poppins]">
                Stand Out in the Crypto Space with <span className="text-white">Engaged Communities</span>
            </h2>


            {/* Content */}
            <div className="text-gray-300 text-[17px] leading-[30px] mt-6 space-y-6 font-[400] tracking-tight font-[Poppins]">
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
