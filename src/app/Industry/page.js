import Blog from "@/component/Blogs/Blogs";
import ContactUs from "@/component/ContactUs/ContactUs";
import FAQSection from "@/component/FAQ/FAQ";
import Footer from "@/component/footer/Footer";
import IndustrySection from "@/component/Industry/IndustrySection";
import OurServices from "@/component/Industry/OurServices";
import Navbar from "@/component/navbar/Navbar";
import PartnersBackers from "@/component/PartnersBackers/PartnersBackers";
import TrustedBrands from "@/component/TrustedInnovators/Trusted";
import TrustedInnovators from "@/component/TrustedInnovators/TrustedInnovators";
import { Industryfaqs } from "@/utils/FAQ_Data";

export const metadata = {
    title: "Next-Gen Solutions for Modern Industries | Intelisync",
    description: "Explore next-gen solutions for modern industries with Intelisync. Drive innovation, efficiency, and growth with our cutting-edge AI-driven strategies.",
    keywords: "Fintech, HealthCare, Gaming, Crypto, Small Bussiness, StartUp",
    openGraph: {
        title: "Next-Gen Solutions for Modern Industries | Intelisync",
        description: "Explore next-gen solutions for modern industries with Intelisync. Drive innovation, efficiency, and growth with our cutting-edge AI-driven strategies.",
        url: "https://intelisync.ai/Industry",
    },
    alternates: {
        canonical: "https://intelisync.ai/Industry",
    }
    // robots: "follow, index",
    // verification: {
    //     google: "4mQzwqWNPRYEif77XJ2YEz25DRLcrmsRpXuiA2dFa5Q"
    // }
  };

export default function page() {
    return (
        <div>
            <IndustrySection />
            <OurServices />
            <div className="block sm:block md:hidden">
                <TrustedBrands />
            </div>
            <div className="hidden md:block">
                <TrustedInnovators />
            </div>
            <FAQSection faqs={Industryfaqs} />
            <PartnersBackers />
            <Blog />
            <ContactUs />
        </div>
    );
}