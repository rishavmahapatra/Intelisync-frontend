import ContactUs from '@/component/ContactUs/ContactUs'
import Cryptobanner from '@/component/Crypto/Cryptobanner'
import CryptoCarts from '@/component/Crypto/CryptoCarts'
import MarketingStrategies from '@/component/Crypto/MarketingStrategies'
import FAQSection from '@/component/FAQ/FAQ'
import Blog from '@/component/Blogs/Blogs'
import Navbar from '@/component/navbar/Navbar'
import { Cryptofaqs } from '@/utils/FAQ_Data'
import React from 'react'

export const metadata = {
  title: "Blockchain & Crypto Marketing | Intelisync.ai",
  description: "Ignite your blockchain and crypto project's growth with Intelisync.ai. Drive adoption, engagement, and success with expert marketing strategies.",
  keywords: "Blockchain and Crypto Marketing",
  openGraph: {
      title: "Blockchain & Crypto Marketing | Intelisync.ai",
      description: "Ignite your blockchain and crypto project's growth with Intelisync.ai. Drive adoption, engagement, and success with expert marketing strategies.",
      url: "https://intelisync.ai/Industry/crypto-marketing",
  },
  alternates: {
      canonical: "https://intelisync.ai/Industry/crypto-marketing",
  }
  // robots: "follow, index",
  // verification: {
  //     google: "4mQzwqWNPRYEif77XJ2YEz25DRLcrmsRpXuiA2dFa5Q"
  // }
};

function page() {
  return (
   <>
   <Cryptobanner />
   <MarketingStrategies />
   <CryptoCarts />
    <FAQSection faqs={Cryptofaqs} />
    <Blog />
    <ContactUs />
   </>
  )
}

export default page