// import React, { useEffect, useRef } from 'react';

// export default function Institute() {
//   const revealRefs = useRef([]);
//   revealRefs.current = [];

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             entry.target.classList.add('opacity-100', 'translate-y-0');
//             entry.target.classList.remove('opacity-0', 'translate-y-10');
//           }
//         });
//       },
//       { threshold: 0.1 }
//     );

//     revealRefs.current.forEach((el) => observer.observe(el));
//     return () => observer.disconnect();
//   }, []);

//   const addToRefs = (el) => {
//     if (el && !revealRefs.current.includes(el)) {
//       revealRefs.current.push(el);
//     }
//   };

//   return (
//     <section id="institute" className="bg-[#F0EDE6] py-20 lg:py-32">
//       <div className="max-w-[1280px] mx-auto px-6 lg:px-20">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-24 pb-20 border-b border-[#0E0E0E]/10">
//           <div ref={addToRefs} className="relative h-[460px] opacity-0 translate-y-10 transition-all duration-700">
//             <div className="absolute inset-0 bg-cover bg-center grayscale brightness-[0.7] saturate-[0.7]" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1000&q=90')" }}></div>
//             <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0E0E0E]/50"></div>
//             <div className="absolute bottom-6 left-6 border border-[#C4973B]/30 bg-[#0E0E0E]/70 backdrop-blur-md px-4 py-2 text-[#C4973B] text-[9.5px] font-medium tracking-widest uppercase">
//               Research & Education Initiative
//             </div>
//           </div>
//           <div>
//             <div ref={addToRefs} className="flex items-center gap-3 text-[10px] font-medium tracking-[0.24em] uppercase text-[#C4973B] mb-6 opacity-0 translate-y-10 transition-all duration-700 delay-100">
//               <span className="w-7 h-px bg-[#C4973B]"></span> Northrop Institute of Global Finance
//             </div>
//             <h2 ref={addToRefs} className="font-serif text-[32px] lg:text-[46px] leading-[1.1] text-[#0E0E0E] tracking-tight mb-4 opacity-0 translate-y-10 transition-all duration-700 delay-200">
//               Finance the<br />Way It<br /><em className="text-[#C4973B] italic">Actually Works.</em>
//             </h2>
//             <p ref={addToRefs} className="font-serif text-[13px] italic text-[#C4973B] mb-8 opacity-0 translate-y-10 transition-all duration-700 delay-300">
//               A research and education initiative of Northrop Management Private Limited
//             </p>
//             <div ref={addToRefs} className="text-[14px] font-light leading-relaxed text-[#4A4540] space-y-4 opacity-0 translate-y-10 transition-all duration-700 delay-400">
//               <p>The gap between what professionals learned and what markets actually demand is real. Finance today moves faster than most professionals are trained to understand.</p>
//               <p>Most financial education in India remains theoretical — focused on exams rather than judgment. The Northrop Institute was created to bridge this distance.</p>
//             </div>
//           </div>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
//           <div ref={addToRefs} className="opacity-0 translate-y-10 transition-all duration-700">
//             <h3 className="font-serif text-[28px] lg:text-[38px] text-[#0E0E0E] leading-tight mb-8">
//               A CA. A CFA. An IIT Graduate.<br />And Still <em className="text-[#C4973B] italic">Unprepared.</em>
//             </h3>
//             <p className="text-[14px] leading-relaxed text-[#4A4540]">
//               In real boardrooms, on live transactions, the gap between credential and capability shows up immediately. Not because these professionals lack intelligence. But because real finance tests judgment.
//             </p>
//           </div>
//           <div ref={addToRefs} className="bg-[#0E0E0E] border-l-[3px] border-[#C4973B] p-10 opacity-0 translate-y-10 transition-all duration-700 delay-200">
//             <h4 className="font-serif text-[20px] text-[#C4973B] mb-6">Our Promise</h4>
//             <div className="text-[13.5px] font-light leading-relaxed text-white/55 space-y-4 italic">
//               <p>"We will not teach finance as a collection of formulas. We will challenge how you think, not just what you know."</p>
//               <p>"The difference between a trusted advisor and a technician is rarely knowledge — it is the ability to think clearly when the stakes are real."</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


import React, { useEffect, useRef } from "react";

export default function Institute() {
  const revealRefs = useRef([]);
  revealRefs.current = [];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            entry.target.classList.remove("opacity-0", "translate-y-10");
          }
        });
      },
      { threshold: 0.1 }
    );

    revealRefs.current.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const addToRefs = (el) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };

  return (
    <section id="institute" className="bg-[#F0EDE6] py-20 lg:py-32">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-20">

        {/* HERO SECTION */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24 border-b pb-20 border-black/10">

          {/* IMAGE */}
          <div
            ref={addToRefs}
            className="relative h-[420px] opacity-0 translate-y-10 transition-all duration-700"
          >
            <div
              className="absolute inset-0 bg-cover bg-center grayscale brightness-75"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1000')",
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60" />

            <div className="absolute bottom-5 left-5 text-[10px] tracking-widest uppercase text-[#C4973B] border border-[#C4973B]/40 px-4 py-2 bg-black/70">
              Research & Education Initiative
            </div>
          </div>

          {/* TEXT */}
          <div>
            <div
              ref={addToRefs}
              className="text-[11px] tracking-[0.25em] uppercase text-[#C4973B] mb-6 opacity-0 translate-y-10 transition duration-700"
            >
              Northrop Institute of Global Finance
            </div>

            <h2
              ref={addToRefs}
              className="font-serif text-3xl lg:text-5xl leading-tight mb-4 opacity-0 translate-y-10 transition duration-700 delay-100"
            >
              Finance the <br />
              Way It <br />
              <em className="text-[#C4973B] italic">Actually Works.</em>
            </h2>

            <p
              ref={addToRefs}
              className="italic text-[#C4973B] mb-6 opacity-0 translate-y-10 transition duration-700 delay-200"
            >
              A research and education initiative of Northrop Management Private Limited
            </p>

            <div
              ref={addToRefs}
              className="text-sm text-[#4A4540] space-y-4 opacity-0 translate-y-10 transition duration-700 delay-300"
            >
              <p>
                Finance today moves faster than most professionals are trained to understand. Whether you are a  <strong>CA, CFA, IIT graduate, or MBA professional</strong> —
                the gap between what you learned and what markets actually demand is real, and it shows up fast.
              </p>

              <p>
             Capital flows across borders, businesses scale rapidly, and decisions must often be made with incomplete information and genuine consequences. Yet most financial education in India remains theoretical — focused on clearing exams rather than building the judgment that real mandates require.
              </p>

              <p>
               The Northrop Institute of Global Finance was created to address this gap — bridging the distance between credentials and capability, so that India's best-qualified professionals can operate with real confidence in complex financial environments.
              </p>
            </div>

            {/* WARNING */}
            <div
              ref={addToRefs}
              className="bg-black text-white p-8 border-l-4 border-[#C4973B] opacity-0 translate-y-10 transition duration-700 delay-200 mt-5"
            >
              <p className="font-semibold mb-2">Who This Program Is Not For</p>
              <p className="text-sm text-white/55">
              This is not a revision course for CA exams, a CFA prep class, or an MBA elective. It is not designed for professionals seeking shortcuts, certificates over understanding, or passive learning without real engagement.
              </p>

              <p className="text-sm text-white/55">

                It is designed for CA, CFA, IIT, MBA, and serious finance professionals who already have their credentials — and who want to build the thinking and judgment that credentials alone cannot give them.
              </p>
            </div>
          </div>
        </div>

        {/* PHILOSOPHY SECTION */}
        <div className="grid lg:grid-cols-2 gap-16 mb-24">

          <div
            ref={addToRefs}
            className="opacity-0 translate-y-10 transition duration-700"
          >
            <p className="text-xs uppercase tracking-widest text-[#C4973B] mb-4">
              Our Philosophy
            </p>

            <h3 className="text-3xl lg:text-4xl font-serif leading-tight mb-6">
              A CA. A CFA. An IIT Graduate. <br />
              And Still <em className="text-[#C4973B] italic">Unprepared.</em>
            </h3>

            <p className="text-sm text-[#4A4540] mb-4">
             India produces some of the world's most credentialed finance professionals — CAs who cleared one of the hardest exams on earth, CFAs with three levels of rigorous study, IIT and MBA graduates from institutions of genuine reputation.
            </p>

            <p className="text-sm text-[#4A4540] mb-4">
           And yet — in real boardrooms, on live transactions, and in genuine capital decisions — the gap between credential and capability shows up immediately. Not because these professionals lack intelligence. But because credentials test knowledge. Real finance tests judgment.
            </p>


            <p className="text-sm text-[#4A4540] mb-4">
At the Northrop Institute, we work with professionals who have already earned their qualifications and are now ready to build something that no exam can certify: the ability to think clearly when the stakes are real and the outcome is uncertain.
            </p>
          </div>

          <div
            ref={addToRefs}
            className="bg-black text-white p-8 border-l-4 border-[#C4973B] opacity-0 translate-y-10 transition duration-700 delay-200"
          >
            <h4 className="text-[#C4973B] mb-4 font-serif text-xl">
              Our Promise
            </h4>

            <p className="text-sm text-white/70 mb-4">
              We will not teach finance as a collection of formulas or exam-ready frameworks. Whether you are a CA, CFA, IIT graduate, or MBA professional — if you join the Northrop Institute, we will challenge how you think, not just what you know.
            </p>

            <p className="text-sm text-white/60">
           We focus on developing the clarity of thinking required to navigate real financial environments — where trust between advisors and clients is built through judgment, not just qualifications.
            </p>
            <p className="text-sm text-white/60">
         Because in finance, the difference between a trusted advisor and a credentialed technician is rarely knowledge — it is the ability to think clearly and act decisively when the stakes are real.
            </p>
          </div>
        </div>

        {/* FELLOWS SECTION */}
        <div
          ref={addToRefs}
          className="opacity-0 translate-y-10 transition duration-700"
        >
          <p className="text-xs uppercase tracking-widest text-[#C4973B] mb-4">
            _ Fellows & Contributors
          </p>

          <h3 className="text-3xl font-serif mb-10">
               Northrop Fellows & Contributors
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-1">

            <div className="p-6 bg-white shadow-sm rounded-lg">
              <h4 className="font-semibold">Ashish Chaudhary</h4>
              <p className="text-sm mt-2 text-[#C4973B]">
              Founder — Northrop Institute of Global Finance
              </p>
              <p className="text-xs text-gray-500 mt-2">
               CA Finalist · IBC Practitioner · Forensic Specialist
              </p>
              <p className="text-xs text-gray-500 mt-2">
              Managing Director, Northrop Management Private Limited
              </p>
            </div>

           <div className="p-6 bg-[#F0EDE6] text-center text-sm text-gray-400 shadow-sm rounded-lg">
  <p className="font-semibold">Senior Industry Professionals</p>
  <p className="text-xs text-gray-500 mt-2">
    CA · CFA · IIT · MBA · To be announced
  </p>
</div>
            <div className="p-6 bg-[#F0EDE6] text-center text-sm text-gray-400 shadow-sm rounded-lg">
              <p className="font-semibold">Visiting Practitioners</p>
              <p className="text-xs text-gray-500 mt-2">PE · IB · Capital Markets · To be announced</p>
            </div>

            <div className="p-6 bg-[#F0EDE6]  text-center text-sm text-gray-400 shadow-sm rounded-lg">
              <p className="font-semibold">Guest Speakers</p>
              <p className="text-xs text-gray-500 mt-2">CFOs · MDs · Fund Managers · To be announced</p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}