import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className='w-full px-4 pt-20 sm:px-10 lg:px-16'>
      <div className='mx-auto max-w-7xl flex flex-col md:flex-row items-center bg-[#FFF9F5] rounded-3xl overflow-hidden shadow-sm border border-orange-50'>
        {/* hero left content */}
        <div className='w-full md:w-1/2 flex flex-col justify-center py-12 md:py-20 px-8 lg:px-16'>
            <div className='max-w-md'>
                <div className='flex items-center gap-3 mb-6'>
                    <span className='w-12 h-[2px] bg-orange-300'></span>
                    <p className='font-semibold text-orange-600 tracking-widest text-xs uppercase'>Premium Baking Essentials</p>
                </div>
                <h1 className='text-4xl lg:text-6xl font-serif text-slate-800 leading-tight mb-6'>
                    Craft Your <span className='text-orange-500'>Perfect</span> Masterpiece
                </h1>
                <p className='text-slate-600 text-base md:text-lg mb-10 leading-relaxed'>
                    Discover high-quality baking tools, exquisite decorating supplies, and professional equipment tailored for every baker, from hobbyists to professionals.
                </p>
                <div className='flex flex-wrap gap-4'>
                    <Link to="/product-category" className='bg-slate-900 text-white px-8 py-3.5 rounded-full font-medium hover:bg-slate-800 transition-all shadow-md hover:shadow-lg active:scale-95'>
                        Shop Collection
                    </Link>
                    <Link to="/product-category?category=decoration" className='bg-white border border-slate-200 text-slate-700 px-8 py-3.5 rounded-full font-medium hover:bg-slate-50 transition-all shadow-sm hover:shadow-md active:scale-95'>
                        View Decorations
                    </Link>
                </div>
            </div>
        </div>

        {/* HERO RIGHT SIDE IMAGE */}
        <div className='w-full md:w-1/2 h-[350px] md:h-[650px] relative'>
            <img 
                className='w-full h-full object-cover' 
                src="https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&q=80&w=1920" 
                alt='Baking and Decoration'
            />
            {/* Subtle overlay for better text contrast on mobile if needed */}
            <div className='absolute inset-0 bg-gradient-to-r from-[#FFF9F5]/20 to-transparent md:hidden'></div>
        </div>
      </div>
    </div>
  )
}

export default Hero
