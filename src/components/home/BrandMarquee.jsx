import React from 'react';

const brands = [
  { id: 1, src: '/brands/brand1.png', alt: 'Brand 1' },
  { id: 2, src: '/brands/brand2.png', alt: 'Brand 2' },
  { id: 3, src: '/brands/brand3.png', alt: 'Brand 3' },
  { id: 4, src: '/brands/brand4.png', alt: 'Brand 4' },
];

export default function BrandMarquee() {
  return (
    <section className="bg-black py-16 sm:py-24 border-b border-white/10 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 mb-12 text-center">
        <h2 className="font-playfair text-[32px] md:text-[40px] text-white font-bold tracking-tight">
          Trusted by Industry Leaders
        </h2>
        <p className="mt-4 text-lg leading-8 text-gray-400 font-sans max-w-2xl mx-auto">
          We partner with ambitious enterprises and institutions to drive sustainable growth.
        </p>
      </div>
      
      {/* Marquee Container */}
      <div className="relative flex overflow-x-hidden group">
        {/* First marquee track */}
        <div className="animate-scroll flex whitespace-nowrap items-center space-x-16 px-8">
          {brands.map((brand) => (
            <img
              key={brand.id}
              className="h-12 md:h-16 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-500 opacity-70 hover:opacity-100"
              src={brand.src}
              alt={brand.alt}
            />
          ))}
          {/* Duplicate brands inline for seamless loop in one track if needed, but we rely on duplicating the track */}
          {brands.map((brand) => (
            <img
              key={`dup1-${brand.id}`}
              className="h-12 md:h-16 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-500 opacity-70 hover:opacity-100"
              src={brand.src}
              alt={brand.alt}
            />
          ))}
           {brands.map((brand) => (
            <img
              key={`dup2-${brand.id}`}
              className="h-12 md:h-16 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-500 opacity-70 hover:opacity-100"
              src={brand.src}
              alt={brand.alt}
            />
          ))}
        </div>

        {/* Second marquee track (absolute to follow the first one) */}
        <div className="animate-scroll absolute top-0 flex whitespace-nowrap items-center space-x-16 px-8" style={{ left: '100%' }}>
          {brands.map((brand) => (
            <img
              key={brand.id}
              className="h-12 md:h-16 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-500 opacity-70 hover:opacity-100"
              src={brand.src}
              alt={brand.alt}
            />
          ))}
          {brands.map((brand) => (
            <img
              key={`dup3-${brand.id}`}
              className="h-12 md:h-16 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-500 opacity-70 hover:opacity-100"
              src={brand.src}
              alt={brand.alt}
            />
          ))}
           {brands.map((brand) => (
            <img
              key={`dup4-${brand.id}`}
              className="h-12 md:h-16 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-500 opacity-70 hover:opacity-100"
              src={brand.src}
              alt={brand.alt}
            />
          ))}
        </div>
        
        {/* Gradient overlays to fade edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent"></div>
      </div>
    </section>
  );
}
