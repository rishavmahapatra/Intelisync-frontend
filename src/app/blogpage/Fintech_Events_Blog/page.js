import React from 'react'
import Fintech_Events_Blog from "@/component/Blogs_Conatin/Fintech_Events_Blog/Fintech_Events_Blog";
import Blogfaq from '@/component/Blog_FAQ/Blogfaq';
import { FintechFaq } from '@/utils/Blog_faqData';
import BlogEmojiData from '@/component/BlogEmojis/BlogEmojiData';
import BlogImageData from '@/component/BlogImageData/BlogImageData';
import ContactUs from '@/component/ContactUs/ContactUs';

function page() {
  return (
    <div>
        <Fintech_Events_Blog />
        <Blogfaq blogfaq={FintechFaq} />
        <BlogEmojiData />
       <BlogImageData />
       <ContactUs />
        
    </div>
  )
}

export default page