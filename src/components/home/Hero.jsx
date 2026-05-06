import React from "react";

export default function Hero() {
  return (
    <section
   
      className="relative min-h-screen grid grid-cols-1 lg:grid-cols-2 bg-[#141414] overflow-hidden"
    >
      {/* GOLD TOP BAR */}
      <div className="absolute top-0 left-0 w-full h-[3px] bg-[#C4973B]"></div>

      {/* LEFT CONTENT */}
      <div className="flex flex-col justify-center px-6 py-20 lg:px-20 lg:py-32 relative z-10 border-r border-[#C4973B]/20">
        
        {/* TAG */}
        <p className="flex items-center gap-3 text-[10px] font-medium tracking-[0.22em] uppercase text-[#C4973B] mb-8">
          <span className="w-6 h-px bg-[#C4973B]"></span>
          New Delhi · Strategy · Advisory · Risk · M&A · Forensics
        </p>

        {/* HEADING */}
        <h1 className="font-serif text-[42px] lg:text-[66px] leading-[1.07] text-white mb-8 tracking-tight">
          Advisory Built <br />
          for Those Who <br />
          <em className="text-[#D9AF58] italic">Build to Last.</em>
        </h1>

        {/* DESCRIPTION */}
        <p className="text-[15px] font-light leading-[1.85] text-white/40 max-w-[480px] mb-12">
          Northrop Management is a senior-led strategic advisory firm
          headquartered at Connaught Place, New Delhi — serving founders,
          institutions, and enterprises that demand rigour, speed, and complete
          discretion.
        </p>

        {/* BUTTONS */}
        <div className="flex flex-wrap gap-4 mb-20">
          <a
            href="/contact"
            className="bg-[#C4973B] text-[#ffff] text-[10.5px] font-medium tracking-[0.14em] uppercase px-8 py-4 transition-all hover:bg-[#D9AF58] hover:-translate-y-0.5"
          >
            Engage With Us
          </a>

          <a
            href="#about"
            className="text-white/40 text-[10.5px] uppercase tracking-[0.1em] flex items-center gap-2 hover:text-white transition-all group"
          >
            Our Approach
            <span className="text-lg transition-all group-hover:ml-2">
              →
            </span>
          </a>
        </div>

        {/* STATS */}
        <div className="pt-10 border-t border-white/10 flex flex-wrap gap-10">
          <div>
            <div className="font-serif text-3xl text-[#D9AF58]">12</div>
            <div className="text-[9.5px] uppercase tracking-widest text-white/30 mt-2">
              Service Verticals
            </div>
          </div>

          <div>
            <div className="font-serif text-[13px] text-[#D9AF58] leading-tight">
              Manufacturing · Real Estate
              <br />Infrastructure · Energy · Banking
            </div>
            <div className="text-[9.5px] uppercase tracking-widest text-white/30 mt-2">
              Sectors Served
            </div>
          </div>

          <div>
            <div className="font-serif text-xl text-[#D9AF58]">₹60K Cr</div>
            <div className="text-[9.5px] uppercase tracking-widest text-white/30 mt-2">
              Balance Sheets
            </div>
          </div>

          <div>
            <div className="font-serif text-3xl text-[#D9AF58]">3+</div>
            <div className="text-[9.5px] uppercase tracking-widest text-white/30 mt-2">
              PSU Bank Mandates
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="hidden lg:block relative overflow-hidden min-h-[600px]">
        
        {/* BACKGROUND IMAGE (UPDATED) */}
        <div
          className="absolute inset-0 bg-cover bg-center "
          style={{
            backgroundImage:
              "url('./homepageimg/photo-hero.jpg')",
          }}
        ></div>

        {/* OVERLAY */}
        {/* <div className="absolute inset-0 bg-gradient-to-r from-[#141414] via-[#141414]/80 to-transparent"></div> */}

  
        {/* BADGE */}
        <div className="absolute bottom-10 right-10 border border-[#C4973B]/30 bg-[#0E0E0E]/50 backdrop-blur-md px-5 py-3 text-white/40 text-[10px] tracking-[0.14em] uppercase">
          Mumbai · Delhi · Pan-India
        </div>
      </div>

  
    </section>
  );
}