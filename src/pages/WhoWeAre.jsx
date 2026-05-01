import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import {
  Globe, MapPin, Handshake, Factory, Wallet, Users, HeartPulse, Sprout,
  Compass, Landmark, Shield, FileText, Merge, Database, Sparkles
} from 'lucide-react';

const valuesData = [
  {
    subtitle: "Core", title: "Integrity",
    description: "Uncompromising adherence to moral and ethical principles in every transaction.",
    practice: "All engagement letters include a conflict-of-interest declaration, reviewed and signed before work begins."
  },
  {
    subtitle: "Clarity", title: "Transparency",
    description: "Absolute visibility into process and outcome, removing institutional jargon from every client interaction.",
    practice: "We provide written engagement summaries after every major milestone. No client should have to call to understand the status of their mandate."
  },
  {
    subtitle: "Conduct", title: "Ethical",
    description: "A commitment to the highest standards of professional conduct and fiduciary duty.",
    practice: "Northrop does not accept mandates where we identify a conflict with an existing client engagement. We would rather decline work than compromise independence."
  },
  {
    subtitle: "Legacy", title: "In India for the World",
    description: "Building indigenous excellence that commands respect on the global stage.",
    practice: "We measure success not by engagement volume but by whether our clients return — and whether they refer other institutions to us."
  }
];

const globalInfluenceData = [
  { icon: Globe, title: "Global Standards", description: "Our advisory frameworks reference Basel III capital adequacy standards, IFRS and Ind-AS reporting requirements, SEBI LODR obligations, and RBI prudential norms — ensuring every recommendation is grounded in applicable regulatory context." },
  { icon: MapPin, title: "Local Mastery", description: "Deep navigation of RBI mandates, SEBI regulations, and the unique cultural intricacies of Indian enterprise." }
];

const clientProfileData = [
  { icon: Handshake, title: "Banking & Financial Services" },
  { icon: Factory, title: "Manufacturing & Industrials" },
  { icon: Wallet, title: "Real Estate & Infrastructure" },
  { icon: Users, title: "Non-Profit & Grant Advisory" },
  { icon: Globe, title: "Energy & Utilities" },
  { icon: FileText, title: "Textiles & Consumer" }
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
  { subtitle: "Protection", title: "Data Sovereignty", description: "Enterprise-grade data governance frameworks aligned with ISO 27001, NIST CSF, and RBI cybersecurity guidelines." },
  { subtitle: "Advisory", title: "Ethical Fortification", description: "Empowering local industry with honest, high-integrity financial advice that strengthens the collective national economic tissue." },
  { subtitle: "Stability", title: "Structural Stability", description: "Clear-thinking advisory that mitigates systemic risk and promotes sustainable growth across the Indian corporate landscape." }
];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.2 } },
};

const cardVariants = {
  hidden: { opacity: 0, x: -80 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

export default function WhoWeAre() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#f9f9ff] text-[#131c2a] ">
      <Helmet>
        <title>Who We Are | Purpose, Values & Leadership | Northrop India</title>
        <meta name="description" content="Discover Northrop's commitment to integrity, transparency, and technical excellence. Meet our leadership team and learn about our mission to drive institutional clarity." />
      </Helmet>


      {/* Hero Section: The Founder's Mandate */}
      <section className="max-w-[1440px] mx-auto px-[32px] md:px-[40px] pt-[16px] pb-[4px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-[40px] items-stretch">
          <div className="col-span-1 lg:col-span-7 flex flex-col justify-center order-2 lg:order-1">
            <div className="max-w-[576px]">
              <span className="text-[#C4973B] font-playfair italic text-[18px] mb-[24px] block tracking-[0px]">The Founder’s Mandate</span>
              <h1 className="font-playfair text-[52px] md:text-[72px] text-[#001f3f] leading-[1.0] mb-[48px] tracking-tighter">About Northrop Management.</h1>
              <div className="space-y-[32px] text-[#43474e] leading-[1.8] text-[18px] font-[300]">
                <p>
                  In an era of performative complexity, we prioritize <span className="text-[#001f3f] ">Structural Integrity</span>. For too long, the Indian enterprise has navigated through decisions driven by incomplete analysis and misaligned incentives. We believe that national resilience begins with institutional transparency.
                </p>
                <blockquote className="font-playfair text-[30px] text-[#001f3f] leading-[1.3] py-[24px] relative">
                  <span className="absolute left-[-32px] top-0 text-[60px] text-[#C4973B]/20">“</span>
                  India’s economy is fundamentally stronger when every business has access to clear, structured, and honest advisory.
                </blockquote>
                <p>
                  At Northrop Management, we replace ambiguity with documented analysis, structured frameworks, and complete accountability at every stage of an engagement. Our mandate is to provide the intellectual rigour required to build lasting institutional value that endures across market cycles, regulatory shifts, and generational transitions.
                </p>
              </div>
              <div className="mt-[64px] flex items-center gap-[24px]">
                <div className="h-[1px] w-[48px] bg-[#C4973B]/40"></div>
                <div>
                  <div className="text-[#001f3f] font-[700] uppercase tracking-[0.3em] text-[11px] mb-[4px]">Ashish Chaudhary</div>
                  <div className="text-[#C4973B] font-playfair text-[14px]">Founder & Managing Director</div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-1 lg:col-span-5 order-1 lg:order-2 flex flex-col">
            <div className="flex-1 min-h-[480px] lg:min-h-0 overflow-hidden">
              <img
                alt="Ashish Chaudhary, Founder & Managing Director, Northrop Management Private Limited"
                className="w-full h-full "
                src="/whoweare/bannner.jpeg"
                loading="lazy"
              />
            </div>
            <div className="mt-[16px] text-right">
              <p className="text-[10px] tracking-[0.3em] uppercase text-[#43474e]/60">Forensic Stewardship / Strategic Foresight</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sovereign Values Section */}
      <section className="bg-[#001f3f] py-[28px] text-white">
        <div className="max-w-[1440px] mx-auto px-[32px] md:px-[40px]">
          <div className="mb-[80px]">
            <span className="text-[#C4973B] font-playfair italic text-[18px] mb-[12px] block">Foundation of Trust</span>
            <h2 className="font-playfair text-[36px] md:text-[48px] tracking-[0px]">Sovereign Values</h2>
          </div>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.15 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[32px]"
          >
            {valuesData.map((val, idx) => (
              <motion.div
                key={idx}
                variants={cardVariants}
                whileHover={{ scale: 1.03, y: -6 }}
                className="border-l border-white/10 pl-[32px] py-[16px] hover:border-[#C4973B] transition-colors duration-500 cursor-default"
              >
                <h3 className="text-[#C4973B] text-[15px] tracking-[0.3em] uppercase mb-[16px] font-bold">{val.subtitle}</h3>
                <p className=" text-[24px]">{val.title}</p>
                <p className="text-white text-[14px] mt-[16px] font-[300] leading-[1.6]">{val.description}</p>
                <p className="text-white/50 text-[13px] mt-[12px] font-[300] leading-[1.6] italic">{val.practice}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-[28px] bg-white">
        <div className=" mx-auto px-[12px] md:px-[40px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-[20px] items-center">
            <div className="lg:col-span-6">
              <span className="text-[#C4973B] text-[18px] mb-[16px] block">Institutional Horizon</span>
              <h2 className="text-[26px] md:text-[38px] text-[#001f3f] leading-[1.1]">
                Our vision is to <span className="font-[300]">architect the ascent of Indian enterprise, positioning domestic leaders for global capital markets, international institutional recognition, and cross-border transactional excellence.</span>
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
      <section className="py-[20px] bg-[#001f3f]">
        <div className="max-w-[1440px] mx-auto px-[32px] md:px-[40px] text-center">
          <span className="text-[#C4973B] font-playfair italic text-[18px] mb-[16px] block">International Standards</span>
          <h2 className="font-playfair text-[36px] md:text-[48px] text-[#ffffff] mb-[48px] tracking-[0px]">Global Influence. Local Mastery.</h2>
          <div className="max-w-[896px] mx-auto">
            <p className="text-[#ffffff] text-[20px] font-[300] leading-[1.6] mb-[64px]">
              Northrop Management bridges the gap between sophisticated international capital standards and the ground realities of the Indian marketplace. Our advisory is rooted in local nuance but executed with global precision.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[48px] text-left">
              {globalInfluenceData.map((item, idx) => (
                <div key={idx} className="flex gap-[24px]">
                  <item.icon className="text-[#C4973B] w-[36px] h-[36px] stroke-[1.5px] mt-[4px] shrink-0" />
                  <div>
                    <h4 className="font-[700] text-[12px] uppercase tracking-[0.2em] text-[#ffffff] mb-[8px]">{item.title}</h4>
                    <p className="text-[14px] text-[#ffffff] leading-[1.6]">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Client Profile Section */}
      <section className="py-[64px] bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#f0f3ff] to-white"></div>
        <div className="max-w-[1440px] mx-auto px-[32px] md:px-[40px] relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-[64px] border-b-2 border-[#C4973B]/20 pb-[24px]">
            <div>
              <span className="text-[#C4973B] font-playfair italic text-[22px] mb-[12px] block font-semibold">Institutional Trust</span>
              <h2 className="font-playfair text-[40px] md:text-[56px] text-[#001f3f] leading-tight tracking-[0px]">Strategic Client Profile</h2>
            </div>
            <p className="text-[#001f3f] font-bold text-[12px] tracking-[0.4em] uppercase mt-[16px] md:mt-0">
              Serving the Caliber of Global Industry
            </p>
          </div>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.15 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {clientProfileData.map((item, idx) => (
              <motion.div
                key={idx}
                variants={cardVariants}
                whileHover={{ scale: 1.04, y: -8, boxShadow: '0 20px 40px rgba(0,0,0,0.12)' }}
                className="bg-white p-[50px] shadow-xl rounded-xl flex flex-col items-center justify-center text-center group border border-gray-100 hover:border-[#C4973B]/50 transition-colors duration-500 cursor-default"
                style={{ backdropFilter: 'blur(10px)' }}
              >
                <div className="w-[80px] h-[80px] rounded-full bg-[#f0f3ff] flex items-center justify-center mb-[24px] group-hover:bg-[#001f3f] transition-colors duration-500">
                  <item.icon className="w-[40px] h-[40px] text-[#001f3f] group-hover:text-[#C4973B] transition-colors duration-500 stroke-[1.5px]" />
                </div>
                <span className="text-[14px] tracking-[0.15em] uppercase font-[800] text-[#001f3f] leading-[1.6] group-hover:text-[#C4973B] transition-colors duration-500">
                  {item.title}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Highlight: Eight Pillars */}
      <section className="py-[64px] bg-white relative overflow-hidden border-t border-gray-200">
        <div className="absolute inset-0 bg-gradient-to-b from-white to-[#f0f3ff]"></div>
        <div className="max-w-[1440px] mx-auto px-[32px] md:px-[40px] relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-[64px] border-b-2 border-[#C4973B]/20 pb-[24px]">
            <div className="max-w-[768px]">
              <span className="text-[#C4973B] font-playfair italic text-[22px] mb-[12px] block font-semibold">Institutional Engine</span>
              <h2 className="font-playfair text-[40px] md:text-[56px] text-[#001f3f] leading-tight tracking-[0px]">The Eight Pillars of Scale.</h2>
            </div>
            <div className="text-[#001f3f] font-bold text-[12px] tracking-[0.4em] uppercase mt-[24px] md:mt-0 flex items-center">
              Precision <span className="mx-[12px] text-[#C4973B]">|</span> Protocol <span className="mx-[12px] text-[#C4973B]">|</span> Performance
            </div>
          </div>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.15 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {pillarsData.map((pillar, idx) => (
              <motion.div
                key={idx}
                variants={cardVariants}
                whileHover={{ scale: 1.04, y: -8, boxShadow: '0 20px 40px rgba(0,0,0,0.12)' }}
                className="bg-white p-[40px] shadow-xl rounded-xl border border-gray-100 hover:border-[#C4973B]/50 group transition-colors duration-500 cursor-default"
                style={{ backdropFilter: 'blur(10px)' }}
              >
                <div className="w-[64px] h-[64px] rounded-full bg-[#f0f3ff] flex items-center justify-center mb-[24px] group-hover:bg-[#001f3f] transition-colors duration-500">
                  <pillar.icon className="w-[32px] h-[32px] text-[#001f3f] group-hover:text-[#C4973B] transition-colors duration-500 stroke-[1.5px]" />
                </div>
                <h3 className="font-playfair text-[22px] text-[#001f3f] mb-[16px] tracking-[0px] font-bold group-hover:text-[#C4973B] transition-colors duration-500">{pillar.title}</h3>
                <p className="text-[#43474e] text-[15px] leading-[1.6]">{pillar.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Sovereign Impact Section */}
      <section className="bg-[#001f3f] py-[28px] text-white overflow-hidden relative">
        <div className="absolute inset-0 sovereign-pattern opacity-10"></div>
        <div className="max-w-[1440px] mx-auto px-[12px] md:px-[20px] relative z-10 text-center">
          <span className="text-[#C4973B] font-playfair italic text-[20px] mb-[24px] block tracking-[0px]">Sovereign Mandate</span>
          <h2 className="font-playfair text-[48px] md:text-[84px] mb-[64px] max-w-[1024px] mx-auto leading-[0.95] tracking-tighter">
            National Resilience Through Financial Integrity.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[64px] mt-[96px] text-left border-t border-white/10 pt-[80px]">
            {sovereignMandateData.map((mandate, idx) => (
              <div key={idx}>
                <div className="flex items-center gap-[16px] mb-[32px]">
                  <div className="w-[32px] h-[1px] bg-[#C4973B]/40"></div>
                  <div className="text-[#C4973B]   text-[15px] tracking-[0.3em] uppercase font-bold">{mandate.subtitle}</div>
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
