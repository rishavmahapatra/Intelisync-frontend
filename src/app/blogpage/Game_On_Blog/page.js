import React from 'react'
import Game_On_Blog from "@/component/Blogs_Conatin/Game_On_Blog/Game_On_Blog";
import BlogEmojiData from '@/component/BlogEmojis/BlogEmojiData';
import BlogImageData from '@/component/BlogImageData/BlogImageData';
import ContactUs from '@/component/ContactUs/ContactUs';
function page() {
  return (
    <div>
        <Game_On_Blog />
        <BlogEmojiData />
        <BlogImageData />
        <ContactUs />
    </div>
  )
}

export default page