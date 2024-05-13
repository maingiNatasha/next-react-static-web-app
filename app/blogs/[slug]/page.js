"use client";
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { blogs } from '@/localData/blogDetails.js';
import BlogPost from '@/components/blogs/BlogPost';
import OtherBlogs from '@/components/blogs/OtherBlogs';

const BlogPostPage = () => {
    const searchParams = useSearchParams();
    const id = searchParams.get('id');
    const [blog, setBlog] = useState(null);
    const [otherBlogs, setOtherBlogs] = useState(null);

    useEffect(() => {
        if (id) {
            const foundBlog = blogs.find((blog) => blog._id === parseInt(id));
            const otherBlogs = blogs.filter((blog) => blog._id !== parseInt(id));
            console.log(foundBlog);
            console.log(otherBlogs);
            if (foundBlog) {
                setBlog(foundBlog);
            } else {
                console.log('Blog post not found');
            }
            if (otherBlogs) {
                setOtherBlogs(otherBlogs);
            }
        } else {
            console.log('Id parameter not found in url');
        }
    }, [id]);

    return (
        <div className='py-4 md:py-6'>
            <div className='flex flex-col items-center justify-center'>
                <BlogPost blog={blog} />
                <OtherBlogs blogs={otherBlogs} />
            </div>
        </div>
    )
}

export default BlogPostPage;