import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Helmet } from "react-helmet-async";
import {
  Globe,
  MapPin,
  Handshake,
  Factory,
  Wallet,
  Users,
  Compass,
  Landmark,
  Shield,
  FileText,
  Merge,
  Database,
  Sparkles,
  X,
} from "lucide-react";
import { Link } from "react-router-dom";

const teamProfiles = [
  {
    id: "pratham",
    name: "Pratham Sharma",
    role: "Director",
    image: "/pratham.png",
    shortDesc: "Pratham Sharma is a Director at Northrop Management Private Limited, a multidisciplinary advisory firm based in Delhi NCR...",
    fullDesc: (
      <>
        <p className="mb-4">Pratham Sharma is a Director at Northrop Management Private Limited, a multidisciplinary advisory firm based in Delhi NCR, serving founders, enterprises, and institutions across audit & assurance, IBC advisory, credit risk monitoring, and capital advisory. With a career spanning audit, assurance, and transaction advisory, he brings deep institutional expertise across financial services, manufacturing, and services sectors.</p>
        <p className="mb-4">He began his career at D Pathak & Co., a chartered accountancy firm specializing in banking sector assurance, where he executed 15+ stock and receivable audits covering credit portfolios worth ₹500+ Crore, performed ASM audits verifying loan documentation and collateral valuations, conducted forensic and transaction audits identifying fraud indicators and control weaknesses, and managed end-to-end tax and GST compliance - achieving 100% on-time statutory adherence across all engagements.</p>
        <p className="mb-4">He subsequently working in Assurance, leading statutory and internal audit engagements for 5+ clients with combined revenues exceeding ₹200 Crore. He executed IFC testing under the Companies Act, 2013 and ISA standards, prepared consolidated financial statements under Indian AS and US GAAP - covering intercompany eliminations, equity method accounting, and VIE analysis under ASC 810 - and executed SOX-aligned control testing producing risk ratings and management action plans for audit committee reporting.</p>
        <p>In his current role at Northrop Management, Pratham contributes across audit & assurance, IBC and NCLT advisory, credit risk monitoring, and capital advisory - supporting the firm's work with founders, enterprises, and institutions on strategy, M&A, tax structuring, digital transformation, and IPO readiness.</p>
      </>
    )
  },
  {
    id: "sathi",
    name: "Sathi Devanand",
    role: "Consultant Non Profit",
    image: "/sathi.jpg",
    shortDesc: "For 27 years, when something important happened at USAID/India, Sathi Devanand was usually somewhere behind it, making sure it worked.",
    fullDesc: (
      <>
        <p className="mb-4"><strong>27 Years with USAID / Ex Jefferson</strong></p>
        <p className="mb-4">For 27 years, when something important happened at USAID/India, Sathi Devanand was usually somewhere behind it, making sure it worked.</p>
        <p className="mb-4">She joined in 1994 as an administrative assistant and stayed nearly three decades, which tells you two things: the institution trusted her, and she kept delivering long after the novelty wore off. Over those years she moved from managing calendars to managing money, budget worksheets, cost estimates, pipeline analyses for USAID health programming, and advising implementing partners on how to scale what was actually working.</p>
        <p className="mb-4">When the President of the United States visited a project site in 2010, she handled the logistics. She has the certificate to prove it. When a US Ambassador's site visit needed to go perfectly, she earned a Spot Award for making it happen. When Mumbai hosted the "Towards a TB-free India" roundtable, she was named Star Performer for pulling the event and press briefing together. That's the pattern of her whole career: quiet, precise work that senior people stake their reputations on.</p>
        <p className="mb-4">After USAID, she supported procurement and budget analysis for the Health Office through Jefferson Solutions, then managed project coordination for a US digital transformation client, same discipline, new sectors, new tools.</p>
        <p className="mb-4">She's fluent in English and Hindi, conversational in Tamil and Malayalam, and handles sensitive information the way you'd hope: quietly.</p>
        <p>If you need someone who has lived this work, Presidential visits, ambassador schedules, two decades of US government scrutiny, rather than learned it from a course, this is who you hire.</p>
      </>
    )
  },
  {
    id: "gopal",
    name: "Gopal Banka",
    role: "Fundraising, Debt Syndication & IPO Readiness",
    image: "/gopal.png",
    shortDesc: "Most founders can build a product. Far fewer can sit across from a banker or an investor and come away with capital on good terms...",
    fullDesc: (
      <>
        <p className="mb-4">Most founders can build a product. Far fewer can sit across from a banker or an investor and come away with capital on good terms. That second skill is what Gopal Banka has spent 21 years building.</p>
        <p className="mb-4">He is a Chartered Accountant and registered Insolvency Professional who spent more than two decades in corporate finance with some of India's leading business houses before turning that experience into a Virtual CFO practice for SMEs and startups. His work sits in the gap most growing companies fall into: the books are maintained, but nobody is preparing the company to actually receive money. He closes that gap.</p>
        <p className="mb-4">When a company is raising equity, he turns the financial data into an investment story that holds up. He builds the information memorandum, the pitch deck and the financial model, runs the data room so due diligence moves instead of stalling, and sits at the table when valuation is negotiated. He has raised multiple Crores across equity and debt for clients in tech, manufacturing and services.</p>
        <p className="mb-4">On the debt side, he structures term loans, working capital and project finance, and negotiates directly with banks, NBFCs and venture debt funds. Founders are often surprised to learn the rate on the first term sheet is an opening position, not a price tag. He treats it accordingly.</p>
        <p className="mb-4">His sharpest edge is IPO readiness. He takes private companies through the discipline of becoming listable, on the SME platform or the Main Board: internal controls that survive scrutiny, audit readiness, SEBI and Companies Act compliance, GST and TDS health checks, ERP implementation, and the financial narrative public investors will actually read. He also advises on capital structure in the run up to listing, including growth capital raised before the IPO.</p>
        <p className="mb-4">The engagement model is fractional. You get a finance leader with 21 years of experience without the full time salary, available immediately and scoped to your milestones. While you focus on product and sales, he watches margins, cash, burn and valuation, and puts controls in place at the ground level so the numbers stay trustworthy as you scale.</p>
        <p>If your company is somewhere between raising its first serious round and ringing the bell at an exchange, this is the person who gets your numbers ready for scrutiny.</p>
      </>
    )
  }
];

const harveyProfile = {
  id: "harvey",
  name: "Harvey",
  role: "Chief Happiness Officer",
  image: "/harvey.png",
  shortDesc: "He has no CA, no CS, no MBA. He has never read a single forensic audit report. And yet he has the lowest stress levels...",
  fullDesc: (
    <>
      <p className="mb-4">He has no CA, no CS, no MBA. He has never read a single forensic audit report. And yet he has the lowest stress levels in the entire office.</p>
      <p className="mb-2"><strong>His job description:</strong></p>
      <ul className="list-disc pl-5 mb-4 space-y-1">
        <li>Audit every chair for comfort (100% pass rate, zero exceptions)</li>
        <li>Supervise keyboard activity (by sitting directly on it)</li>
        <li>Conduct random desk inspections at 3pm daily</li>
        <li>Maintain team morale through sheer indifference to deadlines</li>
      </ul>
      <p className="mb-4">Here's the thing: in a firm that spends its day flagging red flags in other people's balance sheets, someone needs to remind us that not everything needs to be stress-tested.</p>
      <p className="mb-4">He does that. Unpaid. Un-appraised. Unbothered.</p>
      <p>Every high-pressure team needs one member who refuses to take the P&L personally. Ours has fur.</p>
    </>
  )
};

const valuesData = [
  {
    subtitle: "Core",
    title: "Integrity",
    description:
      "Uncompromising adherence to moral and ethical principles in every transaction.",
    practice:
      "All engagement letters include a conflict-of-interest declaration, reviewed and signed before work begins.",
  },
  {
    subtitle: "Clarity",
    title: "Transparency",
    description:
      "Absolute visibility into process and outcome, removing institutional jargon from every client interaction.",
    practice:
      "We provide written engagement summaries after every major milestone. No client should have to call to understand the status of their mandate.",
  },
  {
    subtitle: "Conduct",
    title: "Ethical",
    description:
      "A commitment to the highest standards of professional conduct and fiduciary duty.",
    practice:
      "Northrop does not accept mandates where we identify a conflict with an existing client engagement. We would rather decline work than compromise independence.",
  },
  {
    subtitle: "Legacy",
    title: "In India for the World",
    description:
      "Building indigenous excellence that commands respect on the global stage.",
    practice:
      "We measure success not by engagement volume but by whether our clients return — and whether they refer other institutions to us.",
  },
];

const globalInfluenceData = [
  {
    icon: Globe,
    title: "Global Standards",
    description:
      "Our advisory frameworks reference Basel III capital adequacy standards, IFRS and Ind-AS reporting requirements, SEBI LODR obligations, and RBI prudential norms — ensuring every recommendation is grounded in applicable regulatory context.",
  },
  {
    icon: MapPin,
    title: "Local Mastery",
    description:
      "Deep navigation of RBI mandates, SEBI regulations, and the unique cultural intricacies of Indian enterprise.",
  },
];

const clientProfileData = [
  { icon: Handshake, title: "Banking & Financial Services", link: "/services/banking-financial-services" },
  { icon: Factory, title: "Manufacturing & Industrials", link: "/services/manufacturing-industrials" },
  { icon: Wallet, title: "Real Estate & Infrastructure", link: "/services/real-estate-infrastructure" },
  { icon: Users, title: "Non-Profit & Grant Advisory", link: "/services/non-profit-grant-advisory" },
  { icon: Globe, title: "Energy & Utilities", link: "/services/energy-utilities" },
  { icon: FileText, title: "Textiles & Consumer", link: "/services/textiles-consumer" },
];

const pillarsData = [
  {
    icon: Compass,
    title: "Corporate Strategy",
    description:
      "Architecting long-term roadmaps for sustainable scale and dominant market positioning.",
    link: "/pillars/corporate-strategy",
  },
  {
    icon: Landmark,
    title: "Capital Advisory",
    description:
      "Optimizing capital structures and navigating high-stakes international funding landscapes.",
    link: "/pillars/capital-advisory",
  },
  {
    icon: Shield,
    title: "Risk Governance",
    description:
      "Establishing robust internal frameworks to protect institutional assets and reputation.",
    link: "/pillars/risk-governance",
  },
  {
    icon: FileText,
    title: "Financial Controls",
    description:
      "Implementing rigid mechanisms for absolute fiscal transparency and real-time auditability.",
    link: "/pillars/financial-controls",
  },
  {
    icon: Merge,
    title: "M&A Integration",
    description:
      "Facilitating strategic acquisitions with a focus on cultural and structural alignment.",
    link: "/pillars/ma-integration",
  },
  {
    icon: Globe,
    title: "Global Tax Structuring",
    description:
      "Sophisticated international tax planning to maximize efficiency and cross-border compliance.",
    link: "/pillars/global-tax-structuring",
  },
  {
    icon: Database,
    title: "Digital Sovereignty",
    description:
      "Modernizing legacy infrastructure into secure, data-driven ecosystems for the modern era.",
    link: "/pillars/digital-sovereignty",
  },
  {
    icon: Sparkles,
    title: "IPO Readiness",
    description:
      "Hardening organizational processes for the scrutiny and success of public markets.",
    link: "/pillars/ipo-readiness",
  },
];

const sovereignMandateData = [
  {
    subtitle: "Protection",
    title: "Data Sovereignty",
    description:
      "Enterprise-grade data governance frameworks aligned with ISO 27001, NIST CSF, and RBI cybersecurity guidelines.",
  },
  {
    subtitle: "Advisory",
    title: "Ethical Fortification",
    description:
      "Empowering local industry with honest, high-integrity financial advice that strengthens the collective national economic tissue.",
  },
  {
    subtitle: "Stability",
    title: "Structural Stability",
    description:
      "Clear-thinking advisory that mitigates systemic risk and promotes sustainable growth across the Indian corporate landscape.",
  },
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
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const Character = ({ char, progress, range, baseColor, activeColor }) => {
  const color = useTransform(progress, range, [baseColor, activeColor]);
  return (
    <motion.span style={{ color }}>
      {char}
    </motion.span>
  );
};

const AnimatedText = ({
  text,
  delay = 0,
  baseColor = "rgba(255,255,255,0)",
  activeColor = "#ffffff",
  offset = ["start 80%", "end center"],
  targetRef,
}) => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef || containerRef,
    offset: offset,
  });

  const letters = text.split("");
  return (
    <span
      ref={containerRef}
      className="inline-block"
      style={{ whiteSpace: "pre-wrap" }}
    >
      {letters.map((char, index) => {
        const start = index / letters.length;
        const end = start + (1 / letters.length);
        return (
          <Character
            key={index}
            char={char}
            progress={scrollYProgress}
            range={[start, end]}
            baseColor={baseColor}
            activeColor={activeColor}
          />
        );
      })}
    </span>
  );
};

export default function WhoWeAre() {
  const heroRef = useRef(null);
  const [selectedProfile, setSelectedProfile] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#f9f9ff] text-[#131c2a] ">
      <Helmet>
        <title>
          Who We Are | Purpose, Values & Leadership | Northrop India
        </title>
        <meta
          name="description"
          content="Discover Northrop's commitment to integrity, transparency, and technical excellence. Meet our leadership team and learn about our mission to drive institutional clarity."
        />
      </Helmet>

      {/* Hero Section: The Founder's Mandate */}
      <section ref={heroRef} className="relative w-full min-h-[80vh] flex items-center pt-[80px] pb-[80px] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            alt="Ashish Chaudhary, Founder & Managing Director, Northrop Management Private Limited"
            className="w-full h-full object-cover object-top"
            src="/whoweare/bannner.jpeg"
            loading="lazy"
          />
          {/* <div className="absolute inset-0 bg-black/50"></div> */}
        </div>

        <div className="relative z-10 max-w-[1440px] mx-auto px-[32px] md:px-[40px] w-full mt-10">
          <div className="w-full max-w-[1280px]">
            <div className="space-y-[48px] md:space-y-[64px] text-[36px] md:text-[36px] lg:text-[48px] xl:text-[64px] font-playfair font-[300] leading-[1.1]  text-white font-bold" >
              <span>
                <AnimatedText
                  text="We are a management consulting firm built on a single operating conviction: that every enterprise we touch must become the benchmark not approach it, not aspire to it, but become it. We do not believe in second. We do not engineer improvement. We engineer dominance."
                  delay={0}
                  targetRef={heroRef}
                  offset={["start start", "end center"]}
                />
              </span>
            </div>
          </div>
        </div>
      </section>




 {/* Leadership Section */}
      <section className="bg-white py-[64px] border-t border-gray-200">
        <div className="max-w-[1440px] mx-auto px-[32px] md:px-[40px] mb-[48px] text-center">
             <span className="text-[#C4973B] font-playfair italic text-[18px] mb-[16px] block">
                Firm Leadership
             </span>
             <h2 className="font-playfair text-[36px] md:text-[48px] text-[#001f3f] tracking-[0px]">
                The Architect of Scale
             </h2>
        </div>
        <div className="max-w-[1000px] mx-auto px-[32px] md:px-[40px]">
          <Link to="/md-profile" className="block group">
            <div className="flex flex-col md:flex-row items-center gap-[40px] p-[40px] rounded-2xl transition-all duration-500 hover:bg-gray-50 border border-transparent hover:border-[#C4973B]/20 hover:shadow-2xl">
              <div className="flex-shrink-0">
                <div className="w-[180px] h-[180px] rounded-full overflow-hidden border-[4px] border-[#001f3f] group-hover:border-[#C4973B] transition-colors duration-500 shadow-lg">
                  <img
                    src="/mdimage.jpeg"
                    alt="Ashish Chaudhary"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
                </div>
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-[36px] font-playfair text-[#001f3f] font-bold mb-[8px] group-hover:text-[#C4973B] transition-colors duration-500">
                  Ashish Chaudhary
                </h3>
                <h4 className="text-[18px] text-[#C4973B] mb-[16px] font-semibold tracking-wide">
                  Founder & Managing Director, Northrop Management Private Limited
                </h4>
                <p className="text-[#43474e] text-[16px] leading-[1.8] font-light">
                  Ashish Chaudhary is the Founder and Managing Director of Northrop Management Private Limited, an advisory firm built around assurance, transaction, and risk consulting for businesses, financial institutions, investors, and infrastructure stakeholders across India. He is regularly counted among the top 1% of voices in finance on LinkedIn, as of June 2026.
                </p>
                <div className="mt-6 inline-flex items-center text-[#001f3f] font-semibold text-sm tracking-widest uppercase group-hover:text-[#C4973B] transition-colors duration-300">
                  Read Full Profile <span className="ml-2">→</span>
                </div>
              </div>
            </div>
          </Link>

          {/* Team Members Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[32px] mt-[48px]">
            {teamProfiles.map((profile) => (
              <div 
                key={profile.id}
                onClick={() => setSelectedProfile(profile)}
                className="flex flex-col items-center gap-[24px] p-[32px] rounded-2xl transition-all duration-500 hover:bg-gray-50 border border-transparent hover:border-[#C4973B]/20 hover:shadow-2xl cursor-pointer group"
              >
                <div className="flex-shrink-0">
                  <div className="w-[140px] h-[140px] rounded-full overflow-hidden border-[4px] border-[#001f3f] group-hover:border-[#C4973B] transition-colors duration-500 shadow-lg mx-auto">
                    <img
                      src={profile.image}
                      alt={profile.name}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                    />
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="text-[24px] font-playfair text-[#001f3f] font-bold mb-[4px] group-hover:text-[#C4973B] transition-colors duration-500">
                    {profile.name}
                  </h3>
                  <h4 className="text-[14px] text-[#C4973B] mb-[12px] font-semibold tracking-wide uppercase">
                    {profile.role}
                  </h4>
                  <p className="text-[#43474e] text-[15px] leading-[1.6] font-light line-clamp-3">
                    {profile.shortDesc}
                  </p>
                  <div className="mt-4 inline-flex items-center text-[#001f3f] font-semibold text-xs tracking-widest uppercase group-hover:text-[#C4973B] transition-colors duration-300">
                    Read Full Profile <span className="ml-2">→</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-center mt-16 mb-16">
             <div className="w-1/2 h-[1px] bg-gradient-to-r from-transparent via-[#C4973B]/50 to-transparent"></div>
          </div>

          <div className="max-w-[360px] mx-auto">
            <div 
              onClick={() => setSelectedProfile(harveyProfile)}
              className="flex flex-col items-center gap-[24px] p-[32px] rounded-2xl transition-all duration-500 hover:bg-gray-50 border border-transparent hover:border-[#C4973B]/20 hover:shadow-2xl cursor-pointer group"
            >
              <div className="flex-shrink-0">
                <div className="w-[140px] h-[140px] rounded-full overflow-hidden border-[4px] border-[#001f3f] group-hover:border-[#C4973B] transition-colors duration-500 shadow-lg mx-auto">
                  <img
                    src={harveyProfile.image}
                    alt={harveyProfile.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-[24px] font-playfair text-[#001f3f] font-bold mb-[4px] group-hover:text-[#C4973B] transition-colors duration-500">
                  {harveyProfile.name}
                </h3>
                <h4 className="text-[14px] text-[#C4973B] mb-[12px] font-semibold tracking-wide uppercase">
                  {harveyProfile.role}
                </h4>
                <p className="text-[#43474e] text-[15px] leading-[1.6] font-light line-clamp-3">
                  {harveyProfile.shortDesc}
                </p>
                <div className="mt-4 inline-flex items-center text-[#001f3f] font-semibold text-xs tracking-widest uppercase group-hover:text-[#C4973B] transition-colors duration-300">
                  Read Full Profile <span className="ml-2">→</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
      

      {/* Sovereign Values Section */}
      <section className="bg-[#001f3f] py-[28px] text-white">
        <div className="max-w-[1440px] mx-auto px-[32px] md:px-[40px]">
          <div className="mb-[80px]">
            <span className="text-[#C4973B] font-playfair italic text-[18px] mb-[12px] block">
              Foundation of Trust
            </span>
            <h2 className="font-playfair text-[36px] md:text-[48px] tracking-[0px]">
              Sovereign Values
            </h2>
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
                <h3 className="text-[#C4973B] text-[15px] tracking-[0.3em] uppercase mb-[16px] font-bold">
                  {val.subtitle}
                </h3>
                <p className=" text-[24px]">{val.title}</p>
                <p className="text-white text-[14px] mt-[16px] font-[300] leading-[1.6]">
                  {val.description}
                </p>
                <p className="text-white/50 text-[13px] mt-[12px] font-[300] leading-[1.6] italic">
                  {val.practice}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="relative w-full py-[100px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            alt="Institutional Horizon"
            className="w-full h-full object-cover object-center"
            src="/whoweare/whoweare-hero.jpg"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>

        <div className="relative z-10 max-w-[1440px] mx-auto px-[32px] md:px-[40px] w-full">
          <div className="max-w-[1280px]">
            <span className="text-[#C4973B] font-playfair italic text-[22px] mb-[24px] block font-semibold">
              Institutional Horizon
            </span>
            <div className="text-[36px] md:text-[48px] lg:text-[64px] font-playfair font-[300] leading-[1.2] text-white font-bold">
              <AnimatedText
                text="Our vision is to see Indian enterprises lead the Fortune 500, not follow it.We identify and eliminate the structural constraints governance gaps, capital inefficiencies, and execution barriers that prevent companies from reaching global scale."
                delay={0}
              />
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
              <span className="text-[#C4973B] font-playfair italic text-[22px] mb-[12px] block font-semibold">
                Institutional Trust
              </span>
              <h2 className="font-playfair text-[40px] md:text-[56px] text-[#001f3f] leading-tight tracking-[0px]">
                Strategic Client Profile
              </h2>
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
              <Link to={item.link} key={idx}>
                <motion.div
                  variants={cardVariants}
                  whileHover={{
                    scale: 1.04,
                    y: -8,
                    boxShadow: "0 20px 40px rgba(0,0,0,0.12)",
                  }}
                  className="bg-white p-[50px] shadow-xl rounded-xl flex flex-col items-center justify-center text-center group border border-gray-100 hover:border-[#C4973B]/50 transition-colors duration-500 cursor-pointer"
                  style={{ backdropFilter: "blur(10px)" }}
                >
                  <div className="w-[80px] h-[80px] rounded-full bg-[#f0f3ff] flex items-center justify-center mb-[24px] group-hover:bg-[#001f3f] transition-colors duration-500">
                    <item.icon className="w-[40px] h-[40px] text-[#001f3f] group-hover:text-[#C4973B] transition-colors duration-500 stroke-[1.5px]" />
                  </div>
                  <span className="text-[14px] tracking-[0.15em] uppercase font-[800] text-[#001f3f] leading-[1.6] group-hover:text-[#C4973B] transition-colors duration-500">
                    {item.title}
                  </span>
                </motion.div>
              </Link>
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
              <span className="text-[#C4973B] font-playfair italic text-[22px] mb-[12px] block font-semibold">
                Institutional Engine
              </span>
              <h2 className="font-playfair text-[40px] md:text-[56px] text-[#001f3f] leading-tight tracking-[0px]">
                The Eight Pillars of Scale.
              </h2>
            </div>
            <div className="text-[#001f3f] font-bold text-[12px] tracking-[0.4em] uppercase mt-[24px] md:mt-0 flex items-center">
              Precision <span className="mx-[12px] text-[#C4973B]">|</span>{" "}
              Protocol <span className="mx-[12px] text-[#C4973B]">|</span>{" "}
              Performance
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
              <Link to={pillar.link} key={idx}>
                <motion.div
                  variants={cardVariants}
                  whileHover={{
                    scale: 1.04,
                    y: -8,
                    boxShadow: "0 20px 40px rgba(0,0,0,0.12)",
                  }}
                  className="bg-white p-[40px] shadow-xl rounded-xl border border-gray-100 hover:border-[#C4973B]/50 group transition-colors duration-500 cursor-pointer h-full flex flex-col"
                  style={{ backdropFilter: "blur(10px)" }}
                >
                  <div className="w-[64px] h-[64px] rounded-full bg-[#f0f3ff] flex items-center justify-center mb-[24px] group-hover:bg-[#001f3f] transition-colors duration-500">
                    <pillar.icon className="w-[32px] h-[32px] text-[#001f3f] group-hover:text-[#C4973B] transition-colors duration-500 stroke-[1.5px]" />
                  </div>
                  <h3 className="font-playfair text-[22px] text-[#001f3f] mb-[16px] tracking-[0px] font-bold group-hover:text-[#C4973B] transition-colors duration-500">
                    {pillar.title}
                  </h3>
                  <p className="text-[#43474e] text-[15px] leading-[1.6] mt-auto">
                    {pillar.description}
                  </p>
                </motion.div>
              </Link>
            ))}
          </motion.div>
        </div>
      </section>

     

      {/* Sovereign Impact Section */}
      <section className="bg-[#001f3f] py-[28px] text-white overflow-hidden relative">
        <div className="absolute inset-0 sovereign-pattern opacity-10"></div>
        <div className="max-w-[1440px] mx-auto px-[12px] md:px-[20px] relative z-10 text-center">
          <span className="text-[#C4973B] font-playfair italic text-[20px] mb-[24px] block tracking-[0px]">
            Sovereign Mandate
          </span>
          <h2 className="font-playfair text-[48px] md:text-[84px] mb-[64px] max-w-[1024px] mx-auto leading-[0.95] tracking-tighter">
            National Resilience Through Financial Integrity.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[64px] mt-[96px] text-left border-t border-white/10 pt-[80px]">
            {sovereignMandateData.map((mandate, idx) => (
              <div key={idx}>
                <div className="flex items-center gap-[16px] mb-[32px]">
                  <div className="w-[32px] h-[1px] bg-[#C4973B]/40"></div>
                  <div className="text-[#C4973B]   text-[15px] tracking-[0.3em] uppercase font-bold">
                    {mandate.subtitle}
                  </div>
                </div>
                <h4 className="font-playfair text-[24px] mb-[16px]">
                  {mandate.title}
                </h4>
                <p className="text-white/60 font-[300] leading-[1.6] text-[14px]">
                  {mandate.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Profile Modal */}
      <AnimatePresence>
        {selectedProfile && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProfile(null)}
              className="absolute inset-0 bg-[#001f3f]/80 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
            >
              {/* Header */}
              <div className="flex items-start justify-between p-6 sm:p-8 border-b border-gray-100 bg-[#f9f9ff]">
                <div className="flex items-center gap-6">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-2 border-[#C4973B] shadow-md flex-shrink-0">
                    <img
                      src={selectedProfile.image}
                      alt={selectedProfile.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-playfair text-[#001f3f] font-bold mb-1">
                      {selectedProfile.name}
                    </h3>
                    <h4 className="text-sm sm:text-base text-[#C4973B] font-semibold tracking-wide uppercase">
                      {selectedProfile.role}
                    </h4>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedProfile(null)}
                  className="p-2 text-gray-400 hover:text-[#001f3f] transition-colors rounded-full hover:bg-gray-100"
                >
                  <X size={24} />
                </button>
              </div>
              
              {/* Content */}
              <div className="p-6 sm:p-8 overflow-y-auto text-[#43474e] text-[15px] leading-relaxed font-light">
                {selectedProfile.fullDesc}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
