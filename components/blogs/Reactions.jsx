import React from 'react';
import { BiSolidLike } from "react-icons/bi";
import { FcLike } from "react-icons/fc";
import { FaComment } from "react-icons/fa";
import { FaShareFromSquare } from "react-icons/fa6";
import AnimatedDiv from '../AnimatedDiv';

const Reactions = ({ reactions }) => {
    return (
        <AnimatedDiv>
            <div className='grid grid-cols-2 md:grid-cols-3 gap-4'>
                <div className='flex items-center hover:text-sky-500/75'>
                    <BiSolidLike size={30} className='mr-2' />
                    <span className='mr-1'>{reactions?.likes}</span>
                    <span>Likes</span>
                </div>
                <div className='flex items-center hover:text-sky-500/75'>
                    <FaComment size={30} className='mr-2' />
                    <span className='mr-1'>{reactions?.comments}</span>
                    <span>Comments</span>
                </div>
                <div className='flex items-center hover:text-sky-500/75'>
                    <FaShareFromSquare size={30} className='mr-2' />
                    <span className='mr-1'>{reactions?.shares}</span>
                    <span>Shares</span>
                </div>
            </div>
        </AnimatedDiv>
    )
}

export default Reactions