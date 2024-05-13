import React from 'react';
import Image from 'next/image';
import { MdEditCalendar } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa";
import Link from 'next/link';
import { motion } from "framer-motion";
import AnimatedDiv from '../AnimatedDiv';

const OtherBlogs = ({ blogs }) => {
    console.log(blogs);

    return (
        <div className='w-[98%] md:w-[80%] lg:w-[60%]'>
            <AnimatedDiv>
                <h1 className='text-3xl font-extrabold text-sky-500/75'>See other related blogs</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-4 py-4'>
                    {blogs?.map((blog) => (
                        <div className='other-blog-container' key={blog.id}>
                            <Image src={blog?.image} alt="blog-image" className='other-blog-image' />
                            <div className='flex items-center py-4'>
                                <Image src={blog?.authorImage} alt='author-image' width={40} height={40} className='rounded-full mr-4' />
                                <span>{blog?.author}</span>
                            </div>
                            <div>
                                <h1 className='font-bold'>{blog?.title}</h1>
                            </div>
                            <div className='flex items-center py-4'>
                                <MdEditCalendar size={20} className='mr-1 lg:mr-2' />
                                <span>{blog?.date}</span>
                            </div>
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
                                className='font-bold bg-sky-500/75 rounded-md py-2 px-4 my-2'
                            >
                                <Link href={`/blogs/${blog._id}?id=${blog._id}`} className='flex items-center'>
                                    Read More
                                    <FaArrowRight size={20} className='ml-2' />
                                </Link>
                            </motion.button>
                        </div>
                    ))}
                </div>
            </AnimatedDiv>
        </div>
    )
}

export default OtherBlogs