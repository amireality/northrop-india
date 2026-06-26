
import { Link } from 'react-router-dom';

const Institute = () => {
  return (
    <div className="bg-[#ffffff] text-[#1b1c1c] selection:bg-[#00113a]/10 selection:text-[#00113a] font-['Inter']">
      {/* Hero Section */}
      <section className=" flex flex-col justify-center px-[24px]  py-[64px] bg-[#ffffff]">
        <div className="max-w-[1280px] mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-[32px] items-end">
            <div className="lg:col-span-8">
              <span className="text-[12px] leading-[1] font-[600] uppercase tracking-[0.2em] text-[#00113a] mb-6 block">
                The New Era of Global Finance
              </span>
              <h1 className="text-[32px] md:text-[72px] leading-[1.1] font-[700] tracking-[0.02em] text-[#00113a] mb-8 max-w-4xl">
                Architecting clarity in a complex world.
              </h1>
              <p className="text-[18px] md:text-[20px] leading-[1.6] font-[400] tracking-[0.01em] text-[#444650] max-w-2xl mb-12">
                The Northrop Institute combines rigorous academic inquiry with real-world financial stability. We are redefining the landscape of global economic leadership through transparency and intellectual openness.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="bg-[#00113a] text-[#ffffff] px-10 py-5 text-[12px] leading-[1] font-[600] uppercase tracking-widest hover:bg-[#595f67] transition-all cursor-pointer text-center">
                  Explore Curricula
                </Link>
                <Link to="/insights" className="border border-[#00113a] text-[#00113a] px-10 py-5 text-[12px] leading-[1] font-[600] uppercase tracking-widest hover:bg-[#00113a] hover:text-[#ffffff] transition-all cursor-pointer text-center">
                  The 2026 Report
                </Link>
              </div>
            </div>
            <div className="lg:col-span-4 hidden lg:block">
              <div className="border-l-2 border-[#00113a] pl-8 py-4">
                <p className="text-[12px] leading-[1] font-[600] text-[#00113a] mb-2 uppercase">Institutional Assets</p>
                <p className="text-[32px] leading-[1.3] font-[900] text-[#00113a]">$4.2T</p>
                <p className="text-[16px] leading-[1.6] font-[400] text-[#444650]">Under Research Guidance</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Feature (Editorial) */}
      <section className="px-[10px] md:px-[14px]">
        <div className="max-w-[1280px] mx-auto h-[400px] md:h-[600px] overflow-hidden relative">
          <img 
            alt="Campus Life" 
            className="w-full h-full" 
            src="/insituted/insituted1.jpeg"
          />
          <div className="absolute bottom-0 right-0 bg-[#ffffff] p-[16px] md:p-[32px] max-w-full md:max-w-md border-t-2 border-l-2 border-[#00113a]">
            <p className="text-[14px] md:text-[16px] leading-[1.6] font-[400] text-[#00113a] italic">
              "Our mission is to foster an environment where capital meets conscience and intelligence meets impact."
            </p>
            <p className="text-[12px] leading-[1] font-[600] uppercase mt-4 text-[#444650]">
              — Ashish Chaudhary Northrop, Founding Director
            </p>
          </div>
        </div>
      </section>

      {/* Advanced Curricula Section */}
      <section className="py-[14px] md:py-[14px] px-[14px] md:px-[14px] bg-white">
        <div className="max-w-[1280px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-baseline mb-12 md:mb-20 gap-4">
            <h2 className="text-[32px] md:text-[48px] leading-[1.2] font-[700] text-[#00113a] border-b-4 border-[#00113a] pb-4">
              Advanced Curricula
            </h2>
            <span className="text-[12px] leading-[1] font-[600] uppercase tracking-widest text-[#444650]">
              Academic Year 2026/2027 • Modern Academic Program
            </span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[32px] md:gap-[48px]">
            {/* Course 01 */}
            <Link to="/institute/grant-funding-esg" className="group border border-[#00113a]/10 hover:border-[#00113a] transition-all duration-500 overflow-hidden bg-[#ffffff] shadow-sm hover:shadow-xl cursor-pointer block">
              <div className="h-48 md:h-64 overflow-hidden relative">
                <img 
                  alt="Grant Funding & ESG" 
                  className="w-full h-full " 
                  src="/insituted/grant-funding-esg.jpeg"
                />
                <div className="absolute top-4 left-4 bg-[#00113a] text-[#ffffff] px-3 py-1 text-[12px] font-[600]">01</div>
              </div>
              <div className="p-6 md:p-8">
                <h3 className="text-[24px] md:text-[32px] leading-[1.3] font-[600] text-[#00113a] mb-4">Grant Funding & ESG</h3>
                <p className="text-[14px] md:text-[16px] leading-[1.6] font-[400] text-[#444650] mb-8 leading-relaxed">
                  Capital redirection, Blended Finance, and Impact Investing. Navigating the shift toward sustainable debt and climate-linked capital.
                </p>
                <div className="flex justify-between items-center border-t border-[#c5c6d2] pt-6">
                  <span className="text-[12px] font-[600] uppercase tracking-widest text-[#00113a]">Inquiry Open</span>
                  <span className="material-symbols-outlined text-[#00113a] group-hover:translate-x-2 transition-transform">arrow_forward</span>
                </div>
              </div>
            </Link>

            {/* Course 02 */}
            <Link to="/institute/new-age-corporate-finance" className="group border border-[#00113a]/10 hover:border-[#00113a] transition-all duration-500 overflow-hidden bg-[#ffffff] shadow-sm hover:shadow-xl cursor-pointer block">
              <div className="h-48 md:h-64 overflow-hidden relative">
                <img 
                  alt="New Age Corporate Finance" 
                  className="w-full h-full " 
                  src="/insituted/newage.jpeg"
                />
                <div className="absolute top-4 left-4 bg-[#00113a] text-[#ffffff] px-3 py-1 text-[12px] font-[600]">02</div>
              </div>
              <div className="p-6 md:p-8">
                <h3 className="text-[24px] md:text-[32px] leading-[1.3] font-[600] text-[#00113a] mb-4">New Age Corporate Finance</h3>
                <p className="text-[14px] md:text-[16px] leading-[1.6] font-[400] text-[#444650] mb-8 leading-relaxed">
                  Alternative capital structures for growth-stage ventures. Token economics, fintech disruption, and modern treasury management.
                </p>
                <div className="flex justify-between items-center border-t border-[#c5c6d2] pt-6">
                  <span className="text-[12px] font-[600] uppercase tracking-widest text-[#00113a]">Limited Access</span>
                  <span className="material-symbols-outlined text-[#00113a] group-hover:translate-x-2 transition-transform">arrow_forward</span>
                </div>
              </div>
            </Link>

            {/* Course 03 */}
            <Link to="/institute/risk-management-assurance" className="group border border-[#00113a]/10 hover:border-[#00113a] transition-all duration-500 overflow-hidden bg-[#ffffff] shadow-sm hover:shadow-xl cursor-pointer block">
              <div className="h-48 md:h-64 overflow-hidden relative">
                <img 
                  alt="Risk & Strategic Derivatives" 
                  className="w-full h-full " 
                  src="/insituted/managmentassurance1.jpeg"
                />
                <div className="absolute top-4 left-4 bg-[#00113a] text-[#ffffff] px-3 py-1 text-[12px] font-[600]">03</div>
              </div>
              <div className="p-6 md:p-8">
                <h3 className="text-[24px] md:text-[32px] leading-[1.3] font-[600] text-[#00113a] mb-4">Risk Management </h3>
                <p className="text-[14px] md:text-[16px] leading-[1.6] font-[400] text-[#444650] mb-8 leading-relaxed">
                  Identifying and measuring institutional risk. Hedging strategies, stress testing, and navigating regulatory capital requirements.
                </p>
                <div className="flex justify-between items-center border-t border-[#c5c6d2] pt-6">
                  <span className="text-[12px] font-[600] uppercase tracking-widest text-[#00113a]">Research Integrated</span>
                  <span className="material-symbols-outlined text-[#00113a] group-hover:translate-x-2 transition-transform">arrow_forward</span>
                </div>
              </div>
            </Link>

            {/* Course 04 */}
            <Link to="/institute/founders-capital-stack" className="group border border-[#00113a]/10 hover:border-[#00113a] transition-all duration-500 overflow-hidden bg-[#ffffff] shadow-sm hover:shadow-xl cursor-pointer block">
              <div className="h-48 md:h-64 overflow-hidden relative">
                <img 
                  alt="THE FOUNDER’S CAPITAL STACK" 
                  className="w-full h-full " 
                  src="/insituted/founders-capital-stack1.jpeg"
                />
                <div className="absolute top-4 left-4 bg-[#00113a] text-[#ffffff] px-3 py-1 text-[12px] font-[600]">04</div>
              </div>
              <div className="p-6 md:p-8">
                <h3 className="text-[24px] md:text-[32px] leading-[1.3] font-[600] text-[#00113a] mb-4 uppercase">The Founder’s Capital Stack</h3>
                <p className="text-[14px] md:text-[16px] leading-[1.6] font-[400] text-[#444650] mb-8 leading-relaxed">
                  A comprehensive immersion for first-time founders on the mechanics of building, valuing, and scaling a venture. We focus on unit economics and alternative funding.
                </p>
                <div className="flex justify-between items-center border-t border-[#c5c6d2] pt-6">
                  <span className="text-[12px] font-[600] uppercase tracking-widest text-[#00113a]">Founders Only</span>
                  <span className="material-symbols-outlined text-[#00113a] group-hover:translate-x-2 transition-transform">arrow_forward</span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Insights Section */}
      <section className="py-[14px] md:py-[44px] px-[14px] md:px-[14px] bg-[#f5f3f3]">
        <div className="max-w-[1280px] mx-auto">
          <h2 className="text-[12px] leading-[1] font-[600] uppercase tracking-[0.2em] text-[#00113a] mb-12 text-center">Latest Insights</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-[32px]">
            {/* Main Feature */}
            <div className="md:col-span-8 bg-[#ffffff] border border-[#00113a] p-[24px] md:p-[32px] flex flex-col justify-between min-h-[400px]">
              <div>
                <span className="text-[12px] leading-[1] font-[600] text-[#595f67] uppercase mb-4 block">White Paper</span>
                <h3 className="text-[32px] md:text-[48px] leading-[1.2] font-[700] text-[#00113a] mb-4 leading-tight">Liquidity in the Age of Digital Sovereignty</h3>
                <p className="text-[14px] md:text-[16px] leading-[1.6] font-[400] text-[#444650] max-w-lg">How decentralized protocols are reshaping institutional reserve requirements across the G20.</p>
              </div>
              <div className="flex justify-between items-end">
                <Link to="/insights" className="text-[#00113a] text-[12px] leading-[1] font-[600] uppercase border-b-2 border-[#00113a] pb-1 hover:text-[#595f67] hover:border-[#595f67] transition-colors cursor-pointer">Download PDF</Link>
                <img 
                  className="w-24 h-24 md:w-32 md:h-32 object-cover grayscale" 
                  src="/arcticture1.png"
                  alt="Executive"
                />
              </div>
            </div>

            {/* Small Feature 1 */}
            <Link to="/insights" className="md:col-span-4 border border-[#00113a] p-[24px] md:p-[32px] bg-[#00113a] text-[#ffffff] flex flex-col justify-center text-center cursor-pointer">
              <span className="material-symbols-outlined text-5xl mb-6">analytics</span>
              <h4 className="text-[24px] md:text-[32px] leading-[1.3] font-[600] mb-2">Q3 Index</h4>
              <p className="text-[14px] md:text-[16px] leading-[1.6] font-[400] opacity-80 mb-6">Market Volatility Assessment for European Institutional Investors.</p>
              <div className="text-[12px] leading-[1] font-[600] uppercase tracking-widest border border-[#ffffff] px-4 py-2 hover:bg-[#ffffff] hover:text-[#00113a] transition-all">View Dashboard</div>
            </Link>

            {/* Small Feature 2 */}
            <div className="md:col-span-4 bg-[#ffffff] border border-[#00113a] p-[24px] md:p-[32px] overflow-y-auto">
              <h4 className="text-[12px] leading-[1] font-[600] text-[#00113a] uppercase mb-4">Global Hub for Finance, Policy, and Sustainable Development</h4>
              <p className="text-[24px] md:text-[32px] leading-[1.3] font-[600] text-[#00113a] mb-8">Geneva, Oct 2024</p>
              <div className="text-[14px] md:text-[16px] leading-[1.6] font-[400] text-[#444650] flex flex-col gap-4">
                <p>Geneva is internationally recognized as one of the world’s leading centres for global finance, international policy, and sustainable development. The city brings together governments, financial institutions, multinational corporations, development organizations, and industry experts to address complex economic and financial challenges.</p>
                <p>As a hub for sustainable finance, infrastructure investment, financial governance, and economic resilience, Geneva hosts high-level forums and strategic dialogues that influence global policy and investment decisions. Its collaborative ecosystem promotes innovation, responsible leadership, and cross-border partnerships that support long-term economic growth.</p>
                <p>At Northrop Institute, we recognise Geneva as a centre of excellence where research, policy, and industry converge to shape the future of global finance. The city’s commitment to innovation, transparency, and international cooperation continues to inspire meaningful dialogue and practical solutions for businesses, governments, and investors worldwide.</p>
              </div>
            </div>

            {/* Image Column */}
            <div className="md:col-span-8 overflow-hidden border border-[#00113a]">
              <img 
                className="w-full h-full  transition-transform duration-700" 
                src="/insituted/insisuted.jpeg"
                alt="Architecture"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-[14px] md:py-[44px] px-[14px] md:px-[14px] bg-[#ffffff]">
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-[12px] leading-[1] font-[600] uppercase tracking-[0.3em] text-[#00113a] mb-8 block">Stay Informed</span>
          <h2 className="text-[32px] md:text-[72px] leading-[1.1] font-[700] text-[#00113a] mb-8 leading-tight">A weekly digest for the global economist.</h2>
          <p className="text-[18px] md:text-[20px] leading-[1.6] font-[400] text-[#444650] mb-12">
            Join 45,000 global leaders who receive our curated research, symposium invites, and institutional disclosures every Monday morning.
          </p>
          <form className="flex flex-col md:flex-row gap-0 border-b-2 border-[#00113a]" onSubmit={(e) => e.preventDefault()}>
            <input 
              className="flex-grow bg-transparent border-none focus:ring-0 px-4 py-6 text-[18px] md:text-[20px] leading-[1.6] font-[400] text-[#00113a] placeholder:text-[#c5c6d2] outline-none" 
              placeholder="Email Address" 
              type="email" 
            />
            <button className="bg-[#00113a] text-[#ffffff] px-12 py-6 text-[12px] leading-[1] font-[600] uppercase tracking-widest hover:bg-[#595f67] transition-colors cursor-pointer" type="submit">
              Subscribe
            </button>
          </form>
          <p className="text-[12px] leading-[1] font-[600] text-[#757682] mt-6 uppercase">By subscribing, you agree to our privacy framework and disclosures.</p>
        </div>
      </section>
    </div>
  );
};

export default Institute;