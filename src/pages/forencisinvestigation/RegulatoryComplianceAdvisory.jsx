import { Link } from 'react-router-dom';
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

const RegulatoryComplianceAdvisory = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Regulatory Compliance Advisory | Northrop Management</title>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&family=Newsreader:ital,opsz,wght@0,6..72,400;1,6..72,400&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
        <style>
          {`
            .material-symbols-outlined {
              font-variation-settings: 'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24;
            }
            .brutalist-border { border: 1px solid #c4c7c7; }
            .grid-line { height: 1px; background-color: #e2e2e2; width: 100%; }
            ::selection { background-color: #0F0F0F; color: #ffffff; }
          `}
        </style>
      </Helmet>

      <div className="bg-[#f9f9f9] text-[#1a1c1c] font-['Inter'] text-[15px] leading-[1.6] antialiased">
        <main className="pt-24">
          {/* Hero Section: Brutalist Monolith */}
          <section className="px-8 py-[120px] max-w-[1280px] mx-auto border-b border-[#c4c7c7]">
            <div className="grid grid-cols-12 gap-[32px] items-center">
              <div className="col-span-12 lg:col-span-6">
                <span className="font-['Inter'] text-[11px] leading-[1.2] tracking-[0.1em] font-semibold text-[#444748] uppercase mb-[16px] block">Regulatory Compliance Advisory</span>
                <h1 className="font-['Newsreader'] text-[48px] leading-[1.1] tracking-[-0.02em] text-[#1a1c1c] mb-[24px] leading-none">Build robust AML/KYC frameworks that meet regulatory expectations.</h1>
                <p className="font-['Inter'] text-[18px] leading-[1.6] text-[#444748] max-w-md">Institutional intelligence for global financial markets. We architect compliance ecosystems that transform regulatory burden into strategic stability.</p>
              </div>
              {/* <div className="col-span-12 lg:col-span-6">
                <div className="aspect-[4/5] bg-[#eeeeee] relative overflow-hidden">
                  <img alt="Commanding monolithic brutalist concrete structure with deep geometric shadows and sharp edges" className="w-full h-full object-cover grayscale" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDIgE1AeXfKD27oUvIc03nQuz2mIl9f50iQop1o6HrZnVzFYqZdJM-3qkadMKTfMP-Lrg4NW71o4UbZUVAzaMK9t8h4QI7-uL8KXgHEZYDAijeSIr-sJcyBYJtUcb63OmSI4lBYC1m1jV6LdbGe7vA7Kn93JO-BMCrePYQzxFTfp1xokkxP1aNRrfczql0lXO3l_a-N4qXmkeeScXPhc5wXyFu49kcvDtCM9xPQrqDPxtnSiC08CW5-D5o85B6q3ekTM3JTYkrMIto" />
                </div>
              </div> */}
            </div>
          </section>

          {/* What We Do Section */}
          <section className="px-8 py-[120px] max-w-[1280px] mx-auto">
            <div className="grid grid-cols-12 gap-[32px]">
              <div className="col-span-12 lg:col-span-4">
                <h2 className="font-['Newsreader'] text-[32px] leading-[1.2] mb-[24px]">What We Do</h2>
                <div className="hidden lg:block aspect-square w-full bg-[#f3f3f4] overflow-hidden mt-[24px]">
                  <img alt="Detail of repetitive concrete architectural patterns" className="w-full h-full object-cover grayscale opacity-80" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAxNG4Ca0SU3RkxAD5yJk7Bc_itJtq02KUVc6dHXIYXpXTG0VDTQlLl-otvk2VJnR0H33qCUc_O8JGjhpO-ApY5GknrRjxhEABzmYaeWSVNxsJIma-71J_JfPtH5ZGzUjHvP_wlgxS6QHy2-ZxhSZXnXq87mvEjHOiLg2-7RiKyLEmg1L2emKkcDcIdc5vlG6fyACRbevHfQ6qOZyY9WeYPiyl7P0dMq9TNdL5otYj8V_fSQkq_QzuCZz5WsU1ZtuEq1pYl9gc1zv4" />
                </div>
              </div>
              <div className="col-span-12 lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-[32px]">
                <div className="border-t border-[#c4c7c7] pt-[24px]">
                  <h3 className="font-['Newsreader'] text-[24px] leading-[1.3] mb-[8px] italic">AML Programme Design</h3>
                  <p className="font-['Inter'] text-[15px] leading-[1.6] text-[#444748]">Comprehensive architecture of internal controls, risk assessment methodologies, and governance structures for institutional finance.</p>
                </div>
                <div className="border-t border-[#c4c7c7] pt-[24px]">
                  <h3 className="font-['Newsreader'] text-[24px] leading-[1.3] mb-[8px] italic">CDD/EDD Frameworks</h3>
                  <p className="font-['Inter'] text-[15px] leading-[1.6] text-[#444748]">Enhanced due diligence protocols designed for high-risk jurisdictions, PEPs, and complex corporate structures.</p>
                </div>
                <div className="border-t border-[#c4c7c7] pt-[24px]">
                  <h3 className="font-['Newsreader'] text-[24px] leading-[1.3] mb-[8px] italic">Sanctions Advisory</h3>
                  <p className="font-['Inter'] text-[15px] leading-[1.6] text-[#444748]">Real-time mapping of global sanctions regimes and the implementation of automated screening and containment logic.</p>
                </div>
                <div className="border-t border-[#c4c7c7] pt-[24px]">
                  <h3 className="font-['Newsreader'] text-[24px] leading-[1.3] mb-[8px] italic">Regulatory Remediation</h3>
                  <p className="font-['Inter'] text-[15px] leading-[1.6] text-[#444748]">Swift intervention and legacy data cleanup following regulatory findings or enforcement actions.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Who It's For Section */}
          <section className="bg-[#f3f3f4] px-8 py-[120px]">
            <div className="max-w-[1280px] mx-auto">
              <div className="grid grid-cols-12 gap-[32px] items-start">
                <div className="col-span-12 lg:col-span-5">
                  <h2 className="font-['Newsreader'] text-[32px] leading-[1.2] mb-[24px]">Who It's For</h2>
                  <div className="space-y-[16px]">
                    <div className="flex items-start gap-[16px]">
                      <span className="material-symbols-outlined text-[#0F0F0F]">account_balance</span>
                      <div>
                        <h4 className="font-['Inter'] text-[11px] leading-[1.2] tracking-[0.1em] font-semibold uppercase">Global Banking Institutions</h4>
                        <p className="text-[#444748]">Tier 1 banks requiring precision-grade compliance alignment across cross-border jurisdictions.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-[16px]">
                      <span className="material-symbols-outlined text-[#0F0F0F]">currency_exchange</span>
                      <div>
                        <h4 className="font-['Inter'] text-[11px] leading-[1.2] tracking-[0.1em] font-semibold uppercase">Fintech &amp; NBFCs</h4>
                        <p className="text-[#444748]">Hyper-growth organizations needing scalable, automated KYC/AML stacks that satisfy regulators.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-[16px]">
                      <span className="material-symbols-outlined text-[#0F0F0F]">shield_person</span>
                      <div>
                        <h4 className="font-['Inter'] text-[11px] leading-[1.2] tracking-[0.1em] font-semibold uppercase">Family Offices</h4>
                        <p className="text-[#444748]">Discreet advisory for managing ultra-high-net-worth compliance risks and source of wealth verification.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-span-12 lg:col-span-7">
                  <div className="p-[24px] bg-[#f9f9f9] border border-[#c4c7c7]">
                    <span className="font-['Inter'] text-[11px] leading-[1.2] tracking-[0.1em] font-semibold text-[#444748] block mb-[16px] uppercase">Core Philosophy</span>
                    <blockquote className="font-['Newsreader'] text-[28px] leading-[1.4] text-[#1a1c1c] italic mb-[24px]">
                      " The strongest institutions are not defined by how they react to regulation, but by how they govern themselves before regulation demands it"
                    </blockquote>
                    <p className="font-['Inter'] text-[11px] leading-[1.2] tracking-[0.1em] font-semibold uppercase text-[#1a1c1c]">— Ashish Chaudhsary , Managing director</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Case Study: NBFC Transformation */}
          <section className="px-8 py-[120px] max-w-[1280px] mx-auto">
            <div className="border border-[#c4c7c7] grid grid-cols-1 md:grid-cols-2">
              <div className="p-[24px] lg:p-[120px] border-b md:border-b-0 md:border-r border-[#c4c7c7] bg-[#f9f9f9]">
                <span className="font-['Inter'] text-[11px] leading-[1.2] tracking-[0.1em] font-semibold text-[#5e5e5e] block mb-[16px] uppercase">Selected Case Study</span>
                <h2 className="font-['Newsreader'] text-[32px] leading-[1.2] mb-[24px] leading-tight">AML Transformation for a Leading NBFC</h2>
                <div className="space-y-[24px]">
                  <div>
                    <h4 className="font-['Inter'] text-[11px] leading-[1.2] tracking-[0.1em] font-semibold uppercase text-[#444748]">The Challenge</h4>
                    <p>A major Non-Banking Financial Company faced regulatory scrutiny over siloed data and insufficient automated monitoring across its multi-city lending operations.</p>
                  </div>
                  <div>
                    <h4 className="font-['Inter'] text-[11px] leading-[1.2] tracking-[0.1em] font-semibold uppercase text-[#444748]">The Intervention</h4>
                    <p>Northrop implemented a centralized AML Hub, unifying CDD data and deploying AI-driven transaction monitoring tailored to high-velocity retail credit flows.</p>
                  </div>
                  <div>
                    <h4 className="font-['Inter'] text-[11px] leading-[1.2] tracking-[0.1em] font-semibold uppercase text-[#444748]">The Outcome</h4>
                    <p>94% reduction in false positives and full clearance from the central bank within 12 months of implementation.</p>
                  </div>
                </div>
              </div>
              <div className="relative bg-[#e2e2e2] overflow-hidden">
                <img alt="Strong vertical concrete columns creating a sense of unshakeable order and structural security" className="w-full h-full object-cover" src="/aml-kyc-sanctions-compliance3.jpeg" />
                <div className="absolute bottom-[24px] left-[24px]">
                  <div className="bg-[#0F0F0F] text-[#ffffff] p-[16px] font-['Inter'] text-[11px] leading-[1.2] tracking-[0.1em] font-semibold uppercase">Full Report Available</div>
                </div>
              </div>
            </div>
          </section>

          {/* Latest Intelligence Section */}
          <section className="px-8 py-[120px] max-w-[1280px] mx-auto border-t border-[#c4c7c7]">
            <div className="flex justify-between items-end mb-[64px]">
              <div>
                <h2 className="font-['Newsreader'] text-[32px] leading-[1.2]">Latest Intelligence</h2>
                <p className="text-[#444748]">Briefings on the shifting global regulatory landscape.</p>
              </div>
              <Link className="font-['Inter'] text-[11px] leading-[1.2] tracking-[0.1em] font-semibold border-b border-[#0F0F0F] uppercase" to="/insights">View Archive</Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[32px]">
              {/* Publication 1 */}
              <article className="flex flex-col">
                <div className="aspect-square bg-[#eeeeee] mb-[16px] overflow-hidden">
                  <img alt="Detail of raw concrete texture" className="w-full h-full object-cover grayscale hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB7vsvxFUj7W1icrygQpQLBlbdk6U79v_rAcTWLyUBiP2DR4JgJsKtlC5-ViGiK8yYtsIg7-agljCoQSxqZfCKBj2cm6nkd8hmX6b7R9eXx2CPudSXLb5w9Ud7yBgOJAfin95FKWjxrhgoq3wEz1lBpCkTEsfXjmGWJ3-JNPLkvIyG_jRoBs2qCXvFAbbq77XOTjbEIIBu1x7GFU7BXvKPVAwOyubvTp9ezNtDAtzHQbYfrbFv8MUo0-aV-yxcOqtOYG8Co8w2jvlM" />
                </div>
                <span className="font-['Inter'] text-[11px] leading-[1.2] tracking-[0.1em] font-semibold text-[#5e5e5e] mb-[8px] uppercase">Asia Pacific</span>
                <h3 className="font-['Newsreader'] text-[24px] leading-[1.3] mb-[8px] leading-snug">India's AML Crackdown: Implications for NBFCs</h3>
                <p className="text-[#444748] flex-grow">An analysis of the RBI's latest directives on beneficiary transparency and digital verification.</p>
              </article>
              {/* Publication 2 */}
              <article className="flex flex-col">
                <div className="aspect-square bg-[#eeeeee] mb-[16px] overflow-hidden">
                  <img alt="Sharp brutalist staircase perspective" className="w-full h-full object-cover grayscale hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBjet_S0-Ni-h6WaFjlfxbIcIHO3Q4rtAoFszY1p-oJCJtg354FeL3u-m-EGrgxfCEaKWv_O_cfdP_IimBMtLnd2Pt_soH2XcggOcvta77PdM-wvV0nfbj8gzM1gB7SLDDhS_nNjQC47MWDL4eVxSXvDpOyfQgpjlZVIPGr_Yuy2AQo57z5OLxsDYnP47ut5Zu0JSghUeqndqdQfFOKIumi8mRDYf3tOEDPgMlIUw3sq0psPvgKqSM4X8OMrfEF6XuVKlKqwUJn03w" />
                </div>
                <span className="font-['Inter'] text-[11px] leading-[1.2] tracking-[0.1em] font-semibold text-[#5e5e5e] mb-[8px] uppercase">Sanctions</span>
                <h3 className="font-['Newsreader'] text-[24px] leading-[1.3] mb-[8px] leading-snug">Escalating Sanctions: The New Compliance Floor</h3>
                <p className="text-[#444748] flex-grow">Managing secondary sanctions risk in multi-layered corporate structures across the Eurozone.</p>
              </article>
              {/* Publication 3 */}
              <article className="flex flex-col">
                <div className="aspect-square bg-[#eeeeee] mb-[16px] overflow-hidden">
                  <img alt="Cold lighting on concrete architectural form" className="w-full h-full object-cover grayscale hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBjrTF_0zV8ua7DoSCF77JLnhBihFyjftTYsxKttB6tc7wgXBAB7Q3cFho00pDmlVq35hyKvJVioQb6hnQ5GyP8KFjn-E2pQIwmc_-jLEjUGg-qOXlDzAGz7q0Wf5X3ycuj3rAeotdpGULWLyD14ZTk-odzVl6ZBCBZKMxG6Xa-F97Rzy0aERKslf5CXWkYTc-QHuRqral876eUsOnUwUQNBKRTlN-3oQoGVfSrFTRKgn09J5seUfkpSO0Vzg3xWpj3yLJO8z9JYDs" />
                </div>
                <span className="font-['Inter'] text-[11px] leading-[1.2] tracking-[0.1em] font-semibold text-[#5e5e5e] mb-[8px] uppercase">Technology</span>
                <h3 className="font-['Newsreader'] text-[24px] leading-[1.3] mb-[8px] leading-snug">AI in KYC: Beyond the Buzzword</h3>
                <p className="text-[#444748] flex-grow">Integrating large language models into SAR filing workflows without compromising auditability.</p>
              </article>
              {/* Publication 4 */}
              <article className="flex flex-col">
                <div className="aspect-square bg-[#eeeeee] mb-[16px] overflow-hidden">
                  <img alt="Monolithic concrete exterior" className="w-full h-full object-cover grayscale hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAhRgxo1SmldAHPD5cBbQtLTQchiBy8h4TagdIv4RG44b9X1uT_AuQVXyF28YahlfjZHKhjOIVqeHTA7hZjzyZtwYOxoM-hrhXRWFlB2LdvlQWh8UpKXpzEAZuVx95rLnrPpGo35p2Z1TumkX2--7rTFi4VIIS0YpxWLOPc3dohXJRYj57uG9YB3_Z4ztoO_KQD5KcHZykXWQZRH96DnS22Kki6ESs0opZ5-Y9bVPwDdCnjA2ypLKdfeL3nEutoPlJe415U98SHtRU" />
                </div>
                <span className="font-['Inter'] text-[11px] leading-[1.2] tracking-[0.1em] font-semibold text-[#5e5e5e] mb-[8px] uppercase">Global Risk</span>
                <h3 className="font-['Newsreader'] text-[24px] leading-[1.3] mb-[8px] leading-snug">The High-Risk Jurisdiction Playbook</h3>
                <p className="text-[#444748] flex-grow">Strategizing market entry in frontier economies while maintaining FATF standards.</p>
              </article>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default RegulatoryComplianceAdvisory;