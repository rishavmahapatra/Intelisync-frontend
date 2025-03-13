import Blog from "@/component/Blogs/Blogs"
import ContactUs from "@/component/ContactUs/ContactUs"
import FAQSection from "@/component/FAQ/FAQ"
import Footer from "@/component/footer/Footer"
import GetAhead from "@/component/Healthcare/GetAhead"
import GrowthHealthcare from "@/component/Healthcare/GrowthHealthcare"
import GrowthSolution from "@/component/Healthcare/GrowthSolution"
import Innovation from "@/component/Healthcare/Innovation"
import StayAhead from "@/component/Healthcare/StayAhead"
import Navbar from "@/component/navbar/Navbar"
import TrustedInnovators from "@/component/TrustedInnovators/TrustedInnovators"
import { HealthcareCards } from "@/utils/Cards_Data"
import { Healthcarefaqs } from "@/utils/FAQ_Data"


function page() {
  return (
    <> 
    <Innovation />
    <GetAhead />
    <GrowthHealthcare />
    <GrowthSolution />
    <StayAhead />
    <FAQSection faqs={Healthcarefaqs} />
    <Blog />
    <ContactUs />
    </>
  )
}

export default page