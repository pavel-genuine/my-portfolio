import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
       <div className='bg-neutral'>
            <div className=' p-[10%]'>
            <p className='text-[aqua] text-2xl'>
            Hi, I am,
            </p> <br />
            <h1 className='banner-text text-6xl text-[#b8cccc] font-bold'>
                Md Joynul Abedin.
            </h1> <br />
            <h1 className='banner-text text-6xl font-bold text-[#839c9c]'>
                I Build Things for Web.
            </h1> <br />
            <p className='text-[#b8cccc]'>
            I’m a web app developer specializing in building (and occasionally
            </p>
            <p  className='text-[#b8cccc]'>  designing) exceptional digital experiences. Currently,
            </p>
            <p className='text-[#b8cccc]'>
            I’m focused on building accessible, human-centered products.
            </p>
        </div>
       </div>
    );
};

export default Banner;