'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function BlogImageSection({ blogs, categories, selectedCategory }) {
    const filteredBlogs = selectedCategory && selectedCategory !== "All"
        ? blogs.filter((blog) => blog.category === selectedCategory)
        : blogs;

    return (
        <div className="flex flex-col md:flex-row w-full p-6 pt-30 bg-white">
            <div className="w-full hidden sm:block md:w-1/4 md:ml-24 mb-6 md:mb-0">
                <div className="mb-4">
                    <input 
                        type="text" 
                        placeholder="Search" 
                        className="w-full p-2 border rounded-full focus:outline-none"
                        style={{ borderColor: "#00B6AB"}}
                    />
                </div>
                <ul className="space-y-4 text-gray-700 flex flex-col items-left"> 
                    {categories.map((category, index) => (
                        <li key={index} className="cursor-pointer hover:text-black">
                            <Link href='' className="block">
                                {category}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="w-full md:w-2/3 px-4 md:px-20 mx-auto"> 
                {filteredBlogs.length > 0 ? (
                    filteredBlogs.map((blog) => (
                        <div key={blog.id} className="flex flex-col md:flex-row items-start space-x-0 md:space-x-6 mb-6">
                            <Image 
                                src={blog.image} 
                                alt={blog.title} 
                                width={240} 
                                height={135} 
                                className="w-full md:w-auto"
                            />
                            <div className="w-full md:w-[475px] ml-0 md:ml-4"> 
                                <p className="text-gray-500 text-sm leading-tight">
                                    {blog.date} <span className="ml-4">• {blog.readTime}</span> 
                                </p>
                                <h2 className="text-[18px] font-semibold hover:underline cursor-pointer mt-4 leading-snug">
                                    {blog.title}
                                </h2>
                                <p className="text-gray-500 text-sm mt-4 md:mt-8 leading-tight">
                                    {blog.description}
                                </p>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-gray-500">No blogs found for this category.</p>
                )}
            </div>
        </div>
    );
}
