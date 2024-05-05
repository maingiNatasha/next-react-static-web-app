"use client";
import React from 'react';
import { links } from '../../localData/navLinks';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import classNames from 'classnames';
import { motion } from 'framer-motion';

const Links = () => {
	const pathname = usePathname();

	return (
		<ul className='flex items-center md:space-x-6 lg:space-x-10'>
			{links.map((link) => (
				<motion.li
					whileHover={{
						scale: 1.05,
					}}
					transition={{
						duration: 0.25,
						ease: "easeInOut"
					}}
					key={link._id}
					className={classNames(
						'font-bold hover:underline hover:font-extrabold',
						{
							'bg-white text-black p-2 rounded-md hover:text-black' : link.path === pathname,
							'hover:text-slate-400' : link.path !== pathname,
						}
					)}
				>
					<Link href={link.path}>{link.name}</Link>
				</motion.li>
			))}
		</ul>
	)
}

export default Links