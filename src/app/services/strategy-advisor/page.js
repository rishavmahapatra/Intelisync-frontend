
import ContactUs from "@/component/ContactUs/ContactUs"
import FAQSection from "@/component/FAQ/FAQ"
import Blog from '@/component/Blogs/Blogs'
import AdvisoryServices from "@/component/strategicpage/AdvisoryServices"
import Elevate from "@/component/strategicpage/Elevate"
import SmartSection from "@/component/strategicpage/SmartSection"
import { Startegicfaqs } from "@/utils/FAQ_Data"
import TrustedBrands from "@/component/TrustedInnovators/Trusted";
import TrustedInnovators from "@/component/TrustedInnovators/TrustedInnovators";


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
   <div className="block md:hidden">
                      <TrustedBrands />
                    </div>
          
                    <div className="hidden md:block">
                      <TrustedInnovators />
                    </div>
   <FAQSection faqs={Startegicfaqs} />
    <Blog />
    <ContactUs />
    </>
  )
}

export default page