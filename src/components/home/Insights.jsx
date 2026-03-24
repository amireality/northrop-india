import { insights } from '../../data/homeContent'

function Insights() {
  return (
    <section className="bg-[#f8f9fb] px-6 py-24 md:px-10 lg:px-20">
      <div className="mx-auto w-full max-w-[1400px]">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold tracking-tight text-[#001f3f] md:text-5xl">
            Latest <span className="text-[#c5a044]">Insights</span>
          </h2>
          <div className="mt-4 h-1 w-20 bg-[#c5a044]" />
          <p className="mt-6 text-[13px] font-bold uppercase tracking-[0.3em] text-gray-400">
            Precision Knowledge for Insightful Solutions
          </p>
        </div>

        {/* Blog Grid: Featured + Sidebar */}
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr]">
          
          {/* Featured Article (Left Side) */}
          {insights?.[0] && (
            <article className="group flex flex-col bg-white border border-gray-100 shadow-sm transition-all hover:shadow-md">
              <div className="relative aspect-video overflow-hidden bg-gray-200">
                {/* Image Placeholder - Replace with actual thumbnail if available */}
                <div className="h-full w-full bg-gradient-to-br from-[#001f3f] to-[#1a3760] opacity-90 transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 flex items-center justify-center text-white/10 font-black text-6xl select-none">
                  INSIGHT
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="text-[28px] font-bold leading-tight text-[#001f3f] transition-colors group-hover:text-[#c5a044]">
                  {insights[0].title}
                </h3>
                <p className="mt-4 text-[16px] leading-relaxed text-gray-500 font-light line-clamp-3">
                  {insights[0].excerpt}
                </p>
                <a href="#" className="mt-6 inline-flex items-center gap-2 text-[13px] font-bold uppercase tracking-widest text-[#c5a044] hover:text-[#001f3f] transition-colors">
                  Read More <span className="text-lg">→</span>
                </a>
              </div>
            </article>
          )}

          {/* Sidebar Articles (Right Side) */}
          <div className="flex flex-col gap-6">
            {insights?.slice(1, 4).map((item) => (
              <article key={item.title} className="group flex gap-5 bg-white p-5 border border-gray-100 transition-all hover:border-[#c5a044]/30 shadow-sm">
                {/* Small Thumbnail */}
                <div className="hidden sm:block h-24 w-32 flex-shrink-0 overflow-hidden bg-gray-100">
                   <div className="h-full w-full bg-[#001f3f]/10 group-hover:bg-[#c5a044]/10 transition-colors" />
                </div>

                <div className="flex flex-col justify-between">
                  <div>
                    <h4 className="text-[17px] font-bold text-[#001f3f] line-clamp-2 transition-colors group-hover:text-[#c5a044]">
                      {item.title}
                    </h4>
                    <p className="mt-2 text-[14px] text-gray-400 font-light line-clamp-1">
                      {item.excerpt}
                    </p>
                  </div>
                  <a href="#" className="mt-3 text-[11px] font-bold uppercase tracking-widest text-[#c5a044]">
                    Read Full Story
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Insights