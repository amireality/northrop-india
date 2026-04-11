import { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';

function Foundation() {
  const starsRef = useRef(null);

  useEffect(() => {
    if (!starsRef.current) return;
    const container = starsRef.current;
    container.innerHTML = '';

    // Generate stars for background
    for (let i = 0; i < 150; i++) {
      const star = document.createElement('div');
      const size = Math.random() * 2 + 0.5;
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;
      star.style.left = `${Math.random() * 100}%`;
      star.style.top = `${Math.random() * 100}%`;
      star.style.opacity = Math.random() * 0.7 + 0.1;
      star.className = 'absolute rounded-full bg-white animate-pulse';
      star.style.animationDuration = `${Math.random() * 4 + 2}s`;
      container.appendChild(star);
    }
  }, []);

  return (
    <>
      <Helmet>
        <title>Northrop Foundation | Impacting Communities through Finance</title>
        <meta name="description" content="Northrop Foundation is dedicated to driving social impact and financial literacy, supporting sustainable growth and community development." />
      </Helmet>
      <section className="relative w-full min-h-screen bg-[#2a3036] overflow-hidden flex flex-col items-center justify-center">
        {/* Sky Background Gradients */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#111a22] via-[#2a3036] to-[#454f50] opacity-90 pointer-events-none"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(200,144,42,0.12)_0%,transparent_60%)] pointer-events-none"></div>

        {/* Stars and Floating Motes */}
        <div id="stars" ref={starsRef} className="absolute inset-0 pointer-events-none"></div>

        <div className="mote" style={{ bottom: '28%', left: '42%', width: '2px', height: '2px', '--md': '14s', '--dl': '-2s', '--mo': '0.2', '--mx': '-15px' }}></div>
        <div className="mote" style={{ bottom: '27%', left: '51%', width: '1px', height: '1px', '--md': '11s', '--dl': '-5s', '--mo': '0.14', '--mx': '20px' }}></div>
        <div className="mote" style={{ bottom: '29%', left: '59%', width: '2px', height: '2px', '--md': '16s', '--dl': '-9s', '--mo': '0.18', '--mx': '-8px' }}></div>

        {/* Dynamic Silhouette Background Graphics (SVG) */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden flex items-end justify-center">
          <svg viewBox="0 0 1400 320" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMax meet" className="w-full min-w-[1000px] xl:max-w-none opacity-90">
            <defs>
              <radialGradient id="gnd" cx="50%" cy="100%" r="50%">
                <stop offset="0%" stopColor="rgba(200,144,42,0.07)" />
                <stop offset="100%" stopColor="transparent" />
              </radialGradient>
            </defs>
            <ellipse cx="700" cy="302" rx="700" ry="18" fill="url(#gnd)" />
            <line x1="0" y1="300" x2="1400" y2="300" stroke="rgba(200,144,42,0.1)" strokeWidth="1" />
            <polygon points="700,300 580,-40 650,-40" fill="rgba(200,144,42,0.02)" />
            <polygon points="700,300 650,-40 700,-40" fill="rgba(200,144,42,0.028)" />
            <polygon points="700,300 700,-40 750,-40" fill="rgba(200,144,42,0.028)" />
            <polygon points="700,300 750,-40 820,-40" fill="rgba(200,144,42,0.02)" />

            {/* Child sitting reaching up */}
            <g transform="translate(310,120)">
              <ellipse cx="6" cy="62" rx="17" ry="19" fill="rgba(200,144,42,0.18)" transform="rotate(-20,6,62)" />
              <path d="M -14 80 Q 0 130 18 128 Q 28 128 22 115 L 8 82 Z" fill="rgba(200,144,42,0.15)" />
              <path d="M -14 125 Q -32 158 -20 165" stroke="rgba(200,144,42,0.15)" strokeWidth="8" fill="none" strokeLinecap="round" />
              <path d="M 14 122 Q 28 155 18 162" stroke="rgba(200,144,42,0.15)" strokeWidth="8" fill="none" strokeLinecap="round" />
              <path d="M 10 88 Q 38 58 28 14 Q 26 4 32 0" stroke="rgba(200,144,42,0.2)" strokeWidth="5" fill="none" strokeLinecap="round" />
              <circle cx="32" cy="0" r="2" fill="rgba(200,144,42,0.4)">
                <animate attributeName="opacity" values="0.4;1;0.4" dur="2.5s" repeatCount="indefinite" />
              </circle>
              <circle cx="44" cy="8" r="1.5" fill="rgba(200,144,42,0.28)">
                <animate attributeName="opacity" values="0.28;0.9;0.28" dur="3s" repeatCount="indefinite" />
              </circle>
              <circle cx="22" cy="-10" r="1" fill="rgba(200,144,42,0.2)">
                <animate attributeName="opacity" values="0.2;0.7;0.2" dur="2s" repeatCount="indefinite" />
              </circle>
            </g>
            <path d="M 342 120 Q 480 40 560 68" stroke="rgba(200,144,42,0.08)" strokeWidth="1" fill="none" strokeDasharray="5,4" />
            <g transform="translate(560,58) rotate(-25)"><polygon points="0,-14 10,0 0,14 -10,0" fill="rgba(200,144,42,0.22)" /></g>

            {/* Child arms wide */}
            <g transform="translate(700,50)">
              <circle cx="0" cy="108" r="22" fill="rgba(200,144,42,0.18)" />
              <rect x="-11" y="130" width="22" height="84" rx="8" fill="rgba(200,144,42,0.15)" />
              <path d="M -11 152 Q -70 138 -96 126" stroke="rgba(200,144,42,0.2)" strokeWidth="7" fill="none" strokeLinecap="round" />
              <path d="M 11 152 Q 70 138 96 126" stroke="rgba(200,144,42,0.2)" strokeWidth="7" fill="none" strokeLinecap="round" />
              <path d="M -5 214 L -10 248" stroke="rgba(200,144,42,0.17)" strokeWidth="9" strokeLinecap="round" fill="none" />
              <path d="M 5 214 L 10 248" stroke="rgba(200,144,42,0.17)" strokeWidth="9" strokeLinecap="round" fill="none" />
              <circle cx="0" cy="108" r="42" fill="none" stroke="rgba(200,144,42,0.07)" strokeWidth="1" />
              <circle cx="0" cy="108" r="64" fill="none" stroke="rgba(200,144,42,0.04)" strokeWidth="1" />
            </g>

            {/* Child running */}
            <g transform="translate(130,200)">
              <circle cx="0" cy="52" r="13" fill="rgba(200,144,42,0.11)" />
              <rect x="-7" y="65" width="14" height="36" rx="5" fill="rgba(200,144,42,0.1)" />
              <path d="M -4 101 L -14 122" stroke="rgba(200,144,42,0.1)" strokeWidth="7" strokeLinecap="round" fill="none" />
              <path d="M 4 101 L 13 118" stroke="rgba(200,144,42,0.1)" strokeWidth="7" strokeLinecap="round" fill="none" />
            </g>

            {/* Two holding hands far right */}
            <g transform="translate(1190,220)" opacity=".7">
              <circle cx="0" cy="42" r="10" fill="rgba(200,144,42,0.09)" />
              <rect x="-6" y="52" width="12" height="26" rx="5" fill="rgba(200,144,42,0.08)" />
              <circle cx="26" cy="44" r="9" fill="rgba(200,144,42,0.08)" />
              <rect x="20" y="53" width="12" height="24" rx="4" fill="rgba(200,144,42,0.07)" />
              <line x1="6" y1="66" x2="20" y2="66" stroke="rgba(200,144,42,0.09)" strokeWidth="3" strokeLinecap="round" />
            </g>
          </svg>
        </div>

        {/* Foreground Content */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-[14px] w-full max-w-[1024px] mx-auto md:mt-[-40px]">
          <div className="text-[10px] md:text-[12px] tracking-[0.2em] text-[#c8902a] font-semibold uppercase mb-[4px] opacity-90 mt-10 md:mt-30 mb-10 md:mb-20">
            Northrop Foundation · Every child deserves joy
          </div>

          <h1 className="text-[30px] sm:text-[40px] md:text-[60px] font-serif text-[#efede2] mb-0 leading-[1.1]">
            <span className="block mb-[8px]">Because Every</span>
            <span className="block mb-[8px]">Child Deserves</span>
            <span className="block italic text-[#dfa63b] font-light mt-[4px]">the Sky</span>
          </h1>

          <div className="w-[1px] h-[64px] md:h-[96px] bg-gradient-to-b from-transparent via-[#c8902a] to-transparent opacity-60 my-[10px] md:my-[24px]"></div>

          <p className="text-[14px] md:text-[18px] font-light text-[rgba(209,213,219,0.8)] max-w-[576px] mb-[20px] md:mb-[48px] leading-relaxed tracking-wide">
            We do not define what joy looks like for a child. We simply make sure nothing stands in the way of it.
          </p>

          <div className="flex flex-col sm:flex-row gap-[20px] md:gap-[32px] mt-[8px] items-center w-full sm:w-auto">
            <button className="w-full sm:w-auto px-[40px] py-[14px] bg-[#c8902a] text-[#111a22] text-[12px] font-bold tracking-[0.15em] hover:bg-[#efc266] transition-colors duration-300 pointer-events-auto">
              WALK ALONGSIDE US
            </button>
            <button className="w-full sm:w-auto px-[40px] py-[14px] text-[#ffff] text-[12px] font-bold tracking-[0.15em] hover:bg-white/5 transition-colors duration-300 pointer-events-auto">
              READ OUR MANIFESTO
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        {/* <div className="absolute bottom-[32px] left-1/2 transform -translate-x-1/2 flex flex-col items-center opacity-70">
          <span className="text-[9px] font-medium tracking-[0.2em] text-[#c8902a] uppercase  mt-30">Scroll</span>
          <div className="w-[1px] h-[56px] bg-gradient-to-b from-[#c8902a]/80 to-transparent"></div>
        </div> */}

        {/* Component Scoped Styles */}
        <style>{`
          @keyframes drift {
            0% { transform: translateY(0) translateX(0); opacity: 0; }
            20% { opacity: var(--mo); }
            80% { opacity: var(--mo); }
            100% { transform: translateY(-150px) translateX(var(--mx)); opacity: 0; }
          }
          .mote {
            position: absolute;
            background: #c8902a;
            border-radius: 50%;
            animation: drift var(--md) linear infinite;
            animation-delay: var(--dl);
            opacity: 0;
            pointer-events: none;
          }
        `}</style>
      </section>

      {/* Bridge (Dark fades to light) */}
      <div className="h-[100px] w-full block bg-gradient-to-b from-[#454f50] to-[#f4f3ea]"></div>

      {/* Opener Section */}
      <section className="relative w-full bg-[#f4f3ea] py-[80px] lg:py-[120px] px-[20px] flex justify-center text-[#1c2321]">
        <div className="max-w-[1040px] w-full flex flex-col items-center">
          <div className="flex items-center gap-[12px] mb-[48px]">
            <div className="w-[30px] h-[1px] bg-[#c8902a]"></div>
            <span className="text-[11px]   tracking-[0.2em] text-[#c8902a] uppercase font-semibold">The Foundation</span>
          </div>

          <div className="max-w-[800px] text-center mb-[40px]">
            <p className="text-[28px] md:text-[32px] font-serif leading-[1.5] mb-[32px] text-[#2f353b]">
              Northrop Foundation is the social commitment of Northrop Management —
              <em className="text-[#c8902a] font-serif italic ml-[8px]">created not out of obligation, but out of belief.</em>
            </p>
            <p className="text-[24px] md:text-[28px] font-serif leading-[1.5] mb-[32px] text-[#454f50]">
              We believe every child deserves a childhood full of wonder, laughter, safety, and possibility.
            </p>
            <p className="text-[24px] md:text-[28px] font-serif leading-[1.5] text-[#454f50]">
              Not just books. Not just schools. <em className="text-[#c8902a] font-serif italic ml-[8px]">Joy. Whatever it takes.</em>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-[32px] w-full items-stretch">
            {/* Card 1 */}
            <div className="bg-white rounded-[16px] p-[40px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative overflow-hidden group hover:-translate-y-[4px] transition-transform duration-300">
              <div className="absolute top-0 left-0 w-full h-[4px] bg-[#eab35a]"></div>
              <div className="w-[30px] h-[30px] bg-[#fff9f0] rounded-[12px] flex items-center justify-center text-[24px] mb-[32px] shadow-sm">
                ✨
              </div>
              <h3 className="text-[16px]   font-bold text-[#1a1f24] mb-[16px] tracking-wide">Wonder First</h3>
              <p className="text-[12px]   text-[#6b7280] leading-[1.8]">
                Every child deserves the space to discover, play, create, and be amazed — before the world tells them to be practical.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-[16px] p-[40px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative overflow-hidden group hover:-translate-y-[4px] transition-transform duration-300">
              <div className="absolute top-0 left-0 w-full h-[4px] bg-[#66b38c]"></div>
              <div className="w-[30px] h-[30px] bg-[#f0fbf5] rounded-[12px] flex items-center justify-center text-[24px] mb-[32px] shadow-sm">
                🌿
              </div>
              <h3 className="text-[16px]   font-bold text-[#1a1f24] mb-[16px] tracking-wide">Rooted in Safety</h3>
              <p className="text-[12px]   text-[#6b7280] leading-[1.8]">
                Joy cannot bloom in anxiety. We invest in warmth and the kind of consistent presence that lets a child exhale and simply be young.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-[16px] p-[40px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative overflow-hidden group hover:-translate-y-[4px] transition-transform duration-300">
              <div className="absolute top-0 left-0 w-full h-[4px] bg-[#5a9cec]"></div>
              <div className="w-[30px] h-[30px] bg-[#f0f7ff] rounded-[12px] flex items-center justify-center text-[24px] mb-[32px] shadow-sm">
                🌅
              </div>
              <h3 className="text-[16px]   font-bold text-[#1a1f24] mb-[16px] tracking-wide">Open Horizons</h3>
              <p className="text-[12px]   text-[#6b7280] leading-[1.8]">
                When a child believes their future is open — stretching as far as they can imagine — something shifts in them forever. That is what we protect.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Numbers Section */}
      <section className="relative w-full bg-gradient-to-r from-[#fdfaee] via-[#fafbfc] to-[#f2f8f8] py-[100px] flex justify-center">
        <div className="max-w-[1240px] w-full px-[20px] flex justify-center">
          <div className="flex flex-col md:flex-row items-center justify-center divide-y md:divide-y-0 md:divide-x divide-gray-200/80">
            {/* Item 1 */}
            <div className="flex flex-col items-center text-center px-[40px] lg:px-[60px] py-[32px] md:py-0 w-full md:w-[380px]">
              <div className="text-[52px] font-serif text-[#d29b32] mb-[12px] leading-[1] whitespace-nowrap">
                Tier 2/3
              </div>
              <div className="text-[14px]   text-[#2f353b] font-semibold mb-[8px] tracking-[0.02em]">
                India is where we focus
              </div>
              <div className="text-[13px]   text-[#8d96a0] leading-[1.6] max-w-[220px]">
                Where potential is greatest, support least
              </div>
            </div>

            {/* Item 2 */}
            <div className="flex flex-col items-center text-center px-[40px] lg:px-[60px] py-[32px] md:py-0 w-full md:w-[380px]">
              <div className="text-[52px] font-serif text-[#3f9e77] mb-[12px] leading-[1]">
                Joy
              </div>
              <div className="text-[14px]   text-[#2f353b] font-semibold mb-[8px] tracking-[0.02em]">
                Our only mandate
              </div>
              <div className="text-[13px]   text-[#8d96a0] leading-[1.6] max-w-[220px]">
                Not defined. Not limited. Whatever it takes.
              </div>
            </div>

            {/* Item 3 */}
            <div className="flex flex-col items-center text-center px-[40px] lg:px-[60px] py-[32px] md:py-0 w-full md:w-[380px]">
              <div className="text-[52px] font-serif text-[#4183dd] mb-[12px] leading-[1]">
                Always
              </div>
              <div className="text-[14px]   text-[#2f353b] font-semibold mb-[8px] tracking-[0.02em]">
                A permanent commitment
              </div>
              <div className="text-[13px]   text-[#8d96a0] leading-[1.6] max-w-[220px]">
                Built into every mandate Northrop takes on
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* JOY CARDS */}
      <section className="w-full bg-[#fdfaf5] py-[100px] px-[20px] lg:px-[64px] flex justify-center">
        <div className="max-w-[1240px] w-full">
          <div className="flex items-center gap-[14px] mb-[40px]">
            <div className="w-[28px] h-[1px] bg-[#c8902a]"></div>
            <span className="text-[10px]   tracking-[0.2em] text-[#c8902a] uppercase font-semibold">What We Bring</span>
          </div>
          <h2 className="text-[32px] md:text-[50px] font-serif leading-[1.1] text-[#1a1a2e] mb-[14px] tracking-[-0.02em]">
            In whatever form <em className="text-[#c8902a] italic">it needs to take</em>
          </h2>
          <p className="text-[15px]   text-[#4a4a6a] font-light leading-[1.8] max-w-[500px] mb-[52px]">
            Joy is not one thing. It is the laugh that catches you off guard, the book that stays with you forever, the friend you make on a Tuesday for no reason. We fund all of it.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-[24px]">
            {/* Card 1 */}
            <div className="bg-white rounded-[24px] overflow-hidden shadow-[0_4px_32px_rgba(26,26,46,0.07)] hover:-translate-y-[8px] hover:shadow-[0_12px_48px_rgba(26,26,46,0.12)] transition-all duration-400 group">
              <div className="h-[190px] w-full relative bg-gradient-to-br from-[#fff3d6] to-[#ffe080]">
                <svg className="w-full h-full absolute inset-0" viewBox="0 0 400 190" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="320" cy="50" r="36" fill="rgba(200,144,42,0.18)" />
                  <circle cx="320" cy="50" r="24" fill="rgba(200,144,42,0.28)" />
                  <g stroke="rgba(200,144,42,0.2)" strokeWidth="2" strokeLinecap="round">
                    <line x1="320" y1="8" x2="320" y2="0" /><line x1="350" y1="18" x2="356" y2="12" />
                    <line x1="362" y1="50" x2="370" y2="50" /><line x1="350" y1="82" x2="356" y2="88" />
                    <line x1="290" y1="18" x2="284" y2="12" /><line x1="278" y1="50" x2="270" y2="50" />
                  </g>
                  <g transform="translate(80,130)">
                    <circle cx="0" cy="-60" r="18" fill="rgba(200,100,40,0.35)" />
                    <rect x="-14" y="-42" width="28" height="42" rx="8" fill="rgba(200,100,40,0.3)" />
                    <rect x="-22" y="-20" width="20" height="26" rx="3" fill="rgba(80,60,20,0.5)" />
                    <rect x="2" y="-20" width="20" height="26" rx="3" fill="rgba(80,60,20,0.4)" />
                    <path d="M -14 0 Q -24 22 -14 28" stroke="rgba(200,100,40,0.3)" strokeWidth="8" fill="none" strokeLinecap="round" />
                    <path d="M 14 0 Q 24 22 14 28" stroke="rgba(200,100,40,0.3)" strokeWidth="8" fill="none" strokeLinecap="round" />
                  </g>
                  <g fill="rgba(200,144,42,0.5)">
                    <circle cx="160" cy="40" r="3"><animate attributeName="r" values="3;4;3" dur="2s" repeatCount="indefinite" /></circle>
                    <circle cx="200" cy="70" r="2"><animate attributeName="r" values="2;3;2" dur="2.5s" repeatCount="indefinite" /></circle>
                    <circle cx="240" cy="30" r="2.5"><animate attributeName="r" values="2.5;3.5;2.5" dur="1.8s" repeatCount="indefinite" /></circle>
                  </g>
                  <line x1="0" y1="158" x2="400" y2="158" stroke="rgba(100,160,80,0.25)" strokeWidth="2" />
                  <ellipse cx="200" cy="160" rx="200" ry="8" fill="rgba(100,160,80,0.08)" />
                </svg>
              </div>
              <div className="p-[32px] pt-[28px] bg-white">
                <span className="text-[10px] tracking-[0.18em] uppercase text-[#c8902a] font-bold block mb-[12px]">01 — Wonder</span>
                <div className="text-[20px] font-serif text-[#1a1a2e] mb-[12px] leading-[1.3]">The right to discover and be curious</div>
                <p className="text-[13px]   font-light text-[#4a4a6a] leading-[1.85]">Art, science, sport, music, nature, a story well told. Learning is part of it. It is not all of it.</p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-[24px] overflow-hidden shadow-[0_4px_32px_rgba(26,26,46,0.07)] hover:-translate-y-[8px] hover:shadow-[0_12px_48px_rgba(26,26,46,0.12)] transition-all duration-400 group">
              <div className="h-[190px] w-full relative bg-gradient-to-br from-[#e4f9f0] to-[#a8edd4]">
                <svg className="w-full h-full absolute inset-0" viewBox="0 0 400 190" xmlns="http://www.w3.org/2000/svg">
                  <g transform="translate(140,130)">
                    <circle cx="0" cy="-65" r="19" fill="rgba(18,149,124,0.35)" />
                    <rect x="-14" y="-46" width="28" height="46" rx="8" fill="rgba(18,149,124,0.3)" />
                    <path d="M 14 -30 Q 50 -28 52 -16" stroke="rgba(18,149,124,0.35)" strokeWidth="7" fill="none" strokeLinecap="round" />
                    <path d="M -14 -25 L -28 -20" stroke="rgba(18,149,124,0.3)" strokeWidth="6" fill="none" strokeLinecap="round" />
                    <path d="M -10 0 L -14 28" stroke="rgba(18,149,124,0.28)" strokeWidth="8" strokeLinecap="round" fill="none" />
                    <path d="M 10 0 L 14 28" stroke="rgba(18,149,124,0.28)" strokeWidth="8" strokeLinecap="round" fill="none" />
                  </g>
                  <g transform="translate(220,140)">
                    <circle cx="0" cy="-58" r="16" fill="rgba(18,149,124,0.28)" />
                    <rect x="-11" y="-42" width="22" height="42" rx="7" fill="rgba(18,149,124,0.24)" />
                    <path d="M -8 0 L -12 26" stroke="rgba(18,149,124,0.24)" strokeWidth="7" strokeLinecap="round" fill="none" />
                    <path d="M 8 0 L 12 26" stroke="rgba(18,149,124,0.24)" strokeWidth="7" strokeLinecap="round" fill="none" />
                  </g>
                  <path d="M 185 30 Q 185 20 195 20 Q 205 20 205 30 Q 205 20 215 20 Q 225 20 225 30 Q 225 42 205 54 Q 185 42 185 30 Z" fill="rgba(18,149,124,0.3)">
                    <animate attributeName="d" values="M 185 30 Q 185 20 195 20 Q 205 20 205 30 Q 205 20 215 20 Q 225 20 225 30 Q 225 42 205 54 Q 185 42 185 30 Z;M 183 30 Q 183 18 195 18 Q 205 18 205 30 Q 205 18 217 18 Q 227 18 227 30 Q 227 44 205 58 Q 183 44 183 30 Z;M 185 30 Q 185 20 195 20 Q 205 20 205 30 Q 205 20 215 20 Q 225 20 225 30 Q 225 42 205 54 Q 185 42 185 30 Z" dur="2s" repeatCount="indefinite" />
                  </path>
                  <ellipse cx="200" cy="162" rx="200" ry="8" fill="rgba(18,149,124,0.07)" />
                  <line x1="0" y1="158" x2="400" y2="158" stroke="rgba(18,149,124,0.15)" strokeWidth="1" />
                </svg>
              </div>
              <div className="p-[32px] pt-[28px] bg-white">
                <span className="text-[10px] tracking-[0.18em] uppercase text-[#12957c] font-bold block mb-[12px]">02 — Safety</span>
                <div className="text-[20px] font-serif text-[#1a1a2e] mb-[12px] leading-[1.3]">A world that holds them steady</div>
                <p className="text-[13px]   font-light text-[#4a4a6a] leading-[1.85]">We back programs that bring stability and the consistent presence that lets a child exhale and simply be young.</p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-[24px] overflow-hidden shadow-[0_4px_32px_rgba(26,26,46,0.07)] hover:-translate-y-[8px] hover:shadow-[0_12px_48px_rgba(26,26,46,0.12)] transition-all duration-400 group">
              <div className="h-[190px] w-full relative bg-gradient-to-br from-[#eaf2ff] to-[#b8d4ff]">
                <svg className="w-full h-full absolute inset-0" viewBox="0 0 400 190" xmlns="http://www.w3.org/2000/svg">
                  <g transform="translate(140,145)">
                    <circle cx="0" cy="-72" r="17" fill="rgba(43,127,212,0.35)" />
                    <rect x="-12" y="-55" width="24" height="55" rx="7" fill="rgba(43,127,212,0.3)" />
                    <path d="M -6 0 L -18 28" stroke="rgba(43,127,212,0.28)" strokeWidth="8" strokeLinecap="round" fill="none" />
                    <path d="M 6 0 L 16 24" stroke="rgba(43,127,212,0.28)" strokeWidth="8" strokeLinecap="round" fill="none" />
                    <path d="M 12 -40 Q 40 -60 80 -100" stroke="rgba(43,127,212,0.25)" strokeWidth="4" fill="none" strokeLinecap="round" strokeDasharray="6,4" />
                    <path d="M -12 -38 L -30 -28" stroke="rgba(43,127,212,0.25)" strokeWidth="6" fill="none" strokeLinecap="round" />
                  </g>
                  <g transform="translate(220,45) rotate(-15)">
                    <polygon points="0,-22 16,0 0,22 -16,0" fill="rgba(43,127,212,0.4)" />
                    <polygon points="0,-22 16,0 0,0" fill="rgba(43,127,212,0.55)" />
                    <line x1="0" y1="22" x2="4" y2="40" stroke="rgba(43,127,212,0.25)" strokeWidth="1.5" />
                    <line x1="4" y1="30" x2="10" y2="36" stroke="rgba(43,127,212,0.2)" strokeWidth="1" />
                  </g>
                  <g fill="rgba(255,255,255,0.7)">
                    <ellipse cx="280" cy="50" rx="30" ry="16" />
                    <ellipse cx="305" cy="46" rx="22" ry="14" />
                    <ellipse cx="255" cy="52" rx="18" ry="12" />
                  </g>
                  <g fill="rgba(255,255,255,0.5)">
                    <ellipse cx="80" cy="70" rx="22" ry="12" />
                    <ellipse cx="100" cy="66" rx="16" ry="10" />
                  </g>
                  <ellipse cx="200" cy="162" rx="200" ry="8" fill="rgba(43,127,212,0.06)" />
                  <line x1="0" y1="158" x2="400" y2="158" stroke="rgba(43,127,212,0.12)" strokeWidth="1" />
                  <ellipse cx="100" cy="160" rx="80" ry="20" fill="rgba(100,180,100,0.15)" />
                  <ellipse cx="320" cy="162" rx="100" ry="18" fill="rgba(100,180,100,0.12)" />
                </svg>
              </div>
              <div className="p-[32px] pt-[28px] bg-white">
                <span className="text-[10px] tracking-[0.18em] uppercase text-[#2b7fd4] font-bold block mb-[12px]">03 — Possibility</span>
                <div className="text-[20px] font-serif text-[#1a1a2e] mb-[12px] leading-[1.3]">Teaching them the sky has no ceiling</div>
                <p className="text-[13px]   font-light text-[#4a4a6a] leading-[1.85]">When a child believes their future is open — that belief is what we are here to plant, water, and protect.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MANIFESTO AND STORY AND VOW BLOCK... */}
      <section id="manifesto" className="relative w-full bg-gradient-to-br from-[#fff8ee] via-[#fff3d6] to-[#f0f7ff] py-[120px] px-[20px] lg:px-[64px] flex justify-center overflow-hidden z-10">
        <div className="absolute top-[-120px] right-[-120px] w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(232,184,75,0.09),transparent_70%)] pointer-events-none"></div>
        <div className="absolute bottom-[-100px] left-[-80px] w-[450px] h-[450px] rounded-full bg-[radial-gradient(circle,rgba(18,149,124,0.07),transparent_70%)] pointer-events-none"></div>

        <div className="max-w-[860px] w-full relative z-10">
          <div className="flex items-center gap-[14px] mb-[52px]">
            <div className="w-[24px] h-[1px] bg-[#c8902a]"></div>
            <span className="text-[10px]   tracking-[0.22em] text-[#c8902a] uppercase font-semibold">Our Manifesto</span>
          </div>

          <div className="w-full flex flex-col mb-[52px]">
            {[
              "We want children to see more than survival",
              "We want them to laugh without reason",
              "To run and fall and get up and run again",
              "To imagine things that do not exist yet",
              "To smile freely, and mean it",
              "To believe their future is theirs to shape",
              "This is not charity. This is what we owe them."
            ].map((text, i) => (
              <div key={i} className="flex items-baseline gap-[20px] py-[20px] border-b border-[rgba(26,26,46,0.07)] hover:pl-[16px] transition-all duration-300 group cursor-default first:border-t">
                <span className="text-[11px] text-[#9090b0] min-w-[28px] font-light">—</span>
                <span className={`font-serif text-[18px] md:text-[27px] font-normal leading-[1.25] text-[#1a1a2e] transition-colors duration-300 group-hover:text-[${i % 3 === 0 ? '#c8902a' : i % 3 === 1 ? '#12957c' : '#c04040'}]`}>{text}</span>
              </div>
            ))}
          </div>
          <p className="text-[15px] font-light text-[#4a4a6a] leading-[1.9] max-w-[480px] border-l-2 border-[rgba(200,144,42,0.2)] pl-[24px]">
            We do not prescribe what joy looks like. We simply remove what stands between a child and it — then get out of the way and let them soar.
          </p>
        </div>
      </section>

      {/* STORY SECTION */}
      <section className="w-full bg-white py-[100px] px-[20px] lg:px-[64px] flex justify-center">
        <div className="max-w-[1240px] w-full grid grid-cols-1 lg:grid-cols-2 gap-[80px] items-center">
          <div className="h-[480px] rounded-[28px] overflow-hidden bg-gradient-to-br from-[#fff3d6] to-[#e8f8f2] flex items-center justify-center relative shadow-[0_12px_48px_rgba(26,26,46,0.12)]">
            <svg viewBox="0 0 480 480" xmlns="http://www.w3.org/2000/svg" className="w-full h-full absolute inset-0">
              <defs>
                <radialGradient id="sg" cx="50%" cy="70%" r="60%">
                  <stop offset="0%" stopColor="rgba(232,184,75,0.2)" />
                  <stop offset="100%" stopColor="rgba(18,149,124,0.08)" />
                </radialGradient>
              </defs>
              <rect width="480" height="480" fill="url(#sg)" />
              <g transform="translate(240,200)">
                <circle cx="0" cy="-90" r="38" fill="rgba(200,120,50,0.4)" />
                <rect x="-22" y="-52" width="44" height="120" rx="14" fill="rgba(200,120,50,0.35)" />
                <path d="M -22 -20 Q -100 -10 -130 0" stroke="rgba(200,120,50,0.4)" strokeWidth="14" fill="none" strokeLinecap="round" />
                <path d="M 22 -20 Q 100 -10 130 0" stroke="rgba(200,120,50,0.4)" strokeWidth="14" fill="none" strokeLinecap="round" />
                <path d="M -10 68 L -16 140" stroke="rgba(200,120,50,0.35)" strokeWidth="14" strokeLinecap="round" fill="none" />
                <path d="M 10 68 L 16 140" stroke="rgba(200,120,50,0.35)" strokeWidth="14" strokeLinecap="round" fill="none" />
                <circle cx="0" cy="-90" r="60" fill="none" stroke="rgba(232,184,75,0.15)" strokeWidth="2" />
                <circle cx="0" cy="-90" r="80" fill="none" stroke="rgba(232,184,75,0.08)" strokeWidth="1" />
              </g>
              <circle cx="240" cy="420" r="80" fill="rgba(232,184,75,0.15)" />
              <circle cx="240" cy="420" r="50" fill="rgba(232,184,75,0.2)" />
              <circle cx="240" cy="420" r="28" fill="rgba(232,184,75,0.3)" />
              <line x1="0" y1="380" x2="480" y2="380" stroke="rgba(200,144,42,0.2)" strokeWidth="1" />
              <g fill="rgba(200,144,42,0.5)">
                <circle cx="100" cy="120" r="3"><animate attributeName="r" values="3;5;3" dur="2s" repeatCount="indefinite" /></circle>
                <circle cx="380" cy="100" r="2"><animate attributeName="r" values="2;4;2" dur="3s" repeatCount="indefinite" /></circle>
                <circle cx="60" cy="240" r="2"><animate attributeName="r" values="2;3;2" dur="2.5s" repeatCount="indefinite" /></circle>
                <circle cx="420" cy="200" r="3"><animate attributeName="r" values="3;4;3" dur="1.8s" repeatCount="indefinite" /></circle>
              </g>
              <g transform="translate(100,350)" opacity=".5">
                <circle cx="0" cy="-28" r="11" fill="rgba(200,120,50,0.4)" />
                <rect x="-7" y="-17" width="14" height="28" rx="5" fill="rgba(200,120,50,0.35)" />
              </g>
              <g transform="translate(380,355)" opacity=".5">
                <circle cx="0" cy="-28" r="10" fill="rgba(200,120,50,0.35)" />
                <rect x="-7" y="-18" width="14" height="28" rx="5" fill="rgba(200,120,50,0.3)" />
              </g>
            </svg>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-[14px] mb-[40px]">
              <div className="w-[28px] h-[1px] bg-[#c8902a]"></div>
              <span className="text-[10px]   tracking-[0.2em] text-[#c8902a] uppercase font-semibold">Why We Exist</span>
            </div>
            <h2 className="text-[32px] md:text-[50px] font-serif leading-[1.1] text-[#1a1a2e] mb-[14px] tracking-[-0.02em]">
              We do not wait for <em className="text-[#c8902a] italic">rescue stories</em>
            </h2>
            <p className="text-[15px]   text-[#4a4a6a] font-light leading-[1.8] max-w-[480px] mb-[36px]">
              We invest early — when a child still believes the world is wide open. That is when it matters most. That is when joy takes root.
            </p>
            <div className="bg-gradient-to-br from-[#fff8ee] to-[#fff3d6] rounded-[16px] p-[28px] md:p-[32px] border-l-[3px] border-[#c8902a] relative">
              <div className="font-serif text-[17px] italic text-[#1a1a2e] leading-[1.65] mb-[14px]">
                "When a child is supported early — when learning is protected and encouragement is consistent — they do not need rescue later. They grow with strength, dignity, and the freedom to aim high."
              </div>
              <div className="text-[11px] font-semibold text-[#c8902a] tracking-[0.08em] uppercase">
                Northrop Foundation · The Founding Belief
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VOW SECTION */}
      <section className="w-full bg-[#fdfaf5] py-[100px] px-[20px] lg:px-[64px] flex justify-center">
        <div className="max-w-[1240px] w-full flex flex-col items-center">
          <div className="text-center max-w-[620px] mb-[60px] flex flex-col items-center">
            <div className="flex items-center gap-[14px] mb-[40px] justify-center mx-auto">
              <div className="w-[28px] h-[1px] bg-[#c8902a]"></div>
              <span className="text-[10px]   tracking-[0.2em] text-[#c8902a] uppercase font-semibold">A Shared Commitment</span>
            </div>
            <h2 className="text-[32px] md:text-[50px] font-serif leading-[1.1] text-[#1a1a2e] mb-[14px] tracking-[-0.02em] text-center">
              Not a campaign.<br /><em className="text-[#c8902a] italic">A permanent vow.</em>
            </h2>
            <p className="text-[15px]   text-[#4a4a6a] font-light leading-[1.8] max-w-[500px] text-center">
              As Northrop grows, our responsibility to the children around us grows with it. Always.
            </p>
          </div>

          <div className="w-full bg-gradient-to-br from-[#1a1a2e] to-[#2a3a5a] rounded-[24px] py-[52px] px-[30px] md:px-[64px] text-center mb-[60px] relative overflow-hidden">
            <span className="absolute top-[-30px] left-[36px] font-serif text-[220px] leading-[1] text-[rgba(232,184,75,0.05)] select-none pointer-events-none">"</span>
            <span className="text-[10px] text-[#e8b84b] tracking-[0.22em] uppercase mb-[20px] inline-block font-bold">The Northrop Vow</span>
            <div className="font-serif text-[17px] md:text-[24px] italic text-white leading-[1.65] max-w-[560px] mx-auto">
              "As we build, we build for them. Every mandate, every fee, every milestone — a portion belongs to the next generation."
            </div>
          </div>

          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-[20px]">
            {/* cc cards */}
            {[
              { color: '#c8902a', shadow: 'rgba(200,144,42,0.35)', title: 'Long-term partners, not one-time donors', text: 'We seek people who think in years. Child development is not a sprint.' },
              { color: '#12957c', shadow: 'rgba(18,149,124,0.35)', title: 'Every rupee tracked and shared', text: 'Full utilisation reports and impact documentation for every partner, every time.' },
              { color: '#c04040', shadow: 'rgba(192,64,64,0.35)', title: 'Fully CSR compliant', text: '12A, 80G, CSR-1 registrations maintained. Corporate giving made simple and legal.' },
              { color: '#2b7fd4', shadow: 'rgba(43,127,212,0.35)', title: 'Open to every form of contribution', text: 'Money, time, mentorship, resources — if it reaches a child and brings joy, we want it.' }
            ].map((p, i) => (
              <div key={i} className="bg-white rounded-[20px] p-[32px] border border-[rgba(26,26,46,0.08)] shadow-[0_4px_32px_rgba(26,26,46,0.07)] flex items-start gap-[18px] hover:-translate-y-[5px] hover:shadow-[0_12px_48px_rgba(26,26,46,0.12)] transition-all duration-350 cursor-default group">
                <div className="w-[10px] h-[10px] rounded-full mt-[5px] flex-shrink-0 transition-all duration-300 group-hover:scale-125" style={{ backgroundColor: p.color, boxShadow: `0 0 12px ${p.shadow}` }}></div>
                <div>
                  <div className="text-[15px] font-semibold mb-[6px] text-[#1a1a2e]">{p.title}</div>
                  <div className="text-[13px] font-light text-[#4a4a6a] leading-[1.8]">{p.text}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WELCOME SECTION */}
      <section className="w-full bg-gradient-to-br from-[#f0f7ff] to-[#fff8ee] py-[100px] px-[20px] lg:px-[64px] flex justify-center">
        <div className="max-w-[1240px] w-full flex flex-col">
          <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-[40px] mb-[56px]">
            <div>
              <div className="flex items-center gap-[14px] mb-[40px]">
                <div className="w-[28px] h-[1px] bg-[#c8902a]"></div>
                <span className="text-[10px]   tracking-[0.2em] text-[#c8902a] uppercase font-semibold">Who Can Join</span>
              </div>
              <h2 className="text-[32px] md:text-[50px] font-serif leading-[1.1] text-[#1a1a2e] tracking-[-0.02em]">
                We welcome anyone who believes <em className="text-[#c8902a] italic">children come first</em>
              </h2>
            </div>
            <p className="text-[14px] font-light text-[#4a4a6a] leading-[1.8] max-w-[300px]">
              No minimum. No threshold. If you care about a child's joy, there is a place for you here.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px]">
            {[
              { icon: '🏢', title: 'Corporates & CSR Teams', text: 'Structured, compliant, fully documented. We make corporate giving effortless and meaningful.' },
              { icon: '🏦', title: 'Banks & Financial Institutions', text: 'CSR mandates met with measurable impact in Tier-2 and Tier-3 India.' },
              { icon: '👨‍👩‍👧', title: 'Families & Family Offices', text: 'Structured family giving aligned with your values. Honoured with full care and transparency.' },
              { icon: '🎓', title: 'Educational Institutions', text: 'Resources, mentorship, curriculum support — whatever you bring, we can place well.' },
              { icon: '🤝', title: 'Individuals', text: 'Your name, your time, your story. Individual contributors are the heartbeat of this work.' },
              { icon: '🌱', title: 'Foundations & Trusts', text: 'Institutional alignment with a foundation that will never be a headline and always be accountable.' },
            ].map((w, j) => (
              <div key={j} className="bg-white rounded-[20px] p-[36px] pt-[30px] border border-[rgba(26,26,46,0.08)] shadow-[0_4px_32px_rgba(26,26,46,0.07)] hover:-translate-y-[6px] hover:shadow-[0_12px_48px_rgba(26,26,46,0.12)] transition-all duration-350 cursor-default">
                <div className="w-[52px] h-[52px] rounded-[14px] bg-[#fff3d6] flex items-center justify-center text-[24px] mb-[18px]">{w.icon}</div>
                <div className="text-[15px] font-semibold text-[#1a1a2e] mb-[7px]">{w.title}</div>
                <p className="text-[13px] font-light text-[#4a4a6a] leading-[1.75]">{w.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ENGAGE SECTION */}
      <section id="engage" className="w-full bg-[#fdfaf5] py-[100px] px-[20px] lg:px-[64px] flex justify-center">
        <div className="max-w-[1240px] w-full grid grid-cols-1 lg:grid-cols-2 gap-[80px] items-start">
          {/* Left Column */}
          <div>
            <div className="flex items-center gap-[14px] mb-[28px]">
              <div className="w-[24px] h-[1px] bg-[#c8902a]"></div>
              <span className="text-[10px]   tracking-[0.22em] text-[#c8902a] uppercase font-semibold">Join Hands</span>
            </div>
            <h2 className="text-[28px] md:text-[44px] font-serif leading-[1.15] text-[#1a1a2e] mb-[20px] tracking-[-0.02em]">
              Walk alongside us<br />in <em className="text-[#c8902a] italic">bringing joy</em>
            </h2>
            <p className="text-[15px]   text-[#4a4a6a] font-light leading-[1.9] mb-[40px]">
              You do not need all the answers. Just believe every child deserves better than what chance gave them. We will figure out the rest together.
            </p>

            <div className="flex flex-col">
              {[
                { pip: '#c8902a', shadow: 'rgba(200,144,42,0.5)', title: 'Fund programs that bring joy', text: 'Art, play, learning, sport — anything that makes a child\'s world bigger' },
                { pip: '#12957c', shadow: 'rgba(18,149,124,0.5)', title: 'Be a long-term stability partner', text: 'Consistent multi-year support, tracked and fully reported' },
                { pip: '#c04040', shadow: 'rgba(192,64,64,0.5)', title: 'Give your time or expertise', text: 'Your knowledge has a life of its own in a child\'s hands' },
                { pip: '#2b7fd4', shadow: 'rgba(43,127,212,0.5)', title: 'Align institutional CSR giving', text: 'Compliant, impact-measured, and fully accountable' }
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-[16px] py-[18px] border-b border-[rgba(26,26,46,0.08)] transition-all duration-300 hover:pl-[10px] cursor-default first:border-t">
                  <div className="w-[6px] h-[6px] rounded-full mt-[7px] shrink-0" style={{ backgroundColor: item.pip, boxShadow: `0 0 6px ${item.shadow}` }}></div>
                  <div>
                    <div className="text-[14px] font-semibold mb-[3px] text-[#1a1a2e]">{item.title}</div>
                    <div className="text-[12px] font-light text-[#4a4a6a] leading-[1.65]">{item.text}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form Card */}
          <div className="bg-white rounded-[24px] p-[32px] sm:p-[48px] border border-[rgba(26,26,46,0.08)] shadow-[0_12px_48px_rgba(26,26,46,0.12)] relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-[4px] bg-gradient-to-r from-[#c8902a] via-[#12957c] to-[#2b7fd4]"></div>
            <div className="font-serif text-[24px] text-[#1a1a2e] font-normal mb-[6px]">Reach Out to Us</div>
            <div className="text-[13px] font-light text-[#4a4a6a] leading-[1.7] mb-[28px]">Tell us who you are. We respond within 48 hours, always personally.</div>

            <form className="flex flex-col w-full" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-[12px] mb-[16px]">
                <div className="flex flex-col">
                  <label className="text-[10px] tracking-[0.12em] uppercase text-[#9090b0] font-semibold mb-[7px]">First Name</label>
                  <input type="text" placeholder="First name" className="w-full p-[12px_16px] bg-[#fdfaf5] border-2 border-[rgba(26,26,46,0.08)] text-[#1a1a2e]   text-[14px] font-light rounded-[10px] outline-none transition-all duration-300 placeholder:text-[#9090b0] focus:border-[#c8902a] focus:bg-[#fff3d6]" />
                </div>
                <div className="flex flex-col">
                  <label className="text-[10px] tracking-[0.12em] uppercase text-[#9090b0] font-semibold mb-[7px]">Last Name</label>
                  <input type="text" placeholder="Last name" className="w-full p-[12px_16px] bg-[#fdfaf5] border-2 border-[rgba(26,26,46,0.08)] text-[#1a1a2e]   text-[14px] font-light rounded-[10px] outline-none transition-all duration-300 placeholder:text-[#9090b0] focus:border-[#c8902a] focus:bg-[#fff3d6]" />
                </div>
              </div>

              <div className="flex flex-col mb-[16px]">
                <label className="text-[10px] tracking-[0.12em] uppercase text-[#9090b0] font-semibold mb-[7px]">Organisation</label>
                <input type="text" placeholder="Company, institution, or individual" className="w-full p-[12px_16px] bg-[#fdfaf5] border-2 border-[rgba(26,26,46,0.08)] text-[#1a1a2e]   text-[14px] font-light rounded-[10px] outline-none transition-all duration-300 placeholder:text-[#9090b0] focus:border-[#c8902a] focus:bg-[#fff3d6]" />
              </div>

              <div className="flex flex-col mb-[16px]">
                <label className="text-[10px] tracking-[0.12em] uppercase text-[#9090b0] font-semibold mb-[7px]">Email</label>
                <input type="email" placeholder="your@email.com" className="w-full p-[12px_16px] bg-[#fdfaf5] border-2 border-[rgba(26,26,46,0.08)] text-[#1a1a2e]   text-[14px] font-light rounded-[10px] outline-none transition-all duration-300 placeholder:text-[#9090b0] focus:border-[#c8902a] focus:bg-[#fff3d6]" />
              </div>

              <div className="flex flex-col mb-[16px]">
                <label className="text-[10px] tracking-[0.12em] uppercase text-[#9090b0] font-semibold mb-[7px]">How would you like to engage?</label>
                <select className="w-full p-[12px_16px] bg-[#fdfaf5] border-2 border-[rgba(26,26,46,0.08)] text-[#1a1a2e]   text-[14px] font-light rounded-[10px] outline-none transition-all duration-300 appearance-none focus:border-[#c8902a] focus:bg-[#fff3d6] bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%239090B0%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[right_16px_top_50%] bg-[length:10px_auto] cursor-pointer">
                  <option value="">Select...</option>
                  <option>Fund programs that bring joy to children</option>
                  <option>Long-term CSR partnership (corporate)</option>
                  <option>Individual or family contribution</option>
                  <option>Mentorship or expertise</option>
                  <option>Institutional / foundation alignment</option>
                  <option>Just want to learn more first</option>
                </select>
              </div>

              <div className="flex flex-col mb-[16px]">
                <label className="text-[10px] tracking-[0.12em] uppercase text-[#9090b0] font-semibold mb-[7px]">A few words</label>
                <textarea placeholder="Tell us about yourself and why this matters to you..." className="w-full h-[86px] resize-y p-[12px_16px] bg-[#fdfaf5] border-2 border-[rgba(26,26,46,0.08)] text-[#1a1a2e]   text-[14px] font-light rounded-[10px] outline-none transition-all duration-300 placeholder:text-[#9090b0] focus:border-[#c8902a] focus:bg-[#fff3d6]"></textarea>
              </div>

              <button className="w-full p-[15px] mt-[8px] bg-[#1a1a2e] text-white   text-[11px] font-bold tracking-[0.14em] uppercase rounded-[10px] transition-all duration-300 hover:bg-[#c8902a] hover:shadow-[0_8px_32px_rgba(200,144,42,0.3)] hover:-translate-y-[2px]">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Foundation;