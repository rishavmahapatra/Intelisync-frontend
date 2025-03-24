import Accelerate from '@/component/growthmarketing/Accelerate'
import Drive from '@/component/growthmarketing/Drive'
import Navbar from '@/component/navbar/Navbar'
import Footer from "@/component/footer/Footer";
import Taillored from '@/component/growthmarketing/Taillored';
import Blog from '@/component/Blogs/Blogs'
import {GrowthMarketingfaqs} from "@/utils/FAQ_Data"
import FAQSection from '@/component/FAQ/FAQ';
import ContactUs from '@/component/ContactUs/ContactUs';
import TrustedBrands from "@/component/TrustedInnovators/Trusted";
import TrustedInnovators from "@/component/TrustedInnovators/TrustedInnovators";


export const metadata = {
  title: "Growth Marketing Agency | Smart Strategies for Business Success",
  description: "As a Growth Marketing Agency, we help your business grow with smart strategies that attract the right audience, boost engagement, and drive real results.",
  keywords: "AI Development Services",
  openGraph: {
      title: "Growth Marketing Agency | Smart Strategies for Business Success",
      description: "As a Growth Marketing Agency, we help your business grow with smart strategies that attract the right audience, boost engagement, and drive real results.",
      url: "https://intelisync.ai/services/growth-marketing-agency/",
  },
  alternates: {
      canonical: "https://intelisync.ai/services/growth-marketing-agency/",
  }
  // robots: "follow, index",
  // verification: {
  //     google: "4mQzwqWNPRYEif77XJ2YEz25DRLcrmsRpXuiA2dFa5Q"
  // }
};

function page() {
  return (
    <>
    <Accelerate />
    <Drive />
    <Taillored />
    <div className="block md:hidden">
               <TrustedBrands />
             </div>
   
             <div className="hidden md:block">
               <TrustedInnovators />
             </div>
    <FAQSection faqs={GrowthMarketingfaqs} />
    <Blog />
    <ContactUs />
    </>
  )
}

export default page