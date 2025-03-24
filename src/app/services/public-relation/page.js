import Blog from "@/component/Blogs/Blogs"
import ContactUs from "@/component/ContactUs/ContactUs"
import FAQSection from "@/component/FAQ/FAQ"
import NarrativePage from "@/component/publicpage/NarrativePage"
import PRServicesPage from "@/component/publicpage/PRServicesPage"
import PublicRelatoin from "@/component/publicpage/PublicRelation"
import { PublicRelationfaqs } from "@/utils/FAQ_Data"
import TrustedBrands from "@/component/TrustedInnovators/Trusted";
import TrustedInnovators from "@/component/TrustedInnovators/TrustedInnovators";


export const metadata = {
  title: "Crypto PR Agency for Effective Blockchain & Web3 Public Relations",
  description: "A crypto PR agency specializing in blockchain & Web3 public relations, helping projects build credibility, gain media exposure, & connect with the right audience.",
  keywords: "Public Relation Development Services",
  openGraph: {
      title: "Crypto PR Agency for Effective Blockchain & Web3 Public Relations",
      description: "A crypto PR agency specializing in blockchain & Web3 public relations, helping projects build credibility, gain media exposure, & connect with the right audience.",
      url: "https://intelisync.ai/services/public-relation/",
  },
  alternates: {
      canonical: "https://intelisync.ai/services/public-relation/",
  }
  // robots: "follow, index",
  // verification: {
  //     google: "4mQzwqWNPRYEif77XJ2YEz25DRLcrmsRpXuiA2dFa5Q"
  // }
};

function page() {
  return (
    <>
    <PublicRelatoin />
    <NarrativePage />
    <PRServicesPage />
    <div className="block md:hidden">
                   <TrustedBrands />
                 </div>
       
                 <div className="hidden md:block">
                   <TrustedInnovators />
                 </div>
    <FAQSection faqs={PublicRelationfaqs} />
    <Blog />
    <ContactUs />
    </>
  )
}

export default page