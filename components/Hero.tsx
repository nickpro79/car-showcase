import React from 'react'
import Image from "next/image";
import CustomButton from './CustomButton';
const Hero = () => {
  return (
    <div className='hero'>
        <div className='flex-1 pt-36 padding-x'>
            <h1 className='hero__title'>
            Discover, reserve, or lease a vehicle - quickly and easily
            </h1>

            <p className="hero__subtitle">
            Simplify your vehicle reservation process with our effortless booking process.
            </p>

            <CustomButton />
        </div>
      
    </div>
  )
}

export default Hero
