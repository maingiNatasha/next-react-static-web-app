"use client";
import React from 'react';
import BlogCards from '@/components/blogs/BlogCards';
import AnimatedContainer from '@/components/AnimatedContainer';
import Lottie from 'lottie-react';
import pointerAnimation from '../lottie-assets/pointer.json';

const Blogs = () => {
    return (
        <div className='py-4 md:py-6'>
            <div>
                <AnimatedContainer>
					<div className='flex items-center pl-5 md:pl-0 lg:pl-20'>
						<Lottie animationData={pointerAnimation} className='pointer' />
						<h1 className='text-sky-500/75 font-extrabold my-6 text-3xl'>Blogs</h1>
					</div>
				</AnimatedContainer>
            </div>
            <div className='flex items-center justify-center'>
                <BlogCards/>
            </div>
        </div>
    )
}

export default Blogs