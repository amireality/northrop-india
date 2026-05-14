import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

// V3 Components
import HeroVideo from '../components/home/HeroVideo';
import HomeHeroV3 from '../components/home/HomeHeroV3';
import HomeStatsV3 from '../components/home/HomeStatsV3';
import HomeInsightsV3 from '../components/home/HomeInsightsV3';
import HomeReportsV3 from '../components/home/HomeReportsV3';
import HomeForumV3 from '../components/home/HomeForumV3';
import HomeIndustriesV3 from '../components/home/HomeIndustriesV3';
import ContactSection from '../components/home/ContactSection';
import Researchreports from '../components/Researchreports';
import WhatsAppButton from '../components/WhatsAppButton';

function HomePage() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.sr');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <main className="min-h-screen bg-white font-sans antialiased text-[#1A1714]">
      <Helmet>
        <title>Northrop India | Knowledge Centre & Insights</title>
        <meta name="description" content="Northrop India provides institutional-grade financial reporting, risk management, and transaction advisory services." />
      </Helmet>


      <WhatsAppButton/>

    

      {/* Global Scroll Reveal Styles */}
      <style>{`
        .sr { opacity: 0; transform: translateY(30px); transition: opacity .9s cubic-bezier(.22, 1, .36, 1), transform .9s cubic-bezier(.22, 1, .36, 1); }
        .sr.in { opacity: 1; transform: none; }
        .sr.d1 { transition-delay: .1s; }
        .sr.d2 { transition-delay: .2s; }
        .sr.d3 { transition-delay: .3s; }
        .sr.d4 { transition-delay: .4s; }
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      {/* Optional Hero Video */}
      <HeroVideo />

      <HomeHeroV3 />


       <HomeStatsV3 />

      {/* ── CREDENTIAL MARQUEE ── */}
      {/* <div className="bg-[#C5963A] border-y border-[#C5963A]/20 py-3.5 overflow-hidden relative z-10">
        <style>{`
          @keyframes credScroll {
            from { transform: translateX(0); }
            to   { transform: translateX(-50%); }
          }
          .cred-track {
            display: flex;
            width: max-content;
            animation: credScroll 40s linear infinite;
          }
          .cred-track:hover { animation-play-state: paused; }
        `}</style>
        <div className="cred-track">
          {[...Array(2)].map((_, copy) => (
            <div key={copy} className="flex items-center">
              {[
                "CA", "CFA", "IIT Trained", "IBC Before NCLT",
                "Forensic Audit", "PSU Bank Mandates", "New Delhi · Mumbai · Pan-India"
              ].map((item, i) => (
                <span key={`${copy}-${i}`} className="flex items-center">
                  <span className="font-sans text-[11px] font-bold tracking-[0.18em] uppercase text-white whitespace-nowrap px-10">
                    {item}
                  </span>
                  <span className="text-white/40 text-[8px]">◆</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div> */}

     
      
      <HomeInsightsV3 />

      <Researchreports />

      <HomeReportsV3 />

      <HomeForumV3 />

      <HomeIndustriesV3 />

      <div className="bg-white border-t border-gray-100 relative z-20">
        <ContactSection />
      </div>

     
    </main>
  );
}

export default HomePage;
