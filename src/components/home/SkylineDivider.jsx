import React from 'react';

export default function SkylineDivider() {
  return (
    <div className="relative h-[340px] overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center grayscale brightness-[0.28] saturate-[0.5]" 
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=1800&q=85')" }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#0E0E0E]/70 via-transparent to-[#0E0E0E]/70"></div>
      <div className="absolute inset-0 flex items-center justify-center text-center px-6">
        <div>
          <div className="text-[9px] font-medium tracking-[0.28em] uppercase text-[#C4973B]/70 mb-4 font-sans">
            CA · CFA · IIT · MBA · Northrop Management Private Limited
          </div>
          <div className="font-serif text-[22px] md:text-[36px] font-normal text-white/70 italic tracking-wide">
            "Credentials earn the seat. Judgment wins the mandate."
          </div>
        </div>
      </div>
    </div>
  );
}
