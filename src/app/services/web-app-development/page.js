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

export const metadata = {
  title: "Expert Web App Development | Fast, Secure & Custom Solutions",
  description: "Get expert web app development services to build fast,  and scalable applications. We create custom solutions that enhance user experience and drive growth.",
  keywords: "Web App Development Services",
  openGraph: {
      title: "Expert Web App Development | Fast, Secure & Custom Solutions",
      description: "Get expert web app development services to build fast,  and scalable applications. We create custom solutions that enhance user experience and drive growth.",
      url: "https://intelisync.ai/services/web-development",
  },
  alternates: {
      canonical: "https://intelisync.ai/services/web-development",
  }
  // robots: "follow, index",
  // verification: {
  //     google: "4mQzwqWNPRYEif77XJ2YEz25DRLcrmsRpXuiA2dFa5Q"
  // }
};

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
