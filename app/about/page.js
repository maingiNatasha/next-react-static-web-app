"use client";
import React from 'react';
// import { motion, MotionConfig } from 'framer-motion';
import aboutAnimation from '../lottie-assets/about.json';
import pointerAnimation from '../lottie-assets/pointer.json';
import missionAnimation from '../lottie-assets/mission.json';
import Lottie from 'lottie-react';
import AnimatedNumber from '@/components/about/AnimatedNumber';
import { FaRegCircleCheck } from "react-icons/fa6";
import TestimonialsSlider from '@/components/about/TestimonialsSlider';
import TeamMembers from '@/components/about/TeamMembers';
import AnimatedDiv from '@/components/AnimatedDiv';

const About = () => {
    return (
        <div className='py-4 md:py-6 lg:py-10'>
            <AnimatedDiv>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-2'>
                    <div>
                        <div className='flex items-center'>
                            <Lottie animationData={pointerAnimation} className='pointer' />
                            <h1 className='text-sky-500/75 font-extrabold my-6 text-3xl'>About Agency</h1>
                        </div>
                        <div className='md:px-6'>
                            <h2 className='font-bold text-4xl md:text-5xl mb-6'>We create digital ideas that are bigger, bolder, braver and better.</h2>
                            <p className='my-2'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                                molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                                numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                                optio, eaque rerum! Provident similique accusantium nemo autem.
                            </p>
                            <p className='my-2'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                                molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                                numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                                optio, eaque rerum! Provident similique accusantium nemo autem.
                            </p>
                        </div>
                    </div>
                    <div className='flex items-center justify-center'>
                        <Lottie animationData={aboutAnimation} />
                    </div>
                </div>
            </AnimatedDiv>
            <AnimatedDiv>
                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-10 py-4 lg:py-10'>
                    <div>
                        <h3 className='text-sky-500/75 font-extrabold text-4xl tracking-wide'><AnimatedNumber value={10} /></h3>
                        <h5 className='font-bold text-xl'>Years of Experience</h5>
                    </div>
                    <div>
                        <h3 className='text-sky-500/75 font-extrabold text-4xl tracking-wide'><AnimatedNumber value={5} additionalText={"K+"} /></h3>
                        <h5 className='font-bold text-xl'>People Reached</h5>
                    </div>
                    <div>
                        <h3 className='text-sky-500/75 font-extrabold text-4xl tracking-wide'><AnimatedNumber value={25} /></h3>
                        <h5 className='font-bold text-xl'>Services and Plugins</h5>
                    </div>
                    <div>
                        <h3 className='text-sky-500/75 font-extrabold text-4xl tracking-wide'><AnimatedNumber value={20} /></h3>
                        <h5 className='font-bold text-xl'>Team Members</h5>
                    </div>
                </div>
            </AnimatedDiv>
            <AnimatedDiv>
                <div className='flex items-center'>
                    <Lottie animationData={pointerAnimation} className='pointer' />
                    <h1 className='text-sky-500/75 font-extrabold my-6 text-3xl'>Who we are</h1>
                </div>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                    molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                    numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                    optio, eaque rerum! Provident similique accusantium nemo autem.
                </p>
                <p className='my-4'>
                    Real innovations and a positive customer experience are the heart of successful communication.
                </p>
                <ul className='space-y-6 px-6 md:px-10'>
                    <li className='flex items-center'>
                        <FaRegCircleCheck className='text-sky-500/75 mr-2 hover:text-white' size={22} />
                        <span className='font-bold'>Stay real. Always.</span>
                    </li>
                    <li className='flex items-center'>
                        <FaRegCircleCheck className='text-sky-500/75 mr-2 hover:text-white' size={22} />
                        <span className='font-bold'>We have you covered</span>
                    </li>
                    <li className='flex items-center'>
                        <FaRegCircleCheck className='text-sky-500/75 mr-2 hover:text-white' size={22} />
                        <span className='font-bold'>We turn heads</span>
                    </li>
                    <li className='flex items-center'>
                        <FaRegCircleCheck className='text-sky-500/75 mr-2 hover:text-white' size={22} />
                        <span className='font-bold'>Your brand, promoted</span>
                    </li>
                </ul>
            </AnimatedDiv>
            <AnimatedDiv>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 py-4 lg:py-10'>
                    <div className='flex item-center justify-center'>
                        <Lottie animationData={missionAnimation} style={{ height: '400px', width: '400px' }} />
                    </div>
                    <div>
                        <div className='mb-4'>
                            <h1 className='text-sky-500/75 font-extrabold mb-4 text-3xl'>Our Mission</h1>
                            <h2 className='font-bold text-xl mb-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                                molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                                numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                                optio, eaque rerum! Provident similique accusantium nemo autem.
                            </p>
                        </div>
                        <div className='mt-8'>
                            <h1 className='text-sky-500/75 font-extrabold mb-6 text-3xl'>Our Vision</h1>
                            <h2 className='font-bold text-xl mb-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                                molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                                numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                                optio, eaque rerum! Provident similique accusantium nemo autem.
                            </p>
                        </div>
                    </div>
                </div>
            </AnimatedDiv>
            <AnimatedDiv>
                <div className='py-4 lg:py-10'>
                    <div className='flex items-center'>
                        <Lottie animationData={pointerAnimation} className='pointer' />
                        <h1 className='text-sky-500/75 font-extrabold my-6 text-3xl'>Our Team</h1>
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                        molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                        numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                        optio, eaque rerum! Provident similique accusantium nemo autem.
                    </p>
                    <TeamMembers />
                </div>
            </AnimatedDiv>
            <AnimatedDiv>
                <div className='flex items-center'>
                    <Lottie animationData={pointerAnimation} className='pointer' />
                    <h1 className='text-sky-500/75 font-extrabold my-6 text-3xl'>Testimonials</h1>
                </div>
                <div className='mb-6'>
                    <h2 className='font-bold mb-2 text-xl'>What are some of our clients are saying about us ?</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                </div>
                <TestimonialsSlider />
            </AnimatedDiv>
        </div>
    )
}

export default About