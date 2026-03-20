import React from 'react';
import { MapPin, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-white text-black py-12 md:py-16 px-6 md:px-20 border-t border-gray-100">
      <div className="container mx-auto">
        
        {/* TOP ROW: Logo + Button */}
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-center gap-8 pb-10 border-b border-gray-100">
          <div className="flex flex-col items-center lg:items-start gap-4 text-center lg:text-left">
            {/* Logo Section */}
            <div className="h-[35px] flex items-center">
              {/* --- LOGO / INITIALS --- */}
        <div className="flex lg:flex-1">
          <Link href="/contact" className="-m-1.5 p-1.5 flex items-center gap-2 group decoration-transparent no-underline">
            <div className="bg-black text-white w-10 h-10 rounded-xl flex items-center justify-center font-bold text-xl group-hover:bg-blue-400 transition-colors">
              C
            </div>
            <span className="text-xl font-bold tracking-tight text-black">
              Click<span className="text-blue-400">sutra.</span>
            </span>
          </Link>
        </div>
            </div>
            <p className="text-base md:text-lg max-w-xs text-black leading-relaxed">
              Contact us for inquiries and support.
            </p>
          </div>

          {/* Button Section */}
          <div className="w-full sm:w-auto">
            <Link href="/contact" className="block w-full">
              <button className="w-full sm:w-auto bg-blue-400 hover:bg-blue-500 text-white font-bold py-3.5 px-10 rounded-xl text-sm transition-all flex items-center justify-center gap-2 active:scale-95 shadow-lg shadow-blue-100">
                Contact Now
                <ArrowRight size={16} />
              </button>
            </Link>
          </div>
        </div>

        {/* MIDDLE ROW: Menu + Legal + Address */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 py-12 border-b lg:border-none border-gray-100">
          
          {/* Footer Menu */}
          <nav className="flex justify-center lg:justify-start">
            <ul className="flex flex-wrap justify-center lg:justify-start gap-x-6 gap-y-3">
              {[
                { name: 'Home', href: '/' },
                { name: 'Services', href: '/#services' }, 
                { name: 'About', href: '/about' },       
                { name: 'Projects', href: '/projects' }, 
                { name: 'Contact', href: '/contact' }    
              ].map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href} 
                    className="text-base md:text-lg text-black hover:text-blue-400 transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Legal Links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm md:text-base">
            <a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-blue-400 transition-colors">Terms & Conditions</a>
          </div>

          {/* Address */}
          <div className="flex flex-col sm:flex-row items-center gap-3 lg:justify-end text-center sm:text-left">
            <div className="bg-blue-50 p-2 rounded-xl shrink-0">
              <MapPin size={18} className="text-blue-400" />
            </div>
            <p className="text-base md:text-lg leading-snug max-w-[250px]">
              Sector 25, Rohini, Delhi - 110085
            </p>
          </div>
        </div>

        {/* BOTTOM ROW: Copyright */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[12px] md:text-[13px] text-gray-400  uppercase tracking-wider">
          <p className="text-center md:text-left">
            Copyright © 2024 - Built by <span className="text-black">Clicksutra</span>
          </p>
          <div className="flex gap-4">
            {/* Social icons yahan aa sakte hain */}
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;