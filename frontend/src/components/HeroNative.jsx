import React from 'react'
import heroImg from '../assets/native-hero.png'

const HeroNative = () => {
  return (
    <div className='w-full px-4 pt-16 sm:px-10 lg:px-16'>
      <div className='mx-auto max-w-7xl flex flex-col sm:flex-row border border-gray-300 rounded-md overflow-hidden'>
        {/* Native left */}
        <div className='w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0 px-6 sm:px-8 lg:px-10'>
            <div className='text-[#414141]'>
                <div className='flex items-center gap-2'>
                    <p className='w-8  md:w-11 h-[2px] bg-[#414141]'></p>
                    <p className='font-medium text-sm md:text-base'>Latest Arrivals</p>
                </div>
                <h1 className='prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed'>Royal Elite</h1>
                <div className='flex items-center gap-2'>
                    <p className='text-semibold text-sm md:text-base '>SHOP NOW</p>
                    <p className='w-8  md:w-11 h-[2px] bg-[#414141]'></p>
                </div>
            </div>
        </div>

        {/* HERO RIGHT SIDE  */}
        <img className='w-full sm:w-1/2 object-cover' src={heroImg} alt='Latest Arrivals'/>
      </div>
    </div>
  )
}

export default HeroNative
