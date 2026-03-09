import { Button } from '@/components/ui/button'
import GlowCard from '@/components/ui/GlowCard'
import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <main className="min-h-screen bg-white overflow-hidden pt-10">
  {/* Hero Section */}
  <section className="relative container mx-auto px-6 md:px-20 pt-10 md:pt-20 flex flex-col md:flex-row items-center justify-between min-h-[80vh]">
    
    {/* 1. Background Neon Glow Layer (Text ke peeche) */}
    <div className="absolute left-0 top-1/2 -translate-y-1/2 z-0 opacity-70 blur-[80px] md:blur-[120px] pointer-events-none isolate transform-gpu">
      {/* GlowCard ko yahan as a "blob" use karenge */}
      <div className="scale-[2.5] md:scale-[2.5] backface-hidden"> 
         <GlowCard /> 
      </div>
    </div>

    {/* 2. Left Side: Content (Relative aur z-10 taaki upar dikhe) */}
    <div className="relative z-10 flex-1 px-20 space-y-8 text-center md:text-left">
      <h1 className="text-5xl font-bold text-black leading-tight">
        Transforming Global Landscapes with Visionary Software and Dedicated<br /> 
        <span className="text-vivid-violet italic text-blue-400">Passion</span>
      </h1>
      
      <p className="text-black text-lg max-w-md">
        Creative developer exploring the intersection of design and code with Next.js and 3D assets.
      </p>

      <Button className="bg-blue-200 text-black h-9 px-8 py-4 rounded-full font-medium hover:bg-blue-300 transition-all shadow-sm">
        Get Started
      </Button>

      <div className="card-container w-full mx-w-xs md:mx-wd-md mx-auto md-mx-0 lg:mx-w-md flex flex-col sm:flex-row gap-3">

      <div className="card flex-1 py-2 px-6 lg:h-10 md:p-4 rounded-full bg-blue-200 shadow-sm text-black text-center flex items-center justify-center font-medium mb-5">
      <p className='text-sm md:text-sm'>100% code quality</p>
      </div>
      <div className="card flex-1 w-full py-2 px-6 lg:h-10 rounded-full bg-blue-200 shadow-sm text-black text-center flex items-center justify-center font-medium">
      <p className='text-sm md:text-sm'>10+ years of coding experience</p>
      </div>
      </div>
    </div>

    
        {/* Right Side: 3D Asset */}
        <div className="md:w-1/2 flex justify-center mt-12 md:mt-0">
          <div className="relative ">
            <Image
              src="/3d assets/Breeze.png" // Folder move karne ke baad sahi path dein
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