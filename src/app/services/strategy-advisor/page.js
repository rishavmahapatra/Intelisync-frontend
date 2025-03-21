
import ContactUs from "@/component/ContactUs/ContactUs"
import FAQSection from "@/component/FAQ/FAQ"
import Blog from '@/component/Blogs/Blogs'
import AdvisoryServices from "@/component/strategicpage/AdvisoryServices"
import Elevate from "@/component/strategicpage/Elevate"
import SmartSection from "@/component/strategicpage/SmartSection"
import TrustedInnovators from "@/component/TrustedInnovators/TrustedInnovators";
import { Startegicfaqs } from "@/utils/FAQ_Data"

export const metadata = {
  title: "Expert Strategy Advisory  to Drive Your Business Forward",
  description: "Strategy advisory to help your business grow smarter. Intelisync offers expert guidance, real world solutions, and data backed insights for sustainable success",
  keywords: "Strategy Advisory Development Services",
  openGraph: {
      title: "Expert Strategy Advisory  to Drive Your Business Forward",
      description: "Strategy advisory to help your business grow smarter. Intelisync offers expert guidance, real world solutions, and data backed insights for sustainable success",
      url: "https://intelisync.ai/services/strategy-advisor",
  },
  alternates: {
      canonical: "https://intelisync.ai/services/strategy-advisor",
  }
  // robots: "follow, index",
  // verification: {
  //     google: "4mQzwqWNPRYEif77XJ2YEz25DRLcrmsRpXuiA2dFa5Q"
  // }
};

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