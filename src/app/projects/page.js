import React from 'react'
import { ArrowRight, Star, Database, ShieldCheck, Layers3, Figma } from 'lucide-react'

// Projects data setup with English descriptions
const projectsData = [
  {
    id: 1,
    title: 'RestoCare CRM Software',
    subtitle: 'Service Provisioning Platform for Restaurants',
    description: 'A comprehensive CRM solution tailored for the hospitality industry. It enables restaurant management to seamlessly source specialized services such as electricians, professional chefs, and support staff through verified partners, significantly optimizing operational efficiency.',
    tech: ['React', 'Node.js', 'PostgreSQL', 'Socket.io', 'CRM API'],
    img: '/projects/proj1.png',
    ctaLink: '#',
    rating: 4.9,
    mainIcon: Database
  },
  {
    id: 2,
    title: 'Solidarity Smart Contract',
    subtitle: 'Blockchain-based Ethical Funding Protocol',
    description: 'A robust smart contract developed using Solidity for ethical funding protocols. This project prioritizes total transparency through deep blockchain integration, ensuring secure, immutable, and safe transaction layers for all participants.',
    tech: ['Solidity', 'Ethereum', 'Web3.js', 'Hardhat', 'IPFS'],
    img: '/projects/proj2.png',
    ctaLink: '#',
    rating: 4.7,
    mainIcon: ShieldCheck
  },
  {
    id: 3,
    title: 'UI/UX Design Concept',
    subtitle: 'SaaS Platform Modernization - Figma',
    description: 'A high-fidelity Figma prototype designed for a modern SaaS platform. Following advanced engineering principles and design systems, this project showcases a perfect execution of contemporary UI components and user-centric workflows.',
    tech: ['Figma', 'Prototyping', 'Design System', 'UI/UX', 'Wireframing'],
    img: '/projects/proj3.png',
    ctaLink: '#',
    rating: 5.0,
    mainIcon: Figma
  },
]

const projects = () => {
  return (
    <main className="min-h-screen bg-white pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
  {/* --- SECTION HEADER --- */}
<div className="w-full mb-16 md:mb-24 text-center md:text-left px-4 md:px-0">
  
  {/* Subtitle: Extra spacing for that premium SaaS feel */}
  <h2 className="text-[10px] md:text-xs font-bold uppercase tracking-[0.5em] text-blue-400 mb-6 block">
    My Portfolio
  </h2>

  
  <h1 className="text-4xl sm:text-5xl lg:text-5xl font-bold text-black leading-[1.1] tracking-tighter">
    Crafting Scalable <span className="text-blue-400 italic">Solutions</span> 
    <br className="hidden " /> across diverse domains
  </h1>

  {/* Description: Max-width 4xl ensures it spreads wide but stays readable */}
  <p className="mt-8 text-lg md:text-xl lg:text-2xl text-black/70 leading-relaxed mx-auto md:mx-0 font-medium">
    Focusing on niche-specific projects to build safe, consistent, and lasting digital impacts. 
    Explore my latest work across modern frameworks and innovative engineering architectures.
  </p>
</div>

        {/* --- PROJECTS LOOP --- */}
        <div className="space-y-16 md:space-y-32">
          {projectsData.map((project, idx) => {
            return (
              <div key={project.id} className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                {/* DESCRIPTION COLUMN */}
                <div className={`space-y-8 lg:col-span-5 ${idx % 2 !== 0 ? 'lg:order-last' : ''}`}>
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-3 bg-white rounded-2xl shadow-sm border border-gray-100 text-blue-400">
                        <project.mainIcon size={22} />
                      </div>
                      <p className="text-sm font-bold text-gray-500 tracking-wider uppercase">
                        {project.subtitle}
                      </p>
                    </div>

                    <h4 className="text-3xl font-extrabold text-black leading-snug">
                      {project.title}
                    </h4>
                    <p className="mt-6 text-black text-lg leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tech.map(t => (
                      <span key={t} className="px-4 py-1.5 bg-gray-50 text-black rounded-full text-xs font-semibold tracking-wide border border-gray-200">
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Rating Display */}
                  <div className="pt-6 border-t border-gray-100">
                    <div className="inline-flex items-center gap-3 bg-white p-3 rounded-xl shadow-sm border border-gray-100">
                      <div className="flex gap-0.5 text-yellow-500">
                        <Star size={16} fill="currentColor" />
                        <Star size={16} fill="currentColor" />
                        <Star size={16} fill="currentColor" />
                        <Star size={16} fill="currentColor" />
                        <Star size={16} fill="currentColor" className="opacity-40" />
                      </div>
                      <p className="text-sm font-bold text-black">{project.rating}/5.0</p>
                    </div>
                  </div>
                </div>

                {/* SCREENSHOT COLUMN */}
                <div className="lg:col-span-7 group relative">
                  <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-80 h-80 bg-blue-50 rounded-full blur-3xl -z-10 opacity-60" />

                  <div className="aspect-[16/10] bg-white border border-gray-100 rounded-[2.5rem] overflow-hidden shadow-2xl shadow-blue-400/5 group-hover:shadow-blue-400/10 transition-all duration-500 p-3 md:p-4">
                    <div className="relative w-full h-full rounded-[1.8rem] overflow-hidden bg-gray-50">
                      <img
                        src={project.img}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500 flex items-center justify-center">
                        <div className="w-16 h-16 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center text-blue-400 shadow-xl transform scale-0 group-hover:scale-100 transition-transform duration-500">
                          <Layers3 size={28} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            )
          })}
        </div>

        {/* --- BOTTOM CTA SECTION --- */}
        <div className="mt-32 p-12 bg-white rounded-[2.5rem] border-2 border-gray-100 shadow-xl text-center relative overflow-hidden group">
          <div className="absolute -inset-4 bg-blue-50 rounded-[2.5rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          
          <div className="relative z-10">
            <h4 className="text-3xl font-extrabold text-black leading-tight">
              Let's Talk About Niche-Specific <span className="text-blue-400 italic">Projects</span>
            </h4>
            <p className="mt-6 text-black text-lg max-w-xl mx-auto">
              Transforming innovative ideas into scalable realities through modern frameworks and sound engineering principles to deliver sustainable results.
            </p>
            <a href="/contact" className="mt-10 inline-flex items-center gap-2 px-10 py-4 bg-blue-400 text-white rounded-full text-lg font-bold hover:bg-blue-500 transition-all active:scale-95 shadow-lg shadow-blue-400/20">
              Get started now <ArrowRight size={20} />
            </a>
          </div>
        </div>

      </div>
    </main>
  )
}

export default projects