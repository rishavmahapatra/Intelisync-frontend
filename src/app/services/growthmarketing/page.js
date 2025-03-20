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
function page() {
  return (
    <>
    <Accelerate />
    <Drive />
    <Taillored />
    <TrustedInnovators />
    <FAQSection faqs={GrowthMarketingfaqs} />
    <Blog />
    <ContactUs />
    </>
  )
}

export default page