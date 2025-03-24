import Blog from '@/component/Blogs/Blogs'
import ContactUs from '@/component/ContactUs/ContactUs'
import FAQSection from '@/component/FAQ/FAQ'
import DigitalMarketing from '@/component/SmallBusiness/DigitalMarketing'
import ElevateBusiness from '@/component/SmallBusiness/ElevateBusiness'
import MarketingFule from '@/component/SmallBusiness/MarketingFule'
import { SmallBusinessfaqs } from '@/utils/FAQ_Data'
import React from 'react'

export const metadata = {
  title: "Small Business Digital Marketing  | Intelisync.ai",
  description: "Fuel your small business growth with Intelisync.ai. Partner with experts who understand your needs and deliver results-driven marketing strategies.",
  keywords: "Small Business Digital Marketing ",
  openGraph: {
      title: "Small Business Digital Marketing  | Intelisync.ai",
      description: "Fuel your small business growth with Intelisync.ai. Partner with experts who understand your needs and deliver results-driven marketing strategies.",
      url: "https://intelisync.ai/Industry/small-business-digital-marketing/",
  },
  alternates: {
      canonical: "https://intelisync.ai/Industry/small-business-digital-marketing/",
  }
  // robots: "follow, index",
  // verification: {
  //     google: "4mQzwqWNPRYEif77XJ2YEz25DRLcrmsRpXuiA2dFa5Q"
  // }
};

function page() {
  return (
    <>
    <MarketingFule />
    <ElevateBusiness />
    <DigitalMarketing />
    <FAQSection faqs={SmallBusinessfaqs} />
    <Blog />
    <ContactUs />
    </>
  )
}

export default page