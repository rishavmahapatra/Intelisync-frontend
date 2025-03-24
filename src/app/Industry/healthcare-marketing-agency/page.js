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

export const metadata = {
  title: " Top Healthcare Marketing Agency | Driving Growth & Innovation",
  description: "Intelisync.ai drives growth for healthcare practices, hospitals, and health tech firms with expert marketing strategies for branding, SEO, and patient engagement.",
  keywords: "Healthcare Marketing Agency",
  openGraph: {
      title: " Top Healthcare Marketing Agency | Driving Growth & Innovation",
      description: "Intelisync.ai drives growth for healthcare practices, hospitals, and health tech firms with expert marketing strategies for branding, SEO, and patient engagement.",
      url: "https://intelisync.ai/Industry/healthcare-marketing-agency/",
  },
  alternates: {
      canonical: "https://intelisync.ai/Industry/healthcare-marketing-agency/",
  }
  // robots: "follow, index",
  // verification: {
  //     google: "4mQzwqWNPRYEif77XJ2YEz25DRLcrmsRpXuiA2dFa5Q"
  // }
};

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