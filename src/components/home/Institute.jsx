

import { useEffect, useRef } from "react";

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
              className="absolute inset-0 bg-cover bg-center  brightness-99"
              style={{
                backgroundImage:
                  "url('/homepageimg/institude.jpg')",
              }}
            />


            <div className="absolute bottom-5 left-5 text-[10px] tracking-widest uppercase text-[#C4973B] border border-[#C4973B]/40 px-4 py-2 bg-black/70">
              Research & Education Initiative
            </div>
          </div>

          {/* TEXT */}
          <div>
            <div
              ref={addToRefs}
              className="text-[15px] tracking-[0.25em] uppercase text-[#C4973B] mb-6 opacity-0 translate-y-10 transition duration-700 font-medium"
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
                Finance today moves faster than most professionals are trained to understand. Decisions must often be made with incomplete information and real consequences attached.
              </p>

              <p>
                Yet most financial education remains trapped in theory — teaching models, not markets. It produces professionals who can navigate a syllabus but struggle when the situation is real and the outcome matters.
              </p>

              <p>
                The Northrop Institute was built to close that gap. Led by practitioners — Chartered Accountants, forensic specialists, and IBC practitioners with direct capital markets experience — it develops the financial thinking that functions in boardrooms, not just classrooms.
              </p>
            </div>

            {/* WARNING */}
            <div
              ref={addToRefs}
              className="bg-black text-white p-8 border-l-4 border-[#C4973B] opacity-0 translate-y-10 transition duration-700 delay-200 mt-5"
            >
              <p className="font-semibold mb-2">Who This Program Is Not For</p>
              <p className="text-[13px] md:text-[13px] text-white/55">
                Not a certification programme, exam prep course, or passive learning experience. Designed for finance professionals serious about understanding how capital, markets, and business decisions actually work — willing to engage deeply with ideas that have no easy answers.
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
            <p className="text-[15px] uppercase tracking-widest text-[#C4973B] mb-4 font-medium">
              Our Philosophy
            </p>

            <h3 className="text-3xl lg:text-4xl font-serif leading-tight mb-6">
              The Real World <br />
              Does Not Operate
              <br />
              Like <em className="text-[#C4973B] italic">Textbooks.</em>
            </h3>

            <p className="text-sm text-[#4A4540] mb-4">
              Many professionals enter finance believing credentials and structured frameworks will prepare them for the realities of markets and capital decisions.
            </p>

            <p className="text-sm text-[#4A4540] mb-4">
              Very quickly, they discover something uncomfortable. Markets move faster than models. Capital is unforgiving when judgment is absent — and no syllabus teaches you how to think when the outcome is genuinely uncertain.
            </p>


            <p className="text-sm text-[#4A4540] mb-4">
              At the Northrop Institute, we develop the clarity of thinking required to operate in real financial environments — because that is what separates a trusted advisor from a credentialed technician.
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
              We will not reduce finance to frameworks or slides. The Institute is built around one objective: to develop professionals who can think clearly about capital, markets, and risk — in the real world, under real pressure, with real consequences.
            </p>

            <p className="text-sm text-white/60">
              Our contributors bring live transaction experience — forensic audits filed before regulatory bodies, IBC mandates closed through the NCLT, credit surveillance on companies with balance sheets in the tens of thousands of crores.
            </p>
            <p className="text-sm text-white/60">
             If participants leave with sharper judgment and the confidence to operate at a genuinely higher level — the programme has done its job.


            </p>
          </div>
        </div>

        {/* FELLOWS SECTION */}
        <div
          ref={addToRefs}
          className="opacity-0 translate-y-10 transition duration-700"
        >
          <p className="text-[15px] uppercase tracking-widest text-[#C4973B] mb-4 font-medium">
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
              <p className="text-[12px] text-gray-500 mt-2">
                CA Finalist · IBC Practitioner · Forensic Specialist
              </p>
              <p className="text-[12px] text-gray-500 mt-2">
               Transaction Auditor, NCLT Mandates
Managing Director, Northrop Management Pvt. Ltd.
              </p>
            </div>

            <div className="p-6 bg-[#F0EDE6] text-center text-sm text-gray-400 shadow-sm rounded-lg">
              <p className="font-semibold">Senior Industry Professionals</p>
              <p className="text-xs text-gray-400 mt-2">
               CA · CFA · IIT · MBA <br /> Capital markets & advisory <br /> To be announced
              </p>
            </div>
            <div className="p-6 bg-[#F0EDE6] text-center text-sm text-gray-400 shadow-sm rounded-lg">
              <p className="font-semibold">Visiting Practitioners</p>
              <p className="text-xs text-gray-400 mt-2">PE · Investment Banking <br />Credit & Capital Markets <br /> To be announced</p>
            </div>

            <div className="p-6 bg-[#F0EDE6]  text-center text-sm text-gray-400 shadow-sm rounded-lg">
              <p className="font-semibold">Guest Speakers</p>
              <p className="text-xs text-gray-400 mt-2">CFOs · Fund Managers · MDs <br /> To be announced</p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}