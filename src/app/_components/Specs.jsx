import React from 'react';
import { Terminal, ShieldCheck, Zap, Layers, ArrowRight } from 'lucide-react';

// 'data' prop yahan receive hoga
const Specs = ({ data }) => {
  
  // DEFAULT DATA: Ye wahi purana data hai jo Home page par dikhega
  const defaultFeatures = [
    { title: "Powerful API’s", desc: "Build smarter systems using robust, well-documented APIs.", icon: <Terminal /> },
    { title: "Secure & Isolated", desc: "Maintain complete control with isolated infrastructure designed to safeguard sensitive info.", icon: <ShieldCheck /> },
    { title: "Ready for Scale", desc: "Scale your applications seamlessly with architecture optimized for speed.", icon: <Zap /> },
    { title: "Ongoing Context", desc: "Maintain seamless continuity with real-time context that persists across workflows.", icon: <Layers /> }
  ];

  // LOGIC: Agar 'data' prop aaya hai toh wo dikhao, nahito defaultFeatures dikhao
  const featuresToDisplay = data || defaultFeatures;

  return (
    <section className="bg-white py-10 px-6 md:px-20 overflow-hidden">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        
        {/* Loop ab featuresToDisplay par chalega */}
        {featuresToDisplay.map((item, index) => (
          <div key={index} className="relative group rounded-[24px] overflow-hidden border border-gray-100 transition-all duration-500 active:scale-[0.98] active:bg-blue-50/50">
            
            {/* Blue Hover Shade Logic [cite: 2026-03-01] */}
            <div className="absolute inset-0 bg-gradient-to-b from-blue-400 via-blue-400/30 to-transparent 
                            opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
            </div>

            <div className="relative h-full bg-white p-8 flex flex-col justify-between z-10
                            group-hover:bg-white/80 group-hover:backdrop-blur-xs transition-all duration-100">
              
              <div>
                <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 
                                group-hover:bg-blue-400 transition-all duration-300">
                  {/* Dynamic Icon Styling [cite: 2026-02-27] */}
                  {React.isValidElement(item.icon) ? React.cloneElement(item.icon, { 
                    className: "w-6 h-6 text-[#006aff] group-hover:text-white transition-colors" 
                  }) : null}
                </div>

                <h3 className="text-xl font-bold text-black mb-3">{item.title}</h3>
                <p className="text-black text-sm leading-relaxed mb-6">{item.desc}</p>
              </div>

              <button className="flex items-center gap-2 text-blue-400 font-bold text-sm group/btn">
                Get Started Now
                <ArrowRight size={16} className="group-hover/btn:translate-x-2 transition-transform duration-300" />
              </button>
            </div>
          </div>
        ))}

      </div>
    </section>
  );
};

export default Specs;