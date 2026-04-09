import React, { useEffect } from 'react';
import {
  Globe, MapPin, Handshake, Factory, Wallet, Users, HeartPulse, Sprout,
  Compass, Landmark, Shield, FileText, Merge, Database, Sparkles
} from 'lucide-react';

const valuesData = [
  { subtitle: "Core", title: "Integrity", description: "Uncompromising adherence to moral and ethical principles in every transaction." },
  { subtitle: "Clarity", title: "Transparency", description: "Absolute visibility into process and outcome, removing the fog of institutional jargon." },
  { subtitle: "Conduct", title: "Ethical", description: "A commitment to the highest standards of professional conduct and fiduciary duty." },
  { subtitle: "Legacy", title: "In India for the World", description: "Building indigenous excellence that commands respect on the global stage." }
];

const globalInfluenceData = [
  { icon: Globe, title: "Global Standards", description: "Adopting Basel III, IFRS, and international governance frameworks for absolute institutional hardness." },
  { icon: MapPin, title: "Local Mastery", description: "Deep navigation of RBI mandates, SEBI regulations, and the unique cultural intricacies of Indian enterprise." }
];

const clientProfileData = [
  { icon: Handshake, title: "Executive Advisory & Professional Service Optimization" },
  { icon: Factory, title: "Industrial Engineering & Large-Scale Manufacturing" },
  { icon: Wallet, title: "Fiduciary Grant Stewardship & Allocation" },
  { icon: Users, title: "Philanthropic Governance & Non-Profit Mandates" },
  { icon: HeartPulse, title: "Biomedical Infrastructure & Healthcare Systems" },
  { icon: Sprout, title: "Agri-Business Strategic Development & Food Security" }
];

const pillarsData = [
  { icon: Compass, title: "Corporate Strategy", description: "Architecting long-term roadmaps for sustainable scale and dominant market positioning." },
  { icon: Landmark, title: "Capital Advisory", description: "Optimizing capital structures and navigating high-stakes international funding landscapes." },
  { icon: Shield, title: "Risk Governance", description: "Establishing robust internal frameworks to protect institutional assets and reputation." },
  { icon: FileText, title: "Financial Controls", description: "Implementing rigid mechanisms for absolute fiscal transparency and real-time auditability." },
  { icon: Merge, title: "M&A Integration", description: "Facilitating strategic acquisitions with a focus on cultural and structural alignment." },
  { icon: Globe, title: "Global Tax Structuring", description: "Sophisticated international tax planning to maximize efficiency and cross-border compliance." },
  { icon: Database, title: "Digital Sovereignty", description: "Modernizing legacy infrastructure into secure, data-driven ecosystems for the modern era." },
  { icon: Sparkles, title: "IPO Readiness", description: "Hardening organizational processes for the scrutiny and success of public markets." }
];

const sovereignMandateData = [
  { subtitle: "Protection", title: "Data Sovereignty", description: "Securing the digital backbone of Indian businesses through military-grade governance and secure architectural frameworks." },
  { subtitle: "Advisory", title: "Ethical Fortification", description: "Empowering local industry with honest, high-integrity financial advice that strengthens the collective national economic tissue." },
  { subtitle: "Stability", title: "Structural Stability", description: "Clear-thinking advisory that mitigates systemic risk and promotes sustainable growth across the Indian corporate landscape." }
];

export default function WhoWeAre() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#f9f9ff] text-[#131c2a]   selection:bg-[#ffd573] selection:text-[#785b00]">


      {/* Hero Section: The Founder's Mandate */}
      <section className="max-w-[1440px] mx-auto px-[32px] md:px-[96px] pt-[80px] pb-[160px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-[40px]">
          <div className="col-span-1 lg:col-span-7 flex flex-col justify-center order-2 lg:order-1 mt-[64px] lg:mt-0">
            <div className="max-w-[576px]">
              <span className="text-[#C4973B] font-playfair italic text-[18px] mb-[24px] block tracking-[0px]">The Founder’s Mandate</span>
              <h1 className="font-playfair text-[60px] md:text-[84px] text-[#001f3f] leading-[0.9] mb-[48px] tracking-tighter">The Clarity of Thinking.</h1>
              <div className="space-y-[32px] text-[#43474e] leading-[1.8] text-[18px] font-[300]">
                <p className="text-justify">
                  In an era of performative complexity, we prioritize <span className="text-[#001f3f] font-[500] italic">Structural Integrity</span>. For too long, the Indian enterprise has been navigated through the fog of gut feelings and opaque jargon. We believe that national resilience begins with institutional transparency.
                </p>
                <blockquote className="font-playfair italic text-[30px] text-[#001f3f] leading-[1.3] py-[24px] relative">
                  <span className="absolute left-[-32px] top-0 text-[60px] text-[#C4973B]/20 font-serif">“</span>
                  India’s economy is fundamentally stronger when every business has access to clear, structured, and honest advisory.
                </blockquote>
                <p className="text-justify">
                  At Northrop Management, we replace ambiguity with a ledger of absolute precision. Our mandate is to provide the intellectual rigor required to build lasting value that contributes to the sovereign strength of the nation.
                </p>
              </div>
              <div className="mt-[64px] flex items-center gap-[24px]">
                <div className="h-[1px] w-[48px] bg-[#C4973B]/40"></div>
                <div>
                  <div className="text-[#001f3f] font-[700] uppercase tracking-[0.3em] text-[11px] mb-[4px]">Ashish Chaudhary</div>
                  <div className="text-[#C4973B] font-playfair italic text-[14px]">Founder & Managing Director</div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-1 lg:col-span-5 order-1 lg:order-2">
            <div className="relative aspect-[3/4] overflow-hidden bg-[#e7eeff]">
              <img
                alt="Portrait of Ashish Chaudhary"
                className="w-full h-full object-cover grayscale contrast-110 brightness-90"
                src="/whoweare/unnamed.jpg"
              />
              <div className="absolute inset-0 ring-[1px] ring-inset ring-black/5"></div>
              <div class="absolute bottom-[-40px] right-[-40px] w-[160px] h-[160px] bg-[#C4973B]/10 -z-10"></div>
            </div>
            <div className="mt-[32px] text-right">
              <p className="text-[10px] tracking-[0.3em] uppercase text-[#43474e]/60">Forensic Stewardship / Strategic Foresight</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sovereign Values Section */}
      <section className="bg-[#001f3f] py-[128px] text-white">
        <div className="max-w-[1440px] mx-auto px-[32px] md:px-[96px]">
          <div className="mb-[80px]">
            <span className="text-[#C4973B] font-playfair italic text-[18px] mb-[12px] block">Foundation of Trust</span>
            <h2 className="font-playfair text-[36px] md:text-[48px] tracking-[0px]">Sovereign Values</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[32px]">
            {valuesData.map((val, idx) => (
              <div key={idx} className="border-l border-white/10 pl-[32px] py-[16px] hover:border-[#C4973B] transition-colors duration-500">
                <h3 className="text-[#C4973B]   text-[10px] tracking-[0.3em] uppercase mb-[16px]">{val.subtitle}</h3>
                <p className="font-playfair text-[24px]">{val.title}</p>
                <p className="text-white/40 text-[14px] mt-[16px] font-[300] leading-[1.6]">{val.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-[128px] bg-white">
        <div className="max-w-[1440px] mx-auto px-[32px] md:px-[96px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-[64px] items-center">
            <div className="lg:col-span-5">
              <span className="text-[#C4973B] font-playfair italic text-[18px] mb-[16px] block">Institutional Horizon</span>
              <h2 className="font-playfair text-[36px] md:text-[48px] text-[#001f3f] leading-[1.1] tracking-[0px]">
                Our vision is to architect the ascent of Indian enterprise, positioning domestic leaders as global standard-bearers within the Fortune 500 and beyond.
              </h2>
            </div>
            <div className="lg:col-span-6 lg:col-start-7 lg:border-l border-gray-200 lg:pl-[48px]">
              <div className="space-y-[48px]">
                <div>
                  <h3 className="text-[#001f3f] font-[700] text-[10px] tracking-[0.4em] uppercase mb-[16px]">Our Vision</h3>
                  <p className="text-[#43474e] text-[18px] font-[300] leading-[1.6]">
                    To be the definitive architectural partner for the next generation of Indian conglomerates, transforming local potential into global dominance through disciplined stewardship.
                  </p>
                </div>
                <div>
                  <h3 className="text-[#001f3f] font-[700] text-[10px] tracking-[0.4em] uppercase mb-[16px]">Our Mission</h3>
                  <p className="text-[#43474e] text-[18px] font-[300] leading-[1.6]">
                    Replacing ambiguity with precision. We provide the forensic rigor and strategic foresight necessary for Indian enterprises to navigate complexity and achieve sustainable, institutional scale.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Influence Section */}
      <section className="py-[128px] border-y border-gray-200 bg-white">
        <div className="max-w-[1440px] mx-auto px-[32px] md:px-[96px] text-center">
          <span className="text-[#C4973B] font-playfair italic text-[18px] mb-[16px] block">International Standards</span>
          <h2 className="font-playfair text-[36px] md:text-[48px] text-[#001f3f] mb-[48px] tracking-[0px]">Global Influence. Local Mastery.</h2>
          <div className="max-w-[896px] mx-auto">
            <p className="text-[#43474e] text-[20px] font-[300] leading-[1.6] mb-[64px]">
              Northrop Management bridges the gap between sophisticated international capital standards and the ground realities of the Indian marketplace. Our advisory is rooted in local nuance but executed with global precision.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[48px] text-left">
              {globalInfluenceData.map((item, idx) => (
                <div key={idx} className="flex gap-[24px]">
                  <item.icon className="text-[#C4973B] w-[36px] h-[36px] stroke-[1.5px] mt-[4px] shrink-0" />
                  <div>
                    <h4 className="font-[700] text-[12px] uppercase tracking-[0.2em] text-[#001f3f] mb-[8px]">{item.title}</h4>
                    <p className="text-[14px] text-[#43474e] leading-[1.6]">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Client Profile Section */}
      <section className="py-[128px] bg-[#f0f3ff]">
        <div className="max-w-[1440px] mx-auto px-[32px] md:px-[96px]">
          <div className="flex flex-col md:flex-row justify-between items-end mb-[64px]">
            <div>
              <span className="text-[#C4973B] font-playfair italic text-[18px] mb-[12px] block">Institutional Trust</span>
              <h2 className="font-playfair text-[36px] md:text-[48px] text-[#001f3f] tracking-[0px]">Strategic Client Profile</h2>
            </div>
            <p className="text-[#43474e]   text-[10px] tracking-[0.3em] uppercase opacity-60 mt-[16px] md:mt-0">
              Serving the Caliber of Global Industry
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-gray-200">
            {clientProfileData.map((item, idx) => (
              <div key={idx} className="bg-white p-[40px] flex flex-col items-center justify-center text-center group transition-colors duration-500">
                <item.icon className="w-[48px] h-[48px] text-[#001f3f]/20 group-hover:text-[#C4973B] transition-colors duration-500 mb-[16px] stroke-[1.5px]" />
                <span className="text-[10px] tracking-[0.2em] uppercase font-[700] text-[#001f3f]/60 leading-[1.4] max-w-[200px]">
                  {item.title}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Highlight: Eight Pillars */}
      <section className="bg-[#f0f3ff] py-[128px] border-t border-gray-200">
        <div className="max-w-[1440px] mx-auto px-[32px] md:px-[96px]">
          <div className="flex flex-col md:flex-row justify-between items-baseline mb-[96px] border-b border-gray-200 pb-[48px]">
            <div className="max-w-[768px]">
              <span className="text-[#C4973B] font-playfair italic text-[18px] mb-[12px] block">Institutional Engine</span>
              <h2 className="font-playfair text-[36px] md:text-[48px] text-[#001f3f] tracking-[0px]">The Eight Pillars of Scale.</h2>
            </div>
            <div className="text-[#43474e]   text-[10px] tracking-[0.4em] uppercase mt-[24px] md:mt-0 opacity-60 flex items-center">
              Precision <span className="mx-[12px] text-[#C4973B]">|</span> Protocol <span className="mx-[12px] text-[#C4973B]">|</span> Performance
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-gray-200 border border-gray-200">
            {pillarsData.map((pillar, idx) => (
              <div key={idx} className="bg-white p-[40px] hover:bg-[#f9f9ff] transition-all duration-500 group">
                <pillar.icon className="w-[32px] h-[32px] text-[#C4973B] mb-[32px] transition-transform group-hover:scale-110 stroke-[1.5px] block" />
                <h3 className="font-playfair text-[20px] text-[#001f3f] mb-[16px] tracking-[0px]">{pillar.title}</h3>
                <p className="text-[#43474e] text-[14px] leading-[1.6] font-[300]">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sovereign Impact Section */}
      <section className="bg-[#001f3f] py-[160px] text-white overflow-hidden relative">
        <div className="absolute inset-0 sovereign-pattern opacity-10"></div>
        <div className="max-w-[1440px] mx-auto px-[32px] md:px-[96px] relative z-10 text-center">
          <span className="text-[#C4973B] font-playfair italic text-[20px] mb-[24px] block tracking-[0px]">Sovereign Mandate</span>
          <h2 className="font-playfair text-[48px] md:text-[84px] mb-[64px] max-w-[1024px] mx-auto leading-[0.95] tracking-tighter">
            National Resilience Through Financial Integrity.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[64px] mt-[96px] text-left border-t border-white/10 pt-[80px]">
            {sovereignMandateData.map((mandate, idx) => (
              <div key={idx}>
                <div className="flex items-center gap-[16px] mb-[32px]">
                  <div className="w-[32px] h-[1px] bg-[#C4973B]/40"></div>
                  <div className="text-[#C4973B]   text-[10px] tracking-[0.3em] uppercase">{mandate.subtitle}</div>
                </div>
                <h4 className="font-playfair text-[24px] mb-[16px]">{mandate.title}</h4>
                <p className="text-white/60 font-[300] leading-[1.6] text-[14px]">{mandate.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
