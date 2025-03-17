import BlogBanner from "@/component/BlogPage/BlogBanner"
import BlogImageSection from "@/component/BlogPage/BlogImageSection"
import ContactUs from "@/component/ContactUs/ContactUs"
import Footer from "@/component/footer/Footer"
import Navbar from "@/component/navbar/Navbar"
import { blogs, categories } from "@/utils/Blog_Data"


function page() {
  return (
    <>
    <BlogBanner />
    <BlogImageSection blogs={blogs} categories={categories} />
    <ContactUs />
    </>
  )
}

export default page