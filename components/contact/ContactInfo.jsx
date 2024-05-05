"use client";
import React from 'react';
import { FaLocationDot } from "react-icons/fa6";
import { PiPhoneCallFill } from "react-icons/pi";
import { FaClock } from "react-icons/fa6";
import { motion, MotionConfig } from "framer-motion";

const ContactInfo = () => {
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
                animate: {
                    transition: {
                        staggerChildren: 0.5,
                        delayChildren: 0.25
                    }
                }
            }}
            viewport={{ once: true}}
            className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'
        >
            <MotionConfig
                whileHover={{
                    scale: 1.1,
                }}
                transition={{
                    duration: 0.25,
                    ease: "easeInOut",
                }}
            >
                <motion.div
                    variants={variants}
                    className='flex items-center parent-div'
                >
                    <div className='mr-4 bg-sky-500/75 text-[#0D0C22] px-4 py-10 rounded icon-div'>
                        <FaLocationDot size={40} />
                    </div>
                    <div>
                        <h3 className='text-xl font-bold'>Our Address</h3>
                        <p>Sameer Business Park</p>
                        <p>Mombasa Road, Nairobi</p>
                    </div>
                </motion.div>
                <motion.div
                    variants={variants}
                    className='flex items-center parent-div'
                >
                    <div className='mr-4 bg-sky-500/75 text-[#0D0C22] px-4 py-10 rounded icon-div'>
                        <PiPhoneCallFill size={40} />
                    </div>
                    <div>
                        <h3 className='text-xl font-bold'>Contact</h3>
                        <p>
                            <span>Mobile: </span>
                            <span>(+254) 123 456 789</span>
                        </p>
                        <p>
                            <span>E-mail: </span>
                            <span>hello@creatives.com</span>
                        </p>
                    </div>
                </motion.div>
                <motion.div
                    variants={variants}
                    className='flex items-center parent-div'
                >
                    <div className='mr-4 bg-sky-500/75 text-[#0D0C22] px-4 py-10 rounded icon-div'>
                        <FaClock size={40} />
                    </div>
                    <div>
                        <h3 className='text-xl font-bold'>Office Hours</h3>
                        <p>
                            <span>Monday - Friday: </span>
                            <span>09:00 - 17:00</span>
                        </p>
                        <p>
                            <span>Saturday & Sunday: </span>
                            <span>09:00 - 12:00</span>
                        </p>
                    </div>
                </motion.div>
            </MotionConfig>
        </motion.div>
    )
}

export default ContactInfo