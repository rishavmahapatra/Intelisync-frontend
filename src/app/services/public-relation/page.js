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

export const metadata = {
  title: "Crypto PR Agency for Effective Blockchain & Web3 Public Relations",
  description: "A crypto PR agency specializing in blockchain & Web3 public relations, helping projects build credibility, gain media exposure, & connect with the right audience.",
  keywords: "Public Relation Development Services",
  openGraph: {
      title: "Crypto PR Agency for Effective Blockchain & Web3 Public Relations",
      description: "A crypto PR agency specializing in blockchain & Web3 public relations, helping projects build credibility, gain media exposure, & connect with the right audience.",
      url: "https://intelisync.ai/services/public-relation",
  },
  alternates: {
      canonical: "https://intelisync.ai/services/public-relation",
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
    <TrustedInnovators />
    <FAQSection faqs={PublicRelationfaqs} />
    <Blog />
    <ContactUs />
    </>
  )
}

export default page