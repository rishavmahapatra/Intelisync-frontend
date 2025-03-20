import TrustedInnovators from '@/component/branding/Trustedservice'
import ContactUs from '@/component/ContactUs/ContactUs'
import FAQSection from '@/component/FAQ/FAQ'
import Blog from '@/component/Blogs/Blogs'
import CartMemorable from '@/component/Web_Development/CartMemorable'
import Expert_web from '@/component/Web_Development/Expert_web'
import Future_Ready from '@/component/Web_Development/Future_Ready'
import Web_Carts from '@/component/Web_Development/Web_Carts'
import WebBanner from '@/component/Web_Development/WebBanner'
import { Webfaqs } from '@/utils/FAQ_Data'
import React from 'react'

function page() {
  return (
   <>
   <WebBanner />
   <CartMemorable />
   <Expert_web />
   <Future_Ready />
   <Web_Carts />
   <TrustedInnovators  />
   <FAQSection faqs={Webfaqs} />
   <Blog />
   <ContactUs />
   </>
  )
}

export default page
