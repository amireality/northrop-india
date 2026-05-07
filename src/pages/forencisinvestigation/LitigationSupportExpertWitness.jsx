import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";

const LitigationSupportExpertWitness = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      title: "Quantum of Loss",
      description:
        "Detailed economic modeling and valuation to determine precise damages in commercial litigation and investment treaty disputes.",
    },
    {
      title: "Arbitration Support",
      description:
        "Strategic advisory for legal teams during international arbitration, providing technical insights and evidentiary synthesis.",
    },
    {
      title: "Forensic Accounting",
      description:
        "Uncovering financial irregularities and tracing assets across complex multi-jurisdictional corporate structures.",
    },
  ];

  const publications = [
    {
      number: "01",
      type: "Journal | Q4 2024",
      title: "The Expert Witness Edge",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuD_bOsOJAAZCfWuhYF0yd3Sop6kCYOH2CXk0JCHPNM867Tn5wZhp0crnAHNvHY7sk5wbqleoDA-WJnU2yYIdlNaGUabnzIsAn2YgUHhHrJOGthItXgGIdxeMZkJjOGAL48cytft_r1m81SlDIJkcXSU9625l_nTlK40VzPujUT26VNKh2GWp0oat4DnKwmjqwsosnW_bW-AmNYxzX4Alk8EtksaR25zlLXIRmtS2Ub8tdDX0mSqmxG33iRPi3NVilVtE2KUc6MWWjs",
    },
    {
      number: "02",
      type: "Analysis",
      title: "Quantum in Volatile Markets",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDMGo-ZPqKt6cALuxm4sdkReQA7ryiORt_7JZnkwj_2tAYyrTm6KaxaP_A-s6BaPBv8mv-Z-GR3TB0vt1Tue4kmJ2Vji_ju0OfbKvDTvxzF0_36GoqG7m1g4JFcZ1_PHVgUddhSHk4-HrxzIG5jvTgsRL-lASgJbbAQrE0TZ57McnoOYdWqhjXdLkxyiSpwfAneO-Xz68Lg1S0sqQ-wE83nHgmtLmGof_URf-9SbPkwLXRyvbP1gTLtrTTzkpmkyKpwrCSHXKUTswc",
    },
    {
      number: "03",
      type: "Special Report",
      title: "SIAC Procedural Trends",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBim0_QF6JEjjw22KzGP0gVLOXKF60iP9k46pnainkwO53wsYG3BB8OGnvdArMLBK2vpOUv4hzZYkg5mLhq85SKjKKbEVOvMg9P3OaB4EHC9akQyV3SX86J8QGZ3MXRmiSNYmUZ_h1vs-Hkl09w40xsDkM8OX31JMkka2Z03wX26fw4Kq4Hn1UDz6H41MtLbnqm7rqQS-wzYpv7tl-PdsYDLkvmoSeeGjopIGeKmGHlsh59E9lLZzScypWEk-3yP2_rOZ-NKTilHGM",
    },
    {
      number: "04",
      type: "Briefing",
      title: "Cross-Examination Strategy",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBSo27rvwA4VYtfAw7cQBDs3z9VvQNZfINCgSHyjjgMa0EKBJnXgxEGiQmJ2mIHVzqYiVtLByCWdBXNWZ9nF7jJ0ir5ZM2DiA30ANq2S5sdDQzrnxU-7DlaXtNw_AmxAgfPlPbkTFUTc1i7YX4DWyl2G0e8VwZN9YcRDWP8AHBtkAJHiXHw85TQPCjgCKlIVn9UDKysrcjid8Hhj11fmmmZTtG4mdrhKMp9V3GSnRdfOkVADtaNUwfRII9yrKanwP2uZYQiYxDfiXM",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          Litigation Support & Expert Witness | Northrop Management
        </title>

        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,600;1,6..72,400&display=swap"
          rel="stylesheet"
        />

        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />

        <style>
          {`
            body {
              font-family: 'Inter', sans-serif;
            }

            h1, h2, h3 {
              font-family: 'Newsreader', serif;
            }

            .material-symbols-outlined {
              font-variation-settings:
                'FILL' 0,
                'wght' 400,
                'GRAD' 0,
                'opsz' 24;
            }
          `}
        </style>
      </Helmet>

      <div className="bg-[#f9f9f9] text-[#1a1c1c] overflow-x-hidden antialiased">
       

        <main>
          {/* Hero */}
          <header className="pt-32 pb-[120px] px-8 max-w-[1280px] mx-auto">
            <div className="grid grid-cols-12 gap-8">
              <div className="col-span-12 md:col-span-7 flex flex-col justify-end">
                <span className="text-[11px] uppercase tracking-[0.1em] text-[#5e5e5e] mb-4">
                  Expert Witness Services
                </span>

                <h1 className="text-[48px] leading-[1.1] tracking-[-0.02em] mb-6">
                  Clear, credible expert evidence that stands up to
                  cross-examination.
                </h1>

                <p className="text-[18px] leading-[1.6] text-[#444748] max-w-xl">
                  Northrop Management provides independent litigation support
                  and expert testimony for high-stakes international disputes,
                  delivering precision in complex quantum and risk assessments.
                </p>
              </div>

              <div className="col-span-12 md:col-span-5 overflow-hidden h-[600px] bg-[#eeeeee] shadow-2xl">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCUuhOjrZ5RH1vh0gcr_meQDST0PZCSmIyEiPFRF4OCy20sMOxk9O1Lh8E8VAPzcaNaV0tBasm5HknxJJNJYIVyT50_qxeDKe7m76ejrymRE54oHwlRK1tK4UNCbrB0duWaUG4o0OvmK8vlukE4KXuOoJoF9FlsGF3iUKom0PzH95LJs6MqwvQ2C0Rvb-B7c82AVsQ9sQrwXG4LduXnfJWKso1FpOpCKATIlzEoab4fHDqeRoSXTJ-Qg7rtfLi2mkwJKy0iTsFnqYo"
                  alt="Hero"
                  className="w-full h-full object-cover grayscale contrast-125 brightness-90 hover:scale-105 transition-transform duration-1000"
                />
              </div>
            </div>
          </header>

          {/* What We Do */}
          <section className="py-[120px] px-8 bg-[#f3f3f4]">
            <div className="max-w-[1280px] mx-auto">
              <div className="border-t border-black pt-6 mb-16 flex flex-col md:flex-row md:items-end md:justify-between">
                <div>
                  <span className="text-[11px] uppercase tracking-[0.1em] text-[#5e5e5e]">
                    Service Capability
                  </span>

                  <h2 className="text-[32px] mt-2">What We Do</h2>
                </div>

                <div className="hidden md:block w-48 h-24 overflow-hidden bg-[#eeeeee] mt-4 md:mt-0">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAUWw5tRJBmbOcjWaujcU2Tr-LHtrD11WAYFZnvdsHKcfasC5xtke7NQ1HVMBYz73p9fH9mxw8sLJCFmF9cgiNiHa4Dseb2NrnFmdsnBfx__Iq8-S6HEqNj7RYoKTuO8ZgJdXje_S6n0ZAXq7Vwl0BjIznvA-WV_PRFaPAPgBFhSmLbaws4F-TuQfKM8FqvKDnphrLNG_UUVNUq5NmvX2cF3ceOJflDnDpOtSWbY2k7nzgX1cHSOFQBKa5yhBIFMIqQJT1DVNgRxhU"
                    alt="Texture"
                    className="w-full h-full object-cover grayscale opacity-50"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {services.map((service, index) => (
                  <div
                    key={index}
                    className="border-l border-black pl-4 py-4"
                  >
                    <h3 className="text-[24px] mb-2">{service.title}</h3>

                    <p className="text-[15px] leading-[1.6] text-[#444748]">
                      {service.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Who It's For */}
          <section className="py-[120px] px-8">
            <div className="max-w-[1280px] mx-auto">
              <div className="grid grid-cols-12 gap-8 items-center">
                <div className="col-span-12 md:col-span-4">
                  <h2 className="text-[32px]">Who It's For</h2>

                  <p className="text-[15px] leading-[1.6] text-[#444748] mt-4">
                    Our clients require absolute discretion and intellectual
                    rigor for global mandates.
                  </p>
                </div>

                <div className="col-span-12 md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-black text-white p-12">
                    <span className="text-[11px] uppercase tracking-[0.1em] opacity-70 block mb-2">
                      Legal Counsel
                    </span>

                    <div className="text-[24px]">
                      Global Law Firms & General Counsel
                    </div>
                  </div>

                  <div className="bg-[#e2e2e2] p-12">
                    <span className="text-[11px] uppercase tracking-[0.1em] text-[#444748] block mb-2">
                      Institutional
                    </span>

                    <div className="text-[24px]">
                      Sovereign States & Multinationals
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Case Study */}
          <section className="py-[120px] bg-[#1c1b1b] text-white">
            <div className="max-w-[1280px] mx-auto px-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                <div className="border-l border-[#858383] pl-12 flex flex-col justify-center">
                  <span className="text-[11px] uppercase tracking-[0.1em] text-[#858383] mb-4">
                    Case Study: SIAC 4922
                  </span>

                  <h2 className="text-[48px] leading-[1.1] mb-6">
                    Winning at SIAC: $42 Million Award
                  </h2>

                  <div className="space-y-6">
                    <div>
                      <span className="text-[11px] uppercase tracking-[0.1em] text-[#858383] block mb-2">
                        The Challenge
                      </span>

                      <p className="text-[18px] leading-[1.6]">
                        Rebutting a flawed valuation model presented by a
                        state-owned enterprise in an energy sector dispute.
                      </p>
                    </div>

                    <div>
                      <span className="text-[11px] uppercase tracking-[0.1em] text-[#858383] block mb-2">
                        The Outcome
                      </span>

                      <p className="text-[18px] leading-[1.6]">
                        Tribunal adopted Northrop's quantum methodology in its
                        entirety, resulting in a full award for the claimant.
                      </p>
                    </div>
                  </div>

                  <button className="mt-16 border border-white px-8 py-4 text-[11px] uppercase tracking-[0.1em] hover:bg-white hover:text-black transition-colors self-start">
                    Read Full Report
                  </button>
                </div>

                <div className="relative overflow-hidden border border-[#c4c7c7] bg-black flex items-center justify-center p-12">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCbd4DSF3_Gat4bl9qykIA1bjOJf7ZEq7enbgp8meNe0hjgHmpFXHPrPRE3G2gtXeeUBPHDOeTtbBh-fymY_KTN9bhS1uDlRaOGP2YTkYyybmpPJ1dQI7mWybgrNhzjgeaJE42KC3OVPJQPDYz1eITnIQH8fBLeIIMrhN2NSdwwBDNXw5sL4xpZ1ONBy9jKTO1vzZRel5KegCuufrD9nQj7rfQNTlJ71jVUS-fXrdqh-xDKQ6wSRYFhFC46E8bJ8VgunN4Qf4kcJ6o"
                    alt="Background"
                    className="absolute inset-0 w-full h-full object-cover opacity-20 grayscale"
                  />

                  <div className="relative z-10 text-center">
                    <div className="text-[120px] leading-none tracking-tighter">
                      $42M
                    </div>

                    <div className="text-[11px] uppercase tracking-[0.1em] mt-4 text-[#838484]">
                      Damages Awarded
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Latest Intelligence */}
          <section className="py-[120px] px-8">
            <div className="max-w-[1280px] mx-auto">
              <div className="flex justify-between items-end mb-16 border-b border-black pb-6">
                <div>
                  <span className="text-[11px] uppercase tracking-[0.1em] text-[#5e5e5e]">
                    Research & Analysis
                  </span>

                  <h2 className="text-[32px] mt-2">
                    Latest Intelligence
                  </h2>
                </div>

                <a
                  href="#"
                  className="text-[11px] uppercase tracking-[0.1em]"
                >
                  View All Publications
                </a>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {publications.map((item, index) => (
                  <div key={index} className="group cursor-pointer">
                    <div className="h-64 overflow-hidden border border-[#c4c7c7] mb-4 relative bg-[#eeeeee]">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="absolute inset-0 w-full h-full object-cover grayscale brightness-50 group-hover:scale-110 transition-transform duration-700"
                      />

                      <div className="absolute bottom-0 left-0 p-6">
                        <div className="text-[24px] text-white">
                          {item.number}
                        </div>
                      </div>
                    </div>

                    <span className="text-[11px] uppercase tracking-[0.1em] text-[#5e5e5e]">
                      {item.type}
                    </span>

                    <h3 className="text-[24px] mt-2 group-hover:text-black transition-colors">
                      {item.title}
                    </h3>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default LitigationSupportExpertWitness;