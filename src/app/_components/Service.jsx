import React from 'react'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

const Service = () => {
  const allCards = [
    {
      id: 1,
      title: "Optimizing Business Performance",
      description: "An intelligent system designed for data-driven teams to measure, manage, and amplify performance.",
      colSpan: "md:col-span-8",
      isLarge: true,
      image: "/3d assets/Glint.png"
    },
    {
      id: 2,
      title: "Artificial Intelligence",
      description: "We design the core infrastructure for the data-driven future.",
      colSpan: "md:col-span-4",
      image: "/3d assets/Gleam.png",
      isAI: true
    },
    {
      id: 3,
      title: "UI/UX Breakdown",
      description: "We design the core infrastructure for the data-driven future.",
      colSpan: "md:col-span-4",
      image: "/3d assets/Eclipse.png" // Mark: Image for Small Card
    },
    {
      id: 4,
      title: "Tech Stack Analysis",
      description: "Comprehensive insights to enhance your software architecture.",
      colSpan: "md:col-span-4",
      image: "/3d assets/Halo.png" // Mark: Image for Small Card
    }
  ];

  return (
    <section className="w-full bg-white text-black py-20 px-6 md:px-20">
      <div className="container mx-auto space-y-12">
        
        {/* Header Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          <h2 className="md:col-span-4 text-4xl font-bold text-blue-500">What we provide</h2>
          <p className="md:col-span-8 text-black text-lg">
            We help build the operating system for data-driven companies.
          </p>
        </div>

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          
          {allCards.map((card) => (
            <div key={card.id} className={`${card.colSpan} relative group flex flex-col`}>
              {/* Animation Wrapper */}
              <div className="relative p-[1px] overflow-hidden rounded-3xl animate-border-spin h-full flex-col bg-transparent">
                
                {/* Card Content Box - CHANGE: justify-between used to push text up and image down */}
                <div className={`bg-white rounded-[23px] p-8 md:p-10 flex flex-col relative z-10 overflow-hidden border border-gray-100 
                  ${card.isLarge ? 'h-[542px] justify-between' : 'h-full min-h-[300px] justify-between'}`}>
                  
                  {/* Text Container: z-20 so it stays above the asset */}
                  <div className="relative z-20 space-y-4">
                   
                    {card.isAI && (
                      
                      <div className="w-12 h-12 bg-blue-400/30 backdrop-blur-lg rounded-xl flex items-center justify-center mb-6">
                        <span className="text-black font-bold">AI</span>                       
                      </div>                    
                    )}
                    <h3 className={card.isLarge ? "text-3xl font-bold" : "text-xl font-bold"}>
                      {card.title}
                    </h3>
                    {/* CHANGE: text-gray-500 for secondary text hierarchy */}
                    <p className="text-gray-500 text-sm max-w-[220px]">{card.description}</p>

                    <button className="text-black font-semibold flex items-center gap-2 group mt-4">
                      {card.isLarge ? "Get Started Now" : "More Information"} 
                      <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                    </button>
                    
                  </div>

                  {card.image && (
                  <div className="w-full mt-10 px-4 h-30 py-2 bg-blue-400/30 backdrop-blur-xs border border-white/40 rounded-xl shadow-sm my-4">
                    <p className="text-[10px] font-bold text-blue-600 uppercase tracking-wider">
                      Enterprise AI Integrated
                    </p>
                  </div>
                      )}
                   

                  {/* 3D ASSET LOGIC: Now renders for any card with an image */}
                  {card.image && (
                    <div className={`absolute -z-10 transition-all duration-700 group-hover:scale-105 
                      ${card.isLarge 
                        ? "right-[-23%] bottom-[-5%] w-full md:w-[60%] h-[300px] md:h-full flex justify-end item-end" 
                        : "right-[-23%] bottom-[-5%] w-[70%] h-[60%] flex justify-end items-end" // Overflow look for small cards
                      }`}
                    >
                      <Image 
                        src={card.image} 
                        alt={card.title} 
                        fill 
                        className={`object-contain ${card.isLarge ? "object-right-bottom" : "object-right-bottom"}`}
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}

          {/* Security Assessment Card */}
          <div className="md:col-span-4 rounded-3xl bg-blue-400/30 backdrop-blur-xs text-black p-8 flex flex-col justify-between h-full border border-gray-100">
            <div className="space-y-2">
              <h3 className="text-xl font-bold">Security Assessment</h3>
              <div className="text-6xl font-black">100%</div>
            </div>
            <div className="flex items-center justify-between mt-6">
              <p className="text-xs opacity-80 max-w-[150px]">We design the core infrastructure for the future.</p>
              <div className="flex -space-x-2">
                {[1,2,3].map(i => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
                    <Image src={`/users/user-${i}.jpg`} alt="user" width={32} height={32} />
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Service