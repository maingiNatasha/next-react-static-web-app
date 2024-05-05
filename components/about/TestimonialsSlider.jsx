import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import { BsPersonCircle } from "react-icons/bs";
import Image from 'next/image';

const TestimonialsSlider = () => {
    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className='slider-container italic pb-8'>
            <Slider {...settings} className='space-x-4'>
                <div className='p-6 flex items-center justify-center rounded-md border-sky-500 border-2'>
                    <blockquote>
                        <p className='my-4 text-center'>
                            <span className='text-2xl mr-1'>&ldquo;</span>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                            molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                            numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                            optio, eaque rerum! Provident similique accusantium nemo autem.
                            <span className='text-2xl ml-1'>&rdquo;</span>
                        </p>
                    </blockquote>
                    <div className='flex items-center justify-center my-6'>
                        <Image src='/images/profile-image.jpg' width={100} height={100} alt='profile-image' className='mr-4 rounded-full object-cover'/>
                        <div>
                            <h3>John Doe</h3>
                            <h5>CEO at EnvyTheme</h5>
                        </div>
                    </div>
                </div>
                <div className='p-6 flex items-center justify-center rounded-md border-sky-500 border-2'>
                    <blockquote>
                        <p className='my-4 text-center'>
                            <span className='text-2xl mr-1'>&ldquo;</span>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                            molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                            numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                            optio, eaque rerum! Provident similique accusantium nemo autem.
                            <span className='text-2xl ml-1'>&rdquo;</span>
                        </p>
                    </blockquote>
                    <div className='flex items-center justify-center my-6'>
                        <Image src='/profile-image.jpg' width={100} height={100} alt='profile-image' className='mr-4 rounded-full object-cover'/>
                        <div>
                            <h3>Harold Cooper</h3>
                            <h5>CEO at Evanto</h5>
                        </div>
                    </div>
                </div>
                <div className='p-6 flex items-center justify-center rounded-md border-sky-500 border-2'>
                    <blockquote>
                        <p className='my-4 text-center'>
                            <span className='text-2xl mr-1'>&ldquo;</span>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                            molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                            numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                            optio, eaque rerum! Provident similique accusantium nemo autem.
                            <span className='text-2xl ml-1'>&rdquo;</span>
                        </p>
                    </blockquote>
                    <div className='flex items-center justify-center my-6'>
                        <Image src='/profile-image.jpg' width={100} height={100} alt='profile-image' className='mr-4 rounded-full object-cover'/>
                        <div>
                            <h3>Elizabeth Keen</h3>
                            <h5>CFO at EnvyTheme</h5>
                        </div>
                    </div>
                </div>
                <div className='p-6 flex items-center justify-center rounded-md border-sky-500 border-2'>
                    <blockquote>
                        <p className='my-4 text-center'>
                            <span className='text-2xl mr-1'>&ldquo;</span>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                            molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                            numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                            optio, eaque rerum! Provident similique accusantium nemo autem.
                            <span className='text-2xl ml-1'>&rdquo;</span>
                        </p>
                    </blockquote>
                    <div className='flex items-center justify-center my-6'>
                        <Image src='/profile-image.jpg' width={100} height={100} alt='profile-image' className='mr-4 rounded-full object-cover'/>
                        <div>
                            <h3>Raymond Reddington</h3>
                            <h5>CEO at Blacklist</h5>
                        </div>
                    </div>
                </div>
            </Slider>
        </div>
    )
}

export default TestimonialsSlider