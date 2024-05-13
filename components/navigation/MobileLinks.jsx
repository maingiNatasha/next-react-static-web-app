"use client";
import React from 'react';
import { links } from '../../localData/navLinks';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import classNames from 'classnames';
import { motion } from 'framer-motion'

const MobileLinks = ({ toggleNavbar }) => {
    const pathname = usePathname();

    const listVariants = {
        hidden: {
            opacity: 0,
            x: -100
        },
        visible: {
            opacity: 1,
            x: 0
        }
    };

    return (
        <motion.ul
            initial='hidden'
            whileInView='visible'
            variants={{
                visible: {
                    transition: {
                        staggerChildren: 0.25,
                    }
                }
            }}
            viewport={{ once: true }}
            className='space-y-10 p-12'
        >
            {links.map((link) => (
                <motion.li
                    variants={listVariants}
                    whileHover={{
                        scale: 1.05,
                        transformOrigin: 'center',
                    }}
                    transition={{
                        duration: 0.25,
                        ease: "easeInOut"
                    }}
                    key={link._id}
                    className={classNames(
                        'font-bold hover:underline hover:font-extrabold',
                        {
                            'bg-white text-black p-2 rounded-md' : link.path === pathname,
                            'hover:text-slate-500' : link.path !== pathname
                        }
                    )}
                >
                    <Link href={link.path} onClick={toggleNavbar}>{link.name}</Link>
                </motion.li>
            ))}
        </motion.ul>
    )
}

export default MobileLinks