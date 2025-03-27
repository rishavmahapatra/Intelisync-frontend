import BlogBanner from "@/component/BlogPage/BlogBanner"
import BlogImageSection from "@/component/BlogPage/BlogImageSection"
import Page from "@/component/BlogPage/Web3_Community_Blog/Web3_Community_Blog"
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
    {/* <Page/> */}
    </>
  )
}

export default page