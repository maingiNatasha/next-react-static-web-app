"use client";
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const AnimatedNumber = ({ value, additionalText = null }) => {
    const [animatedValue, setAnimatedValue] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setAnimatedValue((animatedValue) => {
                const newValue = animatedValue + 1;
                return newValue > value ? value : newValue;
            });
        }, 100);

        return () => clearInterval(interval);
    }, [value]);

    return (
        <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.25 }}
        >
            {animatedValue}
            {additionalText}
        </motion.span>
    )
}

export default AnimatedNumber