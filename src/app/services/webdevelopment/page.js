import TrustedInnovators from '@/component/branding/Trustedservice'
import ContactUs from '@/component/ContactUs/ContactUs'
import FAQSection from '@/component/FAQ/FAQ'
import Footer from '@/component/footer/Footer'
import Blog from '@/component/landingpage/Blog'
import Navbar from '@/component/navbar/Navbar'
import CartMemorable from '@/component/Web_Development/CartMemorable'
import Expert_web from '@/component/Web_Development/Expert_web'
import Future_Ready from '@/component/Web_Development/Future_Ready'
import Web_Carts from '@/component/Web_Development/web_carts'
import WebBanner from '@/component/Web_Development/WebBanner'
import { Webfaqs } from '@/utils/FAQ_Data'
import React from 'react'

function page() {
  return (
   <>
   <Navbar />
   <WebBanner />
   <CartMemorable />
   <Future_Ready />
   <Expert_web />
   <Web_Carts />
   <TrustedInnovators  />
   <FAQSection faqs={Webfaqs} />
   <Blog />
   <ContactUs />
   <Footer />
   </>
  )
}

export default page
