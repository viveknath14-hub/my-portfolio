import React from 'react';

const GlowCard = () => {
  return (
    <>
      {/* 1. Yahan CSS Magic hai (Houdini API + Keyframes) */}
      <style>{`
        @property --angle {
          syntax: '<angle>';
          initial-value: 0deg;
          inherits: false;
        }

        @keyframes border-spin {
          from {
            --angle: 0deg;
          }
          to {
            --angle: 360deg;
          }
        }

        @media (min-width: 768px) {
          .animate-border-glow {
            animation: border-spin 3s linear infinite;
          }
      `}</style>

      {/* 2. Main Card Layout */}
      <div className="flex items-center justify-center min-h-screen bg-white">
        
        {/* Card Container */}
        <div className="relative group h-60 w-100 flex items-center justify-center">
          
          {/* Animated Border (The Actual Line) */}
          <div className="absolute -inset-[2px] rounded-2xl bg-blue-400/20 md:bg-[conic-gradient(from_var(--angle),#ff4545,#00ff99,#006aff,#ff0095,#ff4545)] md:animate-border-glow opacity-75 group-hover:opacity-100 transition duration-500"></div>
          
          {/* Animated Blur (The Neon Glow Effect) */}
          <div className="absolute -inset-[2px] hidden md:block rounded-2xl bg-[conic-gradient(from_var(--angle),#ff4545,#00ff99,#006aff,#ff0095,#ff4545)] animate-border-glow blur-2xl opacity-40 group-hover:opacity-80 transition duration-500"></div>

          {/* Card Body (Upar ka Content) */}
          <div className="relative h-[calc(100%-2px)] w-[calc(100%-2px)] bg-white rounded-2xl flex flex-col items-center justify-center text-white border">
            
            
          </div>

        </div>
      </div>
    </>
  );
};

export default GlowCard;