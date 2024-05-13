"use client";
import React from 'react';
import Lottie from 'lottie-react';
import animationData from './lottie-assets/creative_team.json';
import Image from 'next/image';
import { motion, MotionConfig } from 'framer-motion';
import { useRouter } from 'next/navigation';
import AnimatedDiv from '@/components/AnimatedDiv';

const Home = () => {
	const router = useRouter();

	return (
		<AnimatedDiv>
			<div className='grid grid-cols-1 lg:grid-cols-2 gap-2 py-4 md:py-6 lg:py-10'>
				<div className='md:px-6'>
					<div>
						<h1 className='font-bold text-6xl md:text-7xl lg:text-8xl mb-6'>Creative Thoughts Agency.</h1>
						<p className='my-2'>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
							molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
							numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
							optio, eaque rerum! Provident similique accusantium nemo autem.
						</p>
					</div>
					<div className='mt-8 space-x-8'>
					<MotionConfig
						whileHover={{
							scale: 1.1,
							y: -5,
							opacity: 0.8
						}}
						whileTap={{ scale: 0.9 }}
						transition={{
							duration: 0.25,
							ease: "easeInOut",
						}}
					>
						<motion.button className='bg-sky-500/75 rounded py-2 px-8 font-bold' onClick={() => router.push('/about')}>
							Learn More
						</motion.button>
						<motion.button className='bg-white text-black font-bold rounded py-2 px-8' onClick={() => router.push('/contact')}>
							Contact
						</motion.button>
					</MotionConfig>
					</div>
					<div className='flex space-x-6 md:space-x-20 items-center'>
						<MotionConfig
							whileHover={{
								scale: 1.1,
								y: -3
							}}
							transition={{
								duration: 0.25,
								ease: "easeInOut",
							}}
						>
							<motion.a href='https://www.reddit.com' target='blank' rel='noopener norefferer'>
								<Image src='/svgs/reddit.svg' width={40} height={40} alt="reddit logo" />
							</motion.a>
							<motion.a href='https://www.discord.com' target='blank' rel='noopener norefferer'>
								<Image src='/svgs/discord.svg' width={120} height={40} alt="discord logo" />
							</motion.a>
							<motion.a href='https://store.steampowered.com' target='blank' rel='noopener norefferer'>
								<Image src='/svgs/steam.svg' width={40} height={40} alt="steam logo" />
							</motion.a>
							<motion.a href='https://www.twitch.tv' target='blank' rel='noopener norefferer'>
								<Image src='/svgs/twitch.svg' width={40} height={40} alt="twitch logo" />
							</motion.a>
						</MotionConfig>
					</div>
				</div>
				<div>
					<div className='flex items-center justify-center'>
						<Lottie animationData={animationData} />
					</div>
				</div>
			</div>
		</AnimatedDiv>
	)
}

export default Home
