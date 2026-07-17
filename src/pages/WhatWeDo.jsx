import React from 'react';

const WhatWeDo = () => {
  return (
    <div className="bg-advisory-background text-advisory-on-background min-h-screen flex flex-col selection:bg-advisory-primary-container selection:text-advisory-on-primary-container font-sans">
      <main className="flex flex-col flex-grow">
        {/* Hero Section */}
        <section className="relative w-full border-b border-advisory-outline grid grid-cols-1 lg:grid-cols-12 min-h-[700px] bg-white overflow-hidden">
          <div className="lg:col-span-7 flex flex-col justify-center p-8 md:p-12 lg:p-24 z-10">
            <span className="font-sans text-[10px] md:text-xs uppercase text-advisory-primary font-bold mb-6 tracking-[0.4em] inline-block">
              Protocol 01 — Executive Advisory
            </span>
            <h1 className="font-sans text-5xl md:text-7xl lg:text-8xl font-bold leading-none mb-10 text-advisory-on-surface">
              RIGOUR<br />AND<br />
              <span className="text-advisory-primary-container bg-advisory-on-surface px-2">GROWTH</span>
            </h1>
            <p className="font-sans text-lg md:text-xl max-w-xl mb-12 text-advisory-on-surface/70 leading-relaxed">
              Northrop Advisory operates on the principle of <span className="text-advisory-on-surface font-semibold underline decoration-advisory-primary-container decoration-4 underline-offset-4">Functional Honesty</span>. We provide absolute structural clarity in financial and strategic consulting.
            </p>
            <div className="flex flex-wrap gap-6">
              <button className="bg-advisory-on-surface text-white px-8 md:px-10 py-4 md:py-5 font-sans text-sm font-bold uppercase rounded hover:bg-advisory-primary hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1">
                INITIATE STRATEGY
              </button>
              <button className="bg-transparent text-advisory-on-surface px-8 md:px-10 py-4 md:py-5 border border-advisory-on-surface font-sans text-sm font-bold uppercase rounded hover:bg-advisory-on-surface hover:text-white transition-all duration-300 shadow-sm hover:shadow-lg hover:-translate-y-1">
                VIEW REPORTS
              </button>
            </div>
          </div>
          <div className="lg:col-span-5 relative bg-advisory-surface-variant h-[400px] lg:h-auto overflow-hidden">
            <img
              alt="Architectural abstract"
              className="absolute inset-0 w-full h-full object-cover opacity-80 mix-blend-multiply transition-transform duration-1000 hover:scale-105"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA77oK_NQ3iLnFgkoAVW-QGlKNAtbNPbiyrF_zUIjIMBMF0yrwfIq4eVmasSB1hJLYaIkRXT05u7RJUwCDZ3PWzjaT3D38KgsyZMu26MXuu1vFBMPhGYwDapAoTB4FA0X4jF0zgMA6UkgeFlb-clU-rXYYonz29DmJcHG7QsQrCU8h6Z7bW0SndGQN-HB-pIPS-KhFBclljElq7IzFv3JxStZNdofKYbuGXr57p1IhH2XPbztTAKg6WfH7AYJmJXiXuGysG_y6bw-g"
            />
            
          </div>
        </section>

        {/* Minimal Commentary Bar */}
        <section className="bg-advisory-surface-container py-3 px-6 md:px-12 border-b border-advisory-outline/50">
          <div className="flex flex-wrap justify-center md:justify-between items-center gap-6 md:gap-8 font-sans text-[10px] md:text-xs tracking-[0.3em] uppercase text-advisory-on-surface/50">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-lg">architecture</span>
              <span>Absolute Clarity</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-lg">grid_view</span>
              <span>Modular Framework</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-lg">verified</span>
              <span>Functional Honesty</span>
            </div>
            <div className="hidden xl:block opacity-30">
              // NORTHROP-MINIMAL-SYSTEM-v4 //
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="px-6 md:px-12 lg:px-24 bg-white py-16 md:py-24">
          <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between border-b border-advisory-outline pb-12">
            <div className="max-w-2xl">
              <span className="font-sans text-xs font-bold uppercase text-advisory-primary mb-4 block tracking-widest">Division of Assets</span>
              <h2 className="font-sans text-4xl md:text-5xl font-bold text-advisory-on-surface uppercase tracking-tight">CORE SERVICES</h2>
            </div>
            <div className="max-w-sm font-sans text-sm mt-8 md:mt-0 text-advisory-on-surface/60 leading-relaxed">
              Every service offered is a block in the foundation of industrial success. We provide solutions of absolute structural integrity.
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 bg-white border-t border-l border-advisory-outline">
            {/* Service items */}
            {[
              { id: 'MC-001', title: 'Management Consulting', desc: 'Hierarchy of leadership & command.', icon: 'corporate_fare', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAhN6y-2WM8kxyXG4wWiKTA6B1URxFMt-tzjO24bs8Jc9gyCWGsLR0HxExCqTtqU2qJ5gZ5XA80z_741so3t_K0_VX5jKthA8WxH3tTU1MAFoHzHBRNzAI5gZ0HnwqaYbT1siiHbFsG8mzovTSIW5UZgGi5_9xhwx5AQNfhZn5l923kcyRBotECzYedN8Dj9zGLlJ_VILVHhEHyAMjQVpr2aqYNgN_JOAGQgpPru2jn87UbWES9Zs4kCOMDoHBtg7YTAmQm5Ezwa2U' },
              { id: 'FA-002', title: 'Financial Advisory', desc: 'Resource allocation for stability.', icon: 'account_balance', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCRgn_1oPwT-fVGa5tPqCAvHIlioU0DHwQteJJBrIa3hYN9UHYUmrbp80zgP_d8TUNc5J7uC4kdB_r6I4PenOB6abFOohZzVR2sQ9rCzYh2b14fh6Jy3PqGPRCkWPXp9oU9zMAjUcDWDXooQEnuIjGP3WdlXpUFc-t6J-msl3ZkVfikn0AD5lrtpyLib3P70mK68blWgQMbhT7ToPg99V2irqFe0I0WECzArsmEPIUUOVQG5SlhCkOs2eg7a9eY6EX4I41h4pHGZWQ' },
              { id: 'FR-003', title: 'Financial Reporting', desc: 'Systemic performance metrics.', icon: 'monitoring', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBv-Njh0Qq-JJh86D2735N6GTiL5FnHFtuUBOrQL1CVV3W2odqQfdbZDCKhviNGkZjNgoNKcyoljT1AkBFrpodFLa2hJdoOR9rGtdvFCJt9IBEmm3Skos08ZXQmvLgOam88GVg7alpYyeeW1g20qYyqyDHZ7MiASN8IWuDtreQI-p6ZIw7GA-oN0u7cnZoCHrAmKq38cGFING9tVD9MCqzT83iSpE_Za3lAyBwXdaRT5baB0nGXs8ik3DsoSFZ5CFh_vkV1nt_3ibM' },
              { id: 'AR-004', title: 'Assurance & Risk', desc: 'Disruption mitigation & audits.', icon: 'gpp_maybe', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBsCrw_J1oDoI_q6QnazIYQLktjyfc3ZIg-dOeI74OaTU2wPiay9aFT2FHq43ibBjPwGXW30jtwT2jyfbNWne5gpPteMBAPwtbjl1JaQVhWW7vMr9qLXmqaOkyTrhVuzlvYTZZVgssPG4DJqfe_iT4ZP519JMkY62A87pL4kzQuE1SWblfyC1iHOrEuEe5oNcyVLefuHAQoGRq9p1Rh4UZOI2WVSFXG2HOnAsdTWVyI7JES0erx22UxzjRTEYIYptYwop-MtglZJos' },
              { id: 'DD-005', title: 'Due Diligence', desc: 'Systemic integrity verification.', icon: 'search', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDwAs86uyZXB8TF6NIo--_NZ_5-A89pzbjBPqiawv4-n7HvAS1pl8nwEnIpVVwVYx1vgotP1g9Plo9J24riWmMFRXOby6yCGn0RNZCxWWnsW_vYHGv7dwrhr_eL6oedsu8pLM7GnkZj4oOt87aG9zFJvPuwpknrR8u3Jmt7GEl6dPCz8Ld7wUbjWp4O8FUk5__93mrI-nKeGy5hG07Q55KBKJ5app_KP8t3AsPorNAVRyqKrZ6_POGcvTWTzGaST1EhJqBL8NcQzr4' },
              { id: 'FI-006', title: 'Forensic Investigations', desc: 'Deconstructing systemic failures.', icon: 'fact_check', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA4HQTVqvjB7mD3OO5pLIrGZkinfRaAB5d2B-Ea66V2jnZ6gjjGNNTRqsVnaAFJ9bGRv1G2rRSfhemDWRI7RHHaQnGUxDsS8IaXYMg8mjHx8eupMVJq0o8be8alvkh3KmK61iuAiH5sgmAO9NH7AuX3Hxs7j4po4-DPqjVTkh9561I1KiaFQzMwPYF069RgqOQYSeNdquC-rDEKpxevV_VxdL94wKuDIBvgOXOaFddfCRRm4ZUPXd8GAPfd0xrRXbvYy-flvHsCqg8' },
              { id: 'TX-007', title: 'Taxation', desc: 'Compliance & fiscal optimization.', icon: 'account_balance_wallet', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBdICMYjITOEavIHv7gR9PX-70EvOxBIlXmfv1GzUYXF0uNtnPA_PL-efOU3psLhpMRx2EKB7Rsm498GZR1W1ArpbrrlKdJALFbmAdA1E5EuHRwt_lBhqyBYMiRGejzqTW93mFagJApMUqMvsuM-hPbtnAo80ePGYBUwaVh5yz164H-gk0w6DElmcQXlMjv2MAvGnoDDnwKsU2jcAbMM_WR3KGTrSTfVzU4URE--vftb-zUpeSe-YjjrkUG7FgpON7Suj7Wcsf3AL8' },
              { id: 'TA-008', title: 'Transaction Advisory', desc: 'Seamless exchange of assets.', icon: 'handshake', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCaehS58a6cOSgDTDflakUa0qwYuikimnU5t5QfAQoMBWhgDhkytOYHCAWSWWJf7hJZpZIWOhjoBlQ0KhawmoKFNIgk_gd-PtbvoiwhLSJxVSUd4A2IqXB0MMH7ejl5Vtd0ZWfVsddXJk0ndmW73v6ewiCFxjmlVYno1piC05bSt4yA99M_eFiKf2ExhwQ5_HklEhz9FRszs45pKsAIErezE5drBl27FIxqNfFhT70T2RCcDRIp-LU1frX7tzmN_m--X4oTFbzjlHE' },
            ].map((service) => (
              <div key={service.id} className="bg-white p-6 border-r border-b border-advisory-outline hover:bg-advisory-surface-container transition-colors group flex flex-col gap-4">
                <div className="flex items-start justify-between">
                  <div className="w-10 h-10 bg-advisory-primary-container flex items-center justify-center rounded-sm text-advisory-on-primary-container">
                    <span className="material-symbols-outlined text-xl">{service.icon}</span>
                  </div>
                  <span className="font-sans text-[10px] text-advisory-on-surface/30 tracking-tighter">REF: {service.id}</span>
                </div>
                <div className="flex gap-4">
                  <img alt={service.title} className="w-16 h-16 object-cover rounded-sm " src={service.img} />
                  <div className="flex flex-col">
                    <h3 className="font-sans text-sm font-bold uppercase text-advisory-on-surface leading-tight mb-1">{service.title}</h3>
                    <p className="font-sans text-[11px] text-advisory-on-surface/60 leading-tight">{service.desc}</p>
                  </div>
                </div>
                <div className="mt-auto pt-4 flex items-center justify-between border-t border-advisory-outline/30">
                  <span className="font-sans text-[9px] uppercase font-bold text-advisory-primary">Specification</span>
                  <span className="material-symbols-outlined text-sm text-advisory-primary group-hover:translate-x-1 transition-transform">arrow_right_alt</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-white grid grid-cols-1 lg:grid-cols-2 border-t border-advisory-outline">
          <div className="p-8 md:p-12 lg:p-24 flex flex-col justify-center">
            <h2 className="font-sans text-5xl md:text-6xl font-bold uppercase leading-[0.9] mb-10 text-advisory-on-surface">
              STRUCTURE IS<br />
              <span className="text-advisory-primary-container bg-advisory-on-surface px-2">PERMANENCE</span>
            </h2>
            <p className="font-sans text-lg mb-12 text-advisory-on-surface/70 leading-relaxed max-w-lg">
              Join the Northrop Advisory network. In a world of fluid boundaries, we provide the concrete framework for your legacy. Operational excellence is not a choice—it is a directive.
            </p>
            <div>
              <button className="bg-advisory-on-surface text-white px-10 md:px-12 py-5 md:py-6 font-sans text-sm font-bold uppercase rounded shadow-lg hover:shadow-2xl hover:bg-advisory-primary hover:-translate-y-1 transition-all duration-300">
                COMMAND ACCESS
              </button>
            </div>
          </div>
          <div className="relative min-h-[400px] md:min-h-[500px] bg-advisory-surface-variant overflow-hidden">
            <img
              alt="Modern minimalist architecture"
              className="absolute inset-0 w-full h-full object-cover "
              src="/whatwedo.png"
            />
          
          </div>
        </section>
      </main>
    </div>
  );
};

export default WhatWeDo;
