import  { useEffect } from 'react';
import { Link } from 'react-router-dom';

const FoundertoInstitutionTransitionAdvisory = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#fbf9f4] text-[#1b1c19] min-h-screen antialiased selection:bg-[#000000] selection:text-[#ffffff]">
      <main className="flex-grow">
        {/* Hero Section with Large Scale Image */}
        <section className="relative min-h-[85vh] flex items-center border-b-4 border-[#1b1c19] overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              alt="Atmospheric high-contrast architectural detail"
              className="w-full h-full object-cover grayscale contrast-125 brightness-75"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBS2lfAQ5QR1bkZbMCrSi698hLgAuNeExQX87VFHrseBVzeKm9HkN7_I-9aXwBxuDPfk3VrI6uUsGIDWyyVFlIAj7_ky03lOBLcW4pPg7yqfl70BYS7rjZQwJtKGH1htyzdHeH0oK2QFqcMih9jnv33_4AGwjRWDww3Xl1FJqtqEmGXFVSviOXZ6N1T5m7g3LaGiJlAEMQ00wFnPzIKx6HRto6TBZEr-R-j6XI_QuN4Ntm7r9L5OgAdW1GWGEStGQ-EaEwH6zrLZw"
            />
            <div className="absolute inset-0 bg-[#fbf9f4]/80 mix-blend-overlay"></div>
          </div>
          <div className="max-w-[1200px] mx-auto px-[32px] md:px-[64px] relative z-10 py-32">
            <div className="grid grid-cols-12 gap-[24px]">
              <div className="col-span-12 lg:col-span-11">
                <span className="font-sans text-[12px] text-[#ffff] block mb-12 uppercase tracking-[0.2em] font-bold border-l-4 border-[#ffff] pl-4">MC-07: Service Formulation</span>
                <h1 className="font-serif text-[48px] md:text-[80px] text-[#ffff] mb-12 leading-tight font-extrabold tracking-tight">
                  The company became too big for one mind. It hasn't become small enough for many.
                </h1>
                <p className="font-sans text-[18px] md:text-[24px] text-[#ffff] max-w-3xl leading-relaxed">
                  Every founder-led company reaches a critical inflection point. The intuition and singular vision that drove initial exponential growth eventually becomes the very bottleneck preventing institutional scale. We transition firms from personality-driven operations to structurally sound institutions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Industry Specific Transition Failures */}
        <section className="max-w-[1200px] mx-auto px-[32px] md:px-[64px] py-[128px] border-b-4 border-[#1b1c19]">
          <h2 className="font-serif text-[32px] md:text-[48px] text-[#1b1c19] mb-20 font-bold">Industry-Specific Transition Failures</h2>
          <div className="grid grid-cols-12 gap-[24px]">
            <div className="col-span-12 md:col-span-6 lg:col-span-3 border-2 border-[#1b1c19] p-8 flex flex-col h-full bg-[#ffffff] hover:bg-[#1b1c19] hover:text-[#fbf9f4] transition-colors group">
              <span className="material-symbols-outlined text-[#1b1c19] group-hover:text-[#fbf9f4] mb-8 text-4xl">account_balance</span>
              <h3 className="font-serif text-[24px] md:text-[28px] text-[#1b1c19] group-hover:text-[#fbf9f4] mb-6 border-b-2 border-[#1b1c19] group-hover:border-[#fbf9f4] pb-6 font-semibold">Indian Family Businesses</h3>
              <p className="font-sans text-[16px] text-[#444748] group-hover:text-[#eae8e3] flex-grow leading-relaxed">
                Succession ambiguity leads to fractured decision-making across generational lines, paralyzing agility.
              </p>
            </div>
            <div className="col-span-12 md:col-span-6 lg:col-span-3 border-2 border-[#1b1c19] p-8 flex flex-col h-full bg-[#ffffff] hover:bg-[#1b1c19] hover:text-[#fbf9f4] transition-colors group">
              <span className="material-symbols-outlined text-[#1b1c19] group-hover:text-[#fbf9f4] mb-8 text-4xl">rocket_launch</span>
              <h3 className="font-serif text-[24px] md:text-[28px] text-[#1b1c19] group-hover:text-[#fbf9f4] mb-6 border-b-2 border-[#1b1c19] group-hover:border-[#fbf9f4] pb-6 font-semibold">Founder-Led Startups</h3>
              <p className="font-sans text-[16px] text-[#444748] group-hover:text-[#eae8e3] flex-grow leading-relaxed">
                Over-reliance on founder approvals for micro-decisions halts momentum post Series C/D funding.
              </p>
            </div>
            <div className="col-span-12 md:col-span-6 lg:col-span-3 border-2 border-[#1b1c19] p-8 flex flex-col h-full bg-[#ffffff] hover:bg-[#1b1c19] hover:text-[#fbf9f4] transition-colors group">
              <span className="material-symbols-outlined text-[#1b1c19] group-hover:text-[#fbf9f4] mb-8 text-4xl">domain</span>
              <h3 className="font-serif text-[24px] md:text-[28px] text-[#1b1c19] group-hover:text-[#fbf9f4] mb-6 border-b-2 border-[#1b1c19] group-hover:border-[#fbf9f4] pb-6 font-semibold">First-Gen Conglomerates</h3>
              <p className="font-sans text-[16px] text-[#444748] group-hover:text-[#eae8e3] flex-grow leading-relaxed">
                Lack of a cohesive holding company structure creates capital misallocation and operational silos.
              </p>
            </div>
            <div className="col-span-12 md:col-span-6 lg:col-span-3 border-2 border-[#1b1c19] p-8 flex flex-col h-full bg-[#ffffff] hover:bg-[#1b1c19] hover:text-[#fbf9f4] transition-colors group">
              <span className="material-symbols-outlined text-[#1b1c19] group-hover:text-[#fbf9f4] mb-8 text-4xl">business_center</span>
              <h3 className="font-serif text-[24px] md:text-[28px] text-[#1b1c19] group-hover:text-[#fbf9f4] mb-6 border-b-2 border-[#1b1c19] group-hover:border-[#fbf9f4] pb-6 font-semibold">Mid-Sized Services</h3>
              <p className="font-sans text-[16px] text-[#444748] group-hover:text-[#eae8e3] flex-grow leading-relaxed">
                Partner squabbles over equity and client ownership prevent institutionalization of client relationships.
              </p>
            </div>
          </div>
        </section>

        {/* Case Study Section */}
        <section className="border-b-4 border-[#1b1c19] bg-[#ffffff]">
          <div className="max-w-[1200px] mx-auto px-[32px] md:px-[64px] py-[128px]">
            <div className="grid grid-cols-12 gap-[24px] items-center">
              <div className="col-span-12 lg:col-span-6 h-[400px] md:h-[600px] border-4 border-[#1b1c19] relative overflow-hidden shadow-2xl">
                <img
                  alt="Modern minimalist boardroom with sharp shadows"
                  className="w-full h-full object-cover grayscale contrast-125 brightness-90"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAThoQMIB3PZkoOMfZs0Q8bNLMr47M60sVj9O8WrXFPlKUHgylf4crtWwM4ssv0vZ6aDFc6ivhaakLKBFat3uNZdG0QqFhHKkdkjePSPuXFG4ZHoMtWECAYseTjD1qEbwDtCQ4Fo7V_W9Lxdtc-WY4tf8MzGD6Prf560XqRMD3sBPWXdaEBaVT-xjXpIGNf40bp5rcz5LMZo8gl2hzTu0B4V_x3RLoIT_D2WYj_1IU_sbRzXGmDq_5oWXmoHLCzj_nAdHAf2CgzRg"
                />
                <div className="absolute inset-0 bg-[#1b1c19]/10"></div>
              </div>
              <div className="col-span-12 lg:col-span-5 lg:ml-auto">
                <span className="font-sans text-[12px] text-[#444748] block mb-6 uppercase tracking-[0.2em] font-bold">Featured Case Study</span>
                <h2 className="font-serif text-[32px] md:text-[40px] text-[#1b1c19] mb-8 font-bold leading-tight">The Founder's Dilemma: Navigating the Succession Chasm</h2>
                <p className="font-sans text-[18px] text-[#444748] mb-12 leading-relaxed">
                  An in-depth analysis of how a leading first-generation conglomerate transitioned from centralized founder control to a robust institutional framework, unlocking a 40% reduction in governance discount prior to their IPO.
                </p>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <span className="material-symbols-outlined mt-1 text-[#1b1c19]">check_circle</span>
                    <p className="font-sans text-[16px] font-bold text-[#1b1c19]">40% reduction in governance risk discount</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="material-symbols-outlined mt-1 text-[#1b1c19]">check_circle</span>
                    <p className="font-sans text-[16px] font-bold text-[#1b1c19]">Successful $1.2B IPO transition</p>
                  </div>
                </div>
                <Link to="/contact" className="inline-flex items-center gap-4 mt-12 font-sans text-[12px] uppercase tracking-[0.2em] font-bold text-[#1b1c19] hover:bg-[#1b1c19] hover:text-[#fbf9f4] border-2 border-[#1b1c19] px-10 py-5 transition-colors">
                  View Case Details <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Outcomes */}
        <section className="max-w-[1200px] mx-auto px-[32px] md:px-[64px] py-[128px] border-b-4 border-[#1b1c19] bg-[#1b1c19] text-[#fbf9f4]">
          <h2 className="font-serif text-[32px] md:text-[48px] mb-20 text-center font-bold">Institutional Outcomes</h2>
          <div className="grid grid-cols-12 gap-y-16 gap-x-[24px]">
            {[
              { num: "01", title: "Institutional Decision Rights" },
              { num: "02", title: "Successor Authority" },
              { num: "03", title: "Governance Discount Removed" },
              { num: "04", title: "Family-Business Continuity" },
              { num: "05", title: "Listing-Ready Architecture" },
              { num: "06", title: "Investor Confidence" }
            ].map((outcome) => (
              <div key={outcome.num} className="col-span-12 md:col-span-4 border-l-4 border-[#fbf9f4] pl-8">
                <span className="font-serif text-[48px] md:text-[80px] text-[#747878] block mb-4 opacity-50 font-bold">{outcome.num}</span>
                <p className="font-serif text-[24px] md:text-[28px] font-semibold leading-tight">{outcome.title}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Transition Insights */}
        <section className="max-w-[1200px] mx-auto px-[32px] md:px-[64px] py-[128px] border-b-4 border-[#1b1c19]">
          <div className="flex justify-between items-end mb-16">
            <div>
              <span className="font-sans text-[12px] text-[#444748] block mb-4 uppercase tracking-[0.2em] font-bold">Knowledge & Strategy</span>
              <h2 className="font-serif text-[32px] md:text-[40px] text-[#1b1c19] font-bold">Transition Insights</h2>
            </div>
            <Link to="/insights" className="font-sans text-[12px] border-b-2 border-[#1b1c19] pb-1 uppercase font-bold tracking-widest hover:opacity-70">Explore all Insights</Link>
          </div>
          <div className="grid grid-cols-12 gap-[24px]">
            {[
              {
                category: "Governance",
                title: "The Architecture of Power: Distinguishing Ownership from Management",
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCeMQc8TxXDzd9qhkdt85tfQzZmhvdL6NVVnpoQlqryc0O9y0-5eXoIOle-M73v852_GAhFLkwjPR6-NeULmamOhxLPwEnTvcxxRMjUkeBILItAkrH-_cRmUmWpyPeQF7jOtFHJQ2Nez6NCRVb6SGeg_4v4c8nE4lM5dufRwv-ePbWTPkb5QIR3NDWFFIIFEFUH7AA3QwNIDTF7uoTRuPT0JMKpjxJ_mKp_Y7ShSCj4_EHeZ_5P3oLtnBhBk15azmWegsVjEOCwmQ"
              },
              {
                category: "Succession",
                title: "Managing the 'Messy Middle' of CEO Transitions",
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBSa-okczds0M_VTwQPP7anXE2aAKUZJ6ifukBVnsy2v85aSaJGHD-LTUrcZ65kYmeZKdaEo8-I6xPTxDE-jGvdcRNaUFWwjd7N6ZwauCc7Zg9D7m3IU_Aw9z2VoUyAS2fJoPyp3I9hcajZz3QxVUo9ECsWAufoZTI_xQ1mAL1jOJLi44KGKj0fYOxjBn3erTslzfBELrwL0h6UIXEj8I6SDuoB8TIwxGZLQkRJKVr7nxXmNDi43ZeWfjG4_FMU1VoKnLPcjxzRzw"
              },
              {
                category: "Institutionalization",
                title: "Why Startups Fail to Professionalize Post Series-D",
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDAZTKqwUwzSP8-4In27CEpPypXYpNUAJgs_7h7cWj7jb0655amSgPgw0UaHnbFKVvPfmVViO29uCIf_5G033utdwiWaCZWgC3IZBe1slmUXxecGABM2q5x5DN6Rmk5ag2TCdfLOsIcTG8kZT7vJXD_p-NIpmt5R-7v5PboDj-OCwnBCBc4w6jChfy8CMTgJHoJ8Tl5sYsFoQmF44-HJS4A3YUa1OO6xoLSH_abYbn5xrBjbsIC8PAEUWg0d1NvY2DnPFkB9G_5Sg"
              },
              {
                category: "IPO Readiness",
                title: "Institutional Maturity: The Unspoken IPO Requirement",
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCvKixXRjjBVxF1zhom6B-KGvcZwmrjI7HdSDT6k5zobYROSeoT0La8xdt4GeExJCXcgu0ObEvdwfGB33vRFtAZKvj8TQ3WTD3budipZtT6y33AYMP3V4nV2LSVafnTYIcMsWsas33hPorvQ-sLAwsI71sYvxXQp_XdKKczEaOtff3AEgKb-_9htngoP3yl-fnKRZe0Xx2rHeABiWRruqT7rIdcm5ETKNgmoX4mkR_qf0ND-Zbsr_rzkK-HNiLkPEvF7TlEg8GpMg"
              }
            ].map((article, idx) => (
              <div key={idx} className="col-span-12 md:col-span-6 lg:col-span-3 group cursor-pointer">
                <div className="aspect-[4/3] mb-6 overflow-hidden border-2 border-[#1b1c19]">
                  <img
                    alt={article.title}
                    className="w-full h-full object-cover grayscale group-hover:scale-105 transition-transform duration-500"
                    src={article.img}
                  />
                </div>
                <span className="font-sans text-[10px] text-[#444748] uppercase tracking-widest block mb-2 font-bold">{article.category}</span>
                <h3 className="font-serif text-[18px] md:text-[20px] font-bold leading-tight group-hover:underline">{article.title}</h3>
              </div>
            ))}
          </div>
        </section>

        {/* Final CTA / Who This Is For */}
        <section className="max-w-[1200px] mx-auto px-[32px] md:px-[64px] py-[128px]">
          <div className="grid grid-cols-12 gap-[24px] bg-[#ffffff] border-4 border-[#1b1c19] p-8 md:p-20 relative overflow-hidden shadow-2xl">
            <div className="col-span-12 lg:col-span-7 z-10 relative bg-[#fbf9f4]/95 p-8 md:p-12 border-2 border-[#1b1c19] backdrop-blur-md">
              <h2 className="font-serif text-[32px] md:text-[40px] text-[#1b1c19] mb-12 font-bold">Who This Is For</h2>
              <ul className="space-y-6 mb-20 font-sans text-[18px] md:text-[22px] text-[#1b1c19] font-bold tracking-tight">
                <li className="flex items-center gap-6"><span className="material-symbols-outlined text-[24px]">remove</span> Founders Post Series C/D</li>
                <li className="flex items-center gap-6"><span className="material-symbols-outlined text-[24px]">remove</span> Promoter Families</li>
                <li className="flex items-center gap-6"><span className="material-symbols-outlined text-[24px]">remove</span> Boards Mediating Succession</li>
                <li className="flex items-center gap-6"><span className="material-symbols-outlined text-[24px]">remove</span> Pre-IPO Companies</li>
              </ul>
              <div className="border-l-8 border-[#1b1c19] pl-10 py-6 mt-16 bg-[#fbf9f4] p-8">
                <p className="font-serif text-[24px] md:text-[28px] text-[#1b1c19] italic leading-snug font-medium">
                  "An institution is what survives the founder. A company that doesn't, isn't one."
                </p>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-12 absolute inset-0 opacity-40 mix-blend-multiply">
              <img
                alt="Large-scale corporate environment"
                className="w-full h-full object-cover grayscale contrast-150"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA2REp9yBqY2_7OQh6Io7kqCWXcwX54EEv0BRjSZhhEOKuAeM3jOc6y3QikysocJ9K209oo_HJOILYcaP2W_BKzLQAd5_nVJcjbrwePq3Q2xVbkM_I-9foKMMsZx2Ppv5WrKeiaLiT5-3SnjDzNUMJM8xdLACzSEP_PmSDyOhY1EEstmZHQlO2yHjjZ4z3CPK4cw2YxB6e-xYYfrrC7rtIB8TcDlJCbEBOIYXI3Bn3X1-LnrPE5vfe_mRGtkNDAgudJ6MPwwLAtBA"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default FoundertoInstitutionTransitionAdvisory;