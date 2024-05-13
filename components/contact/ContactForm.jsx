"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const initialState =  {
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
};

const ContactForm = () => {
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState(initialState);
    const { name, email, phone, subject, message } = formData;

    const handleOnChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleOnSubmit = (e) => {
        e.preventDefault();
        setFormData(initialState);
        setLoading(true);

        setTimeout(() => {
            setLoading(false);
        }, 3000);
    };

    return (
        <form className='p-6 md:p-10 shadow-sky-500/60 shadow-md rounded-md' onSubmit={handleOnSubmit}>
            <div className='flex flex-col space-y-6'>
                <input id='name' className='w-full bg-sky-500/40 p-3 rounded-md placeholder:text-white' type='text' name='name' placeholder='Name' value={name} onChange={handleOnChange} required />
                <input id='email' className='w-full bg-sky-500/40 p-3 rounded-md placeholder:text-white' type='text' name='email' placeholder='E-mail' value={email} onChange={handleOnChange} required />
                <input id='phone' className='w-full bg-sky-500/40 p-3 rounded-md placeholder:text-white' type='text' name='phone' placeholder='Phone number' value={phone} onChange={handleOnChange} required />
                <input id='subject' className='w-full bg-sky-500/40 p-3 rounded-md placeholder:text-white' type='text' name='subject' placeholder='Subject' value={subject} onChange={handleOnChange} required />
                <textarea id='message' className='w-full bg-sky-500/40 p-3 rounded-md placeholder:text-white' name='message' placeholder='Write your message...' rows={6} cols={30} value={message} onChange={handleOnChange} required></textarea>
                <div className='flex items-center justify-center'>
                    <motion.button
                        whileHover={{
                            scale: 1.1,
                            y: -5,
                            opacity: 0.8
                        }}
                        whileTap={{
                            scale: 0.9
                        }}
                        transition={{
                            duration: 0.25,
                            ease: 'easeInOut'
                        }}
                        className='bg-sky-500/60 p-3 rounded-md md:w-[40%] font-bold mt-4'
                        type='submit'
                        disabled={loading}
                    >
                        {loading ? "Sending message..." : "Send message"}
                    </motion.button>
                </div>
            </div>
        </form>
    )
}

export default ContactForm