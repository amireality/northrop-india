export default function Divider() {
  return (
    <section className="relative h-[300px] overflow-hidden">
      
      <div
        className="absolute inset-0 bg-cover bg-center brightness-[0.2]"
        style={{
          backgroundImage:
            "url('/homepageimg/photo-divider.jpg')",
        }}
      ></div>

   

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        <p className="text-[10px] tracking-[0.3em] text-gold/70 uppercase text-[#C4973B]">
          Our Philosophy
        </p>

        <h3 className="font-serif text-2xl lg:text-4xl italic text-white/80">
       "Not Theory. Not Templates. Real Advisory."
        </h3>
      </div>
    </section>
  );
}