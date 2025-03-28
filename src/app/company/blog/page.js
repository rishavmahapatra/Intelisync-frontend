import BlogBanner from "@/component/BlogPage/BlogBanner"
import BlogImageSection from "@/component/BlogPage/BlogImageSection"
import Page from "@/component/BlogPage/WEB3_Marketing_Blog/WEB3_Marketing_Blog "
import Blockchain_Blog from "@/component/BlogPage/Blockchain_Blog/Blockchain_Blog"
import Community_Management_Blog from "@/component/BlogPage/Community_Management_Blog/Community_Management_Blog"
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
    {/* <Page/>
    <Blockchain_Blog />
    <Community_Management_Blog /> */}
    </>
  )
}

export default page