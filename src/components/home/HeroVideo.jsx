import React from 'react';

export default function HeroVideo() {
  return (
    <section className="relative w-full aspect-video md:h-screen overflow-hidden bg-black">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-70"
        src="/northrop-home-hero.mp4"
      ></video>
      {/* <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 bg-black/30">
        <h1 className="text-white font-serif text-4xl md:text-6xl lg:text-7xl mb-6 tracking-tight drop-shadow-lg">
          Excellence in Executive Counsel
        </h1>
        <p className="text-white/90 text-lg md:text-xl font-light tracking-wide max-w-2xl drop-shadow-md">
          Delivering uncompromising quality in M&A, Forensics, and Risk Advisory.
        </p>
      </div> */}
    </section>
  );
}