import React from 'react'
import Casino_Marketing_Blog from "@/component/Blogs_Conatin/Casino_Marketing_Blog/Casino_Marketing_Blog";
import Blogfaq from '@/component/Blog_FAQ/Blogfaq';
// import { FintechFaq } from '@/utils/Blog_faqData';
import { casinoMarketing } from '@/utils/Blog_faqData';
import BlogEmojiData from '@/component/BlogEmojis/BlogEmojiData';
import ContactUs from '@/component/ContactUs/ContactUs';
import BlogImageData from '@/component/BlogImageData/BlogImageData';

function page() {
  return (
    <div>
        <Casino_Marketing_Blog />
        <Blogfaq blogfaq={casinoMarketing} />
      <BlogEmojiData /> 
      <BlogImageData />
      <ContactUs />
    </div>
  )
}     

export default page