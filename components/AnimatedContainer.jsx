"use client";
import React from 'react';
import { motion } from 'framer-motion';

const AnimatedContainer = ({ children }) => {
    const containerVariants = {
        initial: {
            opacity: 0,
            x: -100
        },
        animate: {
            opacity: 1,
            x: 0
        }
    }

    return (
        <motion.div
            variants={containerVariants}
            initial='initial'
            whileInView='animate'
            transition={{
                duration: 0.5,
                ease: 'easeInOut',
                // ease: [0.43, 0.13, 0.23, 0.96]
            }}
            viewport={{ once: true }}
        >
            {children}
        </motion.div>
    )
}

export default AnimatedContainer