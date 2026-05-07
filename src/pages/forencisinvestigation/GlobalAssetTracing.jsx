import React from 'react';
import { Helmet } from 'react-helmet-async';

const GlobalAssetTracing = () => {

  const whatWeDoList = [
    {
      icon: "search",
      title: "Global Asset Tracing",
      desc: "Uncovering hidden wealth across diverse jurisdictions, including real estate, corporate entities, and digital holdings."
    },
    {
      icon: "database",
      title: "OSINT",
      desc: "Leveraging advanced Open Source Intelligence techniques to map relationships, track movements, and identify beneficial ownership."
    },
    {
      icon: "account_balance",
      title: "Financial Forensic Analysis",
      desc: "Reconstructing fragmented transaction histories to provide court-admissible evidence of asset dissipation."
    },
    {
      icon: "gavel",
      title: "Litigation Support",
      desc: "Working alongside legal counsel to enforce judgments and freeze assets through rapid, multi-channel interventions."
    }
  ];

  return (
    <>
      <Helmet>
        <title>4E | Global Asset Tracing & Recovery</title>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,600;1,6..72,400&display=swap" rel="stylesheet" />
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
            .bento-grid {
                display: grid;
                grid-template-columns: repeat(12, 1fr);
                gap: 32px;
            }
          `}
        </style>
      </Helmet>

      <main className="font-['Inter'] text-[15px] leading-[1.6] text-[#1a1c1c] selection:bg-[#1c1b1b] selection:text-[#858383]">
        {/* Hero Section */}
        <section className="relative w-full overflow-hidden border-b border-[#c4c7c7]">
          <div className="max-w-[1280px] mx-auto px-8 grid grid-cols-12 items-end min-h-[85vh]">
            <div className="col-span-12 md:col-span-8 pb-[120px] z-10 w-full">
              <span className="font-['Inter'] text-[11px] leading-[1.2] tracking-[0.1em] font-semibold text-[#5e5e5e] mb-[16px] block uppercase tracking-widest">Asset Recovery Division</span>
              <h1 className="font-['Newsreader'] text-[48px] leading-[1.1] tracking-[-0.02em] font-normal text-[#1a1c1c] max-w-2xl mb-[24px]">
                  Locate and recover assets wherever they have been moved.
              </h1>
              <div className="w-24 h-px bg-[#000000] mb-[24px]"></div>
              <p className="font-['Inter'] text-[18px] leading-[1.6] font-normal text-[#444748] max-w-xl">
                  A brutalist approach to financial restoration. We deploy sophisticated OSINT and multi-jurisdictional intelligence to navigate the labyrinth of global offshore movements.
              </p>
            </div>
            
            {/* Commanding Hero Image */}
            <div className="col-span-12 md:col-span-4 h-full min-h-[600px] md:min-h-0 relative">
              <div className="absolute inset-0 bg-[#eeeeee]">
                <img className="w-full h-full object-cover grayscale contrast-125 brightness-90" alt="A towering, monolithic brutalist concrete structure with sharp geometric shadows cast across its faceted surfaces. The composition is stark and vertical, emphasizing institutional weight and unyielding permanence. The high-contrast black and white photography highlights the raw texture of the concrete." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCQ6I69asYwlIF7wvhYH8U8KgicBqwMKEI9AIuO0se54SOFdFVabVn04umsaXDU55dlwAy1C1r36CGSktV98s_1aPD_wzW9l38NHGd-0hfhX8bXW-E4h_5VvpCuyJwBaVm75hOATuws4ihsS2pbsjW5SqABgpAOBvzoSpBsgd5zrU9PjWrpkJlqrIXZaB-6aQ93rRSF1-6DUx1FNX_iypEuf8JdJcrdokBQPQG27fPFpg0VS2yOD1MXgFTpu7VfAv4RQbIVSKMiT9U"/>
              </div>
            </div>
          </div>
        </section>

        {/* What We Do */}
        <section className="py-[120px] px-8 max-w-[1280px] mx-auto">
          <div className="grid grid-cols-12 gap-[32px] mb-[64px]">
            <div className="col-span-12 md:col-span-4 border-t border-[#c4c7c7] pt-[16px]">
              <span className="font-['Inter'] text-[11px] leading-[1.2] tracking-[0.1em] font-semibold text-[#5e5e5e] uppercase">The Mandate</span>
              <h2 className="font-['Newsreader'] text-[32px] leading-[1.2] font-normal mt-[8px] mb-[24px]">What We Do</h2>
              
              {/* Supplementary Brutalist Image 1 */}
              <div className="aspect-square bg-[#eeeeee] overflow-hidden grayscale border border-[#c4c7c7] mt-[24px] hidden md:block">
                <img className="w-full h-full object-cover brightness-75" alt="A close-up of a massive concrete foundation with sharp, angular indentations and hard geometric lines. The lighting creates deep, precise shadows that accentuate the structural integrity and technical detail." src="https://lh3.googleusercontent.com/aida-public/AB6AXuC7ntaAZuHIBJzy3X9wMsM6IxhDWxF8wGcjyectUUPtifkV5m4E04CuttHrQVtX0H8uAeX6VjKSnhifmD05VoA8UQ9AS8scF2qSJfHkdkQOHqQL6yWibxvxYEPk9XxQxwl0sXTVbdpWDdlyyaKLNqjBKzAE1UBWqxT_UMtODfeR_ziVUqfVsw-f5TGe8DOj3fP5JB6fO_qw2GFXq01VMIaMVOqla55jp4GVn3VpT1pRYZ8VgH5x38ZUwFDoBzj37blOugHVyDQCoLw"/>
              </div>
            </div>
            
            <div className="col-span-12 md:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-[24px]">
              {whatWeDoList.map((item, index) => (
                <div key={index} className="p-8 border border-[#c4c7c7] bg-[#f3f3f4]">
                  <span className="material-symbols-outlined text-[#000000] mb-[16px]" style={{fontVariationSettings: "'FILL' 1"}}>{item.icon}</span>
                  <h3 className="font-['Newsreader'] text-[24px] leading-[1.3] font-normal mb-[8px]">{item.title}</h3>
                  <p className="text-[#444748] font-['Inter'] text-[15px] leading-[1.6]">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Who It's For */}
        <section className="bg-[#1c1b1b] text-[#ffffff] py-[120px]">
          <div className="max-w-[1280px] mx-auto px-8">
            <div className="grid grid-cols-12 gap-[32px] items-center">
              <div className="col-span-12 md:col-span-6 mb-[24px] md:mb-0">
                <h2 className="font-['Newsreader'] text-[32px] leading-[1.2] font-normal mb-[24px] text-[#ffffff]">Who It's For</h2>
                <p className="font-['Inter'] text-[18px] leading-[1.6] font-normal text-[#858383] mb-[24px]">
                  Our services are designed for entities requiring maximum discretion and uncompromising technical precision.
                </p>
                <ul className="space-y-[16px]">
                  {[
                    "Sovereign Wealth Funds & National Governments",
                    "Institutional Creditors & Global Banking Groups",
                    "High-Net-Worth Individuals & Private Family Offices",
                    "Trustees in Bankruptcy & Liquidators"
                  ].map((text, idx) => (
                    <li key={idx} className="flex items-start gap-[8px] border-b border-[#474646] pb-[8px]">
                      <span className="material-symbols-outlined text-[#858383]">arrow_forward</span>
                      <span className="font-['Inter'] text-[15px] leading-[1.6] font-normal">{text}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="col-span-12 md:col-span-6 flex justify-center">
                {/* Supplementary Brutalist Image 2 */}
                <div className="border-[20px] border-[#474646] p-8 w-full max-w-md bg-white">
                  <div className="aspect-square relative overflow-hidden grayscale">
                    <img className="absolute inset-0 w-full h-full object-cover contrast-125" alt="A dramatic low-angle perspective of a brutalist concrete staircase winding into shadow, representing the depth and complexity of investigation." src="https://lh3.googleusercontent.com/aida-public/AB6AXuD7BaHr_jx13TsWmUNTJNbTEqNDroRgC__rapNAPEwm7o34RV4Xxr1ZlfjwzLY_aWaFIGT8YuVGkhMdjdZXn-Y5fG_RNHmZqZ0lo32Rl1CEeycki-LFYEquori3Scs0B43Gg-rbZUcXad4dqa0xISGEE5pVl7Ie1Ll8yxKsa545Ehc2UbLvfVsngClwvUf0GZ73HMp-2gnGk_tFDU9z6C624_DhIrHB2oHNAwEXEBe67YDpO2WME9sq7zxbvLeBuNyHNwvOiWGJNF8"/>
                    <div className="relative z-10 h-full flex flex-col justify-center items-center text-center p-8 bg-black/40 backdrop-blur-sm">
                      <span className="font-['Newsreader'] text-[48px] leading-[1.1] tracking-[-0.02em] font-normal text-white mb-[8px]">4E</span>
                      <p className="font-['Inter'] text-[11px] leading-[1.2] tracking-[0.1em] font-semibold text-white uppercase tracking-widest">Uncompromising Precision</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Case Study */}
        <section className="py-[120px] px-8 max-w-[1280px] mx-auto">
          <div className="bg-[#eeeeee] p-12 border border-[#c4c7c7] grid grid-cols-12 gap-[32px]">
            <div className="col-span-12 md:col-span-4 border-r border-[#c4c7c7] pr-8">
              <span className="font-['Inter'] text-[11px] leading-[1.2] tracking-[0.1em] font-semibold text-[#5e5e5e] uppercase mb-[8px] block">Case Study: Recovery</span>
              <h2 className="font-['Newsreader'] text-[32px] leading-[1.2] font-normal mb-[16px] leading-tight text-[#1a1c1c]">Following the Money Offshore</h2>
              <div className="mt-[24px]">
                <div className="font-['Newsreader'] text-[48px] leading-[1.1] tracking-[-0.02em] font-normal text-[#000000]">Rs.340 Cr</div>
                <p className="font-['Inter'] text-[11px] leading-[1.2] tracking-[0.1em] font-semibold text-[#5e5e5e] uppercase">Assets Recovered</p>
              </div>
            </div>
            <div className="col-span-12 md:col-span-8 space-y-[24px]">
              <div>
                <h4 className="font-['Inter'] text-[11px] leading-[1.2] tracking-[0.1em] font-semibold text-[#000000] uppercase mb-[8px]">The Challenge</h4>
                <p className="font-['Inter'] text-[15px] leading-[1.6] font-normal text-[#444748]">A complex shell network spanning Mauritius, BVI, and Cyprus was utilized to siphon capital from a major infrastructure project. Traditional audits failed to identify the beneficial owner.</p>
              </div>
              <div>
                <h4 className="font-['Inter'] text-[11px] leading-[1.2] tracking-[0.1em] font-semibold text-[#000000] uppercase mb-[8px]">The Intervention</h4>
                <p className="font-['Inter'] text-[15px] leading-[1.6] font-normal text-[#444748]">Our team deployed custom data harvesting scripts to analyze historical registry filings and physical surveillance in three jurisdictions. We mapped the "circular movement" of funds through a series of shadow-directors.</p>
              </div>
              <div>
                <h4 className="font-['Inter'] text-[11px] leading-[1.2] tracking-[0.1em] font-semibold text-[#000000] uppercase mb-[8px]">The Outcome</h4>
                <p className="font-['Inter'] text-[15px] leading-[1.6] font-normal text-[#444748]">Total recovery of Rs.340 Cr via freezing orders in secondary jurisdictions. Detailed evidence provided was sufficient for criminal indictments of the key perpetrators.</p>
              </div>
              <button className="flex items-center gap-[8px] font-['Inter'] text-[11px] leading-[1.2] tracking-[0.1em] font-semibold uppercase border-b border-[#000000] text-[#000000] hover:text-[#5e5e5e] transition-colors duration-200 mt-[16px]">
                Read Detailed Report <span className="material-symbols-outlined text-[14px]">arrow_right_alt</span>
              </button>
            </div>
          </div>
        </section>

        {/* Latest Intelligence */}
        <section className="py-[120px] px-8 max-w-[1280px] mx-auto border-t border-[#c4c7c7]">
          <div className="flex justify-between items-end mb-[64px]">
            <div>
              <span className="font-['Inter'] text-[11px] leading-[1.2] tracking-[0.1em] font-semibold text-[#5e5e5e] uppercase mb-[8px] block">Knowledge Base</span>
              <h2 className="font-['Newsreader'] text-[32px] leading-[1.2] font-normal">Latest Intelligence</h2>
            </div>
            <a className="font-['Inter'] text-[11px] leading-[1.2] tracking-[0.1em] font-semibold text-[#5e5e5e] uppercase hover:text-[#000000] border-b border-transparent hover:border-[#000000] transition-all pb-1" href="#">Archive</a>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[32px]">
            {/* Publication 1 */}
            <article className="flex flex-col">
              <div className="aspect-[3/4] bg-[#e2e2e2] mb-[16px] overflow-hidden grayscale hover:grayscale-0 transition-all duration-500 border border-[#c4c7c7] group">
                <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="A stark black and white architectural photograph of a towering skyscraper's glass and steel facade." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDntVANBWIaGfIMYKmLVIivRIILYIBu0lEgbfrERRJZUwJbkAVQgnZh7wx_gOsLVvFCr5kMzvKyBq7sNB0wYLupHkx9Jn0nqGzhvolBFqAdWiEM29oc5m4_WIVcMrhUDFRdgEPmkM3OsGUqzLsdjH30DAA62H3SudiVbGK_eGQehTRKGIlFcp851Ta7q_BdJ6u2kcICGc0caN2XIvIU6wDH-KIvuxS9Sfh-j6L4TkvbxY3vEwJHbOE2t1L_96rtUNbpJm0xTn_gKXQ"/>
              </div>
              <span className="font-['Inter'] text-[11px] leading-[1.2] tracking-[0.1em] font-semibold text-[#5e5e5e] uppercase mb-[8px]">Report | April 2024</span>
              <h3 className="font-['Newsreader'] text-[24px] leading-[1.3] font-normal mb-[8px]">Hidden in Plain Sight</h3>
              <p className="font-['Inter'] text-[15px] leading-[1.6] font-normal text-[#444748] line-clamp-3">The mechanics of urban real estate as a vehicle for wealth preservation and concealment in primary markets.</p>
            </article>

            {/* Publication 2 */}
            <article className="flex flex-col">
              <div className="aspect-[3/4] bg-[#e2e2e2] mb-[16px] overflow-hidden grayscale hover:grayscale-0 transition-all duration-500 border border-[#c4c7c7] group">
                <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="A detailed, close-up shot of complex circuit boards and glowing server nodes." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDsRqozV62RDNVbIXc9dS2r1iBmV4D3IQzh39NDyDSkg7a0RWjqfJAXcw20Iw_9K4sFj5T_SDpFGZSIt-EfnsEsgUmcU249FjV3uDK7HNPsML7ZSg7YWVF_qR3IWxJDmILp3gDzAPD6M2RwwKbLlz9TnFh0v4G2_qPmh7k4yGOJudENXBW7EIYvSqTwI6gZBpAN_dLH0jdzyX2ykNVwKBID0P-o7dvcpUS-yWkVH2TMxzsvdlOZZs50ry1PGFw3NgeyE3Wp2v0lUjo"/>
              </div>
              <span className="font-['Inter'] text-[11px] leading-[1.2] tracking-[0.1em] font-semibold text-[#5e5e5e] uppercase mb-[8px]">Technical Brief | Mar 2024</span>
              <h3 className="font-['Newsreader'] text-[24px] leading-[1.3] font-normal mb-[8px]">The Crypto Labyrinth</h3>
              <p className="font-['Inter'] text-[15px] leading-[1.6] font-normal text-[#444748] line-clamp-3">Analyzing the evolution of mixers and obfuscation techniques in decentralized finance protocols.</p>
            </article>

            {/* Publication 3 */}
            <article className="flex flex-col">
              <div className="aspect-[3/4] bg-[#e2e2e2] mb-[16px] overflow-hidden grayscale hover:grayscale-0 transition-all duration-500 border border-[#c4c7c7] group">
                <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="An abstract, high-contrast photograph of a concrete monolithic structure under a clear sky." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCKBnABMGphw416ae2nw3xINvZQ5RnrIDr0D9ULmmyLujDpdX6f8S3uxUJo4fpaZ5hD0ANDosXUWrSpsCgpCqYiwUY3qEBmirzm6w1lAzVAKJyBY5wdKTPEc5_3Mcd-L_zYJqrBM8dj8SJxVKniZbblroWZYa21g4hDPC_v51Iviu10mA3YOytoVEAUh6ZGWdSbFavk2mkN9M2llyIaaVIp1OJNWoZ0rFJdwpPo6eubw0ym30PfP2Pal__tiIa4jDtEcCLXll2lIJM"/>
              </div>
              <span className="font-['Inter'] text-[11px] leading-[1.2] tracking-[0.1em] font-semibold text-[#5e5e5e] uppercase mb-[8px]">Advisory | Feb 2024</span>
              <h3 className="font-['Newsreader'] text-[24px] leading-[1.3] font-normal mb-[8px]">Jurisdictional Shifts</h3>
              <p className="font-['Inter'] text-[15px] leading-[1.6] font-normal text-[#444748] line-clamp-3">A comparative study of the changing transparency laws in traditional offshore tax havens.</p>
            </article>

            {/* Publication 4 */}
            <article className="flex flex-col">
              <div className="aspect-[3/4] bg-[#e2e2e2] mb-[16px] overflow-hidden grayscale hover:grayscale-0 transition-all duration-500 border border-[#c4c7c7] group">
                <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="A cinematic, low-angle shot of a camera lens focusing intently." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBM0gmvaCI2kvBastABQge9LCwa5CBWAOAxxg6kyB-UxQrE-bD97Awi9BWtyy46AyEPkfU6P2HATDyFE9taQWRAO5owkMd5UBNQx_zaEr99vKfih4KfebHv-LgCCjVlHwyLYzMYtvi5HwC-yRpQ3mwdslmOiiYVo5PJDZRWBx2HNG9hUusCTBHLlZmZUXddFqi2UZbHfsdk99MOjk-hpy5yU__3BnEBXZPdyCEs1tXifNvMaT_BQbOUa8O9nArnsWHgpRqKpSicbjo"/>
              </div>
              <span className="font-['Inter'] text-[11px] leading-[1.2] tracking-[0.1em] font-semibold text-[#5e5e5e] uppercase mb-[8px]">Case Notes | Jan 2024</span>
              <h3 className="font-['Newsreader'] text-[24px] leading-[1.3] font-normal mb-[8px]">The Art of Recovery</h3>
              <p className="font-['Inter'] text-[15px] leading-[1.6] font-normal text-[#444748] line-clamp-3">How tangible assets, from fine art to superyachts, are tracked through global logistical nodes.</p>
            </article>
          </div>
        </section>
      </main>
    </>
  );
};

export default GlobalAssetTracing;