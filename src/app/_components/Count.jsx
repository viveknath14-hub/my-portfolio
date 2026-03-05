"use client" // Next.js mein hooks use karne ke liye ye zaroori hai
import React, { useEffect, useRef } from 'react'
import { motion, useMotionValue, useTransform, animate, useInView } from 'framer-motion' // YE LINE CHECK KAREIN

const Counter = ({ from, to, postfix }) => {
  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  
  // YE CHANGE HAI: Ref banaya hai section ko track karne ke liye
  const ref = useRef(null);
  
  // YE CHANGE HAI: useInView check karega ki element screen par aaya ya nahi
  // once: true ka matlab hai ki animation sirf ek baar chalegi
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    // YE CHANGE HAI: Animation tabhi start hogi jab isInView true hoga
    if (isInView) {
      const controls = animate(count, to, { duration: 2 });
      return controls.stop;
    }
  }, [isInView, count, to]);

  return (
    <span ref={ref}>
      <motion.span>{rounded}</motion.span>
      {postfix}
    </span>
  );
}

const Count = () => {
  return (
    <section className="w-full bg-gray-50/50 text-black py-24 border-y border-gray-100">
      <div className="container mx-auto px-6 md:px-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
          
          {/* 1. Left Section: Heading (Thoda bada) */}
          <div className="lg:w-[35%] w-full">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight text-center lg:text-left">
              Transforming Ideas <br /> 
              <span className="text-blue-400">Into Impact</span>
            </h2>
          </div>

          {/* 2. Right Section: 3 Counters (Equal width) */}
          <div className="lg:w-[60%] w-full grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4">
            
            {/* Counter 1 */}
            <div className="flex flex-col items-center md:items-start space-y-2">
              <h3 className="text-5xl md:text-6xl font-bold text-blue-400">
                <Counter from={0} to={500} />+
              </h3>
              <p className="text-black text-sm font-medium">Successful projects</p>
            </div>

            {/* Counter 2 */}
            <div className="flex flex-col items-center md:items-start space-y-2 md:border-l md:border-gray-800 md:pl-8">
              <h3 className="text-5xl md:text-6xl font-bold text-blue-400">
                <Counter from={0} to={60} />%
              </h3>
              <p className="text-black text-sm font-medium">Faster launch time</p>
            </div>

            {/* Counter 3 */}
            <div className="flex flex-col items-center md:items-start space-y-2 md:border-l md:border-gray-800 md:pl-8">
              <h3 className="text-5xl md:text-6xl font-bold text-blue-400">
                <Counter from={0} to={120} />%
              </h3>
              <p className="text-black text-sm font-medium">Average ROI increase</p>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Count