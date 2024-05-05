import React from 'react';
import { useState } from 'react';
import { MdOutlineClose } from "react-icons/md";
import { IoMenu } from "react-icons/io5";
import MobileLinks from './MobileLinks';
import { motion, AnimatePresence } from 'framer-motion';
import classNames from 'classnames';

const MobileNav = () => {
    const [isOpen, setIsOpen] = useState(false);

	const toggleNavbar = () => {
		setIsOpen(!isOpen);
	}

    return (
        <>
            <div className='md:hidden'>
                <motion.button
                    whileHover={{
						scale: 1.1,
						y: -3
					}}
					whileTap={{ scale: 0.9 }}
					transition={{
						duration: 0.25,
						ease: "easeInOut",
					}}
                    onClick={toggleNavbar}
                >
                    {isOpen ? <MdOutlineClose size={30} /> : <IoMenu size={30} />}
                </motion.button>
            </div>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{
                            opacity: 0,
                            x: '-100%'
                        }}
                        animate={{
                            opacity: isOpen ? 1 : 0,
                            x: isOpen ? '0%' : '-100%'
                        }}
                        transition={{
                            duration: 0.5,
                            ease: 'easeInOut',
                        }}
                        exit={{
                            opacity: 0,
                            x: '-100%'
                        }}
                        className={classNames(
                            'md:hidden',
                            {
                                'fixed left-0 top-0 w-[60%] h-full z-50 bg-[#0D0C22]' : isOpen,
                                'w-[60%] fixed top-0 bottom-0 left-[-100%] z-50' : !isOpen,
                            }
                        )}
                    >
                        <MobileLinks toggleNavbar={toggleNavbar} />
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}

export default MobileNav