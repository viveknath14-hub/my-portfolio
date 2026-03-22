import React from 'react'
import { ArrowRight, Smartphone, Cpu, ReceiptText } from 'lucide-react'
import Image from 'next/image'

// 1. Reusable Animated Card Component
const AnimatedCard = ({ title, description, icon: Icon }) => {
  return (
    <div className="relative group">
      {/* Moving Border logic (globals.css wali class) */}
      <div className="relative p-[1px] overflow-hidden rounded-[20px] animate-border-spin bg-transparent">
        
        {/* Card Content */}
        <div className="bg-white p-8 rounded-[19px] h-full flex flex-col items-center text-center lg:items-start lg:text-left transition-all duration-300">
          <div className="w-12 h-12 bg-blue-400/10 rounded-full flex items-center justify-center mb-6">
            <Icon className="text-blue-400 w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold mb-3 text-white" dangerouslySetInnerHTML={{ __html: title }} />
          <p className="text-black text-sm leading-relaxed">
            {description}
          </p>
        </div>

      </div>
    </div>
  )
}

function Features() {
  // 2. Data Array for features section and cards
  const featuresData = [
    {
      icon: Smartphone,
      title: "Mobile <br/> Applications",
      description: "Innovative mobile apps carefully tailored to your special needs."
    },
    {
      icon: Cpu,
      title: "Integration <br/> With Devices",
      description: "Seamless device integration designed to simplify your experience."
    },
    {
      icon: ReceiptText,
      title: "Billing <br/> Systems",
      description: "Smart billing systems built to simplify financial management."
    }
  ];

  return (
    <section className="w-full bg-white text-black py-20 px-6 md:px-20">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* LEFT COLUMN */}
        <div className="lg:col-span-7 space-y-12">
          <div className="max-w-xl space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Discover All The Powerful <br />
              <span className='text-vivd-violet italic text-blue-400'>Codespot Features</span> 
            </h2>
            <p className="text-black text-lg leading-relaxed">
              Unlock powerful features designed to streamline workflows, enhance collaboration, 
              spark innovation, and help your ideas reach the world faster.
            </p>
          </div>

          {/* 3. Mapping through data to render AnimatedCards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuresData.map((item, index) => (
              <AnimatedCard 
                key={index}
                icon={item.icon}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </div>

        {/* RIGHT COLUMN (Bada Card) */}
        <div className="lg:col-span-5 h-full relative group">
          <div className="relative p-[1px] overflow-hidden rounded-3xl animate-border-spin bg-transparent h-full">
          <div className="bg-white rounded-[calc(1.5rem-1px)] p-10 h-full flex flex-col justify-between overflow-hidden relative z-10">
            <div className="relative w-full aspect-square mb-8 flex justify-center items-center">
              <div className="absolute w-40 h-40 bg-blue-400/20 blur-[80px] rounded-full"></div>
              <Image 
                src="/3d assets/Ripple.png"
                alt="Ripple 3d asset"
                width={400}
                height={400}
                className="object-contain animate-float"
              />
            </div>

            <div className="space-y-6 text-center">
              <h3 className="text-2xl font-bold">Where Privacy Meets <br /> Performance Excellence</h3>
              <p className="text-black text-sm max-w-xs mx-auto">
                Designed to provide privacy, reliability, and security for modern businesses everywhere.
              </p>
              <button className="bg-blue-400/50 hover:bg-blue-400/30 text-black font-bold py-3 px-8 rounded-xl flex items-center gap-2 mx-auto transition-all">
                Get Started <ArrowRight size={18} />
              </button>
            </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Features;