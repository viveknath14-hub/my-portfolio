import { Button } from '@/components/ui/button'
import GlowCard from '@/components/ui/GlowCard'

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
const About = () => {
  return (
    <main className="min-h-screen bg-white overflow-hidden pt-10">
  {/* Hero Section */}
  <section className="relative container mx-auto px-6 md:px-20 pt-10 md:pt-20 flex flex-col md:flex-row items-center justify-between min-h-[80vh]">
    
    {/* 1. Background Neon Glow Layer (Text ke peeche) */}
    <div className="absolute left-0 top-1/2 -translate-y-1/2 z-0 opacity-70 blur-[80px] md:blur-[120px] pointer-events-none isolate transform-gpu">
      {/* GlowCard ko yahan as a "blob" use karna hoga */}
      <div className="scale-[2.5] md:scale-[2.5] backface-hidden"> 
         <GlowCard /> 
      </div>
    </div>

    {/* 2. Left Side: Content */}
<div className="relative z-10 flex-1 px-6 md:px-20 space-y-6 text-center md:text-left">
  
  <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black leading-tight tracking-tight">
    Transforming Global Landscapes with Visionary Software and Dedicated<br className=" md:block" />
    <span className="text-blue-400 italic">Passion</span>
  </h1>
  
  <p className="text-black text-lg max-w-md mx-auto md:mx-0">
    Creative developer exploring the intersection of design and code with Next.js, 3d assets and other technologies.
  </p>

  {/* --- GAP FIX: Teeno buttons ab ek hi container mein hain --- */}
  <div className="flex flex-col sm:flex-row gap-3 w-full max-w-lg mx-auto md:mx-0 mt-6">
    
    {/* Card 1 */}
    <div className="flex-1 flex items-center justify-center px-6 py-3 rounded-full bg-blue-400/30">
      <p className="text-xs md:text-sm font-semibold text-black whitespace-nowrap">
        100% Code Quality
      </p>
    </div>

    {/* Card 2 */}
    <div className="flex-1 flex items-center justify-center px-6 py-3 rounded-full bg-blue-400/30">
      <p className="text-xs md:text-sm font-semibold text-black whitespace-nowrap">
        10+ Years Experience
      </p>
    </div>

    {/* get started shifted above */}
    <Link href="/contact" className="flex-1 w-full sm:w-auto">
      <Button 
        className="w-full h-full px-10 py-3 rounded-full bg-blue-400/30 border-none text-black font-semibold hover:bg-blue-200 hover:shadow-md transition-all active:scale-95 shadow-sm min-h-[48px]"
      >
        Get Started
      </Button>
    </Link>
    
  </div>
</div>

    
        {/* Right Side: 3D Asset */}
        <div className="md:w-1/2 flex justify-center mt-12 md:mt-0">
          <div className="relative ">
            <Image
              src="/3d assets/Breeze.png" 
              alt="3D Asset" 
              width={500} 
              height={500} 
              className="animate-float"
              priority= {true}
              quality={75}
            />

          </div>
        </div>        
      </section>

       

    </main>
  )
}

export default About