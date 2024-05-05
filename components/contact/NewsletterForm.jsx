"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const NewsletterForm = () => {
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);

    const handleOnSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        setEmail("");

        setTimeout(() => {
            setLoading(false);
        }, 3000);
    };

    return (
        <form className='p-6 m-4 lg:m-6' onSubmit={handleOnSubmit}>
            <div className='flex flex-col'>
                <input className='p-4 placeholder:text-black placeholder:font-bold rounded-md' id='email' name='email' type="text" placeholder='Enter your Email address' value={email} onChange={(e) => setEmail(e.target.value)} required />
                <div className='flex items-center justify-center'>
                    <motion.button
                        whileHover={{
                            scale: 1.1,
                            y: -5,
                            opacity: 0.8
                        }}
                        whileTap={{
                            scale:0.9
                        }}
                        transition={{
                            duration: 0.25,
                            ease: 'easeInOut'
                        }}
                        className='bg-sky-500/70 py-3 px-8 rounded-md font-bold mt-6'
                        type='submit'
                        disabled={loading}
                    >
                        {loading ? "Signing up..." : "Sign Up"}
                    </motion.button>
                </div>
            </div>
        </form>
    )
}

export default NewsletterForm