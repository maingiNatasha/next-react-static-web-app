"use client";
import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

const AnimatedDiv = ({ children }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const control = useAnimation();

    const divVariants = {
        hidden: {
            opacity: 0,
            y: 75
        },
        visible: {
            opacity: 1,
            y: 0
        }
    }

    useEffect(() => {
        if (isInView) {
            control.start('visible');
        } else {
            control.start('hidden');
        }
    }, [control, isInView]);

    return (
        <motion.div
            ref={ref}
            variants={divVariants}
            initial="hidden"
            animate={control}
            transition={{
                duration: 0.5,
                delay: 0.25
            }}
            className='py-4 lg:py-10'
        >
            {children}
        </motion.div>
    )
}

export default AnimatedDiv