import { journeyItems } from '../../data/homeContent'

function Journey() {
  return (
    <section className="relative overflow-hidden bg-[#001f3f] px-6 py-24 md:px-10 lg:px-20">
      {/* Optional: Hexagonal background pattern overlay to match the image */}
      <div 
        className="absolute inset-0 opacity-10" 
        style={{ backgroundImage: `url('https://www.transparenttextures.com/patterns/hexellence.png')` }}
      />

      <div className="relative z-10 mx-auto w-full max-w-[1400px]">
        {/* Header Section */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
            Our <span className="text-[#c5a044]">Journey</span>
          </h2>
          <div className="mx-auto mt-4 h-1 w-24 bg-[#c5a044]" />
          <p className="mt-6 text-sm font-medium uppercase tracking-[0.3em] text-gray-400">
            Evolving with the times, leading with integrity
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="grid gap-8 md:grid-cols-3">
          {journeyItems.map((item) => (
            <article 
              key={item.year} 
              className="group relative border border-white/10 bg-white/5 p-10 transition-all duration-300 hover:bg-white/10"
            >
              {/* Year Label */}
              <div className="mb-6 inline-block border-b-2 border-[#c5a044] pb-2">
                <p className="text-3xl font-bold tracking-tighter text-[#c5a044]">
                  {item.year}
                </p>
              </div>

              {/* Icon / Decorator (Small white box with gold icon as seen in image) */}
              <div className="mb-6 flex h-12 w-12 items-center justify-center bg-white text-[#001f3f]">
                <span className="text-xl font-bold">★</span>
              </div>

              <h3 className="text-xl font-semibold text-white group-hover:text-[#c5a044] transition-colors">
                {item.title}
              </h3>
              
              <p className="mt-4 text-[15px] leading-relaxed text-gray-300 font-light">
                {item.description}
              </p>

              {/* Decorative line connecting cards (visible on desktop) */}
              <div className="absolute -right-4 top-1/2 hidden h-[1px] w-8 bg-white/10 lg:block" />
            </article>
          ))}
        </div>

        {/* Slider Pagination Dots (Visual match to image) */}
        <div className="mt-16 flex justify-center gap-3">
          <button className="h-1.5 w-12 bg-gray-600 transition-colors hover:bg-[#c5a044]" />
          <button className="h-1.5 w-12 bg-[#c5a044]" />
          <button className="h-1.5 w-12 bg-gray-600 transition-colors hover:bg-[#c5a044]" />
        </div>
      </div>
    </section>
  )
}

export default Journey