'use client'

import Image from 'next/image'

export default function BlogBanner() {
    return (
        <div className="relative w-full h-[70vh]">
            <Image 
                src="/Blog_Assets/BlogImage.png"
                alt="Blog Banner"
                fill
                className="object-cover"
            />
        </div>
    );
}
