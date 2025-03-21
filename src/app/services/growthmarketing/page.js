import Accelerate from '@/component/growthmarketing/Accelerate'
import Drive from '@/component/growthmarketing/Drive'
import Navbar from '@/component/navbar/Navbar'
import Footer from "@/component/footer/Footer";
import Taillored from '@/component/growthmarketing/Taillored';
import TrustedInnovators from "@/component/TrustedInnovators/TrustedInnovators";
import Blog from '@/component/Blogs/Blogs'
import {GrowthMarketingfaqs} from "@/utils/FAQ_Data"
import FAQSection from '@/component/FAQ/FAQ';
import ContactUs from '@/component/ContactUs/ContactUs';
import TrustedBrands from "@/component/TrustedInnovators/Trusted";

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