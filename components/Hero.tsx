"use client";
import React from 'react'
import Image from "next/image";
import CustomButton from './CustomButton';
const Hero = () => {
    const handleScroll = ()=>{}
  return (
    <div className='hero'>
        <div className='flex-1 pt-36 padding-x'>
            <h1 className='hero__title'>
            Discover, reserve, or lease a vehicle - quickly and easily
            </h1>

            <p className="hero__subtitle">
            Simplify your vehicle reservation process with our effortless booking process.
            </p>

            <CustomButton 
                title="Explore Cars" 
                containerStyles="bg-primary-blue text-white rounded-full mt-10"
                handleClick={handleScroll}/>
        </div>
        <div className='hero__image-container'>
            <div className='hero__image'>
                <Image src="/front_page.png" alt="front_page" fill className='object-contain'/>
                </div>
            </div>
            <div className='hero__image-overlay'></div>

    </div>
  )
}

export default Hero
