import BlogBanner from "@/component/BlogPage/BlogBanner"
import BlogImageSection from "@/component/BlogPage/BlogImageSection"
import ContactUs from "@/component/ContactUs/ContactUs"
import SocialIcons from "@/component/SocialIcons"

import { blogs, categories } from "@/utils/Blog_Data"


function page() {
  return (
    <>
    <BlogBanner />
    <BlogImageSection blogs={blogs} categories={categories} />
    <ContactUs />
    <SocialIcons/>
    
    </>
  )
}

export default page