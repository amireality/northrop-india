import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Character = ({ char, progress, range, baseColor, activeColor }) => {
  const color = useTransform(progress, range, [baseColor, activeColor]);
  return (
    <motion.span style={{ color }}>
      {char}
    </motion.span>
  );
};

const AnimatedText = ({
  text,
  delay = 0,
  baseColor = "rgba(255,255,255,0.15)",
  activeColor = "#ffffff",
  offset = ["start 80%", "end center"],
  targetRef,
}) => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef || containerRef,
    offset: offset,
  });

  const letters = text.split("");
  return (
    <span
      ref={containerRef}
      className="inline-block"
      style={{ whiteSpace: "pre-wrap" }}
    >
      {letters.map((char, index) => {
        const start = index / letters.length;
        const end = start + (1 / letters.length);
        return (
          <Character
            key={index}
            char={char}
            progress={scrollYProgress}
            range={[start, end]}
            baseColor={baseColor}
            activeColor={activeColor}
          />
        );
      })}
    </span>
  );
};

const HomeHeroV3 = () => {
  const heroRef = useRef(null);

  return (
    <section ref={heroRef} className="relative w-full min-h-[90vh] flex items-center justify-center pt-[120px] pb-[120px] overflow-hidden bg-[#0F1B2E]">
      {/* Background Layer */}
      <div className="absolute inset-0 z-0">
        <img
          alt="Northrop Management - The thinking behind every mandate"
          className="w-full h-full object-cover object-top opacity-50"
          src="/banner.jpeg"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0F1B2E]/60 via-[#0F1B2E]/30 to-[#0F1B2E]/90"></div>
      </div>

      {/* Content Layer */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-11">
        <div className="max-w-[1000px] mx-auto text-center">
          {/* Eyebrow */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-8 h-[1px] bg-[#C5963A]"></div>
            <span className="text-[11px] font-bold tracking-[.14em] uppercase text-[#C5963A]">
              Northrop Management · Knowledge Centre
            </span>
            <div className="w-8 h-[1px] bg-[#C5963A]"></div>
          </div>

          {/* Main Headline */}
          <h1 className="text-[48px] md:text-[72px] lg:text-[96px] font-serif font-bold leading-[1.05] text-white tracking-tight mb-10">
            <AnimatedText
              text={"The thinking\nbehind every\nmandate"}
              targetRef={heroRef}
              offset={["start 20%", "end 60%"]}
            />
          </h1>
        </div>
      </div>
    </section>
  );
};

export default HomeHeroV3;
