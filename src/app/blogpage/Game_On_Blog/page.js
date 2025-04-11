import React from 'react'
import Game_On_Blog from "@/component/Blogs_Conatin/Game_On_Blog/Game_On_Blog";
import BlogEmojiData from '@/component/BlogEmojis/BlogEmojiData';
import BlogImageData from '@/component/BlogImageData/BlogImageData';
import ContactUs from '@/component/ContactUs/ContactUs';
import Blogfaq from '@/component/Blog_FAQ/Blogfaq';
// import { FintechFaq } from '@/utils/Blog_faqData';
import { gameOn } from '@/utils/Blog_faqData';
function page() {
  return (
    <div>
        <Game_On_Blog />
        <Blogfaq blogfaq={gameOn} />
        <BlogEmojiData />
        <BlogImageData />
        <ContactUs />
    </div>
  )
}

export default page