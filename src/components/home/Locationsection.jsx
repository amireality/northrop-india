export default function LocationsSection() {
  const locations = [
    {
      status: 'ACTIVE',
      city: 'New Delhi',
      region: 'India · Headquarters',
      isActive: true,
    },
    {
      status: 'ACTIVE',
      city: 'Patna',
      region: 'Bihar · India',
      isActive: true,
    },
    {
      status: 'ACTIVE',
      city: 'Mumbai',
      region: 'Maharashtra · India',
      isActive: true,
    },
    {
      status: 'COMING SOON',
      city: 'New York',
      region: 'United States',
      isActive: false,
    },
    {
      status: 'COMING SOON',
      city: 'China',
      region: 'Asia Pacific',
      isActive: false,
    },
  ];

  return (
    <section className="w-full  ">
      {/* Top Banner Section */}
      <div
        className="relative h-[300px] w-full bg-cover bg-center flex flex-col items-center justify-center text-white"
        style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url("/homepageimg/photo-divider.jpg")' }}
      >
        <div className="z-10 text-center flex flex-col items-center gap-4 px-4">
          <div className="flex items-center gap-4 text-xs tracking-[0.2em] text-[#c5a044] uppercase font-semibold">
            <span className="h-[1px] w-8 bg-[#c5a044]"></span>
            NEW DELHI · INDIA
            <span className="h-[1px] w-8 bg-[#c5a044]"></span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl italic font-serif opacity-90 tracking-wide mt-2">
            "Built in India. Trusted Across India."
          </h2>
        </div>
        {/* Gradient overlay to transition to black bottom section */}
        <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-[#141414] to-transparent"></div>
      </div>

      {/* Locations Section */}
      <div className="bg-[#141414] text-white py-20 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="flex items-center gap-4 mb-16">
            <span className="h-[1px] w-12 bg-[#c5a044]"></span>
            <h3 className="text-xs tracking-[0.2em] text-[#c5a044] uppercase font-semibold">
              WHERE WE ARE HEADED
            </h3>
          </div>

          {/* Locations Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-12">
            {locations.map((loc, index) => (
              <div
                key={index}
                className={`flex flex-col border-l border-[#ffffff15] pl-6 h-full ${!loc.isActive ? 'opacity-50' : ''
                  }`}
              >
                <div className="flex items-center gap-2 mb-4">
                  {loc.isActive ? (
                    <div className="w-1.5 h-1.5 rounded-full bg-[#c5a044]"></div>
                  ) : (
                    <div className="w-1.5 h-1.5 rounded-full border border-gray-400"></div>
                  )}
                  <span className={`text-[10px] tracking-widest font-semibold ${loc.isActive ? 'text-[#c5a044]' : 'text-gray-400'
                    }`}>
                    {loc.status}
                  </span>
                </div>
                <h4 className="text-2xl font-serif mb-2">{loc.city}</h4>
                <p className="text-sm text-gray-400 font-light">{loc.region}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}