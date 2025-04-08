import React from 'react'
import Image from 'next/image'

function BlogEmojiData() {
    return (
        <div className="bg-white p-6 flex flex-col items-center justify-center space-y-4">
            <h2 className="text-lg font-semibold text-black">
                Did you enjoy reading this article?
            </h2>

            <div className="flex items-center space-x-4" >

                <div className='w-[50px] h-[50px]  md:w-[100px] md:h-[100px] relative'>   <Image src="/Group 1597883836.png" alt="Facebook" fill />  </div>
                <div className='w-[50px] h-[50px]  md:w-[100px] md:h-[100px] relative'>   <Image src="/Group 1597883840.png" alt="Instagram" fill />  </div>
                <div className='w-[50px] h-[50px]  md:w-[100px] md:h-[100px] relative'>   <Image src="/Group 1597883842.png" alt="WhatsApp" fill />  </div>
                <div className='w-[50px] h-[50px]  md:w-[100px] md:h-[100px] relative'>   <Image src="/Group 1597883838.png" alt="Pinterest" fill />  </div>
                <div className='w-[50px] h-[50px]  md:w-[100px] md:h-[100px] relative'>   <Image src="/Group 1597883844.png" alt="X (Twitter)" fill />  </div>

            </div>
        </div>

    )
}

export default BlogEmojiData