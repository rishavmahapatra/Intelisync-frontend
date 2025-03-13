
import ContactUs from "@/component/ContactUs/ContactUs"
import FAQSection from "@/component/FAQ/FAQ"
import Footer from "@/component/footer/Footer"
import Blog from "@/component/landingpage/Blog"
import Navbar from "@/component/navbar/Navbar"
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