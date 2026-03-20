"use client";

import { Play, Phone, Mail, MapPin, Clock, Send, CheckCircle2 } from 'lucide-react';
import { Button } from "@/components/ui/button"; 
import { useForm, ValidationError } from '@formspree/react';


const ContactSection = () => {
  const [state, handleSubmit] = useForm("xdawklyz");

 

  return (
    <section className="relative bg-white py-24 px-6 md:px-12 lg:px-24">
      <div className= "mx-auto">
        
        {/* --- MAIN GRID --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* --- LEFT COLUMN: STICKY (lg:col-span-5) --- */}
          {/* 'lg:sticky' aur 'lg:top-24' isey scroll hone se rokega desktop par */}
                <div className="lg:col-span-5 lg:sticky lg:top-24 h-fit space-y-12">
                <div className="space-y-6">
                  <h2 className="text-4xl md:text-5xl font-bold text-black leading-[1.1] tracking-tighter">
                  Get in Touch <span className="text-blue-400 text-vivid-violet italic">With Us</span>
                  </h2>
                  <p className="text-black text-lg leading-relaxed">
                  We're here to help bring your ideas to life. Whether you have a question about our services, 
                  need a consultation, or want to discuss your next project, feel free to reach out anytime.
                  </p>
                </div>

            {/* Video Preview Grid with Big Shadows */}
            <div className="grid grid-cols-2 gap-4">
              {[
                "https://startersites.io/blocksy/codespot/wp-content/uploads/2025/10/services-page-image-2.webp",
                "https://startersites.io/blocksy/codespot/wp-content/uploads/2025/10/services-page-image-3.webp"
              ].map((img, idx) => (
                <div key={idx} className="group relative aspect-video rounded-[2.5rem] overflow-hidden shadow-2xl shadow-blue-500/10 cursor-pointer border border-gray-100">
                  <img src={img} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Preview" />
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-blue-600 shadow-xl group-hover:scale-110 transition-transform">
                      
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Contact Details List */}
            <div className="space-y-8 pt-8 border-t border-gray-100">
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center text-blue-400 shadow-sm">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-black">Phone number</h4>
                  <a href="tel:+91-9654311631" className="text-black hover:text-blue-400">+91-9654311631</a>
                </div>
              </div>

              <div className="flex items-center gap-5">
                <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center text-blue-400 shadow-sm border border-gray-100">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-black">Email address</h4>
                  <a href="mailto:viveknath14@gmail.com" className="text-black hover:text-blue-400">viveknath14@gmail.com</a>
                </div>
              </div>

              <div className="flex items-center gap-5">
                <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center text-blue-400 shadow-sm border border-gray-100">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-black">Physical address</h4>
                  <a href="https://maps.google.com" target="_blank" className="text-black hover:text-blue-400">Sector 25, Rohini</a>
                </div>
              </div>
            </div>
          </div>

          {/* --- RIGHT COLUMN: SCROLLABLE (lg:col-span-7) --- */}
          <div className="lg:col-span-7">
            <div className="bg-[#F9FAFB] rounded-[3.5rem] p-10 md:p-16 border border-gray-100 shadow-sm relative overflow-hidden">
              {state.succeeded && (
                <div className="absolute inset-4 z-40 bg-blue-400/30 backdrop-blur-xl rounded-[3rem] flex flex-col items-center justify-center text-center p-8 border border-white/40 shadow-2xl animate-in fade-in zoom-in duration-500">
                  <CheckCircle2 size={80} className="text-green-600 mb-6" />
                  <h3 className="text-3xl font-black">Message Received!</h3>
                  <Button onClick={() => window.location.reload()} className="mt-8">Send Another</Button>
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-10">
                <div className="space-y-6">
                  <label className="text-blue-400 font-bold text-xl block">Your budget</label>
                  <div className="flex flex-wrap gap-4">
                    {["10K-20K", "20K-30K", "30K-40K", "50K+"].map((val) => (
                      <label key={val} className="px-6 py-4 bg-white border-2 border-transparent rounded-2xl cursor-pointer hover:border-blue-400 shadow-sm has-[:checked]:border-blue-400 has-[:checked]:bg-blue-400/30 transition-all">
                        <input type="radio" name="budget" value={val} className="hidden" />
                        <span className="text-sm font-bold text-gray-800">{val}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <input name="name" required placeholder="Your name" className="w-full bg-white px-8 py-5 rounded-[1.5rem] shadow-sm focus:ring-4 focus:ring-blue-600/5 outline-none transition-all placeholder:font-bold" />
                  <input id="email" type="email" name='email' required pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$' title='Please enter a valid email address (e.g. name@domain.com)' placeholder="Your email" className="w-full bg-white px-8 py-5 rounded-[1.5rem] shadow-sm focus:ring-4 focus:ring-blue-600/5 outline-none transition-all placeholder:font-bold" />
                  <ValidationError prefix='Email' field='email' errors={state.erroes} className="text-red-500 text-xs ml-2" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <input name="company" placeholder="Company name" className="w-full bg-white px-8 py-5 rounded-[1.5rem] shadow-sm focus:ring-4 focus:ring-blue-600/5 outline-none transition-all placeholder:font-bold" />
                  <input id="phone" type="tel" name='phone' required pattern='[0-9]*' onInput={(e)=>e.target.value= e.target.value.replace(/[^0-9]/g, '')} placeholder="Phone number" className="w-full bg-white px-8 py-5 rounded-[1.5rem] shadow-sm focus:ring-4 focus:ring-blue-600/5 outline-none transition-all placeholder:font-bold" />
                </div>

                <textarea id="message" name='message' rows="6" required placeholder="Tell us about your project..." className="w-full bg-white px-8 py-6 rounded-[2rem] shadow-sm focus:ring-4 focus:ring-blue-600/5 outline-none resize-none transition-all placeholder:font-bold"></textarea>
                <ValidationError prefix='Message' field='message' errors={state.erroes} className="text-red-500 text-xs ml-2" />
                
                <Button type="submit" disabled={state.submitting} className="w-full py-8 bg-blue-400 hover:bg-blue-500 text-white rounded-[2rem] font-bold text-xl shadow-2xl shadow-blue-500/20">
                  {state.submitting ? "Sending..." : "Submit Inquiry"} <Send size={24} className="ml-3" />
                </Button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;