import React from 'react';

const brands = [
  { id: 1, src: '/brands/brand1.png', alt: 'Brand 1' },
  { id: 2, src: '/brands/brand2.png', alt: 'Luv2Care', className: 'scale-[2.5]' },
  { id: 3, src: '/brands/brand3.png', alt: 'Brand 3' },
  { id: 4, src: '/brands/brand4.png', alt: 'Brand 4' },
  { id: 5, src: '/brands/brand5.png', alt: 'Brand 5' },
  { id: 6, src: '/brands/brand6.png', alt: 'Brand 6' },
  { id: 7, src: '/brands/brand7.png', alt: 'Brand 7' },
  { id: 8, src: '/brands/brand8.png', alt: 'Brand 8' },
  { id: 9, src: '/brands/brand10.jpg', alt: 'Brand 10' },
  { id: 10, src: '/brands/brand11.jpg', alt: 'Brand 11' },
  { id: 11, src: '/brands/brand12.jpg', alt: 'Brand 12' },
  { id: 12, src: '/brands/brand13.png', alt: 'Brand 13' },
  { id: 13, src: '/brands/brand14.png', alt: 'Brand 14' },
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
        <div className="animate-scroll flex whitespace-nowrap items-center space-x-6 px-6">
          {brands.map((brand) => (
            <div key={brand.id} className="flex h-24 w-48 shrink-0 items-center justify-center rounded-2xl bg-white px-6 shadow-sm overflow-hidden">
              <img
                className={`max-h-full max-w-full object-contain grayscale hover:grayscale-0 transition-all duration-500 opacity-90 hover:opacity-100 ${brand.className || ''}`}
                src={brand.src}
                alt={brand.alt}
              />
            </div>
          ))}
          {/* Duplicate brands inline for seamless loop */}
          {brands.map((brand) => (
            <div key={`dup1-${brand.id}`} className="flex h-24 w-48 shrink-0 items-center justify-center rounded-2xl bg-white px-6 shadow-sm overflow-hidden">
              <img
                className={`max-h-full max-w-full object-contain grayscale hover:grayscale-0 transition-all duration-500 opacity-90 hover:opacity-100 ${brand.className || ''}`}
                src={brand.src}
                alt={brand.alt}
              />
            </div>
          ))}
           {brands.map((brand) => (
            <div key={`dup2-${brand.id}`} className="flex h-24 w-48 shrink-0 items-center justify-center rounded-2xl bg-white px-6 shadow-sm overflow-hidden">
              <img
                className={`max-h-full max-w-full object-contain grayscale hover:grayscale-0 transition-all duration-500 opacity-90 hover:opacity-100 ${brand.className || ''}`}
                src={brand.src}
                alt={brand.alt}
              />
            </div>
          ))}
        </div>

        {/* Second marquee track (absolute to follow the first one) */}
        <div className="animate-scroll absolute top-0 flex whitespace-nowrap items-center space-x-6 px-6" style={{ left: '100%' }}>
          {brands.map((brand) => (
             <div key={brand.id} className="flex h-24 w-48 shrink-0 items-center justify-center rounded-2xl bg-white px-6 shadow-sm overflow-hidden">
              <img
                className={`max-h-full max-w-full object-contain grayscale hover:grayscale-0 transition-all duration-500 opacity-90 hover:opacity-100 ${brand.className || ''}`}
                src={brand.src}
                alt={brand.alt}
              />
            </div>
          ))}
          {brands.map((brand) => (
             <div key={`dup3-${brand.id}`} className="flex h-24 w-48 shrink-0 items-center justify-center rounded-2xl bg-white px-6 shadow-sm overflow-hidden">
              <img
                className={`max-h-full max-w-full object-contain grayscale hover:grayscale-0 transition-all duration-500 opacity-90 hover:opacity-100 ${brand.className || ''}`}
                src={brand.src}
                alt={brand.alt}
              />
            </div>
          ))}
           {brands.map((brand) => (
             <div key={`dup4-${brand.id}`} className="flex h-24 w-48 shrink-0 items-center justify-center rounded-2xl bg-white px-6 shadow-sm overflow-hidden">
              <img
                className={`max-h-full max-w-full object-contain grayscale hover:grayscale-0 transition-all duration-500 opacity-90 hover:opacity-100 ${brand.className || ''}`}
                src={brand.src}
                alt={brand.alt}
              />
            </div>
          ))}
        </div>
        
        {/* Gradient overlays to fade edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent"></div>
      </div>
    </section>
  );
}
