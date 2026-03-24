import { leadershipMembers, leadershipStats } from '../../data/homeContent'

function Leadership() {
  return (
    <section className="bg-white">
      {/* 1. Stats Ribbon: Solid Navy from the Image */}
      <div className="bg-[#001f3f] py-12 px-6">
        <div className="mx-auto grid max-w-[1400px] grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
          {leadershipStats?.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-4xl font-bold tracking-tighter text-white md:text-5xl">
                {stat.value}
              </p>
              <p className="mt-2 text-[11px] font-bold uppercase tracking-[0.25em] text-[#c5a044]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* 2. Leadership Section */}
      <div className="mx-auto w-full max-w-[1400px] px-6 py-24 md:px-10 lg:px-20">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr_1fr]">
          
          {/* Intro Card */}
          <article className="flex flex-col justify-center pr-8">
            <h2 className="text-[42px] font-bold leading-[1.1] tracking-tight text-[#001f3f]">
              Introducing Our <span className="text-[#c5a044]">Leadership</span>
            </h2>
            <div className="mt-6 h-1 w-20 bg-[#c5a044]" />
            <p className="mt-8 text-[17px] leading-relaxed text-gray-600 font-light">
              Our leadership team combines deep domain expertise with disciplined advisory execution. 
              Committed to client outcomes, they deliver strategic insights that unlock long-term growth.
            </p>
            <div className="mt-10">
              <button className="group flex items-center gap-2 bg-[#001f3f] px-8 py-3 text-[13px] font-bold uppercase tracking-widest text-white transition-all hover:bg-[#c5a044]">
                Get In Touch
                <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
              </button>
            </div>
          </article>

          {/* Member Cards */}
          {leadershipMembers?.map((member) => (
            <article key={member.name} className="group relative">
              {/* Image Container */}
              <div className="relative overflow-hidden aspect-[4/5] bg-[#edf2f9]">
                {/* Replace src with member.image once you have photos */}
                <div className="h-full w-full bg-gradient-to-b from-gray-200 to-gray-300" />
                
                {/* Gold Tab at bottom right (matches image) */}
                <div className="absolute bottom-0 right-0 flex h-12 w-12 items-center justify-center bg-[#c5a044] text-white">
                  <span className="font-bold">in</span>
                </div>
              </div>

              {/* Text Content */}
              <div className="mt-6 border-l-2 border-gray-100 pl-4 transition-colors group-hover:border-[#c5a044]">
                <h4 className="text-[22px] font-bold text-[#001f3f]">{member.name}</h4>
                <p className="mt-1 text-[13px] font-medium uppercase tracking-widest text-gray-400">
                  {member.role}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Leadership   