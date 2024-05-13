"use client";
import React from 'react';
import { blogs } from '@/localData/blogDetails.js';
import Image from 'next/image';
import { MdEditCalendar } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa";
import { MdPersonPin } from "react-icons/md";
import Link from 'next/link';
import { motion } from "framer-motion";

const BlogCards = () => {
    const variants = {
        initial: {
            opacity: 0,
            x: -100
        },
        animate: {
            opacity: 1,
            x: 0
        }
    };

    return (
        <motion.div
            initial='initial'
            whileInView='animate'
            variants={{
                animate : {
                    transition: {
                        staggerChildren: 0.5,
                        delayChildren: 0.25
                    }
                }
            }}
            className='space-y-8 w-[90%] md:w-[100%] lg:w-[85%]'
        >
            {blogs.map((blog) => (
                <motion.div
                    variants={variants}
                    className='grid grid-cols-1 md:grid-cols-2 gap-4 p-4 md:px-0 lg:p-4 blog-card hover:rounded-lg hover:shadow-sky-500/15 hover:shadow-lg hover:border-sky-500/15 hover:border-2 '
                    key={blog._id}
                >
                    <div className='px-2 md:p-2'>
                        <div className='image-container'>
                            <Image src={blog.image} alt='blog-image' style={{ width: '95%', height: 'auto'}} />
                            <div className='overlay'>
                            </div>
                            <div className='overlay-content'>
                                <div className='flex flex-col space-y-2 lg:items-center text-[15px] lg:text-[16px]'>
                                    <div className='flex items-center'>
                                        <Image src={blog?.authorImage} alt='author-image' width={40} height={40} className='rounded-full mr-1 lg:mr-2' />
                                        <span>{blog?.author}</span>
                                    </div>
                                    <div className='flex items-center'>
                                        <MdEditCalendar size={25} className='mr-1 lg:mr-2' />
                                        <span>{blog.date}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='px-2'>
                        <h1 className='font-bold text-2xl mb-2 lg:my-4'>{blog.title}</h1>
                        <p className='my-2 lg:my-6'>{blog.summary.slice(0, 200)}...</p>
                        <motion.button
                            whileHover={{
                                scale: 1.05,
                                opacity: 0.8,
                                y: -5
                            }}
                            whileTap={{
                                scale: 0.9
                            }}
                            transition={{
                                duration: 0.25,
                                ease: 'easeInOut'
                            }}
                            className='font-bold bg-sky-500/75 py-2 px-4 lg:px-6 rounded-md my-4'
                        >
                            <Link href={`/blogs/${blog._id}?id=${blog._id}`} className='flex items-center'>
                                Read More
                                <FaArrowRight size={20} className='ml-2' />
                            </Link>
                        </motion.button>
                    </div>
                </motion.div>
            ))}
        </motion.div>
    )
}

export default BlogCards