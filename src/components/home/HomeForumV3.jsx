import React from 'react';
import { Link } from 'react-router-dom';

const EventCard = ({ icon, title, desc, meta, badge, delay }) => (
  <div className={`bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col transition-all duration-300 hover:bg-white/10 hover:border-[#C5963A]/30 group sr ${delay}`}>
    <div className="text-[32px] mb-6 grayscale group-hover:grayscale-0 transition-all">{icon}</div>
    <h3 className="font-serif text-[22px] font-bold text-white mb-4 group-hover:text-[#C5963A] transition-colors">{title}</h3>
    <p className="text-[14px] text-white/50 leading-relaxed mb-8 flex-1">{desc}</p>
    
    <div className="space-y-3 mb-8 pt-6 border-t border-white/5">
      {meta.map((m, i) => (
        <div key={i} className="flex items-center gap-3 text-[12px] text-white/40">
          <div className="w-4 h-4 shrink-0">{m.icon}</div>
          {m.text}
        </div>
      ))}
    </div>
    
    <span className="inline-block px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] font-bold uppercase tracking-widest text-white/60 w-fit">
      {badge}
    </span>
  </div>
);

const HomeForumV3 = () => {
  const invitees = [
    { icon: '💼', title: 'CFOs & Finance Directors', desc: 'Listed entities, PE-backed companies, ₹100Cr+ revenue businesses' },
    { icon: '🏛', title: 'Audit Committee & Independent Directors', desc: 'Active board members of listed or regulated entities' },
    { icon: '📈', title: 'PE/VC Investment Professionals', desc: 'Deal teams and fund managers active in India\'s mid-market' },
    { icon: '⚖️', title: 'General Counsel & Risk Officers', desc: 'Senior compliance and legal heads at banks, NBFCs, and corporates' },
    { icon: '🏢', title: 'Founders & Managing Directors', desc: 'Operators navigating regulatory complexity and institutional growth' }
  ];

  const events = [
    {
      icon: '🍽',
      title: 'CFO Private Dinner',
      desc: 'Senior finance leaders discuss the Income Tax Act 2025, GST 2.0, and DPDP obligations — Chatham House rules, no recordings, no coverage.',
      badge: 'Private Dinner',
      delay: '',
      meta: [
        { icon: <svg viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.3"/><path d="M8 5v3.5l2 1.2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/></svg>, text: 'Quarterly · New Delhi' },
        { icon: <svg viewBox="0 0 16 16" fill="none"><path d="M8 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm-5 10c0-2.5 2.2-4 5-4s5 1.5 5 4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/></svg>, text: '8–10 leaders' },
        { icon: <svg viewBox="0 0 16 16" fill="none"><rect x="2" y="3" width="12" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.3"/><path d="M2 7h12M5 2v2M11 2v2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/></svg>, text: 'Next: Q3 2026' }
      ]
    },
    {
      icon: '🔒',
      title: 'Audit Committee Roundtable',
      desc: 'Structured dialogue for Independent Directors on FAIS obligations, forensic governance, and interrogating management on investigation findings.',
      badge: 'Invite Only',
      delay: 'd1',
      meta: [
        { icon: <svg viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.3"/><path d="M8 5v3.5l2 1.2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/></svg>, text: 'Bi-annual · Mumbai & Delhi' },
        { icon: <svg viewBox="0 0 16 16" fill="none"><path d="M8 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm-5 10c0-2.5 2.2-4 5-4s5 1.5 5 4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/></svg>, text: '10–14 members' },
        { icon: <svg viewBox="0 0 16 16" fill="none"><rect x="2" y="3" width="12" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.3"/><path d="M2 7h12M5 2v2M11 2v2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/></svg>, text: 'Next: Sep 2026' }
      ]
    },
    {
      icon: '☕',
      title: 'Dealmakers\' Breakfast',
      desc: 'Closed-door session for PE investors and transaction advisors sharing live deal market intelligence, sector benchmarks, and diligence observations. No sales. Just signal.',
      badge: 'Invite Only',
      delay: 'd2',
      meta: [
        { icon: <svg viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.3"/><path d="M8 5v3.5l2 1.2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/></svg>, text: 'Quarterly · Rotating City' },
        { icon: <svg viewBox="0 0 16 16" fill="none"><path d="M8 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm-5 10c0-2.5 2.2-4 5-4s5 1.5 5 4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/></svg>, text: 'Max 15 guests' },
        { icon: <svg viewBox="0 0 16 16" fill="none"><rect x="2" y="3" width="12" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.3"/><path d="M2 7h12M5 2v2M11 2v2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/></svg>, text: 'Next: Aug 2026' }
      ]
    },
    {
      icon: '🧭',
      title: 'CXO Think Tank',
      desc: 'Annual full-day gathering of eight senior business leaders — structured strategic dialogue under regulatory uncertainty, facilitated agenda, no external recording. The conversation stays in the room.',
      badge: 'Private Forum',
      delay: 'd3',
      meta: [
        { icon: <svg viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.3"/><path d="M8 5v3.5l2 1.2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/></svg>, text: 'Annual · New Delhi' },
        { icon: <svg viewBox="0 0 16 16" fill="none"><path d="M8 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm-5 10c0-2.5 2.2-4 5-4s5 1.5 5 4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/></svg>, text: '8 leaders only' },
        { icon: <svg viewBox="0 0 16 16" fill="none"><rect x="2" y="3" width="12" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.3"/><path d="M2 7h12M5 2v2M11 2v2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/></svg>, text: 'Next: Nov 2026' }
      ]
    }
  ];

  return (
    <section className="bg-[#0F1B2E] py-10 md:py-12 relative overflow-hidden" id="forum">
      {/* Visual Accents */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[#C5963A]/5 skew-x-12 translate-x-1/2 pointer-events-none"></div>
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-[#C5963A]/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-[1440px] mx-auto px-6 md:px-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center mb-20 md:mb-32">
          <div className="sr">
            {/* Pulsing Badge */}
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-[11px] font-bold uppercase tracking-widest text-[#C5963A] mb-10">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C5963A] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#C5963A]"></span>
              </span>
              Closed Forum · By Invitation Only
            </div>

            <h2 className="font-serif text-[40px] md:text-[64px] font-normal text-white leading-[1.1] mb-8 tracking-tight">
              Not every<br />conversation<br />belongs <em className="italic font-light text-[#C5963A]">in public</em>
            </h2>
            <p className="text-[16px] text-white/50 leading-[1.7] mb-12 max-w-[520px]">
              Northrop convenes small, structured gatherings for senior finance leaders, board members, and dealmakers — off the record, no press, no presentations. These are the conversations that happen when the right people are in the right room.
            </p>
            
            <div className="space-y-6">
              <Link to="/contact" className="inline-flex items-center gap-5 px-10 py-5 bg-[#C5963A] text-white font-bold rounded-xl hover:bg-[#8A6C1A] transition-all group shadow-2xl shadow-[#C5963A]/20">
                REQUEST AN INVITATION
                <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4 transition-transform group-hover:translate-x-1"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/></svg>
              </Link>
              <p className="text-[12px] text-white/30 leading-relaxed font-medium italic">
                Invitations are extended at Northrop's discretion.<br />All sessions operate under full confidentiality protocols.
              </p>
            </div>
          </div>

          <div className="sr d2">
            <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden backdrop-blur-sm">
              <div className="px-8 py-6 bg-white/5 border-b border-white/10 flex justify-between items-center">
                <h4 className="text-[12px] font-bold uppercase tracking-widest text-white/80">Who Receives an Invitation</h4>
              </div>
              <div className="divide-y divide-white/5">
                {invitees.map((item, i) => (
                  <div className="px-8 py-6 flex items-center gap-6 hover:bg-white/5 transition-colors cursor-default group" key={i}>
                    <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-[22px] group-hover:bg-[#C5963A]/20 transition-colors">
                      {item.icon}
                    </div>
                    <div>
                      <h5 className="text-[14px] font-bold text-white mb-1 leading-tight">{item.title}</h5>
                      <p className="text-[11px] text-white/40 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {events.map((event, i) => (
            <EventCard key={i} {...event} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeForumV3;
