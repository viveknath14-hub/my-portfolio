import React from 'react';
import { Terminal, ShieldCheck, Zap, Layers, ArrowRight } from 'lucide-react';

const Specs = () => {
  const features = [
    { title: "Powerful API’s", desc: "Build smarter systems using robust, well-documented APIs.", icon: <Terminal /> },
    { title: "Secure & Isolated", desc: "Maintain complete control with isolated infrastructure designed to safeguard sensitive info.", icon: <ShieldCheck /> },
    { title: "Ready for Scale", desc: "Scale your applications seamlessly with architecture optimized for speed.", icon: <Zap /> },
    { title: "Ongoing Context", desc: "Maintain seamless continuity with real-time context that persists across workflows.", icon: <Layers /> }
  ];

  return (
    <section className="bg-white py-10 px-6 md:px-20 overflow-hidden">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        
{features.map((item, index) => (
  /* 1. REFERENCE: Card Container - Base state pure white [cite: 2026-02-27] */
  <div key={index} className="relative group rounded-[24px] overflow-hidden border border-gray-100 transition-all duration-500 active:scale-[0.98] active:bg-blue-50/50">
    
    {/* 2. REFERENCE: THE HALF-SHADE (Top Gradient)
        Aapki image (image_dbbfbd.png) ki tarah ye upar se niche aayega.
        Pehle: Ye invisible rahega (opacity-0).
        Ab: Hover pe ye neela shade dikhayega [cite: 2026-03-01].
    */}
    <div className="absolute inset-0 bg-gradient-to-b from-blue-400 via-blue-400/30 to-transparent 
                    opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-500 pointer-events-none">
    </div>

    {/* 3. REFERENCE: Card Body Content
        Hover pe backdrop-blur-xs add kiya hai taaki premium glass look aaye [cite: 2026-02-28].
    */}
    <div className="relative h-full bg-white p-8 flex flex-col justify-between z-10
                    group-hover:bg-white/80 group-hover:backdrop-blur-xs group-active:bg-white/50 transition-all duration-100">
      
      <div>
        {/* Icon Wrapper: Static Blue [cite: 2026-02-27] */}
        <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 
                        group-hover:bg-blue-400 transition-all duration-300">
          {React.cloneElement(item.icon, { 
            className: "w-6 h-6 text-[#006aff] group-hover:text-white transition-colors" 
          })}
        </div>

        <h3 className="text-xl font-bold text-black mb-3">{item.title}</h3>
        <p className="text-gray-500 text-sm leading-relaxed mb-6">{item.desc}</p>
      </div>

      {/* Action Button: Blue Text [cite: 2026-02-27] */}
      <button className="flex items-center gap-2 text-[#006aff] font-bold text-sm group/btn">
        Get Started Now
        <ArrowRight size={16} className="group-hover/btn:translate-x-2 group-active:translate-x-2 transition-transform duration-300" />
      </button>
    </div>
  </div>
))}

      </div>
    </section>
  );
};

export default Specs;