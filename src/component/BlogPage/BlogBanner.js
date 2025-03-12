'use client'

import Image from 'next/image'

export default function BlogBanner() {
    return (
        <div className="relative w-full h-screen">
            <Image 
                src="/Blog_Assets/BlogImage.png"
                alt="Blog Banner"
                fill
                className="object-cover"
            />
        </div>
    );
}
