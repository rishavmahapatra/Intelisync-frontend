import Section from "@/component/landingpage/Section";
import Trusted from "@/component/TrustedInnovators/Trusted";
import Section1 from "@/component/whoweare/Section";
import Founder from "@/component/founderpage/Founder";
import Ourservice from "@/component/server/Ourservice";
import Product from "@/component/ourproduct/Product";
import Portfolio from "@/component/footer/Portfolio";
import Event from "@/component/landingpage/Event";
import Blog from "@/component//Blogs/Blogs";
import Badges from "@/component/landingpage/Badges";
import Client from "@/component/landingpage/Client";
import { landingFaq } from "@/utils/FAQ_Data";
import Global from "@/component/landingpage/Global";
import ContactUs from "@/component/ContactUs/ContactUs";
import FAQSection from "@/component/FAQ/FAQ";
import { FaWhatsapp, FaInstagram } from 'react-icons/fa';
import SocialIcons from "@/component/SocialIcons";
import Head from 'next/head';

export const metadata = {
  title: "Enterprise Blockchain, Web3 Development and Marketing Expert",
  description:
    "Intelisync helps brands grow with Web3, blockchain, and GenAI marketing. Explore new opportunities with Dubai’s leading Web3 agency",
  // keywords: "Community Management Development Services",
  openGraph: {
    title: "Enterprise Blockchain, Web3 Development and Marketing Expert",
    description:
      "Intelisync helps brands grow with Web3, blockchain, and GenAI marketing. Explore new opportunities with Dubai’s leading Web3 agency",
    url: "https://www.intelisync.ai/",
  },
  alternates: {
    canonical: "https://www.intelisync.ai/",
  },
  // robots: "follow, index",
  // verification: {
  //     google: "4mQzwqWNPRYEif77XJ2YEz25DRLcrmsRpXuiA2dFa5Q"
  // }
};

export default function Home() {
  return (
      <div>
        <Section />
        <Trusted />
        <Section1 />
        <Founder />
        <Ourservice />
        <Product />
        <Portfolio />
        <Event />
        <div className="flex justify-center">
          <div className="inline-block bg-gradient-to-r from-[#07CDFF] to-[#06FFF0] opacity-100 bg-clip-text text-transparent">
            <h2 className="text-[24px] md:text-[30px] leading-[26px] tracking-tight  font-semibold font-[Poppins] border-b border-white pb-2">
              Blog- Our Expert Articles
            </h2>
          </div>
        </div>
        <Blog />
        <Badges />
        <Client />
        <FAQSection faqs={landingFaq} />
        <ContactUs />
        <Global />
        <SocialIcons />
      </div>

  );
}
