import React from 'react'
import { ArrowRight, Star, Database, ShieldCheck, Layers3, Figma } from 'lucide-react'

const projectsData = [
  {
    id: 1,
    title: 'RestoCare CRM Software',
    subtitle: 'Service Provisioning Platform',
    description: 'A comprehensive CRM solution tailored for the hospitality industry. It enables restaurant management to seamlessly source specialized services, significantly optimizing operational efficiency.',
    tech: ['React', 'Node.js', 'PostgreSQL', 'Socket.io'],
    img: '/projects/proj1.png',
    ctaLink: '#',
    rating: 4.9,
    mainIcon: Database
  },
  {
    id: 2,
    title: 'Solidarity Smart Contract',
    subtitle: 'Blockchain Funding Protocol',
    description: 'A robust smart contract developed using Solidity for ethical funding protocols. This project prioritizes total transparency through deep blockchain integration and immutable transaction layers.',
    tech: ['Solidity', 'Ethereum', 'Web3.js', 'Hardhat'],
    img: '/projects/proj2.png',
    ctaLink: '#',
    rating: 4.7,
    mainIcon: ShieldCheck
  },
  {
    id: 3,
    title: 'UI/UX Design Concept',
    subtitle: 'SaaS Platform Modernization',
    description: 'A high-fidelity Figma prototype designed for a modern SaaS platform. showcases a perfect execution of contemporary UI components and user-centric workflows.',
    tech: ['Figma', 'Prototyping', 'Design System', 'UI/UX'],
    img: '/projects/proj3.png',
    ctaLink: '#',
    rating: 5.0,
    mainIcon: Figma
  },
]

const Projects = () => {
  return (
    <main className="min-h-screen bg-white pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        
        {/* --- SECTION HEADER --- */}
        {/* Mobile: Center, Laptop: Left & Full Width */}
        <div className="w-full mb-16 md:mb-24 text-center md:text-left">
          <h2 className="text-[10px] md:text-sm font-bold uppercase tracking-[0.4em] text-blue-400 mb-4 block">
            My Portfolio
          </h2>
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black leading-[1.1] tracking-tight">
            Crafting Scalable <span className="text-blue-400 italic">Solutions</span> <br className="hidden md:block" /> across diverse domains
          </h3>
          <p className="mt-8 text-base md:text-xl text-black/80 leading-relaxed max-w-4xl mx-auto md:mx-0 font-medium">
            Focusing on niche-specific projects to build safe, consistent, and lasting digital impacts. Explore my latest work across modern frameworks and innovative engineering architectures.
          </p>
        </div>

        {/* --- PROJECTS LOOP --- */}
        <div className="space-y-20 md:space-y-40">
          {projectsData.map((project, idx) => (
            <div key={project.id} className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-16 items-center">
              
              {/* DESCRIPTION COLUMN */}
              {/* order-last on mobile ensures image comes first, then text */}
              <div className={`space-y-6 md:space-y-8 lg:col-span-5 text-center md:text-left ${idx % 2 !== 0 ? 'lg:order-last' : 'lg:order-first'}`}>
                <div className="flex flex-col md:flex-row items-center gap-3 mb-2">
                  <div className="p-3 bg-white rounded-2xl shadow-sm border border-gray-100 text-blue-400">
                    <project.mainIcon size={20} />
                  </div>
                  <p className="text-[11px] font-bold text-gray-500 tracking-widest uppercase">
                    {project.subtitle}
                  </p>
                </div>
                
                <h4 className="text-2xl md:text-4xl font-extrabold text-black leading-tight">
                  {project.title}
                </h4>
                <p className="text-black/70 text-base md:text-lg leading-relaxed max-w-2xl mx-auto md:mx-0">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap justify-center md:justify-start gap-2 pt-2">
                  {project.tech.map(t => (
                    <span key={t} className="px-3 py-1 bg-gray-50 text-black rounded-full text-[10px] md:text-xs font-bold border border-gray-200 uppercase tracking-tighter">
                      {t}
                    </span>
                  ))}
                </div>

                {/* Rating */}
                <div className="pt-6 border-t border-gray-100 flex justify-center md:justify-start">
                  <div className="inline-flex items-center gap-3 bg-white p-2.5 px-4 rounded-xl shadow-sm border border-gray-100">
                    <div className="flex gap-0.5 text-yellow-500">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={14} fill="currentColor" className={i === 4 ? "opacity-30" : ""} />
                      ))}
                    </div>
                    <p className="text-xs font-bold text-black">{project.rating}/5.0</p>
                  </div>
                </div>
              </div>

              {/* SCREENSHOT COLUMN */}
              <div className="lg:col-span-7 group relative w-full">
                {/* Decorative Blob - Hidden on very small screens for performance */}
                <div className="hidden sm:block absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-64 h-64 bg-blue-50 rounded-full blur-3xl -z-10 opacity-60" />
                
                {/* Project Frame */}
                <div className="aspect-[16/10] bg-white border border-gray-100 rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden shadow-2xl shadow-blue-400/5 group-hover:shadow-blue-400/15 transition-all duration-500 p-2 md:p-4">
                  <div className="relative w-full h-full rounded-[1rem] md:rounded-[1.8rem] overflow-hidden bg-gray-50">
                    <img 
                      src={project.img} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-blue-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                        <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-blue-400 shadow-xl transform scale-0 group-hover:scale-100 transition-transform duration-500">
                            <Layers3 size={24} />
                        </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* --- BOTTOM CTA --- */}
        <div className="mt-24 md:mt-40 p-8 md:p-16 bg-white rounded-[2rem] md:rounded-[3rem] border border-gray-100 shadow-2xl shadow-blue-400/10 text-center relative overflow-hidden group">
          <div className="relative z-10">
            <h4 className="text-2xl md:text-5xl font-extrabold text-black leading-tight">
              Let's Talk About Niche-Specific <br /> <span className="text-blue-400 italic">Projects</span>
            </h4>
            <p className="mt-6 text-black/70 text-base md:text-lg max-w-xl mx-auto">
              Transforming innovative ideas into scalable realities through modern frameworks and sound engineering principles.
            </p>
            <a href="/contact" className="mt-10 inline-flex items-center gap-2 px-8 md:px-12 py-4 bg-blue-400 text-white rounded-full text-base md:text-lg font-bold hover:bg-blue-500 transition-all active:scale-95 shadow-lg shadow-blue-400/20">
              Get started now <ArrowRight size={20} />
            </a>
          </div>
        </div>

      </div>
    </main>
  )
}

export default Projects