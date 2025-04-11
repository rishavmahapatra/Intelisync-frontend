import React from 'react'
import Brand_Synergy_Blog from "@/component/Blogs_Conatin/Brand_Synergy_Blog/Brand_Synergy_Blog";
import Blogfaq from '@/component/Blog_FAQ/Blogfaq';
import { brandSynergy } from '@/utils/Blog_faqData';
import BlogEmojiData from '@/component/BlogEmojis/BlogEmojiData';
import BlogImageData from '@/component/BlogImageData/BlogImageData';
import ContactUs from '@/component/ContactUs/ContactUs';
function page() {
  return (
    <div>
        <Brand_Synergy_Blog />
        <Blogfaq  blogfaq={brandSynergy} />
        <BlogEmojiData />
        <BlogImageData />
        <ContactUs />


    </div>
  )
}

export default page