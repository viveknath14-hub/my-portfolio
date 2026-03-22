import React from 'react'

const TechS = () => {
  return (
    <>
      {/* Tech Stack / Brand Section */}
      <section className="w-full py-12 md:py-20 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-center text-[10px] md:text-xs font-bold text-black uppercase tracking-[0.3em] md:tracking-[0.4em] mb-12 md:mb-16 opacity-60">
            Experience with modern Tech Stack
          </p>
          
          {/* 
              
              - justify-center (mobile par icons center rahenge)
              - md:justify-between (laptop par poori width cover karenge)
              - gap-x-12 (mobile par icons ke beech thoda gap rahega)
          */}
          <div className="flex scroll-reveal-img flex-wrap justify-center md:justify-between items-center gap-x-12 gap-y-10 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
            
            {/* MEAN Stack */}
            <div className="h-12 md:h-16 flex items-center">
              <img src="/3d assets/mean.png" alt="MEAN Stack" className="h-full w-auto object-contain scale-110 md:scale-125" />
            </div>

            {/* MERN Stack */}
            <div className="h-12 md:h-16 flex items-center">
              <img src="/3d assets/mern.png" alt="MERN Stack" className="h-full w-auto object-contain scale-110 md:scale-125" />
            </div>

            {/* React */}
            <div className="h-10 md:h-14 flex items-center">
              <img src="/3d assets/react.webp" alt="React" className="h-full w-auto object-contain" />
            </div>

            {/* Next.js */}
            <div className="h-8 md:h-12 flex items-center">
              <img src="/3d assets/next.webp" alt="Next.js" className="h-full w-auto object-contain" />
            </div>

          </div>
        </div>
      </section>
    </>
  )
}

export default TechS