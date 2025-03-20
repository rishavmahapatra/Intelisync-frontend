
import ContactUs from "@/component/ContactUs/ContactUs"
import FAQSection from "@/component/FAQ/FAQ"
import Blog from '@/component/Blogs/Blogs'
import AdvisoryServices from "@/component/strategicpage/AdvisoryServices"
import Elevate from "@/component/strategicpage/Elevate"
import SmartSection from "@/component/strategicpage/SmartSection"
import TrustedInnovators from "@/component/TrustedInnovators/TrustedInnovators";
import { Startegicfaqs } from "@/utils/FAQ_Data"


function page() {
  return (
   <>
   <Elevate />
   <AdvisoryServices />
   <SmartSection />
   <TrustedInnovators />
   <FAQSection faqs={Startegicfaqs} />
    <Blog />
    <ContactUs />
    </>
  )
}

export default page