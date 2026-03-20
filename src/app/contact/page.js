import ContactSection from '@/components/ContactSection'
import { ArrowRight, Clock, Mail, MapPin, Phone, Play, Send } from 'lucide-react'
import React from 'react'


const page = () => {
  return (
    <main>
        <ContactSection />

<section className="bg-white py-24 px-6 md:px-12 lg:px-24 border-t border-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-start">
          
          {/* --- LEFT SIDE: STICKY MAP & INFO --- */}
          <div className="lg:col-span-6 lg:sticky lg:top-24 h-fit space-y-12">
            {/* Live Google Map Embed */}
            <div className="w-full h-[450px] rounded-[3rem] overflow-hidden shadow-2xl shadow-blue-500/10 border-8 border-gray-50">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13991.439589885874!2d77.0858177435287!3d28.75358058223933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d0144f6f87507%3A0xc6360df8903e1e69!2sSector%2024%2C%20Rohini%2C%20Delhi!5e0!3m2!1sen!2sin!4v1709900000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade">
              </iframe>
            </div>

            {/* Location & Support Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-black">Our Location</h3>
                <p className="text-black leading-relaxed">
                  Stop by our office or schedule a meeting online. We’re always open to collaboration.
                </p>
                
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-black">Support & Partnerships</h3>
                <p className="text-black leading-relaxed">
                  Partner with us to build innovative, reliable, and future-ready digital solutions.
                </p>
                
              </div>
            </div>
          </div>

          {/* --- RIGHT SIDE: SCROLLABLE CONTENT --- */}
          <div className="lg:col-span-6 space-y-16">
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-bold text-black leading-tight tracking-tighter">
                Let’s Connect and Build <br /> <span className="text-blue-400 text-vivid-violet italic">Something Great</span>
              </h2>
              <p className="text-black text-lg leading-relaxed">
 At our core, we believe in creating digital experiences that matter. Whether you're looking to launch a new project, scale your existing platform, or need technical expertise, we're here to partner with you every step of the way. Let's turn your vision into reality.              </p>
             
              
              {/* Featured Image */}
              <div className="rounded-[3.5rem] overflow-hidden shadow-2xl shadow-blue-500/10 border-[12px] border-gray-50">
                <img 
                  src="https://startersites.io/blocksy/codespot/wp-content/uploads/2025/11/contact-us-image-2.webp" 
                  className="w-full h-auto object-cover" 
                  alt="Team Connect" 
                />
              </div>
            </div>

            {/* Bottom Inquiries Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-5">
                <h3 className="text-xl font-bold text-black">General Inquiries</h3>
                <p className="text-black  leading-relaxed">
                  Have a question or idea? Reach out anytime, we’re here to listen, guide, and help you succeed.
                </p>
                
              </div>

              <div className="space-y-5">
                <h3 className="text-xl font-bold text-black">Career Opportunities</h3>
                <p className="text-black leading-relaxed">
                  Join our team of developers, designers, and innovators to shape the future of technology.
                </p>
                
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    </main>
  )
       
}

export default page