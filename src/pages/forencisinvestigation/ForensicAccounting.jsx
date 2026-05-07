import React from 'react';
import { Helmet } from 'react-helmet-async';

const ForensicAccounting = () => {

  const whatWeDoList = [
    { id: "01", title: "Forensic Audit", desc: "Comprehensive reconstruction of financial records to identify systematic anomalies." },
    { id: "02", title: "Fraud Risk Assessment", desc: "Quantifying structural vulnerabilities within global supply chains and payroll systems." },
    { id: "03", title: "Asset Tracing", desc: "Identifying and recovering diverted capital across complex offshore jurisdictions." },
    { id: "04", title: "Cyber Forensics", desc: "Deep-dive digital analysis to uncover unauthorized data exfiltration and illicit access." },
    { id: "05", title: "Whistleblower Review", desc: "Neutral, high-rigour investigation of sensitive internal disclosures." },
    { id: "06", title: "Bribery & Corruption", desc: "FCPA and global compliance investigations into third-party intermediaries." },
    { id: "07", title: "Litigation Support", desc: "Expert witness testimony and evidentiary preparation for high-stakes legal proceedings." },
    { id: "08", title: "Integrity Due Diligence", desc: "Pre-transaction screening of principals and partners for reputational risk." }
  ];

  return (
    <>
      <Helmet>
        <title>Forensic Accounting &amp; Fraud Investigations | Northrop Management</title>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,500;0,6..72,600&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
        <style>
          {`
            .material-symbols-outlined {
                font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
            }
            body {
                background-color: #f9f9f9;
                color: #1a1c1c;
                -webkit-font-smoothing: antialiased;
            }
          `}
        </style>
      </Helmet>

      <main className="font-['Inter'] text-[15px] leading-[1.6] text-[#1a1c1c]">
        {/* Hero Section: Brutalist & Monolithic */}
        <section className="relative w-full overflow-hidden border-b border-[#c4c7c7]">
          <div className="grid grid-cols-12 max-w-[1280px] mx-auto px-8 gap-[32px] items-stretch min-h-[85vh]">
            <div className="col-span-12 md:col-span-6 flex flex-col justify-center py-20 pr-12 z-10">
              <span className="font-['Inter'] text-[11px] leading-[1.2] tracking-[0.15em] font-semibold text-[#444748] mb-8 uppercase">Forensic Practice</span>
              <h1 className="font-['Newsreader'] text-[56px] leading-[1.05] tracking-[-0.03em] font-normal text-[#1a1c1c] mb-8">
                When fraud is suspected, speed and rigour are non-negotiable.
              </h1>
              <p className="font-['Inter'] text-[18px] leading-[1.6] font-normal text-[#444748] max-w-lg mb-12">
                Institutional-grade financial investigation for boards, legal counsel, and regulatory bodies facing complex malfeasance.
              </p>
              <div className="flex items-center gap-6">
                <button className="bg-[#0f0f0f] text-[#ffffff] px-10 py-5 font-['Inter'] text-[11px] leading-[1.2] tracking-[0.15em] font-semibold hover:bg-[#444748] transition-colors">
                  ENGAGE FIRM
                </button>
                <button className="border border-[#747878] px-10 py-5 font-['Inter'] text-[11px] leading-[1.2] tracking-[0.15em] font-semibold hover:bg-[#f3f3f4] transition-colors">
                  VIEW CAPABILITIES
                </button>
              </div>
            </div>
            <div className="col-span-12 md:col-span-6 relative bg-[#eeeeee] border-l border-[#c4c7c7]">
              <div className="absolute inset-0 overflow-hidden">
                <img alt="Hero: Monolithic Brutalist Concrete Structure" className="w-full h-full object-cover grayscale contrast-125 brightness-95" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC8W_3lhi5joeiFV5_WqSIZQabRW7KHbBWizQBfF_aYUP32dEE4okeyE1SrKkeBICsWGDoelrpbvi6SZwdOtRhyLQFME20enqBMR6GLPfpHcz7rm1TDR8Us4i4059vLLbqILwJ3Fn2iUfHk3swzAF6d8iGBMPuVJpCi2rETnrv6sejVQ0aZNgkdeiIawTpLOhaDJqR_lQrOLH7LWNaqJ9k7LY2qBOSBkGjjkhr8pJnfnMXjXk6pIIC5glVZ6ZecmFti4M9rMrxVzgI" />
                <div className="absolute inset-0 bg-[#0f0f0f]/5 mix-blend-multiply"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Who It's For Section */}
        <section className="bg-[#f3f3f4] py-[120px] border-b border-[#c4c7c7]">
          <div className="max-w-[1280px] mx-auto px-8 grid grid-cols-12 gap-[32px] items-center">
            <div className="col-span-12 md:col-span-4 mb-12 md:mb-0">
              <h2 className="font-['Newsreader'] text-[40px] leading-[1.1] font-normal mb-6">Strategic Safeguards.</h2>
              <p className="font-['Inter'] text-[15px] leading-[1.6] font-normal text-[#464747] max-w-sm mb-8">Independent scrutiny for high-stakes environments where institutional integrity is paramount.</p>
              <div className="h-64 border border-[#c4c7c7] grayscale brightness-90">
                <img alt="Brutalist architectural detail" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZA_FJ3fWka3JbPNuh_WVROZTvZO9Iq3LdNedGsKIgd474cilWqK-QBr0_K0aZ-VvgdsukWMXnNp2Rg7gLjnBUVjZ-TNY8_uiqYHQIhbL4Nlzj0OiVMu3sN8ZuEFps_mH12WZfrEDxVaPY6ukeEe3nJLfUEnsRFGZ6Bf-v6bKzmfp2bCd6V2742OqvP4QUB59cZKJKUS68JnMMVMNCtyLxc_DAv8vDAV2KI74L_cZ2cdgwv4rh3o48QyfI-nIbQn6C4Vz5dS55bO0" />
              </div>
            </div>
            <div className="col-span-12 md:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-[24px]">
              <div className="p-10 border border-[#c4c7c7] bg-[#f9f9f9] flex flex-col gap-6 hover:border-[#0f0f0f] transition-colors group">
                <span className="material-symbols-outlined text-[#0f0f0f] text-4xl" data-icon="account_balance">account_balance</span>
                <h3 className="font-['Newsreader'] text-[24px] leading-[1.3] font-normal">Audit Committees</h3>
                <p className="font-['Inter'] text-[15px] leading-[1.6] font-normal text-[#444748]">Ensuring fiduciary duty through uncompromising independent verification of internal controls and reporting integrity across global jurisdictions.</p>
              </div>
              <div className="p-10 border border-[#c4c7c7] bg-[#f9f9f9] flex flex-col gap-6 hover:border-[#0f0f0f] transition-colors group">
                <span className="material-symbols-outlined text-[#0f0f0f] text-4xl" data-icon="corporate_fare">corporate_fare</span>
                <h3 className="font-['Newsreader'] text-[24px] leading-[1.3] font-normal">Executive Boards</h3>
                <p className="font-['Inter'] text-[15px] leading-[1.6] font-normal text-[#444748]">Rapid response to whistleblower allegations and suspected executive malfeasance with absolute confidentiality and forensic precision.</p>
              </div>
            </div>
          </div>
        </section>

        {/* What We Do Section: 8 Items Grid */}
        <section className="py-[120px] bg-[#f9f9f9]">
          <div className="max-w-[1280px] mx-auto px-8">
            <div className="flex items-baseline justify-between mb-[64px] border-b border-[#0f0f0f] pb-6">
              <h2 className="font-['Newsreader'] text-[40px] leading-[1.1] font-normal">What We Do</h2>
              <span className="font-['Inter'] text-[11px] leading-[1.2] tracking-[0.15em] font-semibold uppercase text-[#444748]">Capabilities Index</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-[32px] gap-y-16">
              {whatWeDoList.map((item) => (
                <div key={item.id} className="group border-b border-[#c4c7c7] pb-8">
                  <span className="font-['Inter'] text-[11px] leading-[1.2] tracking-[0.15em] font-semibold text-[#747878] block mb-4">{item.id}.</span>
                  <h4 className="font-['Newsreader'] text-[24px] leading-[1.3] font-normal mb-4 group-hover:text-[#0f0f0f] transition-colors">{item.title}</h4>
                  <p className="font-['Inter'] text-[15px] leading-[1.6] font-normal text-[#444748]">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Study: Rs.85 Cr Vendor Kickback Scheme */}
        <section className="bg-[#eeeeee] py-[120px] border-y border-[#c4c7c7]">
          <div className="max-w-[1280px] mx-auto px-8">
            <div className="grid grid-cols-12 gap-[32px] items-start">
              <div className="col-span-12 md:col-span-5 md:sticky md:top-32 mb-12 md:mb-0">
                <span className="font-['Inter'] text-[11px] leading-[1.2] tracking-[0.15em] font-semibold text-[#444748] uppercase mb-6 block">Archive: Case Study 442-B</span>
                <h2 className="font-['Newsreader'] text-[40px] leading-[1.1] font-normal mb-10">The Rs.85 Cr Vendor Kickback Scheme</h2>
                <p className="font-['Inter'] text-[18px] leading-[1.6] font-normal mb-10">
                  A multi-year systematic siphon of corporate funds through an intricate network of shell vendors and inflated procurement contracts.
                </p>
                <div className="space-y-6">
                  <div className="border-l-2 border-[#0f0f0f] pl-6 py-2">
                    <span className="font-['Inter'] text-[11px] leading-[1.2] tracking-[0.15em] font-semibold block text-[#747878] mb-1">OUTCOME</span>
                    <p className="font-['Inter'] text-[15px] leading-[1.6] font-semibold">100% Identification of diverted funds.</p>
                  </div>
                  <div className="border-l-2 border-[#747878] pl-6 py-2">
                    <span className="font-['Inter'] text-[11px] leading-[1.2] tracking-[0.15em] font-semibold block text-[#747878] mb-1">RECOVERY</span>
                    <p className="font-['Inter'] text-[15px] leading-[1.6] font-semibold">Legal recovery proceedings initiated globally.</p>
                  </div>
                </div>
              </div>
              <div className="col-span-12 md:col-span-7 flex flex-col gap-12">
                <div className="aspect-video border border-[#c4c7c7] grayscale overflow-hidden">
                  <img alt="Brutalist concrete architecture" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB5YjNEOSYvf3KhWcRp6CKiEkH-d6LNIAyj2AEzmoigyJnP9_oCfKNrPuVNW190_EREzgufSlgLLPb2ag7kbjau_OVxk2H7Zhpzdo3zYZQblwbI90R-XpObIfh3wIH8F3G0TAuRKQjFYVXB7OrL46MSPoUEtBcZlDUYxd0Gd7d_PRlTo_QSjjRcUcmt82e9X6gkKbqnlWRGTWj7BBs7Rfju4XWkStgWXV60yZprGiVejX1R8YDla4NDl2l9IIu6M062PP-YAAjHmiw" />
                </div>
                <div className="bg-[#f9f9f9] p-12 border border-[#c4c7c7] shadow-sm">
                  <div className="space-y-12">
                    <div>
                      <h5 className="font-['Inter'] text-[11px] leading-[1.2] tracking-[0.15em] font-semibold text-[#0f0f0f] border-b border-[#c4c7c7] pb-3 mb-6">THE CHALLENGE</h5>
                      <p className="font-['Inter'] text-[15px] leading-[1.6] font-normal text-[#444748]">An Indian manufacturing conglomerate noticed persistent margin erosion despite rising revenues. Internal audits failed to isolate the leak, which was buried within 4,000 active vendor accounts across six manufacturing units.</p>
                    </div>
                    <div>
                      <h5 className="font-['Inter'] text-[11px] leading-[1.2] tracking-[0.15em] font-semibold text-[#0f0f0f] border-b border-[#c4c7c7] pb-3 mb-6">THE INTERVENTION</h5>
                      <p className="font-['Inter'] text-[15px] leading-[1.6] font-normal text-[#444748]">Northrop deployed a 12-person forensic team. We utilized forensic data analytics to cross-reference vendor registration patterns against employee metadata. We uncovered 22 'ghost vendors' sharing IP addresses and bank details with key procurement personnel.</p>
                    </div>
                    <div>
                      <h5 className="font-['Inter'] text-[11px] leading-[1.2] tracking-[0.15em] font-semibold text-[#0f0f0f] border-b border-[#c4c7c7] pb-3 mb-6">THE REVELATION</h5>
                      <p className="font-['Inter'] text-[15px] leading-[1.6] font-normal text-[#444748]">Our investigation revealed that Rs.85 Crore had been funneled through these entities via over-invoicing and fictitious service billing over a 36-month period. Kickbacks were being laundered through real estate investments in Tier-2 cities.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Latest Intelligence Section */}
        <section className="py-[120px] bg-[#f9f9f9]">
          <div className="max-w-[1280px] mx-auto px-8">
            <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-6">
              <div>
                <h2 className="font-['Newsreader'] text-[40px] leading-[1.1] font-normal mb-2">Latest Intelligence</h2>
                <p className="font-['Inter'] text-[15px] leading-[1.6] font-normal text-[#444748]">Institutional briefings on global fraud trends and forensic developments.</p>
              </div>
              <a className="font-['Inter'] text-[11px] leading-[1.2] tracking-[0.15em] font-semibold text-[#0f0f0f] border-b border-[#0f0f0f] hover:text-[#444748] hover:border-[#444748] transition-all py-1" href="#">VIEW ALL REPORTS</a>
            </div>
            <hr className="border-[#0f0f0f] mb-12" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[32px]">
              {/* Publication 1 */}
              <article className="flex flex-col group cursor-pointer">
                <div className="aspect-[4/5] bg-[#e2e2e2] mb-6 overflow-hidden border border-[#c4c7c7] relative">
                  <img alt="Report Cover: India's Hidden Fraud Crisis" className="w-full h-full object-cover grayscale opacity-80 group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA4CpaeOGFwMZrLHA3Imb3BuN4ie5j9gLX_gZYXKvP4Crob2pKQb71Dn6kKpCAf-T73twue0y5ogxinmyWbkr8_6RRK7QdaIOnReQ8z1Hclscamc-MymfsEAlEG4JnNqZibcb165Rs0sYBrDCdJ6ivsn5EmT4a19TYqzCFEDRO2f5u_f2ika9X2G_q4uxeX81FknwqrW9Jx8eBWL32i-OI7keGVJM5Y7GCztw1hlVpXFe6I5BKPzw7JpoMbFW4fwK9JewWs09WmgeA" />
                  <div className="absolute inset-0 bg-[#0f0f0f]/10 group-hover:bg-transparent transition-colors"></div>
                </div>
                <span className="font-['Inter'] text-[11px] leading-[1.2] tracking-[0.15em] font-semibold text-[#747878] mb-3">Q4 REPORT</span>
                <h3 className="font-['Newsreader'] text-[24px] leading-[1.3] font-normal leading-tight mb-4 group-hover:text-[#0f0f0f] transition-colors">India's Hidden Fraud Crisis</h3>
                <p className="font-['Inter'] text-[15px] leading-[1.6] font-normal text-[#444748] line-clamp-3">Analysing the rise of sophisticated procurement fraud in high-growth emerging markets.</p>
              </article>
              {/* Publication 2 */}
              <article className="flex flex-col group cursor-pointer">
                <div className="aspect-[4/5] bg-[#e2e2e2] mb-6 overflow-hidden border border-[#c4c7c7] relative">
                  <img alt="Report Cover: The Digital Laundromat" className="w-full h-full object-cover grayscale opacity-80 group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAF63mw_LYmuZ7xmRy1EFsqE8rONKQXqjyOS0v_Ku9XQfKvLfZvCrUAW6fsFbOSmtL0x1CG7zx8ccFpZptN5Ecog-9h2caEkJG07_FwD7dYDiVM0bsx3SvS-1B9ycJzHn8N67WkoLc6NaKj0yUbNgMKSzdkIJm7RSZDOfDs4t8LsTy2R3JGSoYUIlkAAr4rjuyBcU6cNB42K9X59tJ26VGDSnnTcfrDNV0fwcynvQZPaQaHXx2oycT6rdSf6_EIUjldACmHpsn7YtU" />
                  <div className="absolute inset-0 bg-[#0f0f0f]/10 group-hover:bg-transparent transition-colors"></div>
                </div>
                <span className="font-['Inter'] text-[11px] leading-[1.2] tracking-[0.15em] font-semibold text-[#747878] mb-3">BRIEFING</span>
                <h3 className="font-['Newsreader'] text-[24px] leading-[1.3] font-normal leading-tight mb-4 group-hover:text-[#0f0f0f] transition-colors">The Digital Laundromat</h3>
                <p className="font-['Inter'] text-[15px] leading-[1.6] font-normal text-[#444748] line-clamp-3">How crypto-assets are complicating traditional asset tracing and recovery operations.</p>
              </article>
              {/* Publication 3 */}
              <article className="flex flex-col group cursor-pointer">
                <div className="aspect-[4/5] bg-[#e2e2e2] mb-6 overflow-hidden border border-[#c4c7c7] relative">
                  <img alt="Report Cover: Boardroom Blindspots" className="w-full h-full object-cover grayscale opacity-80 group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBLyonpnnOGPJWxX3s4u6dhz3S4o5qxfNbWHfZuG4LkkzSSHyJJG90cYCPHxCxvq1H9rPIauq7tMtfKG-cvC_6yC2Tqt4U4kmZaYaFpqIb6Ih_vLHqocJL3ImZHowBOJ9tqYDIC26J4BgRvwJZOIUqlnCqfV9qqCDmYO-gHE35IS8_mH-Oqe2uoPU9E38puerOCPiRkZC7pNaQlwGVux8M6ZPlQA7GNd29SWmFtO_D1una5_fOmSoMdZHZcRQmq5kmQmmd7LELOgQw" />
                  <div className="absolute inset-0 bg-[#0f0f0f]/10 group-hover:bg-transparent transition-colors"></div>
                </div>
                <span className="font-['Inter'] text-[11px] leading-[1.2] tracking-[0.15em] font-semibold text-[#747878] mb-3">INSIGHT</span>
                <h3 className="font-['Newsreader'] text-[24px] leading-[1.3] font-normal leading-tight mb-4 group-hover:text-[#0f0f0f] transition-colors">Boardroom Blindspots</h3>
                <p className="font-['Inter'] text-[15px] leading-[1.6] font-normal text-[#444748] line-clamp-3">Why standard internal audits fail to detect executive-level collusion in multinational entities.</p>
              </article>
              {/* Publication 4 */}
              <article className="flex flex-col group cursor-pointer">
                <div className="aspect-[4/5] bg-[#e2e2e2] mb-6 overflow-hidden border border-[#c4c7c7] relative">
                  <img alt="Report Cover: The Ethics of AI in Forensics" className="w-full h-full object-cover grayscale opacity-80 group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZyQSFm3oKvSDBVFfbx8YwXQBXYEmTpApbx7u_x80Hcu01u4KCD1X_meTzM1Rnf6CG__ceFlF-yAYWJdMnfJuJMeKxz1dRZzPD9-KMIp7fkeOwq68_h1ng1M1lfkEsEnNBrz2mx9_-zH6zTcEKVwywNGv2OEbwgz5tkHKCHiMtBOinea5qaA6RfGEoP697C1NybX4GmTTgBYxtIsRGh0DGH17o4PVOffHMxn23AGG5SAOCQ4gzGBCw5bdOEz-gtTZnGMjJSzUgQxk" />
                  <div className="absolute inset-0 bg-[#0f0f0f]/10 group-hover:bg-transparent transition-colors"></div>
                </div>
                <span className="font-['Inter'] text-[11px] leading-[1.2] tracking-[0.15em] font-semibold text-[#747878] mb-3">WHITE PAPER</span>
                <h3 className="font-['Newsreader'] text-[24px] leading-[1.3] font-normal leading-tight mb-4 group-hover:text-[#0f0f0f] transition-colors">The Ethics of AI in Forensics</h3>
                <p className="font-['Inter'] text-[15px] leading-[1.6] font-normal text-[#444748] line-clamp-3">Navigating the legal implications of algorithmic pattern matching in criminal evidence.</p>
              </article>
            </div>
          </div>
        </section>

        {/* Final Call to Action */}
        <section className="py-[120px] bg-[#0f0f0f]">
          <div className="max-w-[1280px] mx-auto px-8 text-center">
            <h2 className="font-['Newsreader'] text-[56px] leading-[1.05] tracking-[-0.03em] font-normal text-[#ffffff] mb-8">Securing Institutional Integrity.</h2>
            <p className="text-[#858383] font-['Inter'] text-[18px] leading-[1.6] font-normal max-w-2xl mx-auto mb-12">
              Contact our forensic principals to discuss sensitive matters in absolute confidence and rigorous detail.
            </p>
            <div className="flex justify-center gap-6">
              <button className="bg-[#f9f9f9] text-[#0f0f0f] px-12 py-5 font-['Inter'] text-[11px] leading-[1.2] tracking-[0.2em] font-semibold hover:bg-[#e8e8e8] transition-colors">
                REQUEST BRIEFING
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default ForensicAccounting;
