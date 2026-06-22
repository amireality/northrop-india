import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

function Companyprofile() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Generate an array of numbers from 1 to 16 to correctly sequence the slide images
  const totalSlides = 16;
  const slideNumbers = Array.from({ length: totalSlides }, (_, i) => i + 1);

  return (
    <div className="bg-[#ffff] min-h-screen pt-[20px] pb-10 px-2 md:px-8 flex flex-col items-center">
      <Helmet>
        <title>Corporate Profile | Northrop Management</title>
        <meta name="description" content="Northrop Management Private Limited. Corporate presentation deck and philosophy." />
      </Helmet>

      {/* Presentation Carousel / Stack */}
      <div className="flex flex-col max-w-[1240px] w-full items-center">
        {slideNumbers.map((num) => (
          <div 
            key={num} 
            className="w-full bg-[#0B1629]"
          >
            <img 
              src={`/companyprofile/Company Profile_page-${String(num).padStart(4, '0')}.jpg`} 
              alt={`Northrop Management Corporate Profile Slide ${num}`}
              className="w-full h-auto object-contain block"
              loading={num <= 2 ? "eager" : "lazy"}
            />
          </div>
        ))}
      </div>
      
      {/* Contact Prompt at the end of the presentation */}
      <div className="mt-10 text-center">
        <p className="text-[#8B9DB8] mb-4 tracking-wide">Have questions about our services?</p>
        <a 
          href="/contact" 
          className="inline-block bg-[#B8962E] hover:bg-[#C9A84C] text-[#0B1629] px-8 py-3 rounded text-[14px] font-[600] tracking-wide transition-colors"
        >
          Contact Our Advisory Team
        </a>
      </div>
    </div>
  );
}

export default Companyprofile;