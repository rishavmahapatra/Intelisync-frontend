import React from 'react';
import { blogs } from '@/utils/Blog_Data';
import Link from 'next/link';
import Image from 'next/image';
import { FaCircleArrowRight } from "react-icons/fa6";



function BlogImageData() {
    return (
        <div className="px-20 py-8 bg-white">
            <h2 className="text-2xl font-semibold mb-6">Our Other Articles</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {blogs.slice(0, 6).map((blog) => (
                    <div key={blog.id} className="bg-white r shadow-md overflow-hidden hover:shadow-lg transition">
                        <div className="relative w-full h-48">
                            <Image
                                src={blog.image}
                                alt={blog.title}
                                fill
                                className="object-cover"
                            />
                        </div>

                        <div className="p-4">
                            <p className="text-sm text-gray-500">{blog.date} • {blog.readTime}</p>
                            <h3 className="font-medium text-lg mt-2 line-clamp-2">{blog.title}</h3>
                            <p className="text-gray-600 text-sm mt-1">{blog.description}</p>
                            {/* <Link href={blog.link} className="text-blue-600 text-sm hover:underline mt-2 inline-block">
                                Read more →
                            </Link> */}
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-6 text-right">
                <Link
                    href="/company/blog"
                    className="inline-flex items-center gap-2 text-blue-600 hover:underline font-semibold"
                >
                    See All Blogs <FaCircleArrowRight size={20} />
                </Link>
            </div>
        </div>
    );
}

export default BlogImageData;
