import Blog from '@/component/Blogs/Blogs'
import ContactUs from '@/component/ContactUs/ContactUs'
import FAQSection from '@/component/FAQ/FAQ'
import DigitalMarketing from '@/component/SmallBusiness/DigitalMarketing'
import ElevateBusiness from '@/component/SmallBusiness/ElevateBusiness'
import MarketingFule from '@/component/SmallBusiness/MarketingFule'
import { SmallBusinessfaqs } from '@/utils/FAQ_Data'
import React from 'react'

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