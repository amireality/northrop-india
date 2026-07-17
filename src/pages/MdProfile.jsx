import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

function MdProfile() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white min-h-screen pt-20 pb-24 font-sans antialiased text-gray-900 selection:bg-[#001f3f] selection:text-white">
      <Helmet>
        <title>MD Profile | Ashish Chaudhary | Northrop Management</title>
        <meta name="description" content="Profile of Ashish Chaudhary, Founder & Managing Director of Northrop Management Private Limited." />
      </Helmet>

      <main className="w-full px-6 md:px-12 lg:px-24 max-w-7xl mx-auto flex flex-col gap-16">
        <section className="flex flex-col md:flex-row gap-12 items-start">
          <div className="flex-shrink-0 w-32 h-32 md:w-48 md:h-48 overflow-hidden rounded-full border-4 border-[#001f3f]">
            <img 
              alt="Profile picture of Ashish Chaudhary" 
              className="object-cover w-full h-full grayscale" 
              src="/mdimage.jpeg" 
            />
          </div>
          <div className="flex flex-col gap-6 mt-4 md:mt-0">
            <div>
              <h1 className="text-3xl md:text-5xl font-serif text-[#001f3f] font-bold mb-2">Ashish Chaudhary</h1>
              <h2 className="text-xl md:text-2xl font-sans text-[#c5a044]">Founder & Managing Director, Northrop Management Private Limited</h2>
            </div>
            <div className="text-lg text-gray-700 leading-relaxed font-light">
              <p>Ashish Chaudhary is the Founder and Managing Director of Northrop Management Private Limited, an advisory firm built around assurance, transaction, and risk consulting for businesses, financial institutions, investors, and infrastructure stakeholders across India. He is regularly counted among the top 1% of voices in finance on LinkedIn, as of June 2026.</p>
            </div>
          </div>
        </section>

        <article className="flex flex-col gap-6 text-base text-gray-700 leading-relaxed font-light">
          <h3 className="text-2xl md:text-3xl font-serif text-[#001f3f] font-bold mt-8 mb-4">WHERE NORTHROP STANDS TODAY</h3>
          <p>Northrop is young as a company – not yet a year old – but it isn't starting from zero. Ashish built it to put years of hands-on advisory work into a proper institutional structure, and that shows up quickly: Northrop is on track to cross ₹1 Crore in revenue in its very first year, on the back of real client trust rather than a long runway. The standards the firm runs on aren't being invented as it grows; they're the same ones Ashish brought with him on day one.</p>
          
          <h3 className="text-2xl md:text-3xl font-serif text-[#001f3f] font-bold mt-8 mb-4">THE TRACK RECORD BEHIND THE FIRM</h3>
          <p>Most of what Northrop draws on today was built over five-plus years of Ashish's own work through roles at audit and advisory firms, and through independent consulting under the ARC Consulting brand, both before Northrop existed and alongside it in its early days. That work put him in the room on engagements with aggregate exposures of more than ₹10,000 Crores, for organisations carrying balance sheets as large as ₹60,000 Crores – spanning public sector banks (he's empanelled across 7 of them), NBFCs, and infrastructure financiers including PTC India Financial Services, Hero Fincorp, Tourism Finance Corporation of India, IFCI Factors, REC Limited, and Aseem Infrastructure Finance.</p>
          <p>On the forensic and insolvency side – again, work he carried out as an employee, freelancer, or independent advisor – his name is attached to the CIRP audit for Ballarpur Industries (under RP: KPMG), and to mandates for Nimitaya Hotel & Resorts (the Radisson Blu franchise), CMI Limited, Scott Garments, Tijaria Polypipes limited , Supreme Tex Mart, Eternity Petroleum Const., and ECI Infra Towers. He's also handled specialised monitoring and internal audit work for PTC India Finance, Galaxy Automobiles, Focus Energy, and Pink City Expressway.</p>
          <p>His transaction advisory work includes the post-merger phase of the Findi–TSI deal, several Financial Due Diligence engagements for NBFCs and financial services firms, statutory audit and group reporting for Transaction Solutions International (India) and Bankit Services, and buy-side due diligence and strategy work for M DAS Infra and M DAS Retails LLP. A handful of the businesses he's advised have grown 7–8x over five years under his guidance – not a coincidence.</p>
          
          <h3 className="text-2xl md:text-3xl font-serif text-[#001f3f] font-bold mt-8 mb-4">SOCIAL SECTOR & GRANT ADVISORY</h3>
          <p>Northrop also works as grant manager for several non-profits, with Ashish personally leading governance, impact assessment, and grant administration for Hrdya Sara's Foundation, Luv 2 Care Foundation, Canheal Foundation, Deepak Gupta Foundation, Motherhood Foundation, and Meals of Happiness. It's a part of the business that's growing fast, and the goal is straightforward: give NGOs and CSR funders an institutional-grade alternative to the Big 4 — without the Big 4 price tag or the Big 4 distance.</p>
          
          <h3 className="text-2xl md:text-3xl font-serif text-[#001f3f] font-bold mt-8 mb-4">WHAT HE BELIEVES</h3>
          <p>Outside the day-to-day advisory work, Ashish is outspoken about what fair governance actually looks like in practice – built on a simple belief that ambition and integrity aren't pulling in different directions, they're the same force pointed the right way. He thinks India's road to becoming a genuine global superpower by 2047 won't come from copying the Western or Chinese playbook, but from a model of capitalism that's distinctly Indian: bold in its ambition, but careful that the growth lifts the country broadly, not just a fortunate few.</p>
          <p>He's also blunt about what it'll take for India to stand level with – and eventually past – China and the US: Indian institutions need to stop benchmarking themselves against the Big Four and start operating as their equal, with the same rigour and the same global fluency, just built on Indian terms instead of borrowed ones. Through Northrop, that's not a someday goal. It's the work he's already doing.</p>
          <p>On LinkedIn, he doesn't dress things up. He calls out institutional failure with the same precision he'd apply to a balance sheet – directly, with no theatre, and no apology for being direct. In a profession that tends to reward discretion, he's chosen, on purpose, to be the exception.</p>
          
          <h3 className="text-2xl md:text-3xl font-serif text-[#001f3f] font-bold mt-8 mb-4">BACKGROUND</h3>
          <p>Ashish has built two ventures so far - Northrop Management and Northrop Research Foundation - all resting on the foundation of his independent work under ARC Consulting and his time with previous employers. He keeps an active, visible presence on LinkedIn, with a top-tier Social Selling Index score and steady engagement across the finance, consulting, and investment community.</p>
          
          <div className="mt-16 pt-8 border-t border-gray-200">
            <p className="text-xs text-gray-500 uppercase tracking-wider">Note: the organisations named above include clients served directly by Northrop Management Private Limited, as well as engagements Ashish carried out in his individual capacity – as an employee, freelance consultant, or independent advisor – prior to or alongside the firm's formal incorporation, as indicated in each section.</p>
          </div>
        </article>
      </main>
    </div>
  );
}

export default MdProfile;
