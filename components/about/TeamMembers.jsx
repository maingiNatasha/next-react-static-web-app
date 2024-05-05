import React from 'react';
import { members } from '../../localData/team.js';
import Image from 'next/image';
import { FaFacebook } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { motion, MotionConfig } from 'framer-motion';

const TeamMembers = () => {
    const childVariants = {
        hidden: {
            opacity: 0,
            y: 75,
        },
        visible: {
            opacity: 1,
            y: 0,
        }
    };

    return (
        <motion.div
            initial='hidden'
            whileInView='visible'
            variants={{
                visible: {
                    transition: {
                        staggerChildren: 0.5,
                        delayChildren: 0.5,
                    }
                }
            }}
            viewport={{ once: true }}
            className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 pt-10 gap-8 sm:px-20 md:px-0'
        >
            {members.map((member) => (
                <motion.div
                    variants={childVariants}
                    whileHover={{
                        scale: 1.025,
                        y: -3
                    }}
                    transition={{
                        duration: 0.25,
                        ease: "easeInOut"
                    }}
                    key={member._id}
                    className='p-6 my-2 md:p-8 rounded-lg text-center shadow-sky-500 shadow-inner hover:border-sky-500 hover:border-2 hover:shadow-md'
                >
                    <div className='flex items-center justify-center'>
                        <Image src={member.picture} alt='member-picture' width={200} height={200} className='rounded-full object-cover' />
                    </div>
                    <div className='py-6'>
                        <h3 className='text-xl font-bold'>{member.name}</h3>
                        <h5 className='mb-4'>{member.role}</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                    </div>
                    <div className='flex items-center justify-center space-x-4'>
                        <MotionConfig
                            whileHover={{
                                scale: 1.1,
                                y: -3
                            }}
                            transition={{
                                duration: 0.25,
                                ease: "easeInOut"
                            }}
                        >
                            <motion.a href='https://www.facebook.com' target='blank' rel='noopener norefferer'>
                                <FaFacebook size={25} className='text-sky-500 hover:opacity-50' />
                            </motion.a>
                            <motion.a href='https://www.facebook.com' target='blank' rel='noopener norefferer'>
                                <FaSquareXTwitter size={25} className='text-sky-500 hover:text-sky-600' />
                            </motion.a>
                            <motion.a href='https://www.facebook.com' target='blank' rel='noopener norefferer'>
                                <FaSquareInstagram size={25} className='text-sky-500 hover:text-sky-600' />
                            </motion.a>
                        </MotionConfig>
                    </div>
                </motion.div>
            ))}
        </motion.div>
    )
}

export default TeamMembers