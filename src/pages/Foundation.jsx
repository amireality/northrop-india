import React, { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';

const Foundation = () => {
  const cursorRef = useRef(null);
  const ringRef = useRef(null);
  const navbarRef = useRef(null);

  useEffect(() => {
    // ── Custom cursor ──────────────────────────────
    let mx = 0, my = 0, rx = 0, ry = 0;
    const handleMouseMove = (e) => {
      mx = e.clientX;
      my = e.clientY;
    };
    document.addEventListener('mousemove', handleMouseMove);

    let animationFrameId;
    const animCursor = () => {
      if (cursorRef.current && ringRef.current) {
        cursorRef.current.style.left = mx - 3 + 'px';
        cursorRef.current.style.top = my - 3 + 'px';
        rx += (mx - rx) * 0.1;
        ry += (my - ry) * 0.1;
        ringRef.current.style.left = rx - 14 + 'px';
        ringRef.current.style.top = ry - 14 + 'px';
      }
      animationFrameId = requestAnimationFrame(animCursor);
    };
    animCursor();

    // ── Nav scroll class ───────────────────────────
    const handleScroll = () => {
      if (navbarRef.current) {
        if (window.scrollY > 50) {
          navbarRef.current.classList.add('nav-scrolled');
        } else {
          navbarRef.current.classList.remove('nav-scrolled');
        }
      }
    };
    window.addEventListener('scroll', handleScroll);

    // ── Intersection Observer (scroll reveal) ─────
    const reveals = document.querySelectorAll('.reveal');
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
           e.target.classList.add('visible');
        }
      });
    }, { threshold: 0.10 });
    reveals.forEach((el) => obs.observe(el));

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(animationFrameId);
      obs.disconnect();
    };
  }, []);

  return (
    <div className="foundation-page relative bg-[#07090d] text-[#eeeae0] font-['Barlow_Condensed',_sans-serif] overflow-x-hidden cursor-none min-h-screen noise-overlay">
      <Helmet>
        <title>Northrop Foundation for Technology & Strategic Research</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Space+Mono:wght@400;700&family=Barlow+Condensed:wght@300;400;600;700&display=swap" rel="stylesheet" />
        <style>{`
          html { scroll-behavior: smooth; }
          .foundation-page { cursor: none; }
          .noise-overlay::before {
            content: ''; position: fixed; inset: 0;
            background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.035'/%3E%3C/svg%3E");
            pointer-events: none; z-index: 9000; opacity: 0.45;
          }
          .custom-cursor { mix-blend-mode: difference; }
          .nav-scrolled { background: rgba(7,9,13,0.95); backdrop-filter: blur(16px); border-bottom: 1px solid rgba(196,154,60,0.25); }
          .hero-grid { background-image: linear-gradient(rgba(196,154,60,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(196,154,60,0.035) 1px, transparent 1px); background-size: 72px 72px; }
          .hero-jet-bg::before { content: ''; position: absolute; right: -5%; top: 50%; transform: translateY(-50%); width: 75vw; height: 90vh; background: radial-gradient(ellipse at center, rgba(196,154,60,0.07) 0%, rgba(20,35,55,0.35) 35%, transparent 70%); z-index: 0; }
          .hero-jet-bg::after { content: ''; position: absolute; inset: 0; background: repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0,0,0,0.12) 3px, rgba(0,0,0,0.12) 4px); z-index: 5; pointer-events: none; opacity: 0.4; }
          .jet-svg-wrap { animation: jetSlide 1.4s cubic-bezier(0.16,1,0.3,1) 0.3s forwards; filter: drop-shadow(0 0 40px rgba(196,154,60,0.18)) drop-shadow(0 0 120px rgba(30,80,160,0.25)); }
          @keyframes jetSlide { to { opacity: 1; transform: translateX(0); } }
          .afterburner { animation: burnPulse 1.8s ease-in-out infinite alternate; transform-origin: right center; }
          @keyframes burnPulse { 0% { opacity: 0.7; transform: scaleX(0.85) scaleY(0.9); } 100% { opacity: 1; transform: scaleX(1.12) scaleY(1.05); } }
          .afterburner-core { animation: corePulse 0.9s ease-in-out infinite alternate; }
          @keyframes corePulse { 0% { opacity: 0.8; } 100% { opacity: 1; } }
          .hero-fade { background: linear-gradient(90deg, rgba(7,9,13,0.97) 0%, rgba(7,9,13,0.92) 28%, rgba(7,9,13,0.55) 52%, rgba(7,9,13,0.08) 75%, transparent 100%); }
          .hero-eyebrow::before { content: ''; width: 36px; height: 1px; background: #c49a3c; }
          @keyframes fadeUp { from { opacity: 0; transform: translateY(22px); } to { opacity: 1; transform: translateY(0); } }
          .hero-eyebrow-anim { opacity: 0; animation: fadeUp 0.8s 0.5s forwards; }
          .hero-title-anim { opacity: 0; animation: fadeUp 0.8s 0.7s forwards; }
          .hero-sub-anim { opacity: 0; animation: fadeUp 0.8s 0.9s forwards; }
          .hero-desc-anim { opacity: 0; animation: fadeUp 0.8s 1.1s forwards; }
          .hero-tags-anim { opacity: 0; animation: fadeUp 0.8s 1.25s forwards; }
          .hero-cta-anim { opacity: 0; animation: fadeUp 0.8s 1.4s forwards; }
          @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
          .hud-anim { opacity: 0; animation: fadeIn 1s 1.6s forwards; }
          .hud-bar::after { content: ''; position: absolute; top: 0; left: 0; height: 100%; background: #c49a3c; animation: hudScan 3s ease-in-out infinite; }
          @keyframes hudScan { 0% { width: 0%; opacity: 1; } 70% { width: 100%; opacity: 1; } 100% { width: 100%; opacity: 0; } }
          .crosshair-anim { opacity: 0; animation: fadeIn 1s 1.8s forwards; }
          .crosshair::before, .crosshair::after { content: ''; position: absolute; background: #c49a3c; opacity: 0.35; }
          .crosshair::before { width: 1px; height: 100%; left: 50%; }
          .crosshair::after { width: 100%; height: 1px; top: 50%; }
          .crosshair-ring { position: absolute; inset: 8px; border: 1px solid rgba(196,154,60,0.3); border-radius: 50%; animation: crosshairRotate 8s linear infinite; }
          @keyframes crosshairRotate { to { transform: rotate(360deg); } }
          .marquee-track { animation: marquee 28s linear infinite; }
          @keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
          .section-label::after { content: ''; flex: 0 0 48px; height: 1px; background: #c49a3c; opacity: 0.35; }
          .pillar::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 2px; background: linear-gradient(90deg, #c49a3c, transparent); transform: scaleX(0); transform-origin: left; transition: transform 0.4s; }
          .pillar:hover::before { transform: scaleX(1); }
          .domain-card::after { content: ''; position: absolute; bottom: 0; left: 0; right: 0; height: 1px; background: linear-gradient(90deg, transparent, #c49a3c, transparent); opacity: 0; transition: opacity 0.4s; }
          .domain-card:hover::after { opacity: 0.5; }
          .reveal { opacity: 0; transform: translateY(28px); transition: opacity 0.8s ease, transform 0.8s ease; }
          .reveal.visible { opacity: 1; transform: translateY(0); }
          .reveal-delay-1 { transition-delay: 0.1s; }
          .reveal-delay-2 { transition-delay: 0.22s; }
          .reveal-delay-3 { transition-delay: 0.34s; }
          .reveal-delay-4 { transition-delay: 0.46s; }
          @media (max-width: 960px) { .section-label-center::after { display: none; } }
          .input-custom { font-family: 'Barlow Condensed', sans-serif; cursor: none; }
        `}</style>
      </Helmet>

      {/* CURSOR */}
      <div ref={cursorRef} className="custom-cursor w-[6px] h-[6px] bg-[#c49a3c] rounded-full fixed pointer-events-none z-[9999]" />
      <div ref={ringRef} className="custom-cursor-ring w-[28px] h-[28px] border border-[#c49a3c] rounded-full fixed pointer-events-none z-[9998] transition-all duration-200 opacity-[0.5]" />


      {/* HERO */}
      <section className="min-h-screen relative overflow-hidden flex items-stretch" id="home">
        <div className="hero-grid absolute inset-0 z-[1]"></div>
        
        {/* Fighter Jet */}
        <div className="hero-jet-bg absolute inset-0 z-[2] flex items-center justify-end pr-0 overflow-hidden">
          <div className="jet-svg-wrap relative z-[3] w-[58vw] max-w-[900px] opacity-0 translate-x-[60px]">
             {/* Top-down stealth fighter SVG */}
             <svg viewBox="0 0 900 520" xmlns="http://www.w3.org/2000/svg" style={{width: '100%', height: 'auto'}}>
                <defs>
                  <radialGradient id="bodyGrad" cx="50%" cy="40%" r="55%">
                    <stop offset="0%" stopColor="#3a4a60"/>
                    <stop offset="40%" stopColor="#1e2d40"/>
                    <stop offset="100%" stopColor="#0c1420"/>
                  </radialGradient>
                  <radialGradient id="cockpitGrad" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#6ea8d8" stopOpacity="0.9"/>
                    <stop offset="60%" stopColor="#2255aa" stopOpacity="0.7"/>
                    <stop offset="100%" stopColor="#0a1830" stopOpacity="0.5"/>
                  </radialGradient>
                  <linearGradient id="wingGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#1a2840"/>
                    <stop offset="100%" stopColor="#0a1220"/>
                  </linearGradient>
                  <linearGradient id="flameGrad" x1="100%" y1="50%" x2="0%" y2="50%">
                    <stop offset="0%" stopColor="#ff6a00" stopOpacity="0"/>
                    <stop offset="30%" stopColor="#ff8c00" stopOpacity="0.85"/>
                    <stop offset="60%" stopColor="#ffcc44" stopOpacity="0.95"/>
                    <stop offset="85%" stopColor="#fff4c2" stopOpacity="1"/>
                    <stop offset="100%" stopColor="#ffffff" stopOpacity="0.9"/>
                  </linearGradient>
                  <linearGradient id="flameCoreGrad" x1="100%" y1="50%" x2="0%" y2="50%">
                    <stop offset="0%" stopColor="#ff4400" stopOpacity="0"/>
                    <stop offset="50%" stopColor="#ffaa00" stopOpacity="0.7"/>
                    <stop offset="100%" stopColor="#ffffff" stopOpacity="1"/>
                  </linearGradient>
                  <linearGradient id="edgeGlow" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#c49a3c" stopOpacity="0"/>
                    <stop offset="50%" stopColor="#c49a3c" stopOpacity="0.6"/>
                    <stop offset="100%" stopColor="#c49a3c" stopOpacity="0"/>
                  </linearGradient>
                  <filter id="glow1">
                    <feGaussianBlur stdDeviation="8" result="blur"/>
                    <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
                  </filter>
                  <filter id="glowFire">
                    <feGaussianBlur stdDeviation="10" result="blur"/>
                    <feMerge><feMergeNode in="blur"/><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
                  </filter>
                  <filter id="glowSoft">
                    <feGaussianBlur stdDeviation="4" result="blur"/>
                    <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
                  </filter>
                </defs>

                {/* ── AFTERBURNER FLAMES ── */}
                <g className="afterburner" filter="url(#glowFire)">
                  <ellipse cx="128" cy="252" rx="118" ry="18" fill="url(#flameGrad)" opacity="0.85"/>
                  <ellipse cx="128" cy="278" rx="118" ry="18" fill="url(#flameGrad)" opacity="0.85"/>
                </g>
                <g className="afterburner-core" filter="url(#glowFire)">
                  <ellipse cx="115" cy="252" rx="80" ry="9" fill="url(#flameCoreGrad)" opacity="0.9"/>
                  <ellipse cx="115" cy="278" rx="80" ry="9" fill="url(#flameCoreGrad)" opacity="0.9"/>
                </g>

                {/* ── MAIN WING (delta) ── */}
                <polygon points="290,260 540,100 620,260 540,320" fill="url(#wingGrad)" opacity="0.95"/>
                <polygon points="290,270 540,420 620,270 540,300" fill="url(#wingGrad)" opacity="0.95"/>

                {/* Wing leading edge glow */}
                <line x1="290" y1="260" x2="540" y2="100" stroke="url(#edgeGlow)" strokeWidth="1.5" opacity="0.55"/>
                <line x1="290" y1="270" x2="540" y2="420" stroke="url(#edgeGlow)" strokeWidth="1.5" opacity="0.55"/>

                {/* ── CANARDS (small fwd wings) ── */}
                <polygon points="600,230 660,190 680,240 630,245" fill="#1a2a3a" opacity="0.9"/>
                <polygon points="600,290 660,330 680,280 630,275" fill="#1a2a3a" opacity="0.9"/>

                {/* ── VERTICAL STABILIZERS (tails, angled outward) ── */}
                <polygon points="310,245 250,200 270,255 320,258" fill="#1e2d3e" opacity="0.85"/>
                <polygon points="310,285 250,330 270,275 320,272" fill="#1e2d3e" opacity="0.85"/>

                {/* ── FUSELAGE ── */}
                <path d="M250,260 L260,245 Q340,220 450,238 Q580,245 720,258 Q840,262 880,262 Q840,265 720,272 Q580,278 450,270 Q340,265 260,275 Z" fill="url(#bodyGrad)"/>
                <path d="M300,257 Q450,248 640,257 Q700,259 740,261 Q700,263 640,265 Q450,272 300,263 Z" fill="#2a3d52" opacity="0.7"/>

                {/* ── COCKPIT ── */}
                <ellipse cx="760" cy="261" rx="56" ry="14" fill="url(#cockpitGrad)" filter="url(#glowSoft)"/>
                <ellipse cx="760" cy="261" rx="56" ry="14" fill="none" stroke="#6ea8d8" strokeWidth="0.8" opacity="0.5"/>

                {/* ── NOSE ── */}
                <path d="M820,261 Q850,261 880,261 Q860,255 880,261 Q860,267 880,261 Z" fill="#c49a3c" opacity="0" />
                <line x1="880" y1="261" x2="896" y2="261" stroke="#c49a3c" strokeWidth="1" opacity="0.5"/>
                <circle cx="897" cy="261" r="2" fill="#c49a3c" opacity="0.6"/>

                {/* ── PANEL LINES ── */}
                <line x1="400" y1="254" x2="780" y2="257" stroke="rgba(100,140,180,0.2)" strokeWidth="0.5"/>
                <line x1="400" y1="266" x2="780" y2="265" stroke="rgba(100,140,180,0.2)" strokeWidth="0.5"/>
                <line x1="550" y1="250" x2="550" y2="270" stroke="rgba(100,140,180,0.15)" strokeWidth="0.5"/>
                <line x1="620" y1="250" x2="620" y2="270" stroke="rgba(100,140,180,0.15)" strokeWidth="0.5"/>
                <line x1="680" y1="253" x2="680" y2="269" stroke="rgba(100,140,180,0.15)" strokeWidth="0.5"/>

                {/* ── ENGINE NACELLES ── */}
                <ellipse cx="265" cy="252" rx="28" ry="12" fill="#0f1820" stroke="#243040" strokeWidth="1"/>
                <ellipse cx="265" cy="278" rx="28" ry="12" fill="#0f1820" stroke="#243040" strokeWidth="1"/>
                <ellipse cx="245" cy="252" rx="14" ry="9" fill="#1c2c40" stroke="#c49a3c" strokeWidth="0.8" opacity="0.6"/>
                <ellipse cx="245" cy="278" rx="14" ry="9" fill="#1c2c40" stroke="#c49a3c" strokeWidth="0.8" opacity="0.6"/>
                <ellipse cx="242" cy="252" rx="8" ry="5" fill="#e87020" opacity="0.7" filter="url(#glow1)"/>
                <ellipse cx="242" cy="278" rx="8" ry="5" fill="#e87020" opacity="0.7" filter="url(#glow1)"/>

                {/* ── WING SURFACE DETAILS ── */}
                <line x1="380" y1="225" x2="460" y2="165" stroke="rgba(100,140,180,0.2)" strokeWidth="0.6"/>
                <line x1="350" y1="243" x2="450" y2="185" stroke="rgba(100,140,180,0.15)" strokeWidth="0.5"/>
                <line x1="380" y1="295" x2="460" y2="355" stroke="rgba(100,140,180,0.2)" strokeWidth="0.6"/>
                <line x1="350" y1="277" x2="450" y2="335" stroke="rgba(100,140,180,0.15)" strokeWidth="0.5"/>

                {/* ── WING TIP LIGHTS ── */}
                <circle cx="542" cy="103" r="3.5" fill="#ff2222" opacity="0.8" filter="url(#glowSoft)"/>
                <circle cx="542" cy="417" r="3.5" fill="#22ff44" opacity="0.8" filter="url(#glowSoft)"/>

                {/* ── GOLD EDGE HIGHLIGHT (leading edge) ── */}
                <path d="M290,260 Q420,185 545,102" fill="none" stroke="#c49a3c" strokeWidth="0.8" opacity="0.35"/>
                <path d="M290,270 Q420,345 545,418" fill="none" stroke="#c49a3c" strokeWidth="0.8" opacity="0.35"/>

                {/* ── TARGETING RETICLE (HUD overlay on jet) ── */}
                <circle cx="760" cy="261" r="32" fill="none" stroke="#c49a3c" strokeWidth="0.5" strokeDasharray="4,6" opacity="0.3"/>
                <circle cx="760" cy="261" r="18" fill="none" stroke="#c49a3c" strokeWidth="0.5" opacity="0.25"/>
                <line x1="720" y1="261" x2="730" y2="261" stroke="#c49a3c" strokeWidth="0.5" opacity="0.35"/>
                <line x1="790" y1="261" x2="800" y2="261" stroke="#c49a3c" strokeWidth="0.5" opacity="0.35"/>
                <line x1="760" y1="223" x2="760" y2="232" stroke="#c49a3c" strokeWidth="0.5" opacity="0.35"/>
                <line x1="760" y1="290" x2="760" y2="299" stroke="#c49a3c" strokeWidth="0.5" opacity="0.35"/>
             </svg>
          </div>
        </div>

        {/* Overlay fade */}
        <div className="hero-fade absolute inset-0 z-[4]"></div>

        {/* HUD corner elements */}
        <div className="hud hud-anim absolute top-[100px] right-[48px] z-[6] hidden md:flex flex-col items-end gap-[8px]">
          <div className="font-['Space_Mono',_monospace] text-[9px] tracking-[0.2em] text-[#c49a3c] uppercase opacity-[0.5]">STATUS <span className="opacity-100 text-[#eeeae0]">ACTIVE</span></div>
          <div className="hud-bar relative w-[140px] h-[2px] bg-[rgba(196,154,60,0.15)] overflow-hidden"></div>
          <div className="font-['Space_Mono',_monospace] text-[9px] tracking-[0.2em] text-[#c49a3c] uppercase opacity-[0.5]">DOMAIN <span className="opacity-100 text-[#eeeae0]">STRATEGIC</span></div>
          <div className="hud-bar relative w-[140px] h-[2px] bg-[rgba(196,154,60,0.15)] overflow-hidden" style={{animationDelay:'1.2s'}}></div>
          <div className="font-['Space_Mono',_monospace] text-[9px] tracking-[0.2em] text-[#c49a3c] uppercase opacity-[0.5]">ANALYSIS <span className="opacity-100 text-[#eeeae0]">IN PROGRESS</span></div>
        </div>
        
        <div className="crosshair crosshair-anim absolute bottom-[48px] left-[64px] z-[6] w-[48px] h-[48px] hidden md:block">
          <div className="crosshair-ring"></div>
        </div>

        {/* Text content */}
        <div className="relative z-[5] flex flex-col justify-center px-[24px] md:px-[64px] pt-[110px] md:pt-[130px] pb-[70px] md:pb-[80px] w-full max-w-[640px]">
          <div className="hero-eyebrow hero-eyebrow-anim font-['Space_Mono',_monospace] text-[10px] tracking-[0.32em] text-[#c49a3c] uppercase mb-[28px] flex items-center gap-[14px]">
            Est. New Delhi · India
          </div>
          <h1 className="hero-title-anim font-['Cormorant_Garamond',_serif] text-[clamp(54px,6.5vw,96px)] font-light leading-[0.95] tracking-[-0.02em] mb-[14px]">
            Northrop<br />
            <em className="italic text-[#dbb96a]">Foundation</em>
          </h1>
          <p className="hero-sub-anim font-['Cormorant_Garamond',_serif] text-[clamp(16px,1.8vw,22px)] font-light italic text-[#6b6560] tracking-[0.06em] mb-[36px]">
            Technology & Strategic Research
          </p>
          <p className="hero-desc-anim text-[15px] font-light text-[rgba(238,234,224,0.6)] leading-[1.75] max-w-[400px] mb-[16px]">
            Independent research at the frontier of emerging technology, strategic finance, and national security — building India's own body of knowledge for India's own realities.
          </p>
          <div className="hero-tags-anim flex flex-wrap gap-[8px] mb-[44px]">
            {['Artificial Intelligence', 'Big Data', 'AGI', 'Blockchain', 'Quantum', 'Defence Tech', 'Strategic Finance'].map((tag) => (
              <span key={tag} className="font-['Space_Mono',_monospace] text-[8px] tracking-[0.18em] uppercase px-[12px] py-[5px] border border-[rgba(196,154,60,0.3)] text-[#dbb96a] bg-[rgba(196,154,60,0.06)]">{tag}</span>
            ))}
          </div>
          <div className="hero-cta-anim flex gap-[16px]">
            <a href="#pillars" className="bg-[#c49a3c] text-[#07090d] px-[32px] py-[13px] font-['Space_Mono',_monospace] text-[10px] tracking-[0.18em] uppercase no-underline border-none cursor-none hover:bg-[#dbb96a] hover:-translate-y-[2px] transition-all duration-200">Our Research</a>
            <a href="#contact" className="bg-transparent text-[#eeeae0] px-[32px] py-[13px] font-['Space_Mono',_monospace] text-[10px] tracking-[0.18em] uppercase no-underline border border-[rgba(238,234,224,0.18)] cursor-none hover:border-[#c49a3c] hover:text-[#c49a3c] transition-all duration-200">Collaborate</a>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="border-y border-[rgba(196,154,60,0.25)] py-[14px] overflow-hidden bg-[rgba(196,154,60,0.03)] relative z-[10]">
        <div className="marquee-track flex gap-0 whitespace-nowrap">
          {[...Array(2)].map((_, i) => (
            <React.Fragment key={i}>
              {['Artificial Intelligence', 'Big Data', 'AGI Research', 'Blockchain & DLT', 'Quantum Computing', 'Defence Economics', 'Strategic Finance', 'AI Governance', 'Data as Asset', 'India Policy Research', 'Cybersecurity', 'Machine Learning'].map((item) => (
                <React.Fragment key={item}>
                  <span className="font-['Space_Mono',_monospace] text-[9px] tracking-[0.28em] text-[#c49a3c] uppercase px-[40px] opacity-[0.65]">{item}</span>
                  <span className="text-[rgba(196,154,60,0.35)] px-[4px]">◆</span>
                </React.Fragment>
              ))}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* MISSION */}
      <section className="px-[24px] md:px-[64px] py-[72px] md:py-[112px] bg-[#101620]" id="mission">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[44px] md:gap-[80px] items-center">
          <div className="reveal">
            <div className="font-['Space_Mono',_monospace] text-[9px] tracking-[0.3em] text-[#c49a3c] uppercase mb-[14px] flex items-center gap-[14px] section-label">Our Mission</div>
            <h2 className="font-['Cormorant_Garamond',_serif] text-[clamp(34px,4vw,58px)] font-light leading-[1.08] mb-[20px]">Built for <em className="italic text-[#dbb96a]">Indian realities</em></h2>
            <p className="text-[16px] font-light text-[rgba(238,234,224,0.7)] leading-[1.82] mb-[18px]">
              India's technology transformation is being built on <strong className="text-[#eeeae0] font-semibold">borrowed frameworks</strong> — Western research, Western AI policy models, Western financial assumptions applied to fundamentally different ground conditions.
            </p>
            <p className="text-[16px] font-light text-[rgba(238,234,224,0.7)] leading-[1.82] mb-[18px]">
              The Northrop Foundation produces rigorous, independent research at the intersection where <strong className="text-[#eeeae0] font-semibold">emerging technology meets capital</strong> — where AGI policy meets banking regulation, where defence privatisation meets AI-driven procurement, where blockchain governance meets balance sheet valuation.
            </p>
            <p className="text-[16px] font-light text-[rgba(238,234,224,0.7)] leading-[1.82] mb-[18px]">
              We exist to ensure India's decision-makers act on <strong className="text-[#eeeae0] font-semibold">Indian data, Indian context, and Indian ambition</strong> — not imported conclusions.
            </p>
          </div>
          <div className="reveal reveal-delay-2 border-l-[2px] border-[#c49a3c] pl-[32px]">
            <blockquote className="font-['Cormorant_Garamond',_serif] text-[clamp(22px,2.4vw,30px)] italic font-light leading-[1.55] text-[#eeeae0] mb-[20px]">
              "India does not need more imported answers. It needs better Indian questions — asked with the precision of data and the clarity of strategic intent."
            </blockquote>
            <cite className="font-['Space_Mono',_monospace] text-[9px] tracking-[0.2em] text-[#c49a3c] uppercase font-normal not-italic">— Foundation Governing Philosophy</cite>
          </div>
        </div>
      </section>

      {/* DIVIDER */}
      <div className="flex items-center gap-[24px] px-[24px] md:px-[64px]">
        <div className="flex-1 h-[1px] bg-[rgba(196,154,60,0.25)]"></div>
        <div className="font-['Cormorant_Garamond',_serif] text-[18px] text-[#c49a3c] opacity-[0.4]">✦</div>
        <div className="flex-1 h-[1px] bg-[rgba(196,154,60,0.25)]"></div>
      </div>

      {/* RESEARCH PILLARS */}
      <section className="px-[24px] md:px-[64px] py-[72px] md:py-[112px] bg-[#07090d]" id="pillars">
        <div className="reveal font-['Space_Mono',_monospace] text-[9px] tracking-[0.3em] text-[#c49a3c] uppercase mb-[14px] flex items-center gap-[14px] section-label">Research Pillars</div>
        <h2 className="reveal reveal-delay-1 font-['Cormorant_Garamond',_serif] text-[clamp(34px,4vw,58px)] font-light leading-[1.08] mb-[20px]">
          Three domains.<br /><em className="italic text-[#dbb96a]">One convergence.</em>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[2px] mt-[60px]">
          <div className="pillar reveal reveal-delay-1 bg-[rgba(16,22,32,0.8)] border border-[rgba(196,154,60,0.1)] p-[48px_36px] relative overflow-hidden transition-all duration-300 cursor-none">
            <div className="font-['Cormorant_Garamond',_serif] text-[72px] font-light text-[rgba(196,154,60,0.07)] leading-[1] absolute top-[16px] right-[20px]">I</div>
            <div className="w-[44px] h-[44px] border border-[rgba(196,154,60,0.25)] flex items-center justify-center mb-[22px] text-[18px]">⚔</div>
            <div className="font-['Cormorant_Garamond',_serif] text-[24px] font-normal mb-[6px] leading-[1.2]">Defence Economics & Strategic Finance</div>
            <div className="font-['Space_Mono',_monospace] text-[8px] tracking-[0.2em] text-[#c49a3c] uppercase mb-[18px] opacity-[0.7]">Pillar One</div>
            <p className="text-[14px] font-light text-[rgba(238,234,224,0.55)] leading-[1.75]">Research into the financial architecture of India's defence privatisation. Offset policy, private capital flows, AI-driven procurement, and MSME participation in the strategic supply chain — assessed through a data-first lens.</p>
            <div className="flex flex-wrap gap-[6px] mt-[18px]">
              {['Big Data', 'AI Analytics', 'Defence Tech'].map(tag => (
                <span key={tag} className="font-['Space_Mono',_monospace] text-[7px] tracking-[0.14em] uppercase px-[8px] py-[3px] border border-[rgba(196,154,60,0.2)] text-[rgba(196,154,60,0.7)]">{tag}</span>
              ))}
            </div>
          </div>
          
          <div className="pillar reveal reveal-delay-2 bg-[rgba(16,22,32,0.8)] border border-[rgba(196,154,60,0.1)] p-[48px_36px] relative overflow-hidden transition-all duration-300 cursor-none">
            <div className="font-['Cormorant_Garamond',_serif] text-[72px] font-light text-[rgba(196,154,60,0.07)] leading-[1] absolute top-[16px] right-[20px]">II</div>
            <div className="w-[44px] h-[44px] border border-[rgba(196,154,60,0.25)] flex items-center justify-center mb-[22px] text-[18px]">◈</div>
            <div className="font-['Cormorant_Garamond',_serif] text-[24px] font-normal mb-[6px] leading-[1.2]">Artificial Intelligence & Financial Governance</div>
            <div className="font-['Space_Mono',_monospace] text-[8px] tracking-[0.2em] text-[#c49a3c] uppercase mb-[18px] opacity-[0.7]">Pillar Two</div>
            <p className="text-[14px] font-light text-[rgba(238,234,224,0.55)] leading-[1.75]">How AI and AGI trajectories are reshaping credit, compliance, fraud detection, and capital markets in India. Policy frameworks for responsible AI deployment in systemic financial infrastructure — before the next disruption arrives.</p>
            <div className="flex flex-wrap gap-[6px] mt-[18px]">
              {['AI / AGI', 'ML Models', 'RegTech'].map(tag => (
                <span key={tag} className="font-['Space_Mono',_monospace] text-[7px] tracking-[0.14em] uppercase px-[8px] py-[3px] border border-[rgba(196,154,60,0.2)] text-[rgba(196,154,60,0.7)]">{tag}</span>
              ))}
            </div>
          </div>
          
          <div className="pillar reveal reveal-delay-3 bg-[rgba(16,22,32,0.8)] border border-[rgba(196,154,60,0.1)] p-[48px_36px] relative overflow-hidden transition-all duration-300 cursor-none">
            <div className="font-['Cormorant_Garamond',_serif] text-[72px] font-light text-[rgba(196,154,60,0.07)] leading-[1] absolute top-[16px] right-[20px]">III</div>
            <div className="w-[44px] h-[44px] border border-[rgba(196,154,60,0.25)] flex items-center justify-center mb-[22px] text-[18px]">◎</div>
            <div className="font-['Cormorant_Garamond',_serif] text-[24px] font-normal mb-[6px] leading-[1.2]">Data, Blockchain & Strategic Assets</div>
            <div className="font-['Space_Mono',_monospace] text-[8px] tracking-[0.2em] text-[#c49a3c] uppercase mb-[18px] opacity-[0.7]">Pillar Three</div>
            <p className="text-[14px] font-light text-[rgba(238,234,224,0.55)] leading-[1.75]">Data monetisation frameworks, blockchain-based asset registries, and how Indian enterprises assess — and misassess — the value of digital assets on their balance sheets. Bridging technology reality with financial reporting.</p>
            <div className="flex flex-wrap gap-[6px] mt-[18px]">
              {['Blockchain', 'Big Data', 'DLT'].map(tag => (
                <span key={tag} className="font-['Space_Mono',_monospace] text-[7px] tracking-[0.14em] uppercase px-[8px] py-[3px] border border-[rgba(196,154,60,0.2)] text-[rgba(196,154,60,0.7)]">{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* DIVIDER */}
      <div className="flex items-center gap-[24px] px-[24px] md:px-[64px]">
        <div className="flex-1 h-[1px] bg-[rgba(196,154,60,0.25)]"></div>
        <div className="font-['Cormorant_Garamond',_serif] text-[18px] text-[#c49a3c] opacity-[0.4]">✦</div>
        <div className="flex-1 h-[1px] bg-[rgba(196,154,60,0.25)]"></div>
      </div>

      {/* TECHNOLOGY DOMAINS */}
      <section className="bg-[linear-gradient(160deg,#0b1018_0%,#101620_60%,#0d1420_100%)] px-[24px] md:px-[64px] py-[72px] md:py-[112px]" id="domains">
        <div className="mb-[64px]">
          <div className="reveal font-['Space_Mono',_monospace] text-[9px] tracking-[0.3em] text-[#c49a3c] uppercase mb-[14px] flex items-center gap-[14px] section-label">Technology Domains</div>
          <h2 className="reveal reveal-delay-1 font-['Cormorant_Garamond',_serif] text-[clamp(34px,4vw,58px)] font-light leading-[1.08] mb-[20px]">
            The technologies<br /><em className="italic text-[#dbb96a]">shaping our research</em>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[2px]">
          <div className="domain-card reveal reveal-delay-1 p-[40px_28px] border border-[rgba(196,154,60,0.08)] bg-[rgba(7,9,13,0.6)] relative overflow-hidden transition-all duration-350 cursor-none">
            <span className="text-[28px] mb-[20px] block leading-[1]">🧠</span>
            <div className="font-['Cormorant_Garamond',_serif] text-[22px] font-normal mb-[6px] leading-[1.2]">Artificial General Intelligence</div>
            <div className="font-['Space_Mono',_monospace] text-[8px] tracking-[0.2em] text-[#c49a3c] uppercase opacity-[0.6] mb-[16px]">AGI</div>
            <p className="text-[13px] font-light text-[rgba(238,234,224,0.5)] leading-[1.7]">Researching policy readiness for AGI-level systems in financial regulation, defence decision-making, and governance — before capability arrives.</p>
          </div>
          <div className="domain-card reveal reveal-delay-2 p-[40px_28px] border border-[rgba(196,154,60,0.08)] bg-[rgba(7,9,13,0.6)] relative overflow-hidden transition-all duration-350 cursor-none">
            <span className="text-[28px] mb-[20px] block leading-[1]">📡</span>
            <div className="font-['Cormorant_Garamond',_serif] text-[22px] font-normal mb-[6px] leading-[1.2]">Big Data & Predictive Analytics</div>
            <div className="font-['Space_Mono',_monospace] text-[8px] tracking-[0.2em] text-[#c49a3c] uppercase opacity-[0.6] mb-[16px]">Big Data · ML</div>
            <p className="text-[13px] font-light text-[rgba(238,234,224,0.5)] leading-[1.7]">How large-scale data infrastructure is reshaping economic intelligence, national security forecasting, and corporate risk assessment in India.</p>
          </div>
          <div className="domain-card reveal reveal-delay-3 p-[40px_28px] border border-[rgba(196,154,60,0.08)] bg-[rgba(7,9,13,0.6)] relative overflow-hidden transition-all duration-350 cursor-none">
            <span className="text-[28px] mb-[20px] block leading-[1]">⛓</span>
            <div className="font-['Cormorant_Garamond',_serif] text-[22px] font-normal mb-[6px] leading-[1.2]">Blockchain & Distributed Ledger</div>
            <div className="font-['Space_Mono',_monospace] text-[8px] tracking-[0.2em] text-[#c49a3c] uppercase opacity-[0.6] mb-[16px]">Blockchain · DLT · Web3</div>
            <p className="text-[13px] font-light text-[rgba(238,234,224,0.5)] leading-[1.7]">Tokenisation of real assets, blockchain-based land registries, CBDC architecture, and the regulatory frontier of decentralised finance in India.</p>
          </div>
          <div className="domain-card reveal reveal-delay-4 p-[40px_28px] border border-[rgba(196,154,60,0.08)] bg-[rgba(7,9,13,0.6)] relative overflow-hidden transition-all duration-350 cursor-none">
            <span className="text-[28px] mb-[20px] block leading-[1]">⚛</span>
            <div className="font-['Cormorant_Garamond',_serif] text-[22px] font-normal mb-[6px] leading-[1.2]">Quantum Computing & Cryptography</div>
            <div className="font-['Space_Mono',_monospace] text-[8px] tracking-[0.2em] text-[#c49a3c] uppercase opacity-[0.6] mb-[16px]">Quantum · Post-Quantum Crypto</div>
            <p className="text-[13px] font-light text-[rgba(238,234,224,0.5)] leading-[1.7]">Assessing the strategic implications of quantum supremacy for India's financial infrastructure, defence encryption, and national data security.</p>
          </div>
        </div>
      </section>

      {/* DIVIDER */}
      <div className="flex items-center gap-[24px] px-[24px] md:px-[64px]">
        <div className="flex-1 h-[1px] bg-[rgba(196,154,60,0.25)]"></div>
        <div className="font-['Cormorant_Garamond',_serif] text-[18px] text-[#c49a3c] opacity-[0.4]">✦</div>
        <div className="flex-1 h-[1px] bg-[rgba(196,154,60,0.25)]"></div>
      </div>

      {/* WHAT WE PRODUCE */}
      <section className="px-[24px] md:px-[64px] py-[72px] md:py-[112px] bg-[#07090d]" id="outputs">
        <div className="reveal font-['Space_Mono',_monospace] text-[9px] tracking-[0.3em] text-[#c49a3c] uppercase mb-[14px] flex items-center gap-[14px] section-label">What We Produce</div>
        <h2 className="reveal font-['Cormorant_Garamond',_serif] text-[clamp(34px,4vw,58px)] font-light leading-[1.08] mb-[20px]">
          Research that <em className="italic text-[#dbb96a]">moves</em> decision-makers
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[40px] mt-[60px]">
          <div className="output-item reveal reveal-delay-1 flex gap-[24px] p-[28px_32px] border border-[rgba(196,154,60,0.1)] transition-colors duration-300 hover:border-[rgba(196,154,60,0.28)]">
            <div className="font-['Space_Mono',_monospace] text-[10px] text-[#c49a3c] opacity-[0.45] shrink-0 mt-[2px]">01</div>
            <div>
              <h3 className="font-['Cormorant_Garamond',_serif] text-[20px] font-normal mb-[8px]">Annual State of Technology & Finance Report</h3>
              <p className="text-[14px] font-light text-[rgba(238,234,224,0.55)] leading-[1.72]">Our flagship publication. A rigorous annual assessment of AI, Big Data, and Blockchain convergence with Indian capital markets — where policy is keeping up, and where it is dangerously behind.</p>
            </div>
          </div>
          <div className="output-item reveal reveal-delay-2 flex gap-[24px] p-[28px_32px] border border-[rgba(196,154,60,0.1)] transition-colors duration-300 hover:border-[rgba(196,154,60,0.28)]">
            <div className="font-['Space_Mono',_monospace] text-[10px] text-[#c49a3c] opacity-[0.45] shrink-0 mt-[2px]">02</div>
            <div>
              <h3 className="font-['Cormorant_Garamond',_serif] text-[20px] font-normal mb-[8px]">Quarterly Technology Policy Briefs</h3>
              <p className="text-[14px] font-light text-[rgba(238,234,224,0.55)] leading-[1.72]">Focused intelligence on regulatory developments across AGI, Blockchain, and Quantum Computing. Written for decision-makers — not academics.</p>
            </div>
          </div>
          <div className="output-item reveal reveal-delay-1 flex gap-[24px] p-[28px_32px] border border-[rgba(196,154,60,0.1)] transition-colors duration-300 hover:border-[rgba(196,154,60,0.28)]">
            <div className="font-['Space_Mono',_monospace] text-[10px] text-[#c49a3c] opacity-[0.45] shrink-0 mt-[2px]">03</div>
            <div>
              <h3 className="font-['Cormorant_Garamond',_serif] text-[20px] font-normal mb-[8px]">Fellow Research Notes & Commentary</h3>
              <p className="text-[14px] font-light text-[rgba(238,234,224,0.55)] leading-[1.72]">Short-form intelligence from practitioners who sit inside the systems we study. Ground-level insight with institutional credibility — published without delay.</p>
            </div>
          </div>
          <div className="output-item reveal reveal-delay-2 flex gap-[24px] p-[28px_32px] border border-[rgba(196,154,60,0.1)] transition-colors duration-300 hover:border-[rgba(196,154,60,0.28)]">
            <div className="font-['Space_Mono',_monospace] text-[10px] text-[#c49a3c] opacity-[0.45] shrink-0 mt-[2px]">04</div>
            <div>
              <h3 className="font-['Cormorant_Garamond',_serif] text-[20px] font-normal mb-[8px]">Industry Roundtables & Closed Briefings</h3>
              <p className="text-[14px] font-light text-[rgba(238,234,224,0.55)] leading-[1.72]">Structured conversations with regulators, technologists, and capital allocators. Where research meets real-world stress-testing — under Chatham House rules.</p>
            </div>
          </div>
        </div>
      </section>

      {/* DIVIDER */}
      <div className="flex items-center gap-[24px] px-[24px] md:px-[64px]">
        <div className="flex-1 h-[1px] bg-[rgba(196,154,60,0.25)]"></div>
        <div className="font-['Cormorant_Garamond',_serif] text-[18px] text-[#c49a3c] opacity-[0.4]">✦</div>
        <div className="flex-1 h-[1px] bg-[rgba(196,154,60,0.25)]"></div>
      </div>

      {/* FELLOWS */}
      <section className="px-[24px] md:px-[64px] py-[72px] md:py-[112px] bg-[#101620]" id="fellows">
        <div className="reveal font-['Space_Mono',_monospace] text-[9px] tracking-[0.3em] text-[#c49a3c] uppercase mb-[14px] flex items-center gap-[14px] section-label">Our Fellows</div>
        <h2 className="reveal font-['Cormorant_Garamond',_serif] text-[clamp(34px,4vw,58px)] font-light leading-[1.08] mb-[20px]">
          The minds <em className="italic text-[#dbb96a]">behind</em> the work
        </h2>
        <p className="reveal reveal-delay-1 max-w-[580px] text-[16px] font-light text-[rgba(238,234,224,0.62)] leading-[1.82] mb-[60px]">
          Our Fellows are practitioners — not theorists. Each brings deep domain expertise from inside the financial, legal, and technology systems we research. Fellows are announced on appointment.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[2px]">
          <div className="reveal reveal-delay-1 bg-[rgba(7,9,13,0.5)] border border-[rgba(196,154,60,0.1)] p-[40px_32px] transition-colors duration-300 hover:border-[rgba(196,154,60,0.3)] hover:bg-[rgba(12,18,28,0.9)]">
            <div className="w-[52px] h-[52px] border border-[rgba(196,154,60,0.25)] bg-[rgba(196,154,60,0.06)] flex items-center justify-center text-[20px] mb-[20px] text-[#dbb96a]">⚖</div>
            <div className="font-['Cormorant_Garamond',_serif] text-[20px] font-normal mb-[6px]">Finance & Compliance</div>
            <div className="font-['Space_Mono',_monospace] text-[8px] tracking-[0.2em] text-[#c49a3c] uppercase opacity-[0.65] mb-[14px]">Research Fellow</div>
            <p className="text-[13px] font-light text-[rgba(238,234,224,0.5)] leading-[1.7]">Expertise in Indian financial regulation, tax architecture, and compliance frameworks for technology-driven financial products.</p>
          </div>
          <div className="reveal reveal-delay-2 bg-[rgba(7,9,13,0.5)] border border-[rgba(196,154,60,0.1)] p-[40px_32px] transition-colors duration-300 hover:border-[rgba(196,154,60,0.3)] hover:bg-[rgba(12,18,28,0.9)]">
            <div className="w-[52px] h-[52px] border border-[rgba(196,154,60,0.25)] bg-[rgba(196,154,60,0.06)] flex items-center justify-center text-[20px] mb-[20px] text-[#dbb96a]">🔬</div>
            <div className="font-['Cormorant_Garamond',_serif] text-[20px] font-normal mb-[6px]">Strategic Research</div>
            <div className="font-['Space_Mono',_monospace] text-[8px] tracking-[0.2em] text-[#c49a3c] uppercase opacity-[0.65] mb-[14px]">Research Fellow</div>
            <p className="text-[13px] font-light text-[rgba(238,234,224,0.5)] leading-[1.7]">Defence economics, strategic policy analysis, and capital flow modelling at the intersection of national security and private markets.</p>
          </div>
          <div className="reveal reveal-delay-3 bg-[rgba(7,9,13,0.5)] border border-[rgba(196,154,60,0.1)] p-[40px_32px] transition-colors duration-300 hover:border-[rgba(196,154,60,0.3)] hover:bg-[rgba(12,18,28,0.9)]">
            <div className="w-[52px] h-[52px] border border-[rgba(196,154,60,0.25)] bg-[rgba(196,154,60,0.06)] flex items-center justify-center text-[20px] mb-[20px] text-[#dbb96a]">💡</div>
            <div className="font-['Cormorant_Garamond',_serif] text-[20px] font-normal mb-[6px]">Technology Policy</div>
            <div className="font-['Space_Mono',_monospace] text-[8px] tracking-[0.2em] text-[#c49a3c] uppercase opacity-[0.65] mb-[14px]">Research Fellow</div>
            <p className="text-[13px] font-light text-[rgba(238,234,224,0.5)] leading-[1.7]">AI governance, data regulation, and blockchain policy — translating technical realities into actionable regulatory frameworks for Indian institutions.</p>
          </div>
        </div>
      </section>

      {/* WHY */}
      <section className="px-[24px] md:px-[64px] py-[120px] bg-[#07090d] text-center">
        <div className="font-['Space_Mono',_monospace] text-[9px] tracking-[0.3em] text-[#c49a3c] uppercase mb-[14px] flex items-center gap-[14px] justify-center section-label-center">Why It Matters</div>
        <p className="reveal font-['Cormorant_Garamond',_serif] text-[clamp(26px,3.2vw,48px)] font-light leading-[1.45] max-w-[860px] mx-auto mb-[40px] italic">
          "India's next decade will be decided by those who understand where <strong className="font-normal text-[#dbb96a]">AI, Big Data, and strategic capital converge</strong> — and those who don't."
        </p>
        <div className="w-[64px] h-[1px] bg-[#c49a3c] mx-auto mb-[40px] opacity-[0.35]"></div>
        <p className="reveal reveal-delay-1 max-w-[640px] mx-auto text-[16px] font-light text-[rgba(238,234,224,0.6)] leading-[1.82]">
          The Northrop Foundation was established to ensure that India's policymakers, business leaders, and capital allocators have access to rigorous, independent research — built on Indian data, Indian context, and Indian ambition. As AGI approaches, as Blockchain reshapes asset ownership, and as quantum computing redefines cryptographic security, the decisions made in the next five years will lock in trajectories for the next fifty. We exist to make those decisions better.
        </p>
      </section>

      {/* CONTACT */}
      <section className="px-[24px] md:px-[64px] py-[72px] md:py-[112px] bg-[#101620]" id="contact">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[44px] md:gap-[80px] items-center">
          <div className="reveal">
            <div className="font-['Space_Mono',_monospace] text-[9px] tracking-[0.3em] text-[#c49a3c] uppercase mb-[14px] flex items-center gap-[14px] section-label">Get In Touch</div>
            <h2 className="font-['Cormorant_Garamond',_serif] text-[clamp(30px,3.2vw,48px)] font-light leading-[1.2] mb-[22px]">
              Work with <em className="italic text-[#dbb96a]">the Foundation</em>
            </h2>
            <p className="text-[15px] font-light text-[rgba(238,234,224,0.6)] leading-[1.82] mb-[36px]">
              We collaborate with corporates on CSR-funded research, with regulators on technology policy development, and with institutions seeking independent analysis across AI, Big Data, Blockchain, and Defence Economics.
            </p>
            <div className="flex flex-col gap-[14px]">
              <div className="flex gap-[16px] items-start">
                <span className="font-['Space_Mono',_monospace] text-[8px] tracking-[0.2em] text-[#c49a3c] uppercase min-w-[80px] pt-[2px] opacity-[0.65]">Location</span>
                <span className="text-[14px] font-light text-[rgba(238,234,224,0.65)]">Connaught Place, New Delhi</span>
              </div>
              <div className="flex gap-[16px] items-start">
                <span className="font-['Space_Mono',_monospace] text-[8px] tracking-[0.2em] text-[#c49a3c] uppercase min-w-[80px] pt-[2px] opacity-[0.65]">Parent Co.</span>
                <span className="text-[14px] font-light text-[rgba(238,234,224,0.65)]">Northrop Management Private Limited</span>
              </div>
              <div className="flex gap-[16px] items-start">
                <span className="font-['Space_Mono',_monospace] text-[8px] tracking-[0.2em] text-[#c49a3c] uppercase min-w-[80px] pt-[2px] opacity-[0.65]">Focus</span>
                <span className="text-[14px] font-light text-[rgba(238,234,224,0.65)]">AI · AGI · Big Data · Blockchain · Quantum · Defence</span>
              </div>
            </div>
          </div>
          <div className="reveal reveal-delay-2 bg-[rgba(7,9,13,0.6)] border border-[rgba(196,154,60,0.25)] p-[44px]">
            <div className="font-['Cormorant_Garamond',_serif] text-[24px] font-normal mb-[28px]">Enquire</div>
            <div className="mb-[18px]">
              <label className="font-['Space_Mono',_monospace] text-[8px] tracking-[0.2em] text-[#c49a3c] uppercase block mb-[7px] opacity-[0.65]">Name</label>
              <input type="text" className="input-custom w-full bg-[rgba(7,9,13,0.7)] border border-[rgba(196,154,60,0.18)] text-[#eeeae0] p-[11px_14px] text-[14px] font-light outline-none transition-colors duration-200 focus:border-[#c49a3c]" placeholder="Your name" />
            </div>
            <div className="mb-[18px]">
              <label className="font-['Space_Mono',_monospace] text-[8px] tracking-[0.2em] text-[#c49a3c] uppercase block mb-[7px] opacity-[0.65]">Organisation</label>
              <input type="text" className="input-custom w-full bg-[rgba(7,9,13,0.7)] border border-[rgba(196,154,60,0.18)] text-[#eeeae0] p-[11px_14px] text-[14px] font-light outline-none transition-colors duration-200 focus:border-[#c49a3c]" placeholder="Your organisation" />
            </div>
            <div className="mb-[18px]">
              <label className="font-['Space_Mono',_monospace] text-[8px] tracking-[0.2em] text-[#c49a3c] uppercase block mb-[7px] opacity-[0.65]">Area of Interest</label>
              <input type="text" className="input-custom w-full bg-[rgba(7,9,13,0.7)] border border-[rgba(196,154,60,0.18)] text-[#eeeae0] p-[11px_14px] text-[14px] font-light outline-none transition-colors duration-200 focus:border-[#c49a3c]" placeholder="AI Governance, Blockchain Policy, Defence Economics…" />
            </div>
            <div className="mb-[18px]">
              <label className="font-['Space_Mono',_monospace] text-[8px] tracking-[0.2em] text-[#c49a3c] uppercase block mb-[7px] opacity-[0.65]">Message</label>
              <textarea className="input-custom w-full h-[90px] resize-none bg-[rgba(7,9,13,0.7)] border border-[rgba(196,154,60,0.18)] text-[#eeeae0] p-[11px_14px] text-[14px] font-light outline-none transition-colors duration-200 focus:border-[#c49a3c]" placeholder="How would you like to engage with the Foundation?"></textarea>
            </div>
            <button className="input-custom w-full bg-[#c49a3c] text-[#07090d] border-none p-[15px] font-['Space_Mono',_monospace] text-[10px] tracking-[0.2em] uppercase mt-[6px] transition-colors duration-200 hover:bg-[#dbb96a]">
              Submit Enquiry
            </button>
          </div>
        </div>
      </section>


    </div>
  );
};

export default Foundation;