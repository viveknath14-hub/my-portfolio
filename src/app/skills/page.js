import { ArrowRight, Quote, Star, StarIcon } from 'lucide-react'
import Image from 'next/image';
import React from 'react'
import Link from 'next/link'; 


const team = [
    { name: "Prem Kumar", role: "Backend Developer", img: "/Team images/coreteam1.jpg" },
    { name: "Vivek Nath", role: "Frontend and AI tech.", img: "/Team images/coreteam2.jpg" },
    { name: "Rahul Tiwari", role: "PHP Developer", img: "/Team images/coreteam3.avif" },
    { name: "Jayant Sharma", role: "Cloud Technology Specialist", img: "/Team images/coreteam3.avif" },
    
  ];

  // const logos = [
  //   "https://startersites.io/blocksy/codespot/wp-content/uploads/2025/10/logo-1.svg",
  //   "https://startersites.io/blocksy/codespot/wp-content/uploads/2025/10/logo-2.svg",
  //   "https://startersites.io/blocksy/codespot/wp-content/uploads/2025/10/logo-3.svg",
  //   "https://startersites.io/blocksy/codespot/wp-content/uploads/2025/10/logo-4.svg",
  //   "https://startersites.io/blocksy/codespot/wp-content/uploads/2025/10/logo-5.svg",
  //   "https://startersites.io/blocksy/codespot/wp-content/uploads/2025/10/logo-6.svg",
  // ];

const page = () => {
  return (
   <main>
    <section className="bg-white mt-20 py-20 px-6 md:px-20 overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-8">
          
        {  /* --- MAIN HEADING --- */}
                <div className="w-full text-center md:text-left">
                <h2 className="text-4xl md:text-7xl font-bold text-black leading-tight tracking-tight">
                  Pioneering Innovation in Web Development,{" "}
                  <span className="text-blue-400 text-vivid-violet italic">Artificial Intelligence</span>, And{" "}
                  <span className="text-blue-400 text-vivid-violet italic">Cloud Solutions</span>
                </h2>
                </div>

          {/* --- SUBTEXT / DESCRIPTION --- */}
          <div className="w-full">
            <div className="h-px w-20 bg-blue-400 mb-8" /> {/* Subtle Divider Line */}
            <p className="text-lg md:text-xl text-black leading-relaxed ">
              
            We specialize in crafting modern, responsive web applications that combine cutting-edge technology with intuitive user experiences. Our expertise spans full-stack development, ensuring every project is built to scale, perform flawlessly, and drive measurable results for our clients.
            </p>
          </div>

        </div>
      </div>
    </section>

    <section className="py-20 bg-white px-6 md:px-12 lg:px-24">
  <div className="max-w-7xl mx-auto">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      
      {/* --- Card 1: Years of Experience --- */}
        <div className=" p-[1px] overflow-hidden rounded-[2rem] animate-border-spin h-full">

      <div className="group p-8 rounded-[2rem]  bg-white hover:shadow-xl hover:shadow-blue-500/5">
        <div className="text-5xl font-extrabold text-blue-400 mb-4">
          15<span className="text-blue-400">+</span>
        </div>
        <h3 className="text-xl font-bold text-black mb-4">Years of Experience</h3>
        <p className="text-black text-sm leading-relaxed">
          Our seasoned team has been delivering innovative, reliable, and scalable tech solutions to clients worldwide since 2010.
        </p>
      </div>
      </div>

      {/* --- Card 2: Happy Clients --- */}
      <div className=" p-[1px] overflow-hidden rounded-[2rem] animate-border-spin h-full">
      <div className="group p-8 rounded-[2rem]  bg-white hover:shadow-xl hover:shadow-blue-500/5">
        <div className="text-5xl font-extrabold text-blue-400 mb-4">
          500<span className="text-blue-400">+</span>
        </div>
        <h3 className="text-xl font-bold text-black mb-4">Happy Clients</h3>
        <p className="text-black text-sm leading-relaxed">
          Trusted by startups and Fortune 500 companies for delivering high-quality, secure, and scalable digital development solutions globally.
        </p>
      </div>
</div>

      {/* --- Card 3: Skilled Professionals --- */}
        <div className=" p-[1px] overflow-hidden rounded-[2rem] animate-border-spin h-full">

      <div className="group p-8 rounded-[2rem] bg-white hover:shadow-xl hover:shadow-blue-500/5">
        <div className="text-5xl font-extrabold text-blue-400 mb-4">
          120
        </div>
        <h3 className="text-xl font-bold text-black mb-4">Skilled Professionals</h3>
        <p className="text-black text-sm leading-relaxed">
          A passionate team of developers, designers, and strategists dedicated to crafting seamless and innovative digital solutions.
        </p>
      </div>
 </div>
      {/* --- Card 4: Client Satisfaction --- */}
              <div className=" p-[1px] overflow-hidden rounded-[2rem] animate-border-spin h-full">

      <div className="group p-8 rounded-[2rem]  bg-white hover:shadow-xl hover:shadow-blue-500/5">
        <div className="text-5xl font-extrabold text-blue-400 mb-4">
          100<span className="text-blue-400">%</span>
        </div>
        <h3 className="text-xl font-bold text-black mb-4">Client Satisfaction</h3>
        <p className="text-black text-sm leading-relaxed">
          We take pride in long-term partnerships built on trust, transparency, and consistently exceeding client expectations.
        </p>
      </div>
</div>
    
    </div>
  </div>
</section>

<section className="bg-white py-20 px-6 md:px-12 lg:px-24 overflow-hidden">
  <div className="max-w-7xl mx-auto">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      
      {/* --- LEFT COLUMN: IMAGE/VIDEO CONTAINER --- */}
      <div className="relative group w-full aspect-square md:aspect-video lg:aspect-square rounded-[2.5rem] overflow-hidden bg-gray-100 shadow-2xl">
        {/* Space for team and office images */}
        <img 
          src="/Team images/Team.jpg" 
          alt="Our Story - Team Image" 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {/* Subtle Blue Overlay */}
        <div className="absolute inset-0 bg-blue-600/5 group-hover:bg-transparent transition-colors duration-500"></div>
      </div>

     { /* --- RIGHT COLUMN: CONTENT --- */}
        <div className="flex flex-col items-start">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-8 leading-tight tracking-tight">
            Our <span className="text-blue-400 text-vivid-violet italic">Story</span>
          </h2>
          
          <div className="space-y-6 text-black text-lg leading-relaxed">
            <p>
          Since 2024, we've been pioneering innovation across web development, artificial intelligence, and cloud solutions. Our team combines cutting-edge technology with intuitive user experiences, delivering modern, responsive applications that scale effortlessly and drive measurable results for clients worldwide.
            </p>
            
            <p>
          We specialize in full-stack development with a relentless commitment to excellence at every layer—from pixel-perfect frontend design to optimized backend systems. Whether partnering with startups or Fortune 500 companies, we empower businesses through secure, scalable applications built on transparent collaboration, technical precision, and strategies that shape lasting digital transformation.
            </p>
          </div>

        {/* --- CUSTOM BUTTON --- */}
        <div className="mt-10">
          <Link href="/contact" className="w-full sm:w-auto">
          <button className="group flex items-center gap-3 bg-blue-400 text-white px-8 py-4 rounded-2xl font-bold hover:bg-blue-600 transition-all active:scale-95 shadow-xl shadow-black/10">
            Get Started
            
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
          </Link>
        </div>
      </div>

    </div>
  </div>
</section>


<section className="bg-white py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
        
        {/* --- LEFT COLUMN: STICKY CONTENT (lg:col-span-5) --- */}
        <div className="lg:col-span-5 lg:sticky lg:top-24 h-fit space-y-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6 leading-tight tracking-tight">
              Meet Our <span className="text-blue-400 text-vivid-violet italic">Experts</span>
            </h2>
            <p className="text-black text-lg leading-relaxed">
              
             We believe in fostering innovation through collaboration, where every designer, developer, and strategist contributes their unique expertise to deliver transformative digital solutions.
            </p>
          </div>

          {/* Sub Features Inside Left Column */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-10 border-t border-gray-100 items-stretch">
            <div className="space-y-4 flex flex-col ">
              <h3 className="text-xl font-bold text-black">Collaborative Culture</h3>
              <p className="text-black text-sm leading-relaxed">
                Driven by teamwork and shared passion for creating digital solutions.
              </p>
              
            </div>

            <div className="space-y-4 flex flex-col ">
              <h3 className="text-xl font-bold text-black">Technical Excellence</h3>
              <p className="text-black text-sm leading-relaxed">
                Delivering high-quality results through precision and skill development.
              </p>
              
            </div>
          </div>
        </div>

        {/* --- RIGHT COLUMN: SCROLLABLE TEAM GRID (lg:col-span-7) --- */}
        <div className="lg:col-span-7">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {team.map((member, index) => (
              <div key={index} className="group relative h-[400px] rounded-[2.5rem] overflow-hidden bg-gray-100 touch-manipulation transition-transform duration-100 active:scale-[0.98]">
                {/* Background Image */}
                <img 
                  src={member.img} 
                  alt={member.name} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-active:grayscale-0 transition-all duration-700 group-hover:scale-110"
                />
                
                {/* Overlay Content */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-8">
                  <h3 className="text-2xl font-bold text-white mb-1 translate-y-4 group-hover:translate-y-0 group-active:opacity-100 transition-transform duration-500 group-active:translate-y-0">
                    {member.name}
                  </h3>
                  <p className="text-blue-400 font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    {member.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>

    <section className="bg-white py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        
        {/* --- LEFT SIDE: TESTIMONIAL CARD (col-span-6) --- */}
        <div className="lg:col-span-6 bg-[#f8f9fa] rounded-[3rem] p-10 md:p-16 relative overflow-hidden group hover:shadow-2xl transition-all duration-500">
          {/* Quote Icon Background */}
          <div className="absolute top-10 right-10 opacity-10 group-hover:rotate-12 transition-transform duration-700">
            <Quote size={120} className="text-gray-400" />
          </div>

          <div className="relative z-10">
            {/* Quote SVG (Custom jaisa aapne diya tha) */}
            <div className="mb-8">
              <svg width="60" height="60" viewBox="0 0 1024 1024" className="fill-blue-400">
                <path d="M928 64h-256c-53 0-96 43-96 96v256c0 53 43 96 96 96h160v128c0 70.6-57.4 128-128 128h-16c-26.6 0-48 21.4-48 48v96c0 26.6 21.4 48 48 48h16c176.8 0 320-143.2 320-320v-480c0-53-43-96-96-96zM352 64h-256c-53 0-96 43-96 96v256c0 53 43 96 96 96h160v128c0 70.6-57.4 128-128 128h-16c-26.6 0-48 21.4-48 48v96c0 26.6 21.4 48 48 48h16c176.8 0 320-143.2 320-320v-480c0-53-43-96-96-96z" />
              </svg>
            </div>

            <div className="text-2xl md:text-3xl font-medium text-black leading-snug mb-10">
              "We found this technology to be the best on the market today to sustain a very high load of requests, appreciate the unique support from the team behind it."

                  <div className="flex gap-2 mt-8">
                    {[...Array(5)].map((_, i) => (
                    <Star key={i} size={20} fill="currentColor" className="text-yellow-400" />
                    ))}
                  </div>
            </div>

            {/* User Profile */}
            <div className="flex items-center gap-5">
              <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-white shadow-lg">
                <Image 
                  src="https://startersites.io/blocksy/codespot/wp-content/uploads/2025/10/home-hero-user-1.webp" 
                  alt="Anamika Pathak"
                  className="object-cover"
                  height={64}
                  width={64}
                 />
              </div>
              <div>
                <h4 className="font-bold text-black text-lg">Anamika Pathak</h4>
                <p className="text-black text-sm">Co-Founder of a Marketing Agency</p>
              </div>
            </div>
          </div>
        </div>

        {/* --- RIGHT SIDE: TRUSTED BY (col-span-6) --- */}
        <div className="lg:col-span-6 space-y-12">
          {/* Star Rating Icons */}
          <div className="flex gap-1 text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={24} fill="currentColor" />
            ))}
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-black leading-tight tracking-tight">
            Trusted by <span className="text-blue-400 text-vivid-violet italic">Developers and Companies</span>
          </h2>

          {/* Partner Logos Grid */}
          {/* <div className="grid grid-cols-2 md:grid-cols-3 gap-8 items-center opacity-60">
            {logos.map((logo, index) => (
              <div key={index} className="h-12 relative grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                <Image 
                  src={logo} 
                  alt="Partner Logo" 
                  fill 
                  className="object-contain"
                />
              </div>
            ))}
          </div> */}

          {/* CTA Button */}
          <div className="pt-6">
            <button className="group flex items-center gap-3 bg-blue-400 text-white px-8 py-4 rounded-2xl font-bold hover:bg-blue-500 transition-all active:scale-95 shadow-xl shadow-blue-500/20">
              Get in touch now
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

      </div>
    </section>

</main>
  )
}

export default page