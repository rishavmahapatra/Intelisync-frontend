'use client';

import Image from 'next/image';

export default function BlogBanner() {
    return (
        <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px]">
            <Image 
                src="/Blog_Assets/BlogImage.webp"
                alt="Web3 Marketing"
                fill
                className="object-cover"
                priority
            />
        </div>
    );
}
