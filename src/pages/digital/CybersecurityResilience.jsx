import { Helmet } from 'react-helmet-async'

export default function CybersecurityResilience() {
  return (
    <>
      <Helmet>
        <title>Cybersecurity Resilience | Northrop Management</title>
        <meta name="description" content="Hardened defensive frameworks for critical infrastructure and global operations." />
      </Helmet>

      <style dangerouslySetInnerHTML={{ __html: `
        .digital-subpage {
          --primary: #002B5C;
          --background: #fcf9f8;
          --on-surface: #1c1b1b;
          --section-gap: 120px;
        }
        .strategic-shadow {
          box-shadow: 0px 4px 20px rgba(0, 43, 92, 0.05);
        }
        .font-headline-display { font-family: 'Noto Serif', serif; font-size: 48px; line-height: 1.1; letter-spacing: -0.02em; font-weight: 700; }
        .font-headline-lg { font-family: 'Noto Serif', serif; font-size: 32px; line-height: 1.2; font-weight: 600; }
        .font-headline-md { font-family: 'Noto Serif', serif; font-size: 24px; line-height: 1.3; font-weight: 600; }
      `}} />

      <main className="digital-subpage pt-20 bg-white text-[#1c1b1b] font-sans">
        {/* Hero Section */}
        <section className="relative h-[700px] flex items-center bg-[#002B5C] overflow-hidden">
          <div className="absolute inset-0 opacity-40 mix-blend-overlay">
            <img 
              className="w-full h-full object-cover" 
              alt="Digital visualization of a global neural network" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC1tG8N0KzTEC2MGn53kyeJ1lF2j43un_ZIA6b7YK3zKC9TPBz1BU4enGKgj4Xo--2Y0SvrfSaBAswpdGSv7f-vBIBwtvR7nkQV5rUlgrgTY3GTukcjga3He6RuxW8qXK4zYE-_A4yonEzTMzSN5ulyOQWlGLwMU55J8HvB8rK_lNtgZ0CWHH42rzWXdjXMpgaKh4b4B6Z1a3gDb4G4nX1usHQ6W7Y-g9tw3j4x0uKiM1a0FcU80VnWKSo44U6zpW4FbPoP7PVZMYw" 
            />
          </div>
          <div className="max-w-[1280px] mx-auto px-8 lg:px-16 relative z-10 w-full">
            <div className="max-w-3xl">
              <span className="text-white/70 text-[12px] font-semibold tracking-widest mb-4 block uppercase">Strategic Resilience</span>
              <h1 className="text-white font-headline-display mb-8">Securing the Resilient Enterprise</h1>
              <p className="text-white text-[18px] mb-12 max-w-2xl opacity-90 leading-relaxed">
                We navigate the complexity of modern threats through rigorous architecture, cognitive intelligence, and elite response strategies to protect global institutional capital.
              </p>
              <div className="flex gap-4">
                <button className="bg-white text-[#002B5C] px-8 py-4 text-[12px] font-semibold uppercase tracking-wider hover:bg-opacity-90 transition-all">View Strategy</button>
                <button className="border-2 border-white text-white px-8 py-4 text-[12px] font-semibold uppercase tracking-wider hover:bg-white hover:text-[#002B5C] transition-all">Risk Assessment</button>
              </div>
            </div>
          </div>
        </section>

        {/* Threat Landscape */}
        <section className="py-24 max-w-[1280px] mx-auto px-8 lg:px-16">
          <div className="grid md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-4 border-l-4 border-[#002B5C] pl-6">
              <h2 className="font-headline-lg text-[#002B5C]">Threat Landscape</h2>
              <p className="mt-6 text-[16px] text-[#43474f]">The modern attack surface is borderless. We define risk not by the presence of threats, but by the maturity of the response.</p>
            </div>
            <div className="md:col-span-8 grid md:grid-cols-2 gap-8">
              <div className="p-8 bg-[#f6f3f2] border-b-4 border-[#002B5C]">
                <span className="material-symbols-outlined text-[#002B5C] mb-4 text-4xl">policy</span>
                <h3 className="font-headline-md text-[#002B5C] mb-2">Systemic Complexity</h3>
                <p className="text-[14px] text-[#5c5f60]">Interconnected supply chains and legacy integration points represent the highest vulnerability for global operations.</p>
              </div>
              <div className="p-8 bg-[#f6f3f2] border-b-4 border-[#002B5C]">
                <span className="material-symbols-outlined text-[#002B5C] mb-4 text-4xl">security_update_good</span>
                <h3 className="font-headline-md text-[#002B5C] mb-2">Automated Adversaries</h3>
                <p className="text-[14px] text-[#5c5f60]">AI-driven orchestration requires a cognitive-first defense strategy that anticipates vectors before they manifest.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Solutions Grid */}
        <section className="py-24 bg-[#002B5C]/5">
          <div className="max-w-[1280px] mx-auto px-8 lg:px-16">
            <div className="mb-12 text-center">
              <h2 className="font-headline-lg text-[#002B5C]">Engineered Security Solutions</h2>
              <div className="h-1 w-24 bg-[#002B5C] mx-auto mt-4"></div>
            </div>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { icon: "cloud_done", title: "Cloud Security", desc: "Multi-cloud governance and runtime protection for elastic infrastructures." },
                { icon: "admin_panel_settings", title: "Zero Trust", desc: "Context-aware identity and access management for the decentralized workforce." },
                { icon: "running_with_errors", title: "Incident Response", desc: "Rapid containment and forensic analysis led by elite cyber analysts." },
                { icon: "fact_check", title: "Compliance", desc: "Rigorous auditing for SOC2, GDPR, and global regulatory frameworks." }
              ].map((item, idx) => (
                <div key={idx} className="bg-white p-8 strategic-shadow border-t-4 border-[#002B5C] group hover:-translate-y-1 transition-all duration-300">
                  <div className="text-[12px] font-semibold text-[#002B5C]/60 mb-4 uppercase">0{idx + 1}</div>
                  <h4 className="font-headline-md text-[#002B5C] mb-6">{item.title}</h4>
                  <p className="text-[14px] text-[#43474f] mb-8">{item.desc}</p>
                  <span className="material-symbols-outlined text-[#002B5C] text-3xl">{item.icon}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SOC Section */}
        <section className="py-24">
          <div className="max-w-[1280px] mx-auto px-8 lg:px-16 grid md:grid-cols-2 gap-24 items-center">
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#002B5C]/10 -z-10"></div>
              <img 
                className="w-full aspect-square object-cover strategic-shadow" 
                alt="Security operations center" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAvo_F8L_jSQvi3yVXh7AHppIleV-L03J2FgfEEaG1jZ_lStv3821xCrf6mwh8KYNYCXhA6Ky4k0R87gVv_VR9hqnrhnNMIqoXuLOuEhYMXZtN9MiL62OXETYnIZNcr7UfWuRC6piMPIIG5LXtqTEcgWMurCK7y7Hs2dxE_7-Pe2-qx9nuZruEskwkK6VRlS1ylyirxlA4YKkbrsozS4wkLixjfTLJszRcZDpt6LVlt3M7K7D0sSqAghHIRu62RdvIJuUnJQJACCBs" 
              />
              <div className="absolute bottom-8 right-8 bg-[#002B5C] text-white p-8 max-w-xs">
                <div className="text-[40px] font-light mb-2">24/7</div>
                <p className="text-[12px] font-semibold uppercase tracking-wider">Global Vigilance</p>
              </div>
            </div>
            <div>
              <span className="text-[#002B5C] text-[12px] font-semibold tracking-widest mb-4 block uppercase">The Nerve Center</span>
              <h2 className="font-headline-lg text-[#002B5C] mb-8">Security Operations Center (SOC)</h2>
              <p className="text-[18px] text-[#43474f] mb-8 leading-relaxed">Our Global SOC acts as the central intelligence hub for your digital estate. We combine human intuition with machine-speed response to neutralize threats in milliseconds.</p>
              <ul className="space-y-4 mb-12">
                {["MDR (Managed Detection & Response)", "Threat Hunting & Intelligence Enrichment", "Vulnerability Management as a Service"].map((li, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-[#002B5C]"></div>
                    <span className="text-[16px] font-medium text-[#1c1b1b]">{li}</span>
                  </li>
                ))}
              </ul>
              <button className="border-b-2 border-[#002B5C] pb-2 text-[12px] font-semibold uppercase tracking-widest text-[#002B5C] hover:opacity-70 transition-all flex items-center gap-2">
                Explore SOC Capabilities <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-[#002B5C] py-24 text-center">
          <div className="max-w-[1280px] mx-auto px-8 lg:px-16">
            <h2 className="text-white font-headline-lg mb-8">Is your enterprise resilient?</h2>
            <p className="text-white text-[18px] max-w-2xl mx-auto mb-12 opacity-90 leading-relaxed">Engage with our principal consultants for a comprehensive threat maturity assessment.</p>
            <button className="bg-white text-[#002B5C] px-10 py-5 text-[12px] font-semibold uppercase tracking-widest hover:scale-95 transition-transform">Schedule Consultation</button>
          </div>
        </section>
      </main>
    </>
  )
}
