import ContactUs from '@/component/ContactUs/ContactUs'
import Cryptobanner from '@/component/Crypto/Cryptobanner'
import CryptoCarts from '@/component/Crypto/CryptoCarts'
import MarketingStrategies from '@/component/Crypto/MarketingStrategies'
import FAQSection from '@/component/FAQ/FAQ'
import Footer from '@/component/footer/Footer'
import Blog from '@/component/landingpage/Blog'
import Navbar from '@/component/navbar/Navbar'
import { Cryptofaqs } from '@/utils/FAQ_Data'
import React from 'react'

function page() {
  return (
   <>
   <Navbar />
   <Cryptobanner />
   <MarketingStrategies />
   <CryptoCarts />
    <FAQSection faqs={Cryptofaqs} />
    <Blog />
    <ContactUs />
    <Footer />
   </>
  )
}

export default page