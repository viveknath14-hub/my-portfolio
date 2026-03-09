import { main } from 'framer-motion/client'
import { Activity, ArrowRight, Code2, Cpu, Database, Globe, Layers, Layout, Play, Rocket, Shield, Smartphone, Tablet, Zap } from 'lucide-react'
import React from 'react'
import Specs from '../_components/Specs'

const page = () => {

  const aboutData = [
    { 
      title: "Global Connectivity", 
      desc: "Deploy your applications on a global scale with our optimized edge network.", 
      icon: <Globe /> 
    },
    { 
      title: "Rapid Deployment", 
      desc: "Accelerate your workflow with automated pipelines and instant preview links.", 
      icon: <Rocket /> 
    },
    { 
      title: "Enterprise Security", 
      desc: "Protect your data with end-to-end encryption and advanced threat detection.", 
      icon: <Shield /> 
    },
    { 
      title: "High Performance", 
      desc: "Experience lightning-fast speeds with our next-gen computing infrastructure.", 
      icon: <Cpu /> 
    },
  ];

const mobileAppData = [
  { 
    title: "Cross-Platform Apps", 
    desc: "Build once and deploy on both iOS and Android using React Native and Flutter.", 
    icon: <Smartphone /> 
  },
  { 
    title: "Native Performance", 
    desc: "Experience smooth, high-frame-rate interactions optimized for every mobile device.", 
    icon: <Activity /> 
  },
  { 
    title: "Adaptive UI/UX", 
    desc: "Beautifully crafted interfaces that scale perfectly from small phones to large tablets.", 
    icon: <Tablet /> 
  },
  { 
    title: "Offline First", 
    desc: "Robust local data storage and synchronization for a seamless offline experience.", 
    icon: <Layers /> 
  },
];

  return (
    <main>
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* --- LEFT COLUMN: CONTENT & VIDEOS --- */}
          <div className="space-y-10">
            <div className="max-w-xl">
              <h2 className="text-4xl md:text-4xl font-bold text-black leading-tight tracking-tight">
                Expert Development Services for Growth and <span className="text-blue-400 text-vivid-violet italic">Performance</span>
              </h2>
              <p className="mt-6 text-lg text-black leading-relaxed">
                From concept to deployment, we build reliable, future-ready solutions that drive sustainable business results.
              </p>
            </div>

            {/* Video Placeholders Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { img: "https://startersites.io/blocksy/codespot/wp-content/uploads/2025/10/services-page-image-2.webp" },
                { img: "https://startersites.io/blocksy/codespot/wp-content/uploads/2025/10/services-page-image-3.webp" }
              ].map((video, idx) => (
                <div key={idx} className="group relative aspect-video rounded-3xl overflow-hidden shadow-2xl shadow-blue-500/10 cursor-pointer">
                  <img 
                    src={video.img} 
                    alt="Service Preview" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                    <div className="w-14 h-14 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-blue-400 shadow-xl transform group-hover:scale-110 transition-transform">
                      <Play size={24} fill="currentColor" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* --- RIGHT COLUMN: FEATURES LIST --- */}
                    <div className="relative p-[1px] overflow-hidden rounded-[2.5rem] animate-border-spin bg-transparent h-full">

          <div className=" bg-white p-8 md:p-12 rounded-[2.5rem] relative z-10">
            {/* Background Accent */}
            
            
            <div className="space-y-12">
              {/* Feature 1 */}
              <div className="flex gap-6 group">
                <div className="flex-shrink-0 w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm group-hover:bg-blue-400 group-hover:text-white transition-all duration-300">
                  <Rocket size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-black mb-2">Built for Innovation</h3>
                  <p className="text-black leading-relaxed">
                    Turning ideas into scalable realities through modern frameworks and innovative engineering.
                  </p>
                </div>
              </div>

              <div className="h-px bg-gray-200 w-full" />

              {/* Feature 2 */}
              <div className="flex gap-6 group">
                <div className="flex-shrink-0 w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm group-hover:bg-blue-400 group-hover:text-white transition-all duration-300">
                  <Shield size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-black mb-2">Reliable by Design</h3>
                  <p className="text-black leading-relaxed">
                    Code crafted for resilience, consistency, and lasting impact across platforms and industries.
                  </p>
                </div>
              </div>

              <div className="h-px bg-gray-200 w-full" />

              {/* Feature 3 */}
              <div className="flex gap-6 group">
                <div className="flex-shrink-0 w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm group-hover:bg-blue-400 group-hover:text-white transition-all duration-300">
                  <Zap size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-black mb-2">Future-Ready Systems</h3>
                  <p className="text-black leading-relaxed">
                    Designed to evolve with technology, keeping your business ahead of change and competition.
                  </p>
                </div>
              </div>

              {/* CTA Button */}
              <div className="pt-6">
                <button className="w-full md:w-auto px-8 py-4 bg-blue-400 text-white rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-blue-500 transition-all active:scale-95 shadow-xl shadow-black/10">
                  Get started now <ArrowRight size={20} />
                </button>
              </div>
            </div>
          </div>
          </div>

        </div>
      </div>
    </section>
  
{/* --- NEW SECTION: TECH STACK & PARTNERS --- */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-black mb-4">
              Our Technology Partners
            </h2>
            <h3 className="text-5xl md:text-4xl font-bold text-black">
              Worked with Global <span className="text-blue-400 text-vivid-violet italic">Enterprises</span>
            </h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px overflow-hidden shadow-sm">
            {[
              { name: 'Cloud Hub', icon: Globe },
              { name: 'Core Engine', icon: Cpu },
              { name: 'Dev Logic', icon: Code2 },
              { name: 'Data Base', icon: Database },
              { name: 'UI Canvas', icon: Layout },
              { name: 'Mobile Go', icon: Smartphone },
            ].map((partner, i) => (
              <div key={i} className="group p-12 flex flex-col items-center justify-center cursor-pointer">
                <div className=" transition-all duration-500 transform group-hover:scale-110 mb-4">
                  <partner.icon size={40} className="text-blue-400 group-hover:text-blue-400 transition-colors" />
                </div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-blue-400 group-hover:text-blue-400 transition-colors">
                  {partner.name}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 flex justify-center items-center gap-3">
            <div className="h-px w-12 "></div>
            <p className="text-xs font-medium text-black uppercase tracking-[0.5em]">Trusted Worldwide</p>
            <div className="h-px w-12"></div>
          </div>
        </div>
      </section>

<section className="bg-white text-black py-20 px-6 md:px-12 lg:px-24">
  <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
    
    {/* LEFT PART: Heading aur text (6 columns) */}
    <div className="lg:col-span-6 flex flex-col justify-between space-y-12">
      <div>
        <h2 className="text-4xl md:text-4xl font-bold leading-[1.1] mb-6">
          Designing And Building Modern Web Development <br /> 
          <span className="text-blue-400 text-vivid-violet italic">Solutions</span>  <br /> 
         
        </h2>
        <div className="text-black text-md space-y-6 max-w-xl font-medium">
          <p>
            Empower your projects with efficient, scalable, and well-structured code. 
            From modern web apps to automated pipelines, every line is optimized for 
            performance and security.
          </p>
          <p>
            Work faster, deploy smarter, and keep your builds clean with expert-crafted 
            development workflows.
          </p>
        </div>
      </div>

      {/* Sub-features: Programming & Secure Infrastructure */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-10 border-t border-gray-100">
        <div>
          <h3 className="text-xl font-bold mb-2">Programming Solutions</h3>
          <p className="text-black text-sm mb-4">Tailored software solutions for performance and scalability.</p>
          <a href="#" className="text-blue-400 flex items-center gap-2 text-sm font-bold hover:gap-3 transition-all">
            More Information <span>→</span>
          </a>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-2">Secure Infrastructure</h3>
          <p className="text-black text-sm mb-2">Ensure stability, reliability, and data security across systems.</p>
          <a href="#" className="text-blue-400 flex items-center gap-2 text-sm font-bold hover:gap-3 transition-all">
            More Information <span>→</span>
          </a>
        </div>
      </div>
    </div>

    {/* MIDDLE PART: Blue Cards (3 columns) */}
    <div className="lg:col-span-3 flex flex-col gap-6">
      {/* Light Blue Tint Card */}
      <div className="relative p-[1px] overflow-hidden rounded-[35px] animate-border-spin bg-transparent">
      <div className="bg-white p-8 rounded-[35px] flex-1 ">
        <h3 className="text-black text-lg font-bold mb-6 leading-tight">
          Core Development <br /> Components
        </h3>
        <ol className="space-y-4 list-decimal list-inside text-black font-semibold">
          <li className="marker:text-black">Frontend Frameworks</li>
          <li className="marker:text-black">Backend Systems</li>
          <li className="marker:text-black">APIs & Integrations</li>
          <li className="marker:text-black">DevOps Pipelines</li>
          <li className="marker:text-black">Testing & QA</li>
          <li className="marker:text-black">Code Security</li>
        </ol>
      </div>
</div>
     
     {/* Abstract Shape Box */}
<div className="bg-white h-48 rounded-[35px]  flex items-center justify-center relative overflow-hidden group">
  
  {/* Background Decoration (Light Blue Blur) */}
  <div className="absolute top-[-10%] left-[-10%] w-24 h-24 bg-blue-400/20 blur-2xl rounded-full"></div>
  
  {/* The Image inside the box */}
  <div className="relative w-32 h-32 transition-transform duration-500 group-hover:scale-110">
    <img 
      src="/3d assets/Breeze.png"  //3D sphere ya icon wali image ka path
      alt="Abstract Component"
      className="w-full h-full object-contain drop-shadow-[0_10px_20px_rgba(96,165,250,0.4)]"
    />
  </div>

  
</div>
    </div>

    {/* RIGHT PART: Full Height Image (3 columns) */}
    <div className="lg:col-span-3 relative min-h-[450px] lg:min-h-full">
      <div className=" p-[1px] overflow-hidden rounded-[35px] animate-border-spin bg-transparent h-full w-full">
      <div className="absolute inset-[1px] rounded-[33px] overflow-hidden bg-white">
        <img 
          src="/3d assets/Breeze.png" // Apni image ka path yahan 
          alt="Professional Developer"
          className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105 "
        />
        {/* Subtle light overlay to blend with white background */}
        <div className="absolute inset-0 bg-blue-400/5"></div>
      </div>
      </div>
    </div>

  </div>
</section>

<section>

<h2 className="text-center text-3xl font-bold pt-20">Our Core Strengths</h2>
<Specs data={aboutData} />
<Specs data={mobileAppData} />
</section>

     </main>
  )
}

export default page