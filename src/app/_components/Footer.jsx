import React from 'react';
import { MapPin, ArrowRight } from 'lucide-react';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-white text-black py-16 px-6 md:px-20 border-t border-white/5">
      <div className="container mx-auto">
        
        {/* TOP ROW: Logo + Newsletter */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-10 pb-12 border-b border-white/5">
          <div className="flex flex-col gap-4">
            {/* Logo Section */}
            <div className="h-[35px] flex items-center">
              <Image 
                src="https://startersites.io/blocksy/codespot/wp-content/uploads/2025/10/logo.svg" 
                alt="Logo" 
                className="h-full w-auto brightness-0 " 
                width={140}
                height={35}
              />
            </div>
            {/* Style Reference: Matching Specs description weight and color */}
            <p className="text-sm font-bold max-w-xs text-black leading-relaxed">
              Subscribe to receive news, guides and product updates.
            </p>
          </div>

          {/* Newsletter Form */}
          <div className="w-full lg:w-auto">
            <form className="flex flex-col sm:flex-row gap-3">
              <input 
                type="email" 
                placeholder="Email address *" 
                className="bg-black/50 border border-white/10 rounded-xl px-6 py-3.5 text-sm focus:outline-none focus:border-blue-400 transition-colors w-full sm:w-[300px] text-black"
              />
              {/* Style Reference: Matching Specs Button Style */}
              <button className="bg-blue-400 hover:bg-blue-500 text-black font-bold py-3.5 px-8 rounded-xl text-sm transition-all flex items-center justify-center gap-2 whitespace-nowrap active:scale-95">
                Subscribe Now
                <ArrowRight size={16} />
              </button>
            </form>
          </div>
        </div>

        {/* MIDDLE ROW: Menu + Legal + Address */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 py-12 items-start">
          
          {/* Footer Menu: Using Specs style font weight */}
          <nav>
            <ul className="flex flex-wrap gap-x-8 gap-y-3">
              {['Home', 'Services', 'About', 'News', 'Contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-sm font-bold hover:text-blue-400 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Legal Links */}
          <div className="flex gap-8 md:justify-center">
            <a href="#" className="text-sm font-bold hover:text-blue-400 transition-colors">Privacy Policy</a>
            <a href="#" className="text-sm font-bold hover:text-blue-400 transition-colors">Terms & Conditions</a>
          </div>

          {/* Address with Icon: Matches Specs Heading weight */}
          <div className="flex items-center gap-3 lg:justify-end text-black">
            <div className="bg-white/10 p-2 rounded-xl">
              <MapPin size={15} className="text-blue-400" />
            </div>
            <p className="text-sm font-bold leading-snug">Nevada, 47284 Queenie Drive, Suite 865</p>
          </div>
        </div>

        {/* BOTTOM ROW: Copyright */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[13px] text-gray-500 font-bold">
          <p>Copyright © 2026 - WordPress Theme by <span className="text-black">CreativeThemes</span></p>
          <div className="flex gap-4">
            {/* Social links placeholder */}
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;