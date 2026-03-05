import React from 'react'

const TechS = () => {
  return (
        <>
    {/* Tech Stack / Brand Section */}
<section className="w-full py-12 bg-gray-50/50 border-y border-gray-100">
  <div className="container mx-auto px-6">
    {/* YE CHANGE HAI: Subtle heading text stack ke liye */}
    <p className="text-center text-sm font-medium text-gray-400 uppercase tracking-[0.2em] mb-10">
      Experience with modern Tech Stack
    </p>
    
    {/* Logo Grid */}
    {/* YE CHANGE HAI: flex-wrap lagaya hai taaki mobile par logos niche aa jayein aur laptop par ek line mein rahein */}
    <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 lg:gap-24 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
      
      {/* Har logo ko ek simple div mein rakha hai alignment ke liye */}
      <div className='h-20 w-auto flex items-center'>
         <img src="/3d assets/mean.png" alt="Tech 1" className="h-full w-auto object-contain" />
      </div>

      <div className="h-20 w-auto flex items-center">
         <img src="/3d assets/mean.png" alt="Tech 2" className="h-full object-contain" />
      </div>

      <div className="h-20 w-auto flex items-center">
         <img src="/3d assets/mean.png" alt="Tech 3" className="h-full object-contain" />
      </div>

      <div className="h-20 w-auto flex items-center">
         <img src="/3d assets/mean.png" alt="Tech 4" className="h-full object-contain" />
      </div>

      <div className="h-20 w-auto flex items-center">
         <img src="/3d assets/mean.png" alt="Tech 5" className="h-full object-contain" />
      </div>

    </div>
  </div>
</section>
</>
  )
}

export default TechS