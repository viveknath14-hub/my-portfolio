"use client";
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
      image: "/3d assets/Glint.png",
      // CHANGE: Unique line for this specific card [cite: 2026-03-08]
      badgeText: "Enterprise Performance Monitoring" 
    },
    {
      id: 2,
      title: "Artificial Intelligence",
      description: "We design the core infrastructure for the data-driven future.",
      colSpan: "md:col-span-4",
      image: "/3d assets/Gleam.png",
      isAI: true,
      // CHANGE: Unique line for AI [cite: 2026-03-08]
      badgeText: "Next-Gen Neural Networks" 
    },
    {
      id: 3,
      title: "UI/UX Breakdown",
      description: "We design the core infrastructure for the data-driven future.",
      colSpan: "md:col-span-4",
      image: "/3d assets/Eclipse.png",
      // CHANGE: Unique line for Design
      badgeText: "User-Centric Design Systems" 
    },
    {
      id: 4,
      title: "Tech Stack Analysis",
      description: "Comprehensive insights to enhance your software architecture.",
      colSpan: "md:col-span-4",
      image: "/3d assets/Halo.png",
      // CHANGE: Unique line for Tech Stack
      badgeText: "Scalable Tech Infrastructure" 
    }
  ];

  return (
    <section className="w-full bg-white text-black py-20 px-6 md:px-20">
      <div className="container mx-auto space-y-12">
        
        {/* Header Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center text-center">
          <h2 className="md:col-span-4 text-4xl font-bold text-black tracking-tight">
            What we <span className="text-blue-400 text-vivid-violet italic">provide</span>
          </h2>
          <p className="md:col-span-8 text-black text-xl ">
            We help build the operating system for data-driven companies.
          </p>
        </div>

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          
          {allCards.map((card) => (
            <div key={card.id} className={`${card.colSpan} relative group flex flex-col`}>
              <div className="relative p-[1px] overflow-hidden rounded-3xl h-full flex-col bg-transparent">
                
                <div className={`bg-white rounded-[23px] p-8 md:p-10 flex flex-col relative z-10 overflow-hidden border border-gray-100 shadow-sm 
                  ${card.isLarge ? 'h-[542px] justify-between' : 'h-full min-h-[300px] justify-between'}`}>
                  
                  {/* Text Container */}
                  <div className="relative z-20 space-y-4">
                    {card.isAI && (
                      <div className="w-12 h-12 bg-blue-400/50 backdrop-blur-lg rounded-xl flex items-center justify-center mb-6 border border-blue-400/20">
                        <span className="text-black font-bold">AI</span>                      
                      </div>                    
                    )}
                    <h3 className={card.isLarge ? "text-xl font-bold" : "text-xl font-bold"}>
                      {card.title}
                    </h3>
                    <p className="text-black text-lg max-w-[220px]  leading-relaxed">{card.description}</p>

                    
                  </div>

                  {/* CHANGE: Dynamic Badge Text Logic [cite: 2026-03-08] */}
                  {card.badgeText && (
                    <div className="w-fit mt-10 px-4 py-2 bg-blue-400/10 backdrop-blur-md border border-blue-400/20 rounded-xl my-4 z-20">
                      <p className="text-[10px] font-black text-blue-600 uppercase tracking-widest">
                        {card.badgeText}
                      </p>
                    </div>
                  )}

                  {/* 3D ASSET LOGIC */}
                  {card.image && (
                    <div className={`absolute -z-10 transition-all duration-700 group-hover:scale-110 
                      ${card.isLarge 
                        ? "right-[-10%] bottom-[-5%] w-[60%] h-full flex justify-end items-end" 
                        : "right-[-15%] bottom-[-5%] w-[70%] h-[60%] flex justify-end items-end" 
                      }`}
                    >
                      <Image 
                        src={card.image} 
                        alt={card.title} 
                        fill 
                        className="object-contain object-right-bottom"
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}

          {/* Security Card */}
          <div className="md:col-span-4 rounded-3xl bg-blue-400/10 backdrop-blur-md text-black p-8 flex flex-col justify-between h-full border border-blue-400/20">
            <div className="space-y-2">
              <h3 className="text-xl font-bold">Security Assessment</h3>
              <div className="text-6xl font-black text-blue-400 tracking-tighter">100%</div>
            </div>
            <div className="flex items-center justify-between mt-6">
              <p className="text-lg  text-black w-auto">Core infrastructure for the digital future.</p>
              
              </div>
            </div>
          </div>

        </div>
      
    </section>
  )
}

export default Service