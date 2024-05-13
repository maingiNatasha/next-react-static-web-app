import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { PiClockCountdownFill } from "react-icons/pi";
import { FaArrowLeft } from "react-icons/fa";
import Reactions from './Reactions';
import Comments from './Comments';
import AnimatedDiv from '../AnimatedDiv';

const BlogPost = ({ blog }) => {
	return (
		<div className='w-[95%] md:w-[80%] lg:w-[60%]'>
			<div className='pb-6'>
				<AnimatedDiv>
					<Link href="/blogs" className='flex items-center text-sky-500/75'>
						<FaArrowLeft size={25} />
						<h1 className='ml-2 text-2xl font-extrabold'>Back to blogs</h1>
					</Link>
				</AnimatedDiv>
            </div>
			<AnimatedDiv>
				<h1 className='text-4xl font-extrabold'>{blog?.title}</h1>
			</AnimatedDiv>
			<AnimatedDiv>
				<div className='flex items-center py-6'>
					<div className='mr-3 md:mr-6'>
						<Image src={blog?.authorImage} alt='author-image' width={80} height={80} className='rounded-full object-fill' />
					</div>
					<div className='text-gray-400 p-2'>
						<p>
							<span className='mr-1'>Written by</span>
							<span>{blog?.author}</span>
						</p>
						<div className='pb-1'>
							<span className='mr-1'>Published on</span>
							<span>{blog?.date}</span>
						</div>
						<div className='flex items-center'>
							<PiClockCountdownFill size={20} />
							<span className='ml-3'>5 minute read</span>
						</div>
					</div>
				</div>
			</AnimatedDiv>
			<AnimatedDiv>
				<div className='flex items-center justify-center pt-4'>
					<Image src={blog?.image} alt='blog-image' width={650} height={600} />
				</div>
			</AnimatedDiv>
			<AnimatedDiv>
				<div className='py-10'>
					<p className='py-4'>{blog?.summary}</p>
					<p>{blog?.summary}</p>
				</div>
			</AnimatedDiv>
			<Reactions reactions={blog?.reactions} />
			<Comments comments={blog?.comments} />
		</div>
	)
}

export default BlogPost