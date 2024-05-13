"use client";
import React from 'react';
import ContactInfo from '@/components/contact/ContactInfo';
import Lottie from 'lottie-react';
import pointerAnimation from '../lottie-assets/pointer.json';
import AnimatedContainer from '@/components/AnimatedContainer';
import contactAnimation from '../lottie-assets/reach-out.json';
import ContactForm from '@/components/contact/ContactForm';
import NewsletterForm from '@/components/contact/NewsletterForm';

const Contact = () => {
    return (
		<div className='py-4 md:py-6'>
			<div>
				<AnimatedContainer>
					<div className='flex items-center'>
						<Lottie animationData={pointerAnimation} className='pointer' />
						<h1 className='text-sky-500/75 font-extrabold my-6 text-3xl'>How to reach us</h1>
					</div>
				</AnimatedContainer>
				<div className='flex items-center justify-center'>
					<ContactInfo />
				</div>
			</div>
			<div className='py-4 lg:py-10'>
				<AnimatedContainer>
					<div className='flex items-center'>
						<Lottie animationData={pointerAnimation} className='pointer' />
						<h1 className='text-sky-500/75 font-extrabold my-6 text-3xl'>Get in touch</h1>
					</div>
					<div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
						<div className='flex items-center justify-center flex-col'>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
							<Lottie animationData={contactAnimation} />
						</div>
						<div className='md:px-4'>
							<ContactForm />
						</div>
					</div>
				</AnimatedContainer>
			</div>
			<div className='py-4 lg:py-10'>
				<AnimatedContainer>
					<div className='flex items-center'>
						<Lottie animationData={pointerAnimation} className='pointer' />
						<h1 className='text-sky-500/75 font-extrabold my-6 text-3xl'>Stay up to date</h1>
					</div>
				</AnimatedContainer>
				<AnimatedContainer>
					<div className='grid sm:grid-cols-1 lg:grid-cols-2 gap-4'>
						<div className='text-center'>
							<h1 className='font-bold text-4xl md:text-5xl lg:text-6xl my-4'>Join our newsletter.</h1>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
								molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
								numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
								optio, eaque rerum! Provident similique accusantium nemo autem.
							</p>
						</div>
						<div className='md:px-4'>
							<NewsletterForm />
						</div>
					</div>
				</AnimatedContainer>
			</div>
		</div>
    )
}

export default Contact