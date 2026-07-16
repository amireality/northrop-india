import React from 'react';

const brands = [
  { id: 1, src: '/brands/brand1.png', alt: 'Brand 1' },
  { id: 2, src: '/brands/brand2.png', alt: 'Luv2Care', className: 'scale-[1.5]' },
  { id: 3, src: '/brands/brand3.png', alt: 'Brand 3' },
  { id: 4, src: '/brands/brand15.png', alt: 'setupr' }, // new setupr logo with black text
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

const row1 = brands.slice(0, 7);
const row2 = brands.slice(7);

const renderMarqueeRow = (rowBrands, animationClass) => (
  <div className="relative flex overflow-hidden group mb-6 space-x-6">
    <div className={`flex ${animationClass} space-x-6 shrink-0`}>
      {rowBrands.map((brand) => (
        <div key={brand.id} className="flex h-24 w-60 shrink-0 items-center justify-center rounded-2xl bg-white px-8 shadow-sm">
          <img
            className={`max-h-[80%] max-w-[90%] object-contain grayscale hover:grayscale-0 transition-all duration-500 opacity-90 hover:opacity-100 ${brand.className || ''}`}
            src={brand.src}
            alt={brand.alt}
          />
        </div>
      ))}
      {rowBrands.map((brand) => (
        <div key={`dup1-${brand.id}`} className="flex h-24 w-60 shrink-0 items-center justify-center rounded-2xl bg-white px-8 shadow-sm">
          <img
            className={`max-h-[80%] max-w-[90%] object-contain grayscale hover:grayscale-0 transition-all duration-500 opacity-90 hover:opacity-100 ${brand.className || ''}`}
            src={brand.src}
            alt={brand.alt}
          />
        </div>
      ))}
       {rowBrands.map((brand) => (
        <div key={`dup2-${brand.id}`} className="flex h-24 w-60 shrink-0 items-center justify-center rounded-2xl bg-white px-8 shadow-sm">
          <img
            className={`max-h-[80%] max-w-[90%] object-contain grayscale hover:grayscale-0 transition-all duration-500 opacity-90 hover:opacity-100 ${brand.className || ''}`}
            src={brand.src}
            alt={brand.alt}
          />
        </div>
      ))}
    </div>
    <div className={`flex ${animationClass} space-x-6 shrink-0`} aria-hidden="true">
      {rowBrands.map((brand) => (
          <div key={brand.id} className="flex h-24 w-60 shrink-0 items-center justify-center rounded-2xl bg-white px-8 shadow-sm">
          <img
            className={`max-h-[80%] max-w-[90%] object-contain grayscale hover:grayscale-0 transition-all duration-500 opacity-90 hover:opacity-100 ${brand.className || ''}`}
            src={brand.src}
            alt={brand.alt}
          />
        </div>
      ))}
      {rowBrands.map((brand) => (
          <div key={`dup3-${brand.id}`} className="flex h-24 w-60 shrink-0 items-center justify-center rounded-2xl bg-white px-8 shadow-sm">
          <img
            className={`max-h-[80%] max-w-[90%] object-contain grayscale hover:grayscale-0 transition-all duration-500 opacity-90 hover:opacity-100 ${brand.className || ''}`}
            src={brand.src}
            alt={brand.alt}
          />
        </div>
      ))}
        {rowBrands.map((brand) => (
          <div key={`dup4-${brand.id}`} className="flex h-24 w-60 shrink-0 items-center justify-center rounded-2xl bg-white px-8 shadow-sm">
          <img
            className={`max-h-[80%] max-w-[90%] object-contain grayscale hover:grayscale-0 transition-all duration-500 opacity-90 hover:opacity-100 ${brand.className || ''}`}
            src={brand.src}
            alt={brand.alt}
          />
        </div>
      ))}
    </div>
    
    {/* Gradient overlays to fade edges */}
    <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent z-10"></div>
    <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent z-10"></div>
  </div>
);

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
      
      {/* Row 1: Left to Right (Reverse scroll) */}
      {renderMarqueeRow(row1, 'animate-loop-scroll-reverse')}

      {/* Row 2: Right to Left (Normal scroll) */}
      {renderMarqueeRow(row2, 'animate-loop-scroll')}
      
    </section>
  );
}
