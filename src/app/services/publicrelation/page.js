import Blog from "@/component/Blogs/Blogs"
import ContactUs from "@/component/ContactUs/ContactUs"
import FAQSection from "@/component/FAQ/FAQ"
import Footer from "@/component/footer/Footer"
import Navbar from "@/component/navbar/Navbar"
import NarrativePage from "@/component/publicpage/NarrativePage"
import PRServicesPage from "@/component/publicpage/PRServicesPage"
import PublicRelatoin from "@/component/publicpage/PublicRelation"
import TrustedInnovators from "@/component/TrustedInnovators/TrustedInnovators"
import { PublicRelationfaqs } from "@/utils/FAQ_Data"


function page() {
  return (
    <>
    <Navbar />
    <PublicRelatoin />
    <NarrativePage />
    <PRServicesPage />
    <TrustedInnovators />
    <FAQSection faqs={PublicRelationfaqs} />
    <Blog />
    <ContactUs />
    <Footer />
    </>
  )
}

export default page