"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Links from './Links';
import MobileNav from './MobileNav';

const Navbar = () => {
	return (
		<div className='flex justify-between items-center py-4'>
			<div className=''>
				<Link href="/">
					<Image src='/images/logo.png' alt='logo' width={150} height={150} priority/>
				</Link>
			</div>
			<div className='hidden md:block'>
				<Links />
			</div>
			<MobileNav />
		</div>
	)
}

export default Navbar